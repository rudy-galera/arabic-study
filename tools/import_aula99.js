// Aula 99 (2026-11-27) — chuva (Apostila 2 p.35 + gabarito na aula 99), gabarito do diálogo
// Marina/Julia (p.35), verbo vir (ييجي), ازيك؟ وازاي…؟, أنا مبسوط أوي إن…, leitura «Carta para John» (p.36).
// Apostila 2 importada até a p.36. Applied to bank.js + card-vocabulario.html + card-verbos.html. Idempotent.
const fs = require("fs");
const DIR = process.argv[2];
const P = f => DIR + "/" + f;
const A99 = "2026-11-27";
const log = [];

const V = (cat, catLabel, slug, pt, ar, arabizi) => ({ id: `voc-${cat}-${slug}`, cat, catLabel, pt, ar, arabizi });
const vocab = [
  // chuva — Apostila 2 p.35 (quadro) + aula 99
  V("outros","Outros","matar","chuva","مَطَر","matar"),
  V("outros","Outros","clima-betmatar","chove / está chovendo","الدُنيا بتمَطَر","el donya betmatar"),
  V("outros","Outros","clima-hatmatar","vai chover","الدُنيا هَتمَطَر","el donya hatmatar"),
  V("outros","Outros","clima-kanet-betmatar","estava chovendo","الدُنيا كانِت بتمَطَر","el donya kanet betmatar"),
  V("outros","Outros","clima-mataret","choveu","الدُنيا مَطَرِت","el donya mataret"),
  V("outros","Outros","clima-mabetmatarsh","não chove","الدُنيا مابتمَطَرش","el donya mabetmatarsh"),
  V("outros","Outros","gamed","muito (chuva: chove muito)","جامِد","gamed"),
  V("outros","Outros","shamseya","guarda-chuva / sombrinha / guarda-sol","شَمسية","shamseya"),
  // aula 99 — expressões
  V("sentimentos","Sentimentos","mabsut-awi-en","eu estou muito feliz que…","أنا مَبسوط أوي إن…","ana mabsut awi en"),
  V("outros","Outros","etra2eit","fui promovido","اترَقيت","etra2eit"),
  // leitura p.36 — palavras novas (glosa em PT feita a partir do texto)
  V("lugares","Lugares","modon","cidades (plural de madina)","مُدن","modon"),
  V("outros","Outros","el-ghroub","o pôr do sol","الغروب","el ghroub"),
  V("outros","Outros","tagroba","experiência","تَجرُبة","tagroba"),
  V("outros","Outros","ansa7ak","eu te aconselho","أنصَحَك","ansa7ak"),
  V("outros","Outros","tetsawar","tirar foto (de si) / ser fotografado","تتصَوَر","tetsawar"),
  V("outros","Outros","3aziz","querido (em carta: صَديقي العَزيز)","العَزيز","el 3aziz"),
];

