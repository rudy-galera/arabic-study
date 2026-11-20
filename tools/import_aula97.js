// Aula 97 (2026-11-20) — gabarito do diálogo Amin/Hossam (Apostila 2 p.30), ينفَع / ماينفَعش (p.31-32),
// leitura Salwa/Rania (p.31), clima الجَو / الدُنيا (p.32). Apostila 2 importada até a p.32.
// Applied to bank.js + card-vocabulario.html. Idempotent.
const fs = require("fs");
const DIR = process.argv[2];
const P = f => DIR + "/" + f;
const A97 = "2026-11-20";
const log = [];

const V = (cat, catLabel, slug, pt, ar, arabizi) => ({ id: `voc-${cat}-${slug}`, cat, catLabel, pt, ar, arabizi });
const vocab = [
  V("saudacoes","Saudações","alf-salama","melhoras!","ألف سَلامة","alf salama"),
  V("saudacoes","Saudações","alf-salama-3ala","melhoras para… (+ pessoa)","ألف سَلامة عَلى","alf salama 3ala"),
  V("saudacoes","Saudações","alf-salama-3aleh","melhoras para ele!","ألف سلامة عليه","alf salama 3aleh"),
  V("outros","Outros","7asal-eh","o que aconteceu?","حَصَل ايه؟","7asal eh?"),
  V("outros","Outros","ra2i","opinião","رأي","ra2i"),
  V("outros","Outros","ana-ra2ii-bessara7a","na minha opinião (honestamente)","أنا رأيي بِصراحة","ana ra2ii bessara7a"),
  V("outros","Outros","yenfa3","pode / dá para (regras, leis, costumes)","يِنفَع","yenfa3"),
  V("outros","Outros","mayenfa3sh","não pode / não dá (regras, leis, costumes)","ماينفَعش","mayenfa3sh"),
  V("outros","Outros","safareya","viagem (sinônimo de safar)","سَفرية","safareya"),
  V("comida","Comida","5amra","bebidas alcoólicas","خَمرة / مشروبات كحولية","5amra / mashrubat ko7oleya"),
  V("lugares","Lugares","shauare3","ruas","شَوارِع","shauare3"),
  V("lugares","Lugares","bab","porta","باب","bab"),
  V("lugares","Lugares","ay-makan","qualquer lugar","أي مَكان","ay makan"),
  V("outros","Outros","3andak-ai","aí, onde você está (m / f / vocês)","عَندَك / عَندِك / عَندُكوا","3andak / 3andek / 3andku"),
  V("outros","Outros","elauel","primeiro / antes (de fazer outra coisa)","الأوِل","elauel"),
  V("outros","Outros","elgau-3amel-eh","como está o tempo (clima)?","الجَو عامِل ايه؟","elgau 3amel eh?"),
  V("outros","Outros","clima-bard","está frio (clima)","الدُنيا بَرد / الجَو بَرد","el donya bard / el gau bard"),
  V("outros","Outros","clima-7ar","está calor (clima)","الدُنيا حَر / الجَو حَر","el donya 7ar / el gau 7ar"),
  V("outros","Outros","clima-shams","está ensolarado (clima)","الدُنيا شَمس / الجَو شَمس","el donya shams / el gau shams"),
  V("outros","Outros","clima-dafy","está ameno (clima)","الدُنيا دافية / الجَو دافي","el donya dafya / el gau dafy"),
  V("outros","Outros","clima-me8ayem","está nublado (clima)","الدُنيا مِغيمة / الجَو مِغَيم","el donya me8ayema / el gau me8ayem"),
  V("outros","Outros","ma5atesh-baly","não percebi","ماخدتش بالِي","ma5atesh baly"),
];

