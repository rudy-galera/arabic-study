// Aula 94 + Apostila 2 pp.25-28 additions — applied to bank.js + card-vocabulario.html
const fs = require("fs");
const DIR = process.argv[2];
const P = f => DIR + "/" + f;

const F = (Eu, Ele, Ela, Vm, Vf, Nos, Voces, Eles) => {
  const k = ["Eu","Ele","Ela","Você (m)","Você (f)","Nós","Vocês","Eles"];
  const v = [Eu, Ele, Ela, Vm, Vf, Nos, Voces, Eles];
  const o = {}; k.forEach((kk, i) => o[kk] = { ar: v[i][0], arabizi: v[i][1] }); return o;
};


const familia = [];
const S2 = p => "Apostila 2 p." + p;
const A94 = "2026-11-11";
const possessivos = [];
const V = (cat, catLabel, slug, pt, ar, arabizi) => ({ id: `voc-${cat}-${slug}`, cat, catLabel, pt, ar, arabizi });
const vocab = [
  V("outros","Outros","darury","é necessário (ضروري + verbo)","ضَروري","darury"),
  V("outros","Outros","el-mafrud","deveria (المفروض + verbo)","المَفروض","el mafrud"),
  V("outros","Outros","7a2i2y","certo / é verdade","حَقيقي","7a2i2y"),
  V("outros","Outros","wallahi","sério? / juro","والله","wallahi"),
  V("outros","Outros","a3mal","negócios","أعمال","a3mal"),
  V("outros","Outros","ragol-a3mal","empresário","رَجُل أعمال","ragol a3mal"),
  V("outros","Outros","garima","crime","جَريمة","garima"),
  V("outros","Outros","falsafa","filosofia","فَلسَفة","falsafa"),
  V("outros","Outros","namima","fofoca","نَميمة","namima"),
  V("outros","Outros","mosta7il","é impossível","مُستَحيل","mosta7il"),
  V("outros","Outros","mamnu3","é proibido","مَمنوع","mamnu3"),
  V("outros","Outros","masmu7","é permitido","مَسموح","masmu7"),
  V("outros","Outros","ma3ad","horário (o horário marcado)","ميعاد","ma3ad"),
  V("outros","Outros","be-sot-3aly","em voz alta","بِصوت عالي","be sot 3aly"),
  V("outros","Outros","barken","estacionar","بَركِن","barken"),
];
const E = (pt, ar, arabizi, src) => ({ pt, ar, arabizi, src });
const escrita = [
  E("Eu tenho de acordar cedo amanhã porque tenho uma reunião muito importante.","أنا لازِم أصحى بَدري بُكرة عشان عندي اجتِماع مُهِم أوي.","Ana lazem as7a badry bokra 3ashan 3andy ektema3 mohem awi.",A94),
  E("Ele tem que arrumar o quarto dele hoje à noite porque está muito bagunçado.","هو لازِم يروق أوضتُه النهاردة بِليل لأنها مِفركشة أوي.","Howa lazem yeraua2 odto enaharda beleil la2enaha mefarkesha awi.",A94),
  E("Você tem que escovar os dentes depois de comer. (m)","انتَ لازِم تِغسِل سنانَك بعد ما تاكُل.","Enta lazem te8sel senanak ba3d ma takol.",A94),
  E("Você tem que escovar os dentes depois de comer. (f)","انتي لازِم تغسلي سنانِك بعد ما تاكلي.","Enty lazem te8sely senanek ba3d ma takly.",A94),
  E("Ela deve pentear o cabelo antes de sair de casa.","هي لازم تِسَرَح شَعرَها قَبل ما تُخرُج مِن البيت.","Heya lazem tessara7 sha3raha 2abl ma to5rog men elbeit.",A94),
  E("Nós temos de telefonar para eles porque é o aniversário do filho deles.","احنا لازِم نِتِصل بِيهم عشان عيد ميلاد ابنُهم.","E7na lazem netessel bihom 3ashan 3id milad ebnohom.",A94),
  E("Vocês têm que dizer a verdade para os pais.","انتوا لازِم تقولوا الحقيقة لِماما وبابا.","Entu lazem te2ulu el7a2i2a le mama we baba.",A94),
  E("É necessário que eu termine o trabalho agora.","أنا ضروري أخَلَص الشُغل دلوقتي.","Ana darury a5alas elsho8l delua2ty.",A94),
  E("É necessário que ele estude para a prova.","هو ضروري يِذاكِر لِلإمتِحان.","Howa darury yezaker lelemte7an.",A94),
  E("É necessário que ela limpe a sala antes de a família chegar.","هي ضروري تِنَضَف الصالة قبل ما العيلة تِوصَل.","Heya darury tenadaf elsala 2abl ma el3eila teussal.",A94),
  E("É necessário que você aprenda árabe. (m)","انتَ ضروري تتعلم عربي.","Enta darury tet3alem 3arabi.",A94),
  E("É necessário que nós vejamos vocês amanhã.","احنا ضروري نِشوفكوا بُكرة.","E7na darury neshofku bokra.",A94),
  E("Você deveria descansar hoje!","انتَ المفروض تريح النهاردة!","Enta elmafrud teraya7 elnaharda!",A94),
  E("Vocês deveriam ajudar a irmã de vocês.","انتوا المفروض تساعدوا أختُكوا.","Entu elmafrud tessa3du o5toku.",A94),
  E("Você deveria escutar mais e falar menos. (m)","انتَ المَفروض تِسمَع أكتَر وتتكلم أقَل.","Enta elmafrud tesma3 aktar we tetkalem a2al.",A94),
  E("Você deveria escutar mais e falar menos. (f)","انتي المفروض تسمعي أكتر وتتكلمي أقل.","Enty elmafrud tesma3y aktar we tetkalemy a2al.",A94),
  E("Nós falamos mal do chefe juntos.","بنتكلم مع بعض على المدير.","Benetkalem ma3a ba3d 3ala elmodir.",A94),
];
const I = (pt, ar, arabizi) => ({ pt, ar, arabizi });
const leitura = [
  { id: "lei-43-o-gerente-e-o-secretario-apostila2", title: "Diálogo · o gerente e o secretário — لازِم / ضروري / المفروض (Apostila 2 pp.27-28)", src: S2("27-28"), items: [
    I("O gerente: Hassan, você precisa ligar para o Sr. Samir e saber o horário da reunião com ele.","المُدير: يا حَسَن، انت لازِم تِتِصل بأستاذ سَمير وتِعرف ميعاد الإجتماع مَعاه.","El modir: Ya Hassan, enta lazem tetessel bi ostaz Samir we te3raf ma3ad el ektema3 ma3ah."),
    I("O secretário: Claro, senhor.","السكرتير: أكيد يا فندم.","El sekerter: Akid ya fandam."),
    I("O gerente: E você precisa encontrar o cliente novo na terça-feira de manhã.","المُدير: ولازِم تِقابِل العَميل الجديد يوم التلات الصُبح.","El modir: We lazem te2abel el 3amil el gedid youm el talat el sop7."),
    I("O secretário: Certo, senhor. Mais alguma coisa?","السكرتير: تَمام يا فندم، حاجة تانية؟","El sekerter: Tmam ya fandam, 7aga tanya?"),
    I("O gerente: É necessário enviar os e-mails para os funcionários hoje.","المُدير: ضَروري تِبعَت الإيميلات للموظفين النهاردة.","El modir: Darury teb3at el e-mailat lel mouazafin enaharda."),
    I("O secretário: Certo, senhor, vou enviá-los agora.","السكرتير: تَمام يا فندم، هَبعَتهُم دلوقتي.","El sekerter: Tmam ya fandam, hab3athom delua2ty."),
    I("O gerente: E você deveria ver o trabalho no outro escritório e me dizer se há algum problema.","المُدير: والمَفروض تشوف الشغل في المكتب التاني وتقولي لو فيه مُشكِلة.","El modir: We el mafrud teshuf el sho8l fe el maktab el tany we te2uly lau fih moshkela."),
    I("O secretário: Claro, senhor, vou tentar fazer tudo isso!","السكرتير: أكيد يا فندم، هَحاوِل أعمل كل ده!","El sekerter: Akid ya fandam, ha7awel a3mel kol da!"),
  ]},
];
// ── apply to bank ──
let s = fs.readFileSync(P("bank.js"), "utf8");
const i0 = s.indexOf("{", s.indexOf("const BANK"));
const hdr = s.slice(0, i0);
const B = JSON.parse(s.slice(i0, s.lastIndexOf("};") + 1));
const norm = x => (x || "").toLowerCase().replace(/[-\s?!.]/g, "");
const log = [];
function addAll(key, items, dupField) {
  const ids = new Set(B[key].map(x => x.id));
  const seen = new Set(B[key].map(x => norm(x[dupField])));
  for (const it of items) {
    if (ids.has(it.id)) { log.push(`skip id ${key} ${it.id}`); continue; }
    if (dupField && seen.has(norm(it[dupField]))) { log.push(`skip dup ${key} ${it.id}`); continue; }
    B[key].push(it); ids.add(it.id); seen.add(norm(it[dupField])); log.push(`+ ${key} ${it.id}`);
  }
}
addAll("familia", familia, "arabizi");
addAll("possessivos", possessivos, null);
addAll("vocab", vocab, "arabizi");
let n = Math.max(...B.escrita.map(e => +((e.id.match(/^esc-(\d+)/) || [0, 0])[1])));
const escSeen = new Set(B.escrita.map(e => norm(e.arabizi)));
for (const e of escrita) {
  if (escSeen.has(norm(e.arabizi))) { log.push("skip dup escrita " + e.arabizi); continue; }
  n++;
  const slug = e.pt.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 50);
  B.escrita.push({ id: `esc-${n}-${slug}`, ...e }); log.push(`+ escrita esc-${n}-${slug}`);
}
addAll("leitura", leitura, null);
B.version = new Date().toISOString().slice(0, 10);
B.baseadoEm = "Aulas até 94 (2026-11-11) · Apostila nível básico · Apostila 2 pp.1-28 · cards do site";
fs.writeFileSync(P("bank.js"), hdr + JSON.stringify(B, null, 1) + ";\n");

