// Aula 96 (2026-11-18) — ممنوع/مسموح + قِدِر na prática, verbo estacionar. Apostila 2 continua na p.29.
// Applied to bank.js + card-vocabulario.html + card-verbos.html. Idempotent.
const fs = require("fs");
const DIR = process.argv[2];
const P = f => DIR + "/" + f;
const A96 = "2026-11-18";
const log = [];

const C = (pairs) => { const k = ["Eu","Você (m)","Você (f)","Ele","Ela","Nós","Vocês","Eles/Elas"]; const o = {}; k.forEach((kk,i)=>o[kk]={ar:pairs[i][0],arabizi:pairs[i][1]}); return o; };
const verbo = { id: "verbo-barken", pt: "estacionar", ar: "بَركِن", arabizi: "barken", grupo: "rotina", conj: C([
  ["أنا بَركِن","Ana barken"],["انتَ بتركن","Enta beterken"],["انتي بتركني","Enty beterkeny"],["هو بيركِن","Howa bierken"],
  ["هي بتركِن","Heya beterken"],["احنا بِنِركِن","E7na benerken"],["انتوا بتركِنوا","Entu beterkenu"],["هُما بيركِنوا","Homa bierkenu"]]) };

const V = (cat, catLabel, slug, pt, ar, arabizi) => ({ id: `voc-${cat}-${slug}`, cat, catLabel, pt, ar, arabizi });
const vocab = [
  V("lugares","Lugares","mante2a","zona / área","مَنطِقة","mante2a"),
  V("lugares","Lugares","elbosta","os correios","البوسطة","elbosta"),
  V("preposicoes","Preposições","5elal","durante","خِلال","5elal"),
  V("outros","Outros","za7ma","trânsito (cheio)","زَحمة","za7ma"),
  V("outros","Outros","shagara","árvore","شَجَرة","shagara"),
  V("outros","Outros","bada5an","eu fumo","بَدَخَن / بَشرَب سَجايِر","bada5an / bashrab sagayer"),
];

