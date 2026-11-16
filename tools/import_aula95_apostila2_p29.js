// Aula 95 (2026-11-13) + Apostila 2 p.29 additions — applied to bank.js + card-vocabulario.html + card-verbos.html
const fs = require("fs");
const DIR = process.argv[2];
const P = f => DIR + "/" + f;
const A95 = "2026-11-13";
const log = [];

// ── verb: conseguir (Apostila 2 p.29) ──
const C = (pairs) => { const k = ["Eu","Você (m)","Você (f)","Ele","Ela","Nós","Vocês","Eles/Elas"]; const o = {}; k.forEach((kk,i)=>o[kk]={ar:pairs[i][0],arabizi:pairs[i][1]}); return o; };
const verbo = { id: "verbo-2dar", pt: "conseguir / poder (قدر)", ar: "أقدَر", arabizi: "a2dar", grupo: "auxiliares", conj: C([
  ["أنا بَقدَر","Ana ba2dar"],["انتَ بتقدَر","Enta bet2dar"],["انتي بتقدَري","Enty bet2dary"],["هوَ بيقدَر","Howa bei2dar"],
  ["هيَ بتقدَر","Heya bete2dar"],["إحنا بنقدَر","E7na ben2dar"],["انتوا بتقدَروا","Entu bete2daru"],["هُما بيقدَروا","Homa bei2daru"]]) };

// ── vocab ──
const V = (cat, catLabel, slug, pt, ar, arabizi) => ({ id: `voc-${cat}-${slug}`, cat, catLabel, pt, ar, arabizi });
const vocab = [
  V("outros","Outros","we7esh-we7sha","ruim / mau / feio (m/f)","وِحِش / وِحشة","we7esh / we7sha"),
  V("outros","Outros","fi-nafs-elwa2t","ao mesmo tempo","في نَفس الوَقت","fi nafs elwa2t"),
];