const E = (pt, ar, arabizi, src = "aula-99") => ({ pt, ar, arabizi, src });
const escrita = [
  // chuva — gabarito (aula 99) dos exercícios da Apostila 2 p.35
  E("Está chovendo lá fora.","الدُنيا بتمطر بَرة.","Eldonya betmatar barra."),
  E("É necessário que você fique em casa. Está chovendo.","ضَروري تُقعُد في البيت. الدُنيا بتمطر.","Darury to3od fe elbeit, eldonya betmatar."),
  E("Na minha cidade, chove muito em junho e julho.","في مدينتي، بتمطر جامِد في يونيو ويوليو.","Fi madenty, betmatar gamed fe yonyo we yolyo."),
  E("Aqui, só chove no inverno.","هِنا، بتمطر في الشِتا بَس.","Hena betmatar fe elsheta bas."),
  E("Vai chover muito amanhã.","الدُنيا هَتمَطَر جامِد بكرة.","Eldonya hatmatar gamed bokra."),
  E("O clima está nublado, vai chover.","الدُنيا مِغَيمة، هَتمَطَر.","Eldonya me8ayema, hatmatar."),
  E("Estava chovendo muito ontem de tarde.","الدُنيا كانِت بِتمَطَر جامِد امبارِح بعد الضُهر.","Eldonya kanet betmatar gamed embare7 ba3d eldohr."),
  E("Choveu muito hoje de manhã.","الدُنيا مَطَرِت جامِد النهاردة الصُبح.","Eldonya mataret gamed enaharda elsob7."),
  // gabarito do diálogo Marina/Julia (Apostila 2 p.35), escrito pela professora na aula 99
  E("Marina: Está muito ensolarado hoje!","الجَو شَمس أوي النهاردة!","Elgau shams awi enaharda!"),
  E("Julia: Sim, faz muito calor no verão aqui!","ايوة، الجو حر أوي في الصيف هِنا!","Aywa, elgau 7ar awi fe elseif hena!"),
  E("Julia: Eu vou comprar suco e água gelada, você quer? (f)","أنا هَشتَري عَصير وماية ساقعة، عايزة؟","Ana hashtery 3asir we maya sa23a, 3aeiza?"),
  E("Marina: Sim, quero sorvete ou refrigerante. (f)","ايوة، عايزة أيسكريم أو بيبسي.","Aywa, 3aeiza ice cream au pepsi."),
  E("Julia no quiosque fazendo o pedido.","جوليا في الكُشك بِتعمِل الأوردر / بتشتري.","Julia fe elkoshk bete3mel elorder / beteshtery"),
  E("Julia: Quero 2 sorvetes, por favor? (f, falando com homem)","أنا عايزة اتنين ايس كريم لوسمحت؟","Ana 3aeiza etnein ice cream lau sama7t?"),
  E("Vendedor: Certo, ficam por 15 reais.","تَمام، كدة 15 ريال.","Tamam, keda 15 reyal."),
  E("Julia: Certo, aqui está. (para homem)","تَمام، اتفَضَل.","Tamam, etfadal."),
  // ازيك؟ وازاي…؟ — aula 99
  E("Tudo bem com você? E como está a sua família? (m)","ازَيَك؟ وازاي عيلتَك؟","Ezayak? We ezay 3eltak?"),
  E("Tudo bem com você? E como está a sua esposa?","ازَيَك؟ وازاي مِراتك؟","Ezayak? We ezay meratak?"),
  E("Tudo bem com você? E como está o trabalho? (m)","ازيك؟ وازاي الشُغل؟","Ezayak? We ezay elsho8l?"),
  E("Tudo bem com você? E como estão os seus filhos? (m)","ازيك؟ وازاي وِلادَك؟","Ezayak? We ezay weladak?"),
  // vir — aula 99
  E("Eu não vou vir à festa porque não gosto do Ahmed.","أنا مِش هاجي الحَفلة عشان مابحبش أحمد.","Ana mesh hagui el7afla 3alashan maba7ebesh Ahmed."),
  E("Você sempre vem atrasado ao trabalho. (m)","انتَ دايماً بتيجي مِتأخَر الشُغل.","Enta dayman betigui met2a5ar elsho8l."),
  E("Você sempre vem atrasada ao trabalho. (f)","انتي دايماً بتيجي مِتأخرة الشُغل.","Enty dayman betigui met2a5ara elsho8l."),
  // أنا مبسوط أوي إن… — aula 99
  E("Eu estou muito feliz que você está aqui. (para mulher)","أنا مبسوط أوي إنِك هِنا.","Ana mabsut awi enek hena."),
  E("Eu estou muito feliz que fui promovido.","أنا مبسوط أوي إني اترَقيت.","Ana mabsut awi eni etra2eit."),
  E("Eu estou muito feliz que vamos viajar.","أنا مبسوط أوي إننا هَنسافِر.","Ana mabsut awi enena hansafer."),
];