const E = (pt, ar, arabizi) => ({ pt, ar, arabizi, src: A96 });
const escrita = [
  E("É proibido que você estacione aqui.","ممنوع تِركِن هِنا.","Mamnu3 terken hena."),
  E("É proibido que você estacione em frente da empresa.","مَمنوع تِركِن قُدام الشِركة.","Mamnu3 terken 2odam elsherka."),
  E("É proibido que você fume dentro do restaurante.","مَمنوع تِدَخَن جوة المَطعَم.","Mamnu3 teda5an goua elmat3am."),
  E("É proibido falar em voz alta dentro da biblioteca.","ممنوع تتكَلِم بِصوت عالي جوة المَكتَبة.","Mamnu3 tetkalem besot 3aly goua elmaktaba."),
  E("É proibido que você dirija rápido nesta zona por causa da escola.","مَمنوع تِسوق بِسُرعة في المَنطقة دي بسبب المَدرَسة.","Mamnu3 tessu2 bessor3a fe elmante2a di bessabab elmadrassa."),
  E("É permitido que você estacione o carro na garagem do shopping.","مَسموح تركن العربية في جراج المول.","Masmu7 terken el3arabeya fe garage elmall."),
  E("É permitido comer e beber durante a aula dessa professora.","مَسموح تاكُل وتشرب خِلال حصة المُدَرِسة دي.","Masmu7 takol we teshrab 5elal 7esset elmodaressa di."),
  E("É permitido levar as crianças para a festa do ano novo no trabalho.","مَسموح تاخُد الأطفال حَفلة راس السنة في الشُغل.","Masmu7 ta5od elatfal 7aflet ras elsana fe elsho8l."),
  E("É permitido telefonar para os pais na escola.","مَسموح تِتِصِل بِماما وبابا في المَدرسة.","Masmu7 tetessel be mama we baba fe elmadrassa."),
  E("Eu não consigo fazer nada depois do trabalho.","أنا مابَقدَرش أعمِل حاجة بَعد الشُغل.","Ana maba2darsh a3mel 7aga ba3d elsho8l."),
  E("Eu não vou conseguir chegar no horário por causa do trânsito.","أنا مِش هَقدَر أوصَل في المَعاد بِسَبب الزَحمة.","Ana mesh ha2dar aussal fe elma3ad bessabab elza7ma."),
  E("Abd Elrahman não consegue telefonar para o gerente porque ele não tem celular.","عبدالرحمن مابيقدَرش يِتِصِل بالمُدير عشان ماعندوش موبايل.","Abdelra7man mabie2darsh yetessel belmodir 3ashan ma3andush mobile."),
  E("Hala não consegue falar português fluentemente porque faz um ano só que ela está aprendendo.","هاله مابتقدَرش تتكلم برتغالي بِطلاقة عشان بَقالها سنة بَس بتتعلم.","Hala mabete2darsh tetkalem borto8aly betalaqa 3ashan ba2alha sana bas betet3alem."),
  E("Nós não vamos conseguir ajudar vocês por causa do Ahmed.","احنا مِش هَنقدر نِساعِدكوا بِسبب أحمَد.","E7na mesh hane2dar nessa3edko bessabab Ahmed."),
  E("Os meus pais não conseguem limpar e arrumar a casa deles sozinhos, por isso quero telefonar para alguém.","ماما وبابا مابيقدَروش يِنَضَفوا ويِروَقوا البيت لوحدُهم عشان كدة عايِز أتِصِل بِحَد.","Mama we baba mabie2darush yenadafu we yeraua2u elbeit leua7dohom 3ashan keda 3aeiz atessel be 7ad."),
  E("Você consegue estacionar o carro? (m — habilidade, com بـ)","انتَ بتقدر تِركِن العربية؟","Enta bete2dar terken el3arabeya?"),
  E("Você consegue estacionar o carro? (f — habilidade, com بـ)","انتي بتقدري تركني العربية؟","Enty bete2dary terkeny el3arabeya?"),
  E("Você consegue estacionar o carro embaixo desta árvore? (m — agora, sem بـ)","تِقدَر تِركِن العربية تَحت الشَجرة دي؟","Te2dar terken el3arabeya ta7t elshagara di?"),
  E("Vocês conseguem falar árabe? (habilidade, com بـ)","انتوا بِتقدروا تتكلموا عربي؟","Entu bete2daru tetkalemu 3arabi?"),
  E("Vocês conseguem falar árabe com aqueles egípcios lá? (agora, sem بـ)","تِقدَروا تتكلموا عربي مع المَصريين دول هِناك؟","Te2daru tetkalemu 3arabi ma3a elmasreyin dol henak?"),
  E("Você consegue enviar coisas nos correios? (m — habilidade, com بـ)","انتَ بِتقدَر تِبعَت حاجات في البوسطة؟","Enta bete2dar teb3at 7agat fe elbosta?"),
  E("Você consegue enviar este presente para Adel nos correios? (m — agora, sem بـ)","تِقدَر تبعت الهدية دي لِـعادِل في البوسطة؟","Te2dar teb3at elhedeya di le Adel fe elbosta?"),
  E("Você consegue enviar este presente para Adel nos correios? (f — agora, sem بـ)","تقدري تبعتي الهدية دي لعادل في البوسطة؟","Te2dary teb3aty elhedeya di le Adel fe elbosta?"),
  E("Vocês conseguem correr? (habilidade, com بـ)","انتوا بتقدروا تِجروا؟","Entu bete2daru tegru?"),
  E("Vocês conseguem correr daqui para lá? (agora, sem بـ)","تِقدَروا تجروا مِن هِنا لِـهناك؟","Te2daru tegru men hena le henak?"),
];

let s = fs.readFileSync(P("bank.js"), "utf8");
const i0 = s.indexOf("{", s.indexOf("const BANK"));
const hdr = s.slice(0, i0);
const B = JSON.parse(s.slice(i0, s.lastIndexOf("};") + 1));
const norm = x => (x || "").toLowerCase().replace(/[-\s?!.,()]/g, "");
if (B.verbos.some(v => v.id === verbo.id || norm(v.arabizi) === norm(verbo.arabizi))) log.push("skip verbo " + verbo.id); else { B.verbos.push(verbo); log.push("+ verbos " + verbo.id); }
{ const ids = new Set(B.vocab.map(x => x.id)), seen = new Set(B.vocab.map(x => norm(x.arabizi)));
  for (const it of vocab) { if (ids.has(it.id) || seen.has(norm(it.arabizi))) { log.push("skip vocab " + it.id); continue; } B.vocab.push(it); log.push("+ vocab " + it.id); } }