const E = (pt, ar, arabizi) => ({ pt, ar, arabizi, src: A97 });
const escrita = [
  // gabarito do diálogo da Apostila 2 p.30
  E("Amin: Olá Hossam, você vai conseguir viajar conosco na semana que vem?","أهلاً يا حُسام! انتَ هَتِقدَر تِسافِر معانا الأسبوع الجاي؟","Ahlan ya Hossam! Enta hate2dar tessafer ma3ana elosbu3 elgay?"),
  E("Hossam: Desculpe, eu não vou conseguir, meu filho mais novo está doente e nós precisamos ficar com ele, ele está no hospital desde ontem.","مَعلِش، أنا مِش هقدر، ابني الصُغَيَر تَعبان واحنا مِحتاجين نُقعُد معاه، هُوَ في المُستَشفى مِن امبارِح.","Ma3lesh, ana mesh ha2dar, ebny elso8ayar ta3ban we e7na me7taguin no3od ma3ah, howa fe elmostashfa men embare7."),
  E("Melhoras para ele! O que aconteceu?","ألف سلامة عليه! حَصَل ايه؟","Alf salama 3aleh! 7asal eh?"),
  E("Eu não vou conseguir te contar tudo agora, eu preciso ir ao hospital agora e estou atrasado!","أنا مِش هاقدَر أقول لَك كُل حاجة دلوقتي، أنا مِحتاج أروح المستشفى دلوقتي وأنا متأخر!","Ana mesh ha2dar a2ul lak kol 7aga delwa2ty, ana me7tag aru7 elmostashfa delwa2ty we ana met2a5ar!"),
  E("Sem problemas, eu vou te ligar mais tarde! Tchau!","مافيش مشكلة، أنا هتصل بيك بعدين! سَلام!","Mafish moshkela, ana hatessel bik ba3dein! Salam!"),
  // ينفَع / ماينفَعش — Apostila 2 p.32
  E("Não pode comer aqui!","ماينفَعش تاكُل هِنا!","Mayenfa3sh takol hena!"),
  E("Não pode fumar aqui!","ماينفَعش تِدَخَن هِنا!","Mayenfa3sh teda5an hena!"),
  E("Não pode falar em voz alta durante a reunião!","ماينفَعش تِتكَلِم بِصوت عالي في الاجتِماع!","Mayenfa3sh tetkalem be sot 3aly fe elektema3!"),
  E("Não pode ligar para ninguém durante a prova!","ماينفَعش تتصِل بِحَد خِلال الإمتحان!","Mayenfa3sh tetessel be 7ad 5elal elemte7an!"),
  E("Não pode sair desta porta!","ماينفعش تُخرُج مِن الباب ده!","Mayenfa3sh to5rog men elbab da!"),
  E("Não pode tomar este remédio depois do jantar.","ماينفَعش تاخُد الدَوا ده بَعد العَشا.","Mayenfa3sh ta5od eldaua da ba3d el3asha."),
  E("Não pode ficar aqui depois das 19h.","ماينفَعش تُقعُد هنا بعد الساعة سبعة!","Mayenfa3sh to3od hena ba3d elsa3a sab3a!"),
  E("Não pode dirigir rápido nesta rua!","ماينفَعش تِسوق بسُرعة في الشارِع ده!","Mayenfa3sh tessu2 bessor3a fe elshare3 da!"),
  E("Pode enviar as fotos da viagem para mim no WhatsApp, por favor? (m)","يِنفَع تِبعت لِي صور السَفَرية عَلى واتساب، لو سمحت؟","Yenfa3 teb3at ly suar elsafareya 3ala whatsapp, lau sama7t?"),
  E("Pode enviar as fotos da viagem para mim no WhatsApp, por favor? (f)","يِنفَع تِبعتي لي صور السفرية على واتساب، لو سمحتي؟","Yenfa3 teb3aty ly suar elsafareya 3ala whatsapp, lau sama7ty?"),
  E("Mãe, posso jogar PlayStation depois do almoço?","ماما يِنفعَ ألَعَب بلاي ستيشن بعد الغَدا؟","Mama yenfa3 al3ab play station ba3d el8ada?"),
  E("Não, não pode! Tem que estudar primeiro.","لا ماينفعش! لازِم تِذاكِر الأوِل.","La mayenfa3sh! Lazem tezaker elauel!"),
  E("Posso beber bebidas alcoólicas nas ruas do Egito? Ou é proibido?","يِنفَع أشرَب خَمرة في شوارِع مَصر؟ وَلّا مَمنوع؟","Yenfa3 ashrab 5amra fe shauare3 Masr? Walla mamnu3?"),
  E("Podemos levar o nosso cachorro para a festa?","يِنفَع ناخُد كلبِنا الحَفلة؟","Yenfa3 na5od kalbena el7afla?"),
  E("Como está o tempo aí nos Emirados?","الجَو عامِل ايه عَندَك في الإمارات؟","Elgau 3amel eh 3andak fe elemarat?"),
];

const leitura = {
  id: "lei-45-salwa-e-rania-apostila2",
  title: "Diálogo · Salwa e Rania — تِقدَري تقابليني؟ (Apostila 2 p.31)",
  src: "Apostila 2 p.31",
  items: [
    { pt: "Salwa: Rania, eu preciso de ajuda. Você consegue me encontrar hoje à tarde?", ar: "سَلوى: يا رانيا، أنا مِحتاجة مُساعدة؟ تِقدَري تقابليني النَهاردة بَعد الضُهر؟", arabizi: "Salwa: Ya Rania, ana mei7taga mossa3da? Te2dary te2abliny enaharda ba3d el dohr?" },
    { pt: "Rania: Eu vou terminar o trabalho tarde hoje. Você está bem?", ar: "رانيا: أنا هَخَلص الشُغل مِتأخر النَهاردة. انتي كويسة؟", arabizi: "Rania: Ana ha5alas el sho8l met2a5ar enaharda. Enty kouayessa?" },
    { pt: "Salwa: Eu estou bem, mas preciso da sua opinião sobre uma coisa importante.", ar: "سَلوى: أنا كويسة، بَس مِحتاجة رأيك في حاجة مُهِمة.", arabizi: "Salwa: Ana kouayessa, bas mei7taga ra2yek fe 7aga mohema." },
    { pt: "Rania: Está bem, vou tentar falar com o gerente e ver se consigo te encontrar hoje. Onde você quer me encontrar?", ar: "رانيا: خَلاص هَحاول أتكَلِم مَعَ المُدير و أشوف لَو أقدَر أقابلِك النَهاردة. انتي عايزة تِقابليني فين؟", arabizi: "Rania: 5alas, ha7awel atkalem ma3a el modir we ashuf lau a2dar a2ablek enaharda. Enty 3aeiza te2abliny fen?" },
    { pt: "Salwa: Qualquer lugar, não importa.", ar: "سَلوى: أي مَكان، مِش مُهِم.", arabizi: "Salwa: Ay makan, mesh mohem." },
    { pt: "Rania: Tem uma cafeteria boa perto do escritório aqui.", ar: "رانيا: فيه كافتيريا كويسة قُريبة من المكتب هِنا.", arabizi: "Rania: Fih cafeteria kouayessa orayeba men el maktab hena." },
    { pt: "Salwa: Certo, muito bom.", ar: "سَلوى: تَمام، كويس اوي.", arabizi: "Salwa: Tmam, kouayes awi." },
  ],
};