const leitura = {
  id: "lei-46-carta-para-john-apostila2",
  title: "Leitura · Carta para John — صَديقي العَزيز جون (Apostila 2 p.36)",
  src: "Apostila 2 p.36",
  items: [
    { pt: "Meu querido amigo John,", ar: "صَديقي العَزيز جون", arabizi: "Sadiky el 3aziz John" },
    { pt: "Tudo bem com você? E como está a sua família?", ar: "إزيَك وإزاي عيلتَك؟", arabizi: "Ezayak we ezay 3eltak?" },
    { pt: "Como vocês estão?", ar: "عاملين إيه؟", arabizi: "3amlin eh?" },
    { pt: "Estou muito feliz que você vai vir ao Egito nas férias.", ar: "أنا مَبسوط اوي إنك هَتيجي مَصر في الأجازة.", arabizi: "Ana mabsut awi enak hategy Masr fe el agaza." },
    { pt: "Em outubro, o tempo no Egito é ameno e bonito, nem frio nem calor.", ar: "الجَوّ في مَصر في أكتوبر دافي وجَميل مش بَرد ولا حَر.", arabizi: "El gau fi Masr fi October dafy we gamil mesh bard wala 7ar." },
    { pt: "Você tem que visitar uma das cidades do Mar Vermelho, como Hurghada, Dahab ou Sharm el-Sheikh.", ar: "لازم تزور مدينة من مُدن البَحر الأحمر زَي الغَردقة، دَهب أو شرم الشيخ.", arabizi: "Lazem tezur madina men modon el ba7r el a7mar zay el Gharda2a, Dahab au Sharm el Sheikh." },
    { pt: "A água lá é limpa e bonita, mas à noite faz um pouco de frio.", ar: "المَية هِناك صافية و جَميلة، بَس بالليل الجَو بَرد شِوية.", arabizi: "El maya henak safya we gamila, bas beilel el gau bard shewia." },
    { pt: "Não chove no Egito em outubro.", ar: "الدُنيا مابتمَطَرش في مَصر في أكتوبر.", arabizi: "El donya mabetmatarsh fi Masr fi October." },
    { pt: "No Cairo e em Gizé é importante visitar os museus e as pirâmides, e você tem que caminhar à noite pela Corniche e ver o pôr do sol no Nilo.", ar: "في القاهِرة والجيزة مُهم تزور المَتاحِف و الأهرامات و لازم تمشي بالليل على الكورنيش و تشوف الغروب على النيل.", arabizi: "Fe el kahera we el Giza mohem tezur el mata7ef we el ahramat we lazem temshy beilel 3ala el kornech we teshuf el ghroub 3ala el Neel." },
    { pt: "A Torre do Cairo fica perto do Museu Egípcio; você pode visitar os dois no mesmo dia.", ar: "بُرج القاهِرة قُريب من المَتحف المَصري، انت مُمكن تزور الاتنين في نَفس اليوم.", arabizi: "Borg el kahera orayeb men el mat7af el masry. Enta momken tezur el etnen fi nafs el youm." },
    { pt: "Se você quiser ir a Luxor e Assuã, pode ir de trem, de avião ou de cruzeiro pelo Nilo.", ar: "لو عايز تروح الأقصر و أسوان فانت مُمكن تروح بالقَطر أو بالطَيارة أو بكروز في النيل.", arabizi: "Lau 3aeiz teru7 el Lo2sor we Aswan fa enta momken teru7 bel atr au bel tayara au bi cruz fe el Neel." },
    { pt: "O mais rápido é o avião, mas eu te aconselho a pegar o cruzeiro; você vai adorar essa experiência.", ar: "أسرَع حاجة الطَيارة بَس أنا أنصَحَك تاخُد الكروز، انت هَتحِب التَجرُبة دي اوي.", arabizi: "Asra3 7aga el tayara, bas ana ansa7ak ta5od el cruz, enta hat7eb el tagroba dy awi." },
    { pt: "Em Luxor há museus faraônicos muito bonitos.", ar: "في الأقصر في مَتاحِف فرعونية جَميلة اوي.", arabizi: "Fe el Lo2sor fih mata7ef for3oneya gamila awi." },
    { pt: "Todo mundo gosta de tirar fotos lá.", ar: "كُل الناس بتحب تتصور هِناك.", arabizi: "Kol el nas bet7eb tetsawar henak." },
  ],
};

const vir = {
  id: "verbo-yigi", pt: "vir", ar: "ييجي", arabizi: "yigui", grupo: "rotina",
  conj: {
    "Eu": { ar: "أنا باجي", arabizi: "Ana bagui" },
    "Você (m)": { ar: "انت بتيجي", arabizi: "Enta betigui" },
    "Você (f)": { ar: "انتي بتيجي", arabizi: "Enty betigui" },
    "Ele": { ar: "هُوَ بييجي", arabizi: "Howa beiigui" },
    "Ela": { ar: "هي بتيجي", arabizi: "Heya betigui" },
    "Nós": { ar: "احنا بنيجي", arabizi: "E7na benigui" },
    "Vocês": { ar: "انتوا بتيجوا", arabizi: "Entu betigu" },
    "Eles/Elas": { ar: "هما بييجوا", arabizi: "Homa beiigu" },
  },
};

