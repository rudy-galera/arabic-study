// Aula 98 (2026-11-25) — gabarito do diálogo da biblioteca (Apostila 2 p.32), frases de clima,
// estações do ano + gabarito p.33-34, adjetivos calor/frio/quente/gelado + gabarito p.34.
// Apostila 2 importada até a p.34. Applied to bank.js + card-vocabulario.html. Idempotent.
const fs = require("fs");
const DIR = process.argv[2];
const P = f => DIR + "/" + f;
const A98 = "2026-11-25";
const log = [];

const V = (cat, catLabel, slug, pt, ar, arabizi) => ({ id: `voc-${cat}-${slug}`, cat, catLabel, pt, ar, arabizi });
const vocab = [
  V("lugares","Lugares","maktaba","biblioteca / livraria / papelaria","مَكتَبة","maktaba"),
  V("lugares","Lugares","ganub","sul","جَنوب","ganub"),
  V("outros","Outros","sama3at","fones de ouvido","سماعات","sama3at"),
  V("outros","Outros","ma7adesh","ninguém (sujeito: ninguém gosta…)","ماحَدش","ma7adesh"),
  V("outros","Outros","elhaua2-eltalq","ar livre","الهَواء الطَلق","elhaua2 eltalq"),
  V("outros","Outros","jaket","jaqueta","جاكيت","jaket"),
  V("outros","Outros","baguib","eu trago (trazer)","أنا بجيب","ana baguib"),
  V("comida","Comida","kobaya","copo","كوباية","kobaya"),
  V("comida","Comida","ice-cream","sorvete","أيس كريم","ice cream"),
  V("comida","Comida","hot-chocolate","chocolate quente","هوت تشوكليت","hot chocolate"),
  V("tempo","Tempo","fasl","estação (do ano)","فَصل","fasl"),
  V("tempo","Tempo","fosul","estações (do ano)","فُصول","fosul"),
  V("tempo","Tempo","fosul-elsana","estações do ano","فُصول السَنة","fosul elsana"),
  V("tempo","Tempo","rabi3","primavera","رَبيع","rabi3"),
  V("tempo","Tempo","5arif","outono","خَريف","5arif"),
  V("adjetivos","Adjetivos comuns","so5n","quente (objetos) (m / f)","سُخن / سُخنة","so5n / so5na"),
  V("adjetivos","Adjetivos comuns","sa2e3","gelado / gelada","ساقِع / ساقعة","sa2e3 / sa23a"),
  V("adjetivos","Adjetivos comuns","bared","frio / fria (objetos)","بارِد / باردة","bared / barda"),
];

const E = (pt, ar, arabizi) => ({ pt, ar, arabizi, src: A98 });
const escrita = [
  // gabarito do diálogo da Apostila 2 p.32
  E("A: Você não pode falar em voz alta aqui! Estamos na biblioteca!","انتَ ماينفَعش تِتكَلِم بِصوت عالي هِنا! احنا في المَكتبة!","Enta mayenfa3sh tetkalem besot 3aly hena! E7na fe elmaktaba!"),
  E("B: Eu não estou falando com ninguém agora, eu apenas estou lendo.","أنا مابتكلمش مع حَد دلوقتي، أنا بَقرا بَس.","Ana mabatkalemsh ma3a 7ad delua2ty, ana ba2ra bas."),
  E("A: Você está lendo em voz muito alta por causa dos fones de ouvido!","انتَ بِتِقرا بِصوت عالي أوي بسبب الهيد فونز (السماعات).","Enta bete2ra besot 3aly awi bessabab elheadphones (elsama3at)."),
  E("B: Desculpe! Não percebi!","آسِف! ماخدتش بالي!","Asef! Ma5adtesh baly!"),
  // clima — Apostila 2 p.32
  E("Como está o tempo hoje?","الجَو عامِل ايه النهاردة؟","Elgau 3amel eh enaharda?"),
  E("Está muito frio hoje, você tem que levar uma jaqueta antes de sair.","الجَو برد أوي النهاردة، لازِم تاخُد جاكيت قَبل ما تُخرُج.","Elgau bard awi enaharda, lazem ta5od jaket 2abl ma to5rog."),
  E("Está muito calor hoje, nós não queremos trabalhar, queremos ir à praia e comer sorvete.","الجَو حَر أوي النهاردة، احنا مش عايزين نشتغل، نِفسِنا نروح البَحر وناكُل أيس كريم.","Elgau 7ar awi enaharda, e7na mesh 3aeizin neshta8al, nefsena neru7 elba7r we nakol ice cream."),
  E("O tempo está nublado, eu não gosto desse tempo!","الجَو مِغَيِم، مابحبش الجَو ده!","Elgau me8ayem, maba7ebesh elgau da!"),
  E("Está sol, eu vou lavar a roupa rápido.","الجَو شَمس، هَغسِل الهدوم بِسُرعة.","Elgau shams, ha8sel elhodum bessor3a."),
  // estações — Apostila 2 p.33-34
  E("Faz muito calor no verão aqui.","الجَو حَر أوي في الصيف هنا.","Elgau 7ar awi fe elseif hena."),
  E("As pessoas gostam de viajar para a praia no verão.","الناس بِتحِب تِسافِر البَحر في الصيف.","Elnas bet7eb tessafer elba7r fe elseif."),
  E("Faz muito frio no inverno no sul do Brasil.","الجَو بَرد أوي في الشِتا في جَنوب البرازيل.","Elgau bard awi fe elsheta fe ganub elbarazil."),
  E("As pessoas preferem viajar para a Europa no inverno.","الناس بِتفَضَل تِسافر أوروبا في الشِتا.","Elnas betfadal tessafer Oroba fe elsheta."),
  E("Eu amo a primavera.","أنا بَحِب الرَبيع.","Ana ba7eb elrabi3."),
  E("As pessoas gostam de praticar esportes ao ar livre na primavera.","الناس بتحب تِلعَب رياضة برة (في الهواء الطَلق) في الرَبيع.","Elnas bet7eb tel3ab reyada barra (fe elhaua2 eltalq) fe elrabi3."),
  E("O tempo é ameno no outono.","الجَو دافي في الخَريف.","Elgau dafi fe el5arif."),
  E("As pessoas gostam de tomar chá e chocolate quente no outono.","الناس بِتحِب تِشرَب شاي وهوت تشوكليت في الخَريف.","Elnas bet7eb teshrab shay we hot chocolate fe el5arif."),
  // adjetivos calor/frio — Apostila 2 p.34
  E("Estou com calor, vou comprar sorvete.","أنا حَران، هَشتري أيس كريم.","Ana 7arran, hashtery ice cream."),
  E("O tempo está muito ensolarado e nós estamos com muito calor.","الجَو شَمس أوي واحنا حرانين.","Elgau shams awi we e7na 7arranin."),
  E("Eu estou com frio.","أنا بَردان.","Ana bardan."),
  E("Faz muito tempo que você está fora? Você está com frio! (m)","بَقالَك كتير برة؟ انت بَردان!","Ba2alak ketir barra? Enta bardan!"),
  E("Faz muito tempo que você está fora? Você está com frio! (f)","بَقالِك كتير برة؟ انتي بردانة!","Ba2alek ketir barra? Enty bardana!"),
  E("A sopa está muito quente!","الشوربة سُخنة أوي!","Elshorba so5na awi!"),
  E("Eu gosto de tomar chá quente no inverno.","أنا بحب أشرب شاي سُخن في الشِتا.","Ana ba7eb ashrab shay so5n fe elsheta."),
  E("Eu quero um copo de água gelada, por favor! (pode me trazer…)","مُمكِن تجيب لي كوباية ماية ساقعة، لو سَمَحت!","Momken teguib ly kobayet maya sa23a, lau sama7t!"),
  E("A comida está gelada!","الأكل ساقِع!","Elakl sa2e3!"),
  E("Ninguém gosta de tomar café frio.","ماحَدش بيحِب يِشرَب قهوة باردة.","Ma7adesh bei7eb yeshrab 2ahwa barda."),
  E("Ninguém gosta de comida fria.","ماحدش بيحِب الأكل البارِد.","Ma7adesh bei7eb elakl elbared."),
];