// ── apply to card-vocabulario ──
let h = fs.readFileSync(P("card-vocabulario.html"), "utf8");
const cardItems = {
  familia: familia.map(f => ({ pt: f.pt, ar: f.ar, arabizi: f.arabizi })),
  outros: vocab.filter(v => v.cat === "outros"),
  sentimentos: vocab.filter(v => v.cat === "sentimentos"),
  lugares: vocab.filter(v => v.cat === "lugares"),
  saudacoes: vocab.filter(v => v.cat === "saudacoes"),
};
const cardNorm = norm(h);
for (const [cat, items] of Object.entries(cardItems)) {
  const k = h.indexOf(`"${cat}": {`); const at = h.indexOf("items: [", k) + "items: [".length;
  const add = items.filter(it => !h.includes(`arabizi:"${it.arabizi}"`) && !h.includes(`arabizi:"el-${it.arabizi}"`))
    .map(it => `\n        {pt:${JSON.stringify(it.pt + (it.id && /mosta7il|mamnu3|masmu7|ma3ad|be-sot|barken/.test(it.id) ? " — Apostila 2" : " — Aula 94"))}, ar:${JSON.stringify(it.ar)}, arabizi:${JSON.stringify(it.arabizi)}},`).join("");
  if (add) { h = h.slice(0, at) + add + h.slice(at); log.push(`card ${cat}: +${add.split("\n").length - 1}`); }
}
fs.writeFileSync(P("card-vocabulario.html"), h);
console.log(log.join("\n"));