// ── escrita: teacher's answer keys in Aula 95 ──
const E = (pt, ar, arabizi) => ({ pt, ar, arabizi, src: A95 });
const escrita = [
  // Apostila 2 p.27 dialogue (gabarito da professora)
  E("Eu vou para a praia no sábado de manhã com os meus amigos, você quer ir conosco?","أنا هَروح البَحر يوم السَبت الصُبح مَع أصحابي، عايز تروح معانا؟","Ana haru7 elba7r youm elsapt elsop7 ma3a as7aby, 3aeiz teru7 ma3ana?"),
  E("Talvez eu trabalhe no sábado de manhã, eu vou falar com o gerente amanhã para saber.","أنا مُمكن (احتِمال) اشتغل يوم السبت الصبح، أنا هَتكَلِم مَعَ المُدير بُكرة عشان أعرَف.","Ana momken (e7temal) ashta8al youm elsapt elsop7, ana hatkalem ma3a elmodir bokra 3ashan a3raf."),
  E("Mas você não deveria trabalhar no sábado, sábado é folga!","بَس انت مش المفروض تشتغل يوم السبت، السبت أجازة!","Bas enta mesh elmafrud teshta8al youm elsapt, elsapt agaza!"),
  E("Temos muito trabalho atrasado na empresa, e eles precisam de ajuda!","عَندِنا شُغل كتير مِتأخَر في الشركة وهُم محتاجين مُساعدة.","3andena sho8l ketir met2a5ar fe elsherka we homa mei7tagin mossa3da."),
  E("Está bem, você não pode ir para a praia conosco, você pode ir para o parque conosco no domingo à noite?","ماشي انتَ مش ممكن تروح البحر معانا، ممكن تروح الجنينة معانا يوم الحَد بليل؟","Mashy, enta mesh momken teru7 elba7r ma3ana, momken teru7 elgenina ma3ana youm el7ad beleil?"),
  E("Sim, eu estou livre no domingo.","ايوة، أنا فاضي يوم الحَد.","Aywa, ana fady youm el7ad."),
  E("Eu vou comprar refrigerante, Hassan vai comprar pizza e Fátima vai comprar doces, você pode comprar ou fazer alguma coisa também?","أنا هشتري بيبسي وحسن هيشتري بيتزا وفاطمة هَتِشتِري حَلويات، ممكن تشتري أو تعمل حاجة كَمان؟","Ana hashtery Pepsi we Hassan haieshtery pizza we Fatma hateshtery 7alaweyat, momken teshtery au te3mel 7aga kaman?"),
  E("Claro! Com certeza!","أكيد! طبعاً!","Akid! Tab3an!"),
  // Apostila 2 p.28 — مستحيل / مهم / صعب
  E("É impossível que eu chegue no horário da reunião, tenho que telefonar para o gerente.","مُستَحيل أوصَل في معاد الإجتِماع، لازِم أتِصِل بِالمُدير.","Mosta7il aussal fe ma3ad elektema3, lazem atessel bel modir."),
  E("É impossível que o Karim faça tudo isso!","مستحيل كريم يِعمِل كل ده!","Mosta7il Karim ye3mel kol da!"),
  E("É impossível que a Nadia fale comigo de novo, ela está muito chateada comigo.","مستحيل نادية تتكلم معايا تاني، هي متضايقة مِني أوي.","Mosta7il Nadia tetkalem ma3aya tany, heya metday2a meni awi."),
  E("É impossível que nós voltemos a ver este filme de novo, é muito ruim.","مُستَحيل نِرجَع نشوف الفيلم ده تاني، وحش أوي.","Mosta7il nerga3 neshuf elfelm da tany, we7esh awi."),
  E("É importante que você aprenda árabe antes de viajar para o Egito. (m)","مُهِم تِتعَلِم عربي قَبل ما تِسافِر مَصر.","Mohem tet3alem 3arabi 2abl ma tessafer masr."),
  E("É importante que você aprenda árabe antes de viajar para o Egito. (f)","مُهِم تتعلمي عربي قبل ما تسافري مصر.","Mohem tet3alemy 3arabi 2abl ma tessafry masr."),
  E("É importante que nós visitemos os avós toda semana.","مُهِم نزور تيتة وجدو كل أسبوع.","Mohem nezur teta we gedo kol osbu3."),
  E("É importante que vocês escutem mais e falem menos.","مُهم تسمعوا أكتَر وتتكلموا أقل.","Mohem tesma3u aktar we tetkalemu a2al."),
  E("É importante que todos os funcionários preparem a apresentação bem antes da reunião.","مُهِم كل الموظفين يِجَهِزوا الباور بوينت كويس قبل الاجتماع.","Mohem kol elmouazafin yegahezu elpowerpoint kouayes 2abl elektema3."),
  E("É difícil que eu termine o trabalho e o projeto ao mesmo tempo.","صعب أخلص الشُغل والمَشروع في نفس الوَقت.","Sa3b a5alas elsho8l we elmashru3 fe nafs elwa2t."),
  E("É difícil que as crianças escrevam e leiam sozinhas.","صَعب الأطفال يكتِبوا ويقروا لوحدُهُم.","Sa3b elatfal yektebu we ye2ru leua7dohom."),
];

let s = fs.readFileSync(P("bank.js"), "utf8");
const i0 = s.indexOf("{", s.indexOf("const BANK"));
const hdr = s.slice(0, i0);
const B = JSON.parse(s.slice(i0, s.lastIndexOf("};") + 1));
const norm = x => (x || "").toLowerCase().replace(/[-\s?!.,()]/g, "");
// verb
if (B.verbos.some(v => v.id === verbo.id || norm(v.arabizi) === norm(verbo.arabizi))) log.push("skip verbo " + verbo.id); else { B.verbos.push(verbo); log.push("+ verbos " + verbo.id); }
// vocab
{ const ids = new Set(B.vocab.map(x => x.id)), seen = new Set(B.vocab.map(x => norm(x.arabizi)));
  for (const it of vocab) { if (ids.has(it.id) || seen.has(norm(it.arabizi))) { log.push("skip vocab " + it.id); continue; } B.vocab.push(it); log.push("+ vocab " + it.id); } }