// existing entries the class extended (ids unchanged) — matched by current arabizi
const patch = [
  { from: "bardan", pt: "com frio (pessoa) (m / f)", ar: "بَردان / بَردانة", arabizi: "bardan / bardana" },
  { from: "7arran", pt: "com calor (pessoa) (m / f)", ar: "حَرّان / حَرّانة", arabizi: "7arran / 7arrana" },
  { from: "ma5atesh baly", pt: "não percebi", ar: "ماخَدتش بالي", arabizi: "ma5adtesh baly / ma5atesh baly" },
];

let s = fs.readFileSync(P("bank.js"), "utf8");
const i0 = s.indexOf("{", s.indexOf("const BANK"));
const hdr = s.slice(0, i0);
const B = JSON.parse(s.slice(i0, s.lastIndexOf("};") + 1));
const norm = x => (x || "").toLowerCase().replace(/[-\s?!.,()]/g, "");
for (const p of patch) {
  const it = B.vocab.find(x => x.arabizi === p.from);
  if (!it) { if (B.vocab.some(x => x.arabizi === p.arabizi)) { log.push("skip patch " + p.from); continue; } throw new Error("patch " + p.from); }
  it.pt = p.pt; it.ar = p.ar; it.arabizi = p.arabizi; log.push("~ patch " + it.id);
}
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
B.version = A98;
B.baseadoEm = "Aulas até 98 (2026-11-25) · Apostila nível básico · Apostila 2 pp.1-34 · cards do site";
fs.writeFileSync(P("bank.js"), hdr + JSON.stringify(B, null, 1) + ";\n");

// card-vocabulario
let h = fs.readFileSync(P("card-vocabulario.html"), "utf8");
for (const p of patch) {
  const re = new RegExp('\\{pt:"[^"]*", ar:"[^"]*", arabizi:"' + p.from + '"\\}');
  if (!re.test(h)) { log.push("card skip patch " + p.from); continue; }
  h = h.replace(re, `{pt:${JSON.stringify(p.pt)}, ar:${JSON.stringify(p.ar)}, arabizi:${JSON.stringify(p.arabizi)}}`); log.push("card ~ " + p.arabizi);
}
for (const it of vocab) {
  if (h.includes(`arabizi:${JSON.stringify(it.arabizi)}`)) { log.push("card skip " + it.arabizi); continue; }
  const k = h.indexOf(`"${it.cat}": {`); if (k < 0) throw new Error("no cat " + it.cat);
  const at = h.indexOf("items: [", k) + "items: [".length;
  h = h.slice(0, at) + `\n        {pt:${JSON.stringify(it.pt + " — Aula 98")}, ar:${JSON.stringify(it.ar)}, arabizi:${JSON.stringify(it.arabizi)}},` + h.slice(at);
  log.push("card " + it.cat + " + " + it.arabizi);
}
fs.writeFileSync(P("card-vocabulario.html"), h);
console.log(log.join("\n"));
