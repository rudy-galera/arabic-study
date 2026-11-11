// ─────────────────────────────────────────────────────────────────────
// search.js — Busca global (verbos, vocabulário, família, possessivos,
// países, profissões, alfabeto/números/dias/meses e frases do treino).
// Lê os dados direto dos cartões (card-*.html) + bank.js, então nunca
// fica desatualizada: tudo que entra nos cartões aparece na busca.
// Abre com o botão 🔍 (canto inferior direito) ou a tecla "/".
// ─────────────────────────────────────────────────────────────────────
(function () {
  const CARDS = {
    'card-verbos.html': ['VERBOS'],
    'card-vocabulario.html': ['VOC'],
    'card-pessoas.html': ['COUNTRIES', 'PROFESSIONS'],
    'card-alfabeto.html': ['NUMEROS_1_20', 'NUMEROS_DEZ', 'DIAS', 'MESES']
  };

  // ── normalização (acentos PT, diacríticos AR, hífens do arabizi) ──
  const normPt = s => (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const normAz = s => (s || '').toLowerCase().replace(/[-'’]/g, '').replace(/\s+/g, ' ').trim();
  const normAr = s => (s || '').replace(/[ً-ٰٟـ]/g, '')
    .replace(/[أإآٱ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي');
  const isAr = s => /[؀-ۿ]/.test(s);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // ── extrair arrays literais dos cartões (mesmo parser do verify_cards) ──
  function extract(html, name) {
    const m = html.match(new RegExp('const ' + name + '\\s*=\\s*'));
    if (!m) return null;
    const start = m.index + m[0].length, open = html[start], close = open === '[' ? ']' : '}';
    let depth = 0, i = start, inStr = null;
    for (; i < html.length; i++) {
      const c = html[i];
      if (inStr) { if (c === '\\') { i++; continue; } if (c === inStr) inStr = null; continue; }
      if (c === '"' || c === "'" || c === '`') { inStr = c; continue; }
      if (c === open) depth++;
      if (c === close) { depth--; if (!depth) break; }
    }
    try { return new Function('return (' + html.slice(start, i + 1) + ')')(); } catch (e) { return null; }
  }

  function loadBank() {
    if (typeof BANK !== 'undefined') return Promise.resolve(BANK);
    return new Promise(res => {
      const s = document.createElement('script'); s.src = 'bank.js';
      s.onload = () => res(typeof BANK !== 'undefined' ? BANK : null);
      s.onerror = () => res(null);
      document.head.appendChild(s);
    });
  }

  // ── índice ──
  let INDEX = null, loading = null;
  const add = (arr, e) => {
    e.k = [normPt(e.pt), normAz(e.az), normAr(e.ar), normAz(e.extra || ''), normAr(e.extraAr || '')];
    arr.push(e);
  };

  function build() {
    if (INDEX) return Promise.resolve(INDEX);
    if (loading) return loading;
    loading = Promise.all([
      loadBank(),
      ...Object.keys(CARDS).map(f => fetch(f, { cache: 'no-cache' }).then(r => r.ok ? r.text() : '').catch(() => ''))
    ]).then(([bank, ...htmls]) => {
      const out = [], seen = new Set();
      const files = Object.keys(CARDS);
      const data = {};
      files.forEach((f, i) => CARDS[f].forEach(n => { data[n] = htmls[i] ? extract(htmls[i], n) : null; }));

      // verbos (cartão) — com a tabela completa
      (data.VERBOS || []).forEach(v => {
        const rows = (v.table || []).slice();
        if (v.nos) rows.push({ p: 'Nós', ...v.nos });
        if (v.entu) rows.push({ p: 'Vocês', ...v.entu });
        if (v.homa) rows.push({ p: 'Eles/Elas', ...v.homa });
        // o bank tem as 8 pessoas completas (plurais já derivados) — preferir
        const bv = bank && (bank.verbos || []).find(b => normAz(b.arabizi) === normAz(v.arabizi) || normPt(b.pt) === normPt(v.pt));
        if (bv && bv.conj) { rows.length = 0; Object.entries(bv.conj).forEach(([p, f]) => rows.push({ p, ar: f.ar, arabizi: f.arabizi })); seen.add('v|' + normAz(bv.arabizi)); }
        add(out, { type: 'Verbo', icon: '⚡', pt: v.pt, ar: v.ar, az: v.arabizi, rows, nota: v.nota, link: 'card-verbos.html',
          extra: rows.map(r => r.arabizi).join(' '), extraAr: rows.map(r => r.ar).join(' ') });
        seen.add('v|' + normAz(v.arabizi));
      });
      // verbos do bank que não estão no cartão
      if (bank) (bank.verbos || []).forEach(v => {
        if (seen.has('v|' + normAz(v.arabizi))) return;
        const rows = Object.entries(v.conj || {}).map(([p, f]) => ({ p, ar: f.ar, arabizi: f.arabizi }));
        add(out, { type: 'Verbo', icon: '⚡', pt: v.pt, ar: v.ar, az: v.arabizi, rows, link: 'card-verbos.html',
          extra: rows.map(r => r.arabizi).join(' '), extraAr: rows.map(r => r.ar).join(' ') });
      });

      // vocabulário (cartão)
      Object.values(data.VOC || {}).forEach(cat => (cat.items || []).forEach(it => {
        const key = normAz(it.arabizi) + '|' + normPt(it.pt);
        if (seen.has(key)) return; seen.add(key); seen.add('az|' + normAz(it.arabizi));
        add(out, { type: cat.label || 'Palavra', icon: cat.icon || '📚', pt: it.pt, ar: it.ar, az: it.arabizi, link: 'card-vocabulario.html' });
      }));
      // vocab/família/perguntas do bank que não estão no cartão
      if (bank) [['vocab', '📚'], ['familia', '👪'], ['perguntas', '❓'], ['dias', '📅'], ['numeros', '🔢']].forEach(([k, ic]) =>
        (bank[k] || []).forEach(it => {
          if (seen.has('az|' + normAz(it.arabizi))) return; seen.add('az|' + normAz(it.arabizi));
          add(out, { type: it.catLabel || { vocab: 'Palavra', familia: 'Família', perguntas: 'Perguntas', dias: 'Dias', numeros: 'Números' }[k], icon: ic, pt: it.pt, ar: it.ar, az: it.arabizi });
        }));

      // possessivos / sufixos (bank)
      if (bank) (bank.possessivos || []).forEach(p => {
        const rows = Object.entries(p.forms || {}).map(([pp, f]) => ({ p: pp, ar: f.ar, arabizi: f.arabizi }));
        add(out, { type: 'Possessivo / sufixo', icon: '🔗', pt: p.pt, ar: p.ar, az: (rows[0] || {}).arabizi, rows,
          extra: rows.map(r => r.arabizi).join(' '), extraAr: rows.map(r => r.ar).join(' ') });
      });

      // países e profissões
      Object.values(data.COUNTRIES || {}).forEach(g => (g.items || []).forEach(c => {
        add(out, { type: 'País', icon: '🌍', pt: c.pt, ar: c.arPais, az: c.aziPais, link: 'card-pessoas.html',
          rows: [{ p: 'masc.', ar: c.arM, arabizi: c.aziM }, { p: 'fem.', ar: c.arF, arabizi: c.aziF }].concat(c.arMp ? [{ p: 'pl.', ar: c.arMp, arabizi: c.aziMp }] : []),
          extra: [c.aziM, c.aziF, c.aziMp, c.aziFp].join(' '), extraAr: [c.arM, c.arF, c.arMp, c.arFp].join(' ') });
      }));
      Object.values(data.PROFESSIONS || {}).forEach(g => (g.items || []).forEach(c => {
        add(out, { type: 'Profissão', icon: '💼', pt: c.pt, ar: c.arM || c.arF, az: c.aziM || c.aziF, link: 'card-pessoas.html',
          rows: [c.arM ? { p: 'masc.', ar: c.arM, arabizi: c.aziM } : null, c.arF ? { p: 'fem.', ar: c.arF, arabizi: c.aziF } : null].filter(Boolean),
          extra: [c.aziM, c.aziF].join(' '), extraAr: [c.arM, c.arF].join(' ') });
      }));

      // alfabeto: números, dias, meses
      ['NUMEROS_1_20', 'NUMEROS_DEZ', 'DIAS', 'MESES'].forEach(n => (data[n] || []).forEach(it => {
        if (seen.has('az|' + normAz(it.arabizi))) return; seen.add('az|' + normAz(it.arabizi));
        add(out, { type: n === 'DIAS' ? 'Dias' : n === 'MESES' ? 'Meses' : 'Números', icon: n === 'DIAS' ? '📅' : n === 'MESES' ? '🗓️' : '🔢',
          pt: it.pt + (it.num ? ' · ' + it.num : ''), ar: it.ar, az: it.arabizi, link: 'card-alfabeto.html' });
      }));

      // frases (escrita + leituras) — só aparecem depois das palavras
      if (bank) {
        (bank.escrita || []).forEach(e => add(out, { type: 'Frase', icon: '💬', pt: e.pt, ar: e.ar, az: e.arabizi, src: e.src, sentence: true }));
        (bank.leitura || []).forEach(l => (l.items || []).forEach(e => add(out, { type: 'Frase', icon: '📖', pt: e.pt, ar: e.ar, az: e.arabizi, src: l.title, sentence: true })));
      }
      INDEX = out; return out;
    });
    return loading;
  }

  // ── pontuação ──
  function score(e, q) {
    const { pt, az, ar } = q;
    let best = 0;
    const test = (field, needle, w) => {
      if (!needle || !field) return;
      if (field === needle) best = Math.max(best, 100 * w);
      else if (field.split(/[\s\/(),·;:!?.]+/).includes(needle)) best = Math.max(best, 80 * w);
      else if (field.startsWith(needle)) best = Math.max(best, 70 * w);
      else if (field.includes(needle)) best = Math.max(best, 40 * w);
    };
    if (ar) { test(e.k[2], ar, 1); test(e.k[4], ar, 0.8); }
    else { test(e.k[0], pt, 1); test(e.k[1], az, 1); test(e.k[3], az, 0.8); }
    if (!best) return 0;
    if (e.sentence) best *= 0.35;
    if (e.type === 'Verbo') best *= 1.1;
    return best;
  }

  // ── UI ──
  const CSS = `
  .gs-fab{position:fixed;right:16px;bottom:calc(18px + env(safe-area-inset-bottom));z-index:90;width:60px;height:60px;border-radius:50%;border:none;background:#f4a261;color:#1a1d28;font-size:26px;box-shadow:0 6px 20px rgba(0,0,0,.35);cursor:pointer;display:flex;align-items:center;justify-content:center}
  .gs-fab span{font-size:10px;font-weight:700;position:absolute;bottom:7px;letter-spacing:.04em}
  .gs-fab .gi{margin-top:-10px}
  .gs-ov{position:fixed;inset:0;z-index:100;background:#0f1115;display:none;flex-direction:column}
  .gs-ov.open{display:flex}
  .gs-top{display:flex;gap:8px;padding:calc(12px + env(safe-area-inset-top)) 16px 10px;max-width:720px;width:100%;margin:0 auto}
  .gs-in{flex:1;min-width:0;background:#161821;border:2px solid #f4a261;color:#f3f4f6;padding:14px;border-radius:12px;font-size:18px;font-family:inherit}
  .gs-in:focus{outline:none}
  .gs-close{background:#1f2230;color:#f3f4f6;border:1px solid #2a2d36;border-radius:12px;padding:0 16px;font-size:15px;font-family:inherit;cursor:pointer}
  .gs-hint{max-width:720px;width:100%;margin:0 auto;padding:0 16px 8px;color:#9ca3af;font-size:13px}
  .gs-res{flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:0 16px 40px;max-width:720px;width:100%;margin:0 auto}
  .gs-item{background:#161821;border:1px solid #2a2d36;border-radius:12px;padding:12px 14px;margin-bottom:8px;cursor:pointer}
  .gs-row1{display:flex;justify-content:space-between;align-items:baseline;gap:10px}
  .gs-pt{color:#fff;font-weight:600;font-size:16px}
  .gs-tag{font-size:11px;color:#f4a261;text-transform:uppercase;letter-spacing:.06em;white-space:nowrap}
  .gs-ar{font-family:"Geeza Pro","Noto Naskh Arabic","Amiri",serif;font-size:24px;direction:rtl;text-align:right;color:#fff;line-height:1.5}
  .gs-az{color:#9ca3af;font-style:italic;font-size:15px}
  .gs-tbl{display:none;margin-top:10px;border-top:1px solid #2a2d36;padding-top:8px}
  .gs-item.exp .gs-tbl{display:block}
  .gs-tr{display:grid;grid-template-columns:72px 1fr;gap:8px;align-items:center;padding:4px 0;border-bottom:1px dashed #23262f}
  .gs-tr b{color:#f4a261;font-size:12px;font-weight:600}
  .gs-tr .gs-ar{font-size:20px}
  .gs-more{font-size:12px;color:#65b08a;margin-top:4px}
  .gs-src{font-size:12px;color:#6b6f7e;margin-top:4px}
  .gs-nota{font-size:13px;color:#d1d5db;margin-top:6px}
  .gs-link{display:inline-block;margin-top:8px;font-size:13px;color:#f4a261}
  .gs-empty{color:#9ca3af;text-align:center;padding:30px 0}
  mark.gs-m{background:rgba(244,162,97,.3);color:inherit;border-radius:3px}
  @media (prefers-color-scheme: light){
    .gs-ov{background:#fafaf7}
    .gs-in{background:#fff;color:#1f2230;border-color:#c1440e}
    .gs-close{background:#f5f3eb;color:#1f2230;border-color:#e5e3dc}
    .gs-item{background:#fff;border-color:#e5e3dc}
    .gs-pt,.gs-ar{color:#1f2230}
    .gs-tag,.gs-tr b,.gs-link{color:#c1440e}
    .gs-fab{background:#c1440e;color:#fff}
    .gs-nota{color:#374151}
    .gs-tr{border-color:#eee}
  }`;

  function init() {
    const st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
    const fab = document.createElement('button');
    fab.className = 'gs-fab'; fab.setAttribute('aria-label', 'Busca global');
    fab.innerHTML = '<div class="gi">🔍</div><span>BUSCAR</span>';
    const ov = document.createElement('div'); ov.className = 'gs-ov';
    ov.innerHTML = `<div class="gs-top"><input class="gs-in" type="search" inputmode="search" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="Buscar tudo… (ajudar, sa3ed, سافر)"><button class="gs-close">Fechar</button></div>
      <div class="gs-hint">Português, arabizi ou árabe · verbos, palavras, família, possessivos, países, profissões, frases</div>
      <div class="gs-res"></div>`;
    document.body.appendChild(fab); document.body.appendChild(ov);
    const input = ov.querySelector('.gs-in'), res = ov.querySelector('.gs-res');

    const open = () => { ov.classList.add('open'); document.body.style.overflow = 'hidden'; input.focus(); input.select(); build().then(() => run()); };
    const close = () => { ov.classList.remove('open'); document.body.style.overflow = ''; };
    window.openGlobalSearch = open;
    fab.addEventListener('click', open);
    ov.querySelector('.gs-close').addEventListener('click', close);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && ov.classList.contains('open')) close();
      if (e.key === '/' && !ov.classList.contains('open') && !/input|textarea/i.test((document.activeElement || {}).tagName || '')) { e.preventDefault(); open(); }
    });

    let t = null;
    input.addEventListener('input', () => { clearTimeout(t); t = setTimeout(run, 80); });
    res.addEventListener('click', e => {
      if (e.target.closest('a')) return;
      const it = e.target.closest('.gs-item'); if (it && it.querySelector('.gs-tbl')) it.classList.toggle('exp');
    });

    function hl(text, needle) {
      const s = esc(text); if (!needle) return s;
      const n = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      try { return s.replace(new RegExp('(' + n + ')', 'ig'), '<mark class="gs-m">$1</mark>'); } catch (e) { return s; }
    }

    function run() {
      const raw = input.value.trim();
      if (!INDEX) { res.innerHTML = '<div class="gs-empty">Carregando…</div>'; return; }
      if (!raw) { res.innerHTML = `<div class="gs-empty">${INDEX.length} itens no índice. Digite para buscar.</div>`; return; }
      const q = isAr(raw) ? { ar: normAr(raw) } : { pt: normPt(raw), az: normAz(raw) };
      const hits = [];
      for (const e of INDEX) { const s = score(e, q); if (s) hits.push([s, e]); }
      hits.sort((a, b) => b[0] - a[0]);
      const words = hits.filter(h => !h[1].sentence).slice(0, 40), sents = hits.filter(h => h[1].sentence).slice(0, 15);
      if (!words.length && !sents.length) { res.innerHTML = `<div class="gs-empty">Nada encontrado para “${esc(raw)}”.</div>`; return; }
      const needle = isAr(raw) ? '' : raw;
      const card = (e, first) => {
        const rows = e.rows && e.rows.length ? `<div class="gs-tbl">${e.rows.map(r => `<div class="gs-tr"><b>${esc(r.p)}</b><div><div class="gs-ar">${esc(r.ar)}</div><div class="gs-az">${hl(r.arabizi, needle)}</div></div></div>`).join('')}${e.nota ? `<div class="gs-nota">${esc(e.nota)}</div>` : ''}${e.link ? `<a class="gs-link" href="${e.link}">Abrir no cartão →</a>` : ''}</div>` : '';
        return `<div class="gs-item${first && rows ? ' exp' : ''}">
          <div class="gs-row1"><div class="gs-pt">${hl(e.pt, needle)}</div><div class="gs-tag">${e.icon || ''} ${esc(e.type)}</div></div>
          <div class="gs-ar">${esc(e.ar)}</div><div class="gs-az">${hl(e.az, needle)}</div>
          ${rows ? `<div class="gs-more">Toque para ver ${e.type === 'Verbo' ? 'a conjugação' : 'todas as formas'} ▾</div>` : ''}
          ${e.src ? `<div class="gs-src">${esc(e.src)}</div>` : ''}${rows}</div>`;
      };
      res.innerHTML = words.map((h, i) => card(h[1], i === 0)).join('') +
        (sents.length ? `<div class="gs-hint" style="padding:12px 0 6px">Frases com “${esc(raw)}”</div>` + sents.map(h => card(h[1])).join('') : '');
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