// escrita
let n = Math.max(...B.escrita.map(e => +((e.id.match(/^esc-(\d+)/) || [0, 0])[1])));
const escSeen = new Set(B.escrita.map(e => norm(e.arabizi)));
for (const e of escrita) {
  if (escSeen.has(norm(e.arabizi))) { log.push("skip dup escrita " + e.arabizi); continue; }
  n++;
  const slug = e.pt.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 50);
  B.escrita.push({ id: `esc-${n}-${slug}`, ...e }); escSeen.add(norm(e.arabizi)); log.push(`+ escrita esc-${n}-${slug}`);
}
B.version = "2026-11-16";
B.baseadoEm = "Aulas até 95 (2026-11-13) · Apostila nível básico · Apostila 2 pp.1-29 · cards do site";
fs.writeFileSync(P("bank.js"), hdr + JSON.stringify(B, null, 1) + ";\n");

// ── card-vocabulario: outros ──
let h = fs.readFileSync(P("card-vocabulario.html"), "utf8");
{ const k = h.indexOf(`"outros": {`); const at = h.indexOf("items: [", k) + "items: [".length;
  const add = vocab.filter(it => !h.includes(`arabizi:"${it.arabizi}"`)).map(it => `\n        {pt:${JSON.stringify(it.pt + " — Aula 95")}, ar:${JSON.stringify(it.ar)}, arabizi:${JSON.stringify(it.arabizi)}},`).join("");
  if (add) { h = h.slice(0, at) + add + h.slice(at); log.push("card outros +" + (add.split("\n").length - 1)); }
  fs.writeFileSync(P("card-vocabulario.html"), h); }

// ── card-verbos: conseguir in auxiliares ──
let cv = fs.readFileSync(P("card-verbos.html"), "utf8");
if (!cv.includes('arabizi:"a2dar"')) {
  const entry = `    {grupo:"auxiliares", pt:"conseguir / poder", ar:"أقدَر", arabizi:"a2dar",
      table:[
        {p:"Você (f)", ar:"انتي بتقدَري", arabizi:"Enty bet2dary"},
        {p:"Você (m)", ar:"انتَ بتقدَر", arabizi:"Enta bet2dar"},
        {p:"Ela", ar:"هيَ بتقدَر", arabizi:"Heya bete2dar"},
        {p:"Ele", ar:"هوَ بيقدَر", arabizi:"Howa bei2dar"},
        {p:"Eu", ar:"أنا بَقدَر", arabizi:"Ana ba2dar"},
      ],
      nos:{ar:"إحنا بنقدَر", arabizi:"E7na ben2dar"},
      entu:{ar:"انتوا بتقدَروا", arabizi:"Entu bete2daru"},
      homa:{ar:"هُما بيقدَروا", arabizi:"Homa bei2daru"},
      nota:"Apostila 2 p.29. Negativo (sanduíche): أنا ماقدَرش (ana ma2darsh), هوَ مايقدَرش (howa maye2darsh), هيَ ماتقدَرش (heya mate2darsh), انتَ ماتقدَرش (enta mate2darsh), انتي ماتقدَريش (enty mate2darish), إحنا مانِقدَرش (e7na mane2darsh), انتوا ماتقدَروش (entu mate2darush), هُما مايقدَروش (homa maye2darush). Sem بـ (depois de مُمكِن / لازِم / هـ): أنا أقدَر (ana a2dar), هوَ يقدَر (howa ye2dar), هيَ تِقدَر (heya te2dar), انتَ تِقدَر (enta te2dar), انتي تِقدَري (enty te2dary), إحنا نِقدَر (e7na ne2dar), انتوا تِقدَروا (entu te2daru); Eles: a Apostila repete بيقدَروا (bei2daru) — confirmar com a professora."},
`;
  const k = cv.indexOf('{grupo:"rotina"'); const at = cv.lastIndexOf("\n", k) + 1;
  cv = cv.slice(0, at) + entry + cv.slice(at); fs.writeFileSync(P("card-verbos.html"), cv); log.push("card-verbos + a2dar (auxiliares)");
}
console.log(log.join("\n"));