// existing entries the class extended (ids unchanged)
const patch = [
  { id: "voc-saudacoes-salam", pt: "olá / oi · também tchau (Aula 97)" },
  { id: "voc-sentimentos-3ayan", pt: "doente (m / f)", ar: "عَيان / عَيانة", arabizi: "3ayan / 3ayana" },
];

let s = fs.readFileSync(P("bank.js"), "utf8");
const i0 = s.indexOf("{", s.indexOf("const BANK"));
const hdr = s.slice(0, i0);
const B = JSON.parse(s.slice(i0, s.lastIndexOf("};") + 1));
const norm = x => (x || "").toLowerCase().replace(/[-\s?!.,()]/g, "");
{ const ids = new Set(B.vocab.map(x => x.id)), seen = new Set(B.vocab.map(x => norm(x.arabizi)));
  for (const it of vocab) { if (ids.has(it.id) || seen.has(norm(it.arabizi))) { log.push("skip vocab " + it.id); continue; } B.vocab.push(it); log.push("+ vocab " + it.id); } }
for (const p of patch) { const it = B.vocab.find(x => x.id === p.id); if (!it) throw new Error("patch " + p.id); const before = JSON.stringify(it); Object.assign(it, p); log.push((before === JSON.stringify(it) ? "skip" : "~") + " patch " + p.id); }
let n = Math.max(...B.escrita.map(e => +((e.id.match(/^esc-(\d+)/) || [0, 0])[1])));
const escSeen = new Set(B.escrita.map(e => norm(e.arabizi)));
for (const e of escrita) {
  if (escSeen.has(norm(e.arabizi))) { log.push("skip dup escrita " + e.arabizi); continue; }
  n++;
  const slug = e.pt.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 50);
  B.escrita.push({ id: `esc-${n}-${slug}`, ...e }); escSeen.add(norm(e.arabizi)); log.push(`+ escrita esc-${n}-${slug}`);
}
if (B.leitura.some(l => l.id === leitura.id)) log.push("skip leitura " + leitura.id); else { B.leitura.push(leitura); log.push("+ leitura " + leitura.id); }
B.version = A97;
B.baseadoEm = "Aulas até 97 (2026-11-20) · Apostila nível básico · Apostila 2 pp.1-32 · cards do site";
fs.writeFileSync(P("bank.js"), hdr + JSON.stringify(B, null, 1) + ";\n");

// card-vocabulario
let h = fs.readFileSync(P("card-vocabulario.html"), "utf8");
for (const it of vocab) {
  if (h.includes(`arabizi:${JSON.stringify(it.arabizi)}`)) { log.push("card skip " + it.arabizi); continue; }
  const k = h.indexOf(`"${it.cat}": {`); if (k < 0) throw new Error("no cat " + it.cat);
  const at = h.indexOf("items: [", k) + "items: [".length;
  h = h.slice(0, at) + `\n        {pt:${JSON.stringify(it.pt + " — Aula 97")}, ar:${JSON.stringify(it.ar)}, arabizi:${JSON.stringify(it.arabizi)}},` + h.slice(at);
  log.push("card " + it.cat + " + " + it.arabizi);
}
const rep = (a, b) => { if (h.includes(b)) { log.push("card skip patch"); return; } if (!h.includes(a)) throw new Error("card anchor " + a); h = h.replace(a, b); log.push("card ~ " + b); };
rep('{pt:"olá / oi", ar:"سَلام", arabizi:"salam"}', '{pt:"olá / oi · também tchau (Aula 97)", ar:"سَلام", arabizi:"salam"}');
rep('{pt:"doente", ar:"عَيان", arabizi:"3ayan"}', '{pt:"doente (m / f)", ar:"عَيان / عَيانة", arabizi:"3ayan / 3ayana"}');
fs.writeFileSync(P("card-vocabulario.html"), h);
console.log(log.join("\n"));
