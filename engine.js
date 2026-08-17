// ─────────────────────────────────────────────────────────────────────
// engine.js — motor do Treino Diário v2
// SRS (caixas de Leitner), montagem da sessão, streak, freezes,
// marcos, backlog e integração com push. Dados vêm de bank.js (BANK).
// ─────────────────────────────────────────────────────────────────────

// ── Config de push (preenchido no deploy do worker — ver push-worker/README.md) ──
const PUSH_CONFIG = {
  workerUrl: 'https://arabic-push.rgalera.workers.dev',
  vapidPublicKey: 'BJG0Zt7bllZiM3nwXhiiRIYnnedHVaRnXqrNBD-AGl3thJ3GIrmpOmWEWhavmdPihJlDW5LOb5bsDuPbbMntNfU'
};

const LS = {
  srs: 'at2.srs',
  history: 'at2.history',
  usedEscrita: 'at2.usedEscrita',
  usedLeitura: 'at2.usedLeitura',
  migrated: 'at2.migratedV1',
  freezes: 'at2.freezes'        // { 'YYYY-MM': usadas }
};

// ── datas ──
function pad(n){ return String(n).padStart(2,'0'); }
function isoOf(d){ return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`; }
function todayIso(){ return isoOf(new Date()); }
function addDays(iso, n){ const d = new Date(iso+'T12:00:00'); d.setDate(d.getDate()+n); return isoOf(d); }
function dowOf(iso){ return new Date(iso+'T12:00:00').getDay(); }

// Tipo do dia: seg/ter/qui = completo · qua/sex = dia de aula · sáb/dom = fim de semana
function dayType(iso){
  const dow = dowOf(iso);
  if (dow === 6 || dow === 0) return 'weekend';
  if (dow === 3 || dow === 5) return 'class';
  return 'full';
}

const QUOTAS = {
  full:    { numeros:5, dias:2, profissoes:4, verbos:6, vocab:6, familia:3, perguntas:2, possessivos:4, escrita:1, leitura:1 },
  class:   { numeros:3, dias:1, profissoes:3, verbos:4, vocab:4, familia:2, perguntas:2, possessivos:3, escrita:0, leitura:0 },
  weekend: { numeros:3, dias:1, profissoes:2, verbos:3, vocab:3, familia:1, perguntas:1, possessivos:1, escrita:0, leitura:0 },
  recover: { numeros:3, dias:1, profissoes:2, verbos:3, vocab:3, familia:1, perguntas:1, possessivos:1, escrita:0, leitura:0 }
};
const TYPE_LABEL = { full:'Lição completa', class:'Dia de aula · treino curto', weekend:'Fim de semana · 5 min', recover:'Recuperação de dia perdido' };

// ── storage ──
function lsGet(key, fallback){ try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch(e){ return fallback; } }
function lsSet(key, val){ localStorage.setItem(key, JSON.stringify(val)); }

// migração do v1 (arabicStudy.done.YYYY-MM-DD)
function migrateV1(){
  if (localStorage.getItem(LS.migrated)) return;
  const hist = lsGet(LS.history, {});
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    const m = k && k.match(/^arabicStudy\.done\.(\d{4}-\d{2}-\d{2})$/);
    if (m && localStorage.getItem(k) === '1' && !hist[m[1]]) {
      hist[m[1]] = { status:'done', legacy:true };
    }
  }
  lsSet(LS.history, hist);
  localStorage.setItem(LS.migrated, '1');
}

// ── SRS ──
// caixas 0..5 → intervalo em dias até a próxima revisão
const INTERVALS = [0, 1, 2, 4, 7, 14];

function srsGet(){ return lsGet(LS.srs, {}); }
function srsAnswer(itemId, correct){
  const srs = srsGet();
  const st = srs[itemId] || { box: 0, due: todayIso(), reps: 0, lapses: 0 };
  st.reps++;
  if (correct) {
    st.box = Math.min(5, st.box + 1);
  } else {
    st.lapses++;
    st.box = Math.max(0, st.box - 2);
  }
  st.due = addDays(todayIso(), INTERVALS[st.box]);
  st.last = todayIso();
  srs[itemId] = st;
  lsSet(LS.srs, srs);
}

// PRNG determinístico de 32 bits (Math.imul evita o overflow de precisão do JS
// que fazia o shuffle degenerar e a resposta certa cair sempre na última opção)
function hash32(str){
  let h = 0;
  for (const c of str) h = (Math.imul(h, 31) + c.charCodeAt(0)) >>> 0;
  return h;
}
function mulberry32(seed){
  return function(){
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// embaralhar determinístico por data (mesma sessão se recarregar a página)
function seededShuffle(arr, seedStr){
  const rng = mulberry32(hash32(seedStr));
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── montagem da sessão ──
function pickForCategory(items, quota, srs, seed){
  const today = todayIso();
  const withState = items.map(it => ({ it, st: srs[it.id] }));
  const due  = withState.filter(x => x.st && x.st.due <= today)
                        .sort((a,b) => (a.st.box - b.st.box) || (a.st.due < b.st.due ? -1 : 1));
  const news = seededShuffle(withState.filter(x => !x.st), seed);
  const future = withState.filter(x => x.st && x.st.due > today)
                          .sort((a,b) => (a.st.due < b.st.due ? -1 : 1));
  return [...due, ...news, ...future].slice(0, quota).map(x => x.it);
}

function buildSession(dateIso, typeOverride){
  const type = typeOverride || dayType(dateIso);
  const q = QUOTAS[type];
  const srs = srsGet();
  const cards = [];
  const catPools = {
    numeros: BANK.numeros, dias: BANK.dias, profissoes: BANK.profissoes,
    verbos: BANK.verbos, vocab: BANK.vocab, familia: BANK.familia,
    perguntas: BANK.perguntas, possessivos: BANK.possessivos
  };
  for (const [cat, pool] of Object.entries(catPools)) {
    for (const item of pickForCategory(pool, q[cat] || 0, srs, dateIso + cat)) {
      cards.push(makeQuestion(item, cat, dateIso));
    }
  }
  const shuffled = seededShuffle(cards, dateIso + ':order');
  const escrita = q.escrita ? pickRotating(BANK.escrita, LS.usedEscrita, q.escrita) : [];
  const leitura = q.leitura ? pickRotating(BANK.leitura, LS.usedLeitura, q.leitura) : [];
  return { date: dateIso, type, label: TYPE_LABEL[type], cards: shuffled, escrita, leitura,
           estMin: Math.round(shuffled.length * 0.28 + escrita.length * 2 + leitura.length * 2.5) };
}

// rotação LRU para escrita/leitura
function pickRotating(pool, lsKey, n){
  const used = lsGet(lsKey, []);
  const unused = pool.filter(p => !used.includes(p.id));
  const source = unused.length >= n ? unused : pool;
  const picked = seededShuffle(source, todayIso() + lsKey).slice(0, n);
  return picked;
}
function markRotatingUsed(lsKey, ids, poolSize){
  let used = lsGet(lsKey, []).concat(ids);
  if (used.length >= poolSize) used = used.slice(-Math.floor(poolSize / 2));
  lsSet(lsKey, used);
}

// ── geração de questões ──
const PERSONS8 = ['Eu','Você (m)','Você (f)','Ele','Ela','Nós','Vocês','Eles/Elas'];
const POSS_PT = { 'Eu':'meu/minha', 'Ele':'dele', 'Ela':'dela', 'Você (m)':'seu (de você, m)', 'Você (f)':'seu (de você, f)', 'Nós':'nosso/nossa', 'Vocês':'de vocês', 'Eles':'deles/delas' };

function rand(seedStr, n){
  return Math.floor(mulberry32(hash32(seedStr))() * n);
}

function sampleDistractors(pool, correctLabel, n, keyFn, seed){
  const cands = seededShuffle(pool.filter(p => keyFn(p) && keyFn(p) !== correctLabel), seed);
  const out = [];
  const seen = new Set([correctLabel]);
  for (const c of cands) {
    const lab = keyFn(c);
    if (!seen.has(lab)) { seen.add(lab); out.push(lab); }
    if (out.length === n) break;
  }
  return out;
}

function assemble(promptHtml, correct, distractors, answerHtml, item, cat, mode){
  const opts = seededShuffle([correct, ...distractors], item.id + mode);
  return { itemId: item.id, cat, mode, promptHtml, options: opts, correct, answerHtml };
}

function makeQuestion(item, cat, dateIso){
  const seed = dateIso + item.id;
  const az = x => x.arabizi, pt = x => x.pt;

  if (cat === 'numeros') {
    const modes = ['pt2az','digit2az','az2pt','ar2az'];
    const mode = modes[rand(seed, modes.length)];
    if (mode === 'digit2az' && item.num) {
      return assemble(`<div class="q-big">${item.num.split('/')[1] ? item.num.split('/')[1].trim() : item.num}</div><div class="q-ask">Como se diz este número?</div>`,
        item.arabizi, sampleDistractors(BANK.numeros, item.arabizi, 3, az, seed),
        fullAnswer(item), item, cat, mode);
    }
    if (mode === 'az2pt') {
      return assemble(`<div class="q-big">${item.arabizi}</div><div class="q-ar-sub">${item.ar}</div><div class="q-ask">O que significa?</div>`,
        item.pt, sampleDistractors(BANK.numeros, item.pt, 3, pt, seed),
        fullAnswer(item), item, cat, mode);
    }
    if (mode === 'ar2az') {
      return assemble(`<div class="q-big q-ar">${item.ar}</div><div class="q-ask">Leia: como se pronuncia?</div>`,
        item.arabizi, sampleDistractors(BANK.numeros, item.arabizi, 3, az, seed),
        fullAnswer(item), item, cat, mode);
    }
    return assemble(`<div class="q-big">${item.pt}</div><div class="q-ask">Como se diz em árabe?</div>`,
      item.arabizi, sampleDistractors(BANK.numeros, item.arabizi, 3, az, seed),
      fullAnswer(item), item, cat, 'pt2az');
  }

  if (cat === 'profissoes') {
    const fem = rand(seed + 'g', 2) === 1;
    const label = fem ? item.aziF : item.aziM;
    const arScript = fem ? item.arF : item.arM;
    const keyFn = p => fem ? p.aziF : p.aziM;
    return assemble(`<div class="q-big">${item.pt} <span class="q-tag">${fem ? 'feminino' : 'masculino'}</span></div><div class="q-ask">Como se diz em árabe?</div>`,
      label, sampleDistractors(BANK.profissoes, label, 3, keyFn, seed),
      `<div class="ans-ar">${arScript}</div><div class="ans-az">${label}</div><div class="ans-pt">${item.pt} (${fem?'f':'m'})</div>`,
      item, cat, fem ? 'pt2azF' : 'pt2azM');
  }

  if (cat === 'verbos') {
    const person = PERSONS8[rand(seed + 'p', PERSONS8.length)];
    const c = item.conj[person];
    if (!c) return makeSimpleVocabQ(item, cat, BANK.verbos, seed); // fallback improvável
    const sameVerb = rand(seed + 'm', 10) < 6;
    let distractors;
    if (sameVerb) {
      const others = PERSONS8.filter(p => p !== person && item.conj[p]).map(p => item.conj[p].arabizi);
      distractors = seededShuffle([...new Set(others)].filter(o => o !== c.arabizi), seed).slice(0, 3);
    } else {
      distractors = sampleDistractors(BANK.verbos, c.arabizi, 3, v => v.conj[person] && v.conj[person].arabizi, seed);
    }
    while (distractors.length < 3) {
      const extra = sampleDistractors(BANK.verbos, c.arabizi, 3 - distractors.length, v => v.conj[person] && v.conj[person].arabizi, seed + distractors.length);
      const set = new Set([c.arabizi, ...distractors]);
      for (const e of extra) if (!set.has(e)) { distractors.push(e); set.add(e); }
      if (!extra.length) break;
    }
    return assemble(`<div class="q-big">${item.pt}</div><div class="q-ask">Conjugue para <b>${person}</b>:</div>`,
      c.arabizi, distractors,
      `<div class="ans-ar">${c.ar}</div><div class="ans-az">${c.arabizi}</div><div class="ans-pt">${item.pt} · ${person}</div>`,
      item, cat, 'conj');
  }

  if (cat === 'possessivos') {
    const persons = Object.keys(item.forms);
    const person = persons[rand(seed + 'p', persons.length)];
    const c = item.forms[person];
    const others = persons.filter(p => p !== person).map(p => item.forms[p].arabizi);
    const distractors = seededShuffle([...new Set(others)].filter(o => o !== c.arabizi), seed).slice(0, 3);
    return assemble(`<div class="q-big">${item.pt.toLowerCase()} — <b>${POSS_PT[person] || person}</b></div><div class="q-ar-sub">${item.ar}</div><div class="q-ask">Qual é a forma com sufixo?</div>`,
      c.arabizi, distractors,
      `<div class="ans-ar">${c.ar}</div><div class="ans-az">${c.arabizi}</div><div class="ans-pt">${item.pt} · ${POSS_PT[person] || person}</div>`,
      item, cat, 'poss');
  }

  // dias, vocab, familia, perguntas → vocabulário simples
  const pool = { dias: BANK.dias, vocab: BANK.vocab, familia: BANK.familia, perguntas: BANK.perguntas }[cat];
  return makeSimpleVocabQ(item, cat, pool, seed);
}

function makeSimpleVocabQ(item, cat, pool, seed){
  const subPool = item.cat ? pool.filter(p => p.cat === item.cat) : pool;
  const usePool = subPool.length >= 6 ? subPool : pool;
  const modes = ['pt2az','az2pt','ar2pt'];
  const mode = modes[rand(seed + 'vm', modes.length)];
  const az = x => x.arabizi, pt = x => x.pt;
  if (mode === 'az2pt') {
    return assemble(`<div class="q-big">${item.arabizi}</div><div class="q-ar-sub">${item.ar}</div><div class="q-ask">O que significa?</div>`,
      item.pt, sampleDistractors(usePool, item.pt, 3, pt, seed), fullAnswer(item), item, cat, mode);
  }
  if (mode === 'ar2pt') {
    return assemble(`<div class="q-big q-ar">${item.ar}</div><div class="q-ask">Leia: o que significa?</div>`,
      item.pt, sampleDistractors(usePool, item.pt, 3, pt, seed), fullAnswer(item), item, cat, mode);
  }
  return assemble(`<div class="q-big">${item.pt}${item.catLabel ? ` <span class="q-tag">${item.catLabel}</span>` : ''}</div><div class="q-ask">Como se diz em árabe?</div>`,
    item.arabizi, sampleDistractors(usePool, item.arabizi, 3, az, seed), fullAnswer(item), item, cat, mode);
}

function fullAnswer(it){
  return `<div class="ans-ar">${it.ar || ''}</div><div class="ans-az">${it.arabizi || ''}</div><div class="ans-pt">${it.pt || ''}</div>`;
}

// ── histórico, streak, freezes, marcos ──
const FREEZES_PER_MONTH = 3;

function historyGet(){ return lsGet(LS.history, {}); }

function freezesUsed(month){ return (lsGet(LS.freezes, {}))[month] || 0; }
function useFreeze(month){
  const f = lsGet(LS.freezes, {});
  f[month] = (f[month] || 0) + 1;
  lsSet(LS.freezes, f);
}

// Aplica freezes automáticos nos dias perdidos desde a última atividade (máx 3/mês do dia perdido)
function reconcileFreezes(){
  const hist = historyGet();
  const dates = Object.keys(hist).sort();
  if (!dates.length) return;
  const last = dates[dates.length - 1];
  const today = todayIso();
  let d = addDays(last, 1);
  let changed = false;
  while (d < today) {
    if (!hist[d]) {
      const month = d.slice(0, 7);
      if (freezesUsed(month) < FREEZES_PER_MONTH) {
        hist[d] = { status: 'frozen' };
        useFreeze(month);
        changed = true;
      } else break; // streak quebrou de verdade — dias seguintes ficam no backlog
    }
    d = addDays(d, 1);
  }
  if (changed) lsSet(LS.history, hist);
}

function currentStreak(){
  const hist = historyGet();
  const today = todayIso();
  let streak = 0;
  let d = hist[today] && hist[today].status !== 'frozen' ? today : addDays(today, -1);
  while (hist[d]) {
    const s = hist[d].status;
    if (s === 'done' || s === 'recovered' || s === 'frozen') {
      if (s !== 'frozen') streak++; // congelado mantém a corrente mas não soma
      d = addDays(d, -1);
    } else break;
  }
  return streak;
}

function backlogDays(maxDays){
  const hist = historyGet();
  const dates = Object.keys(hist).sort();
  if (!dates.length) return [];
  const start = dates[0];
  const out = [];
  let d = addDays(todayIso(), -1);
  while (d >= start && out.length < (maxDays || 30)) {
    if (!hist[d]) out.push(d);
    d = addDays(d, -1);
  }
  return out.reverse();
}

const MILESTONES = [
  { d: 3,   name: 'Primeiros Passos',      emoji: '👣' },
  { d: 7,   name: 'Falafel de Bronze',     emoji: '🧆' },
  { d: 14,  name: 'Koshary de Prata',      emoji: '🍛' },
  { d: 21,  name: 'Chá de Hortelã',        emoji: '🍵' },
  { d: 30,  name: 'Felucca no Nilo',       emoji: '⛵' },
  { d: 50,  name: 'Camelo Veterano',       emoji: '🐪' },
  { d: 75,  name: 'Escriba do Cairo',      emoji: '📜' },
  { d: 100, name: 'Pirâmide de Gizé',      emoji: '🔺' },
  { d: 150, name: 'Guardiã Esfinge',       emoji: '🐈‍⬛' },
  { d: 200, name: 'Obelisco de Luxor',     emoji: '🗿' },
  { d: 250, name: 'Papiro Real',           emoji: '🌿' },
  { d: 300, name: 'Máscara de Ouro',       emoji: '🎭' },
  { d: 365, name: 'Faraó do Ano',          emoji: '👑' },
  { d: 500, name: 'Lenda do Deserto',      emoji: '🏜️' },
  { d: 556, name: 'Duolingo Destruído',    emoji: '😎' },
  { d: 730, name: 'Imortal de Alexandria', emoji: '🏛️' }
];
function milestoneFor(streak){ return MILESTONES.filter(m => m.d <= streak).pop() || null; }
function nextMilestone(streak){ return MILESTONES.find(m => m.d > streak) || null; }
function hitMilestone(streak){ return MILESTONES.find(m => m.d === streak) || null; }

// ── conclusão da sessão ──
function completeSession(session, score, total, recoverDate){
  const hist = historyGet();
  const date = recoverDate || session.date;
  hist[date] = {
    status: recoverDate ? 'recovered' : 'done',
    score, total, type: session.type, at: new Date().toISOString()
  };
  lsSet(LS.history, hist);
  if (session.escrita.length) markRotatingUsed(LS.usedEscrita, session.escrita.map(e => e.id), BANK.escrita.length);
  if (session.leitura.length) markRotatingUsed(LS.usedLeitura, session.leitura.map(l => l.id), BANK.leitura.length);
  pingDone(date);
  const streak = currentStreak();
  return { streak, milestone: hitMilestone(streak), next: nextMilestone(streak) };
}

// ── push ──
function pingDone(date){
  if (!PUSH_CONFIG.workerUrl) return;
  fetch(PUSH_CONFIG.workerUrl + '/done', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ date })
  }).catch(() => {});
}

function urlBase64ToUint8Array(base64String){
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const raw = atob(base64);
  return Uint8Array.from([...raw].map(c => c.charCodeAt(0)));
}

async function enablePush(statusCb){
  const say = statusCb || (() => {});
  if (!PUSH_CONFIG.workerUrl) { say('Configure o worker primeiro (push-worker/README.md).'); return false; }
  if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
    say('Este navegador não suporta push. No iPhone: adicione o site à Tela de Início primeiro.');
    return false;
  }
  try {
    const reg = await navigator.serviceWorker.register('sw.js');
    const perm = await Notification.requestPermission();
    if (perm !== 'granted') { say('Permissão negada.'); return false; }
    const sub = await reg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(PUSH_CONFIG.vapidPublicKey)
    });
    const r = await fetch(PUSH_CONFIG.workerUrl + '/subscribe', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sub.toJSON())
    });
    if (!r.ok) { say('Falha ao registrar no servidor.'); return false; }
    say('Notificações ativadas! 🎉');
    return true;
  } catch (e) {
    say('Erro: ' + e.message);
    return false;
  }
}

// init comum
migrateV1();
reconcileFreezes();