let n = Math.max(...B.escrita.map(e => +((e.id.match(/^esc-(\d+)/) || [0, 0])[1])));
const escSeen = new Set(B.escrita.map(e => norm(e.arabizi)));
for (const e of escrita) {
  if (escSeen.has(norm(e.arabizi))) { log.push("skip dup escrita " + e.arabizi); continue; }
  n++;
  const slug = e.pt.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 50);
  B.escrita.push({ id: `esc-${n}-${slug}`, ...e }); escSeen.add(norm(e.arabizi)); log.push(`+ escrita esc-${n}-${slug}`);
}
B.version = A96;
B.baseadoEm = "Aulas até 96 (2026-11-18) · Apostila nível básico · Apostila 2 pp.1-29 · cards do site";
fs.writeFileSync(P("bank.js"), hdr + JSON.stringify(B, null, 1) + ";\n");

// card-vocabulario: each word into its category
let h = fs.readFileSync(P("card-vocabulario.html"), "utf8");
for (const it of vocab) {
  if (h.includes(`arabizi:"${it.arabizi}"`)) { log.push("card skip " + it.arabizi); continue; }
  const k = h.indexOf(`"${it.cat}": {`); if (k < 0) throw new Error("no cat " + it.cat);
  const at = h.indexOf("items: [", k) + "items: [".length;
  h = h.slice(0, at) + `\n        {pt:${JSON.stringify(it.pt + " — Aula 96")}, ar:${JSON.stringify(it.ar)}, arabizi:${JSON.stringify(it.arabizi)}},` + h.slice(at);
  log.push("card " + it.cat + " + " + it.arabizi);
}
fs.writeFileSync(P("card-vocabulario.html"), h);

// card-verbos: estacionar + nota do a2dar
let cv = fs.readFileSync(P("card-verbos.html"), "utf8");
if (!cv.includes('arabizi:"barken"')) {
  const entry = `    {grupo:"rotina", pt:"estacionar", ar:"بَركِن", arabizi:"barken",
      table:[
        {p:"Você (f)", ar:"انتي بتركني", arabizi:"Enty beterkeny"},
        {p:"Você (m)", ar:"انتَ بتركن", arabizi:"Enta beterken"},
        {p:"Ela", ar:"هي بتركِن", arabizi:"Heya beterken"},
        {p:"Ele", ar:"هو بيركِن", arabizi:"Howa bierken"},
        {p:"Eu", ar:"أنا بَركِن", arabizi:"Ana barken"},
      ],
      nos:{ar:"احنا بِنِركِن", arabizi:"E7na benerken"},
      entu:{ar:"انتوا بتركِنوا", arabizi:"Entu beterkenu"},
      homa:{ar:"هُما بيركِنوا", arabizi:"Homa bierkenu"},
      nota:"Aula 96. Sem بـ depois de مَمنوع / مَسموح / تِقدَر: تِركِن (terken), f. تركني (terkeny). Ex.: مَمنوع تِركِن هِنا (Mamnu3 terken hena); مَسموح تركن العربية في جراج المول (Masmu7 terken el3arabeya fe garage elmall). Na aula a professora escreveu o arabizi só de Eu / Ele / Nós / Vocês / Eles — Ela, Você (m) e Você (f) foram transcritos do árabe dela."},
`;
  const k = cv.indexOf('{grupo:"rotina", pt:"preparar"'); if (k < 0) throw new Error("anchor");
  const at = cv.lastIndexOf("\n", k) + 1;
  cv = cv.slice(0, at) + entry + cv.slice(at); log.push("card-verbos + barken (rotina)");
}
const anchor = "bei2daru) — confirmar com a professora.";
if (!cv.includes("Aula 96: com بـ")) {
  if (!cv.includes(anchor)) throw new Error("a2dar nota anchor");
  cv = cv.replace(anchor, anchor + " Aula 96: com بـ = habilidade / dia a dia — انتَ بتقدر تِركِن العربية؟ (Enta bete2dar terken el3arabeya?); sem بـ = ver se a pessoa consegue agora — تِقدَر تِركِن العربية تَحت الشَجرة دي؟ (Te2dar terken el3arabeya ta7t elshagara di?). Negativo usado na aula (com بـ): مابَقدَرش (maba2darsh), مابيقدَرش (mabie2darsh), مابتقدَرش (mabete2darsh), مابيقدَروش (mabie2darush). Futuro: مِش هَقدَر (mesh ha2dar), مِش هَنقدر (mesh hane2dar).");
  log.push("card-verbos a2dar nota + Aula 96");
}
fs.writeFileSync(P("card-verbos.html"), cv);
console.log(log.join("\n"));