let s = fs.readFileSync(P("bank.js"), "utf8");
const i0 = s.indexOf("{", s.indexOf("const BANK"));
const hdr = s.slice(0, i0);
const B = JSON.parse(s.slice(i0, s.lastIndexOf("};") + 1));
const norm = x => (x || "").toLowerCase().replace(/[-\s?!.,()]/g, "");
{ const ids = new Set(B.vocab.map(x => x.id)), seen = new Set(B.vocab.map(x => norm(x.arabizi)));
  for (const it of vocab) { if (ids.has(it.id) || seen.has(norm(it.arabizi))) { log.push("skip vocab " + it.id); continue; } B.vocab.push(it); log.push("+ vocab " + it.id); } }
if (B.verbos.some(v => v.id === vir.id)) log.push("skip verbo " + vir.id); else { B.verbos.push(vir); log.push("+ verbo " + vir.id); }
let n = Math.max(...B.escrita.map(e => +((e.id.match(/^esc-(\d+)/) || [0, 0])[1])));
const escSeen = new Set(B.escrita.map(e => norm(e.arabizi)));
for (const e of escrita) {
  if (escSeen.has(norm(e.arabizi))) { log.push("skip dup escrita " + e.arabizi); continue; }
  n++;
  const slug = e.pt.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 50);
  B.escrita.push({ id: `esc-${n}-${slug}`, ...e }); escSeen.add(norm(e.arabizi)); log.push(`+ escrita esc-${n}-${slug}`);
}
if (B.leitura.some(l => l.id === leitura.id)) log.push("skip leitura"); else { B.leitura.push(leitura); log.push("+ leitura " + leitura.id); }
B.version = A99;
B.baseadoEm = "Aulas até 99 (2026-11-27) · Apostila nível básico · Apostila 2 pp.1-36 · cards do site";
fs.writeFileSync(P("bank.js"), hdr + JSON.stringify(B, null, 1) + ";\n");

// card-vocabulario
let h = fs.readFileSync(P("card-vocabulario.html"), "utf8");
for (const it of vocab) {
  if (h.includes(`arabizi:${JSON.stringify(it.arabizi)}`)) { log.push("card skip " + it.arabizi); continue; }
  const k = h.indexOf(`"${it.cat}": {`); if (k < 0) throw new Error("no cat " + it.cat);
  const at = h.indexOf("items: [", k) + "items: [".length;
  h = h.slice(0, at) + `\n        {pt:${JSON.stringify(it.pt + " — Aula 99")}, ar:${JSON.stringify(it.ar)}, arabizi:${JSON.stringify(it.arabizi)}},` + h.slice(at);
  log.push("card " + it.cat + " + " + it.arabizi);
}
fs.writeFileSync(P("card-vocabulario.html"), h);

// card-verbos: vir
let cv = fs.readFileSync(P("card-verbos.html"), "utf8");
if (!cv.includes('arabizi:"yigui"')) {
  const entry = `    {grupo:"rotina", pt:"vir", ar:"ييجي", arabizi:"yigui",
      table:[
        {p:"Você (f)", ar:"انتي بتيجي", arabizi:"Enty betigui"},
        {p:"Você (m)", ar:"انت بتيجي", arabizi:"Enta betigui"},
        {p:"Ela", ar:"هي بتيجي", arabizi:"Heya betigui"},
        {p:"Ele", ar:"هُوَ بييجي", arabizi:"Howa beiigui"},
        {p:"Eu", ar:"أنا باجي", arabizi:"Ana bagui"},
      ],
      nos:{ar:"احنا بنيجي", arabizi:"E7na benigui"},
      entu:{ar:"انتوا بتيجوا", arabizi:"Entu betigu"},
      homa:{ar:"هما بييجوا", arabizi:"Homa beiigu"},
      nota:"Aula 99. Irregular: Eu = باجي (bagui). Futuro negativo: أنا مِش هاجي الحَفلة (Ana mesh hagui el7afla). Ex.: انتَ دايماً بتيجي مِتأخَر الشُغل (Enta dayman betigui met2a5ar elsho8l). Futuro (Apostila 2 p.36): إنك هَتيجي مَصر (enak hategy Masr). A professora escreveu o arabizi só de Eu / Ele / Ela — os outros foram transcritos do árabe dela."},
`;
  const k = cv.indexOf('{grupo:"rotina", pt:"preparar"'); if (k < 0) throw new Error("anchor");
  const at = cv.lastIndexOf("\n", k) + 1;
  cv = cv.slice(0, at) + entry + cv.slice(at); log.push("card-verbos + yigui (rotina)");
}
fs.writeFileSync(P("card-verbos.html"), cv);
console.log(log.join("\n"));
