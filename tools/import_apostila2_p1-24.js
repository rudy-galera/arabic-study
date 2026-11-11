// Apostila 2 (pp.1-24) additions — applied to bank.js + card-vocabulario.html
const fs = require("fs");
const DIR = process.argv[2];
const P = f => DIR + "/" + f;

const F = (Eu, Ele, Ela, Vm, Vf, Nos, Voces, Eles) => {
  const k = ["Eu","Ele","Ela","Você (m)","Você (f)","Nós","Vocês","Eles"];
  const v = [Eu, Ele, Ela, Vm, Vf, Nos, Voces, Eles];
  const o = {}; k.forEach((kk, i) => o[kk] = { ar: v[i][0], arabizi: v[i][1] }); return o;
};

const familia = [
  ["fam-osra", "família (núcleo)", "أُسرة", "osra"],
  ["fam-atfal", "crianças", "أطفال", "atfal"],
  ["fam-zog-zoga", "marido / esposa (formal)", "زوج / زوجة", "zog / zoga"],
  ["fam-ragel", "homem", "رَجِل", "ragel"],
  ["fam-set", "mulher", "سِت", "set"],
  ["fam-nas", "pessoas", "ناس", "nas"],
  ["fam-7afid-7afida", "neto / neta", "حَفِيد / حَفِيدة", "7afid / 7afida"],
  ["fam-7amaa", "sogra", "حَماة", "7amaa"],
].map(([id, pt, ar, arabizi]) => ({ id, pt, ar, arabizi }));

const S2 = p => "Apostila 2 p." + p;
const possessivos = [
  { id: "poss-casa", pt: "Casa", ar: "بيت", src: S2(2), forms: F(["بيتي","beity"],["بيته","beito"],["بيتها","beitha"],["بيتَك","beitak"],["بيتِك","beitek"],["بيتنا","beitna"],["بيتكوا","beitku"],["بيتهُم","beithom"]) },
  { id: "poss-filha", pt: "Filha / menina", ar: "بِنت", src: S2(2), forms: F(["بِنتي","benty"],["بِنته","bento"],["بِنتها","bentaha"],["بِنتَك","bentak"],["بِنتِك","bentek"],["بِنتِنا","bentena"],["بِنتكوا","bentoku"],["بِنتهُم","bentohom"]) },
  { id: "poss-filhos", pt: "Filhos / crianças", ar: "أولاد", src: S2(2), forms: F(["أولادي","aulady"],["أولاده","aulado"],["أولادها","auladha"],["أولادَك","auladak"],["أولادِك","auladek"],["أولادنا","auladna"],["أولادكوا","auladku"],["أولادهُم","auladhom"]) },
  { id: "poss-carteira", pt: "Carteira", ar: "مَحفَظة", src: S2(4), forms: F(["مَحفَظتي","ma7fazty"],["مَحفَظته","ma7fazto"],["مَحفَظِتها","ma7fazetha"],["مَحفَظتَك","ma7faztak"],["مَحفَظتِك","ma7faztek"],["مَحفَظِتنا","ma7fazetna"],["مَحفَظِتكوا","ma7fazetku"],["مَحفَظِتهُم","ma7fazethom"]) },
  { id: "poss-oculos", pt: "Óculos", ar: "نَضارة", src: S2(4), forms: F(["نَضارتي","nadarty"],["نَضارته","nadarto"],["نَضارِتها","nadaretha"],["نَضارتَك","nadartak"],["نَضارتِك","nadartek"],["نَضارِتنا","nadaretna"],["نَضارِتكوا","nadaretku"],["نَضارِتهُم","nadarethom"]) },
  { id: "poss-wara", pt: "Atrás (وَرا)", ar: "وَرا", src: S2(17), forms: F(["ورايا","waraya"],["وَراه","warah"],["وَراها","waraha"],["وَراك","warak"],["وَراكي","waraky"],["وَرانا","warana"],["وَراكوا","waraku"],["وَراهُم","warahom"]) },
  { id: "poss-gamb", pt: "Ao lado (جَنب)", ar: "جَنب", src: S2(17), forms: F(["جَنبي","gamby"],["جَنبه","gambo"],["جَنبها","gambaha"],["جَنبَك","gambak"],["جَنبِك","gambek"],["جَنبِنا","gambena"],["جَنبكوا","gamboku"],["جَنبهُم","gambohom"]) },
  { id: "poss-odam", pt: "Em frente (قُدام)", ar: "قُدام", src: S2(17), forms: F(["قُدامي","odamy"],["قُدامه","odamo"],["قُدامها","odamha"],["قُدامَك","odamak"],["قُدامِك","odamek"],["قُدامنا","odamna"],["قُدامكوا","odamku"],["قُدامهُم","odamhom"]) },
  { id: "poss-bi", pt: "Preposição بـ + pronome (ligar para…)", ar: "بـ", src: S2(22), forms: F(["بيا","beya"],["بِيه","bih"],["بِيها","biha"],["بِيك","bik"],["بِيكي","biky"],["بِينا","bina"],["بِيكوا","biku"],["بِيهُم","bihom"]) },
  { id: "poss-bei7eb-objeto", pt: "Ele ama … (هو بيحِب + pronome-objeto)", ar: "هو بيحِب", src: S2(17), forms: F(["هو بيحِبني","howa bei7ebeny"],["هو بيحِبه","howa bei7ebo"],["هو بيحِبها","howa bei7ebaha"],["هو بيحِبَك","howa bei7ebak"],["هو بيحِبِك","howa bei7ebek"],["هو بيحِبِنا","howa bei7ebena"],["هو بيحِبكوا","howa bei7eboku"],["هو بيحِبهُم","howa bei7ebohom"]) },
];

const V = (cat, catLabel, slug, pt, ar, arabizi) => ({ id: `voc-${cat}-${slug}`, cat, catLabel, pt, ar, arabizi });
const vocab = [
  V("outros","Outros","ektema3","reunião","إجتِماع","ektema3"),
  V("outros","Outros","mohem","importante (m / f / pl)","مُهِم / مُهِمة / مُهِمين","mohem / mohema / mohemin"),
  V("outros","Outros","3adatan","normalmente","عادةً","3adatan"),
  V("outros","Outros","karar","decidiu","قَرَر","karar"),
  V("outros","Outros","seua2a","dirigir (a direção)","سِواقة","seua2a"),
  V("outros","Outros","beista8el","aproveita (ele aproveita)","بيستغِل","beista8el"),
  V("outros","Outros","forsa","oportunidade","فُرصة","forsa"),
  V("outros","Outros","7essas","aulas (as sessões)","حِصَص","7essas"),
  V("outros","Outros","ro5sa","carteira de motorista","رُخصة","ro5sa"),
  V("outros","Outros","mashakel","problemas","مَشاكِل","mashakel"),
  V("outros","Outros","kal-3ada","como sempre (como de costume)","كالعادة","kal 3ada"),
  V("outros","Outros","ana-bagi","eu venho","أنا بَجي","ana bagi"),
  V("outros","Outros","tafassil","detalhes","تَفاصِيل","tafassil"),
  V("outros","Outros","shonat","malas","شُنَط","shonat"),
  V("outros","Outros","shater","bom / competente","شاطِر","shater"),
  V("outros","Outros","a7ya2","matéria: biologia","أحياء","a7ya2"),
  V("outros","Outros","go8rafya","matéria: geografia","جُغرافيا","go8rafya"),
  V("outros","Outros","tari5","matéria: história","تاريخ","tari5"),
  V("sentimentos","Sentimentos","mota7ames","animado (m / f / pl)","مُتحَمِس / مُتحَمِسة / مُتحَمِسين","mota7ames / mota7amesa / mota7amesin"),
  V("sentimentos","Sentimentos","mesta3gel","com pressa (m / f / pl)","مِستعجِل / مِستعجِلة / مِستعجلين","mesta3gel / mesta3gela / mesta3gelin"),
  V("lugares","Lugares","7eta","lugar (حِتة)","حِتة","7eta"),
  V("saudacoes","Saudações","metef2in","combinado","مِتفِقين","metef2in"),
  V("saudacoes","Saudações","ashufek-kaman-shewia","até daqui a pouco (f)","أشوفِك كمان شوية","ashufek kaman shewia"),
  V("saudacoes","Saudações","eh-el-a5bar","quais as novidades?","إيه الأخبار؟","eh el a5bar?"),
  V("saudacoes","Saudações","sanya-wa7da","um segundo (só um instante)","ثانية واحدة","sanya wa7da"),
];

const E = (pt, ar, arabizi, src) => ({ pt, ar, arabizi, src });
const escrita = [
  E("Eu não gosto de comer queijo.","أنا مابحبش آكل جِبنة.","Ana maba7ebsh akol gebna.",S2(8)),
  E("Eu não jogo muito no computador.","أنا مابلعبش على الكمبيوتر كِتير.","Ana mabal3absh 3ala el computer ktir.",S2(8)),
  E("Ele não dorme cedo.","هو مابينامش بدري.","Howa mabeinamsh badry.",S2(8)),
  E("Nós não sabemos falar árabe.","إحنا مابنعرفش نتكلم عربي.","E7na mabene3rafsh netkalem 3araby.",S2(8)),
  E("Ela está com vontade de comer shawerma.","هي نِفسها تاكل شاورما.","Heya nefsaha takol shawerma.",S2(14)),
  E("Eu estou com vontade de pizza.","أنا نِفسي في بيتزا.","Ana nefsi fi pizza.",S2(14)),
  E("Ele está com vontade de café.","هو نِفسه في قهوة.","Howa nefso fi ahua.",S2(14)),
  E("Faz uma hora que ele está falando no telefone com Ali.","بقاله ساعة بيتكلم في التليفون مع علي.","Ba2alo sa3a bietkalem fe el telefon ma3a Ali.",S2(17)),
  E("Faz uma semana que eu não vejo Samir.","بقالي أسبوع مابشوفش سمير.","Ba2aly asbu3 mabashofsh Samir.",S2(18)),
  E("Faz muito tempo que eu moro aqui.","بقالي كتير ساكِن هنا.","Ba2aly ketir saken hena.",S2(18)),
];

const I = (pt, ar, arabizi) => ({ pt, ar, arabizi });
const leitura = [
  { id: "lei-38-ehab-apresenta-a-familia-apostila2", title: "Leitura · Ehab apresenta a família (Apostila 2 p.7)", src: S2(7), items: [
    I("Hoje eu quero mostrar a vocês a minha família.","النهاردة أنا عايز أوريكوا أُسرتي.","Enaharda ana 3aeiz auariku osrety."),
    I("A minha família é pequena, e nós vivemos juntos na mesma casa.","أُسرتي صُغَيَّرة، وإحنا عايشين مع بعض في نفس البيت.","Osrety so8ayara, e7na 3ayshin ma3a ba3d fi nafs el beit."),
    I("Meu nome é Ehab e eu tenho uma irmã mais velha que se chama Manal e outra irmã pequena que se chama Ebtessam.","أنا اسمي إيهاب وعندي أخت كبيرة اسمها منال وأخت تانية صُغَيَّرة اسمها ابتسام.","Ana esmy Ehab we 3andy o5t kebira esmaha Manal we o5t tanya so8ayara esmaha Ebtessam."),
    I("Meu pai se chama Samy e minha mãe se chama Radwa.","بابايا اسمه سامي ومامتي اسمها رَضوى.","Babaya esmo Samy we mamty esmaha Radua."),
    I("Meu pai é contador e minha mãe é professora.","بابايا مُحاسِب ومامتي مُدَرِسة.","Babaya mo7asseb we mamty modaressa."),
    I("Na nossa família há muitos professores, porque a minha tia Salwa também trabalha como professora e o meu tio Amir também é professor.","عيلتنا فيها مُدَرِسين كتير، لأن عمتي سلوى كمان بتشتغل مُدَرِسة وخالي أمير برضه مُدَرِس.","3eletna fiha modaressin ktir, la2en 3amety Salua kaman beteshta8al modaressa we 5aly Amir bardo modares."),
    I("A minha mãe é professora de biologia, a minha tia é professora de geografia e o meu tio é professor de história.","مامتي مُدَرِسة أحياء وعمتي مُدَرِسة جُغرافيا وخالي مُدَرِس تاريخ.","Mamty modaresset a7ya2 we 3amety modaresset go8rafia we 5aly modares tari5."),
    I("Eu e as minhas irmãs ainda somos estudantes na escola.","أنا وإخواتي البنات لِسا طُلاب في المدرسة.","Ana we e5uaty el banat lessa tolab fe el madrassa."),
    I("Nós vamos para a mesma escola com os filhos do meu tio.","إحنا بنروح نفس المدرسة مع أولاد عمي.","E7na benru7 nafs el madrassa ma3a aulad 3amy."),
    I("Porque a escola é perto da nossa casa e da casa deles.","لأن المدرسة قريبة من بيتنا ومن بيتهم.","La2en el madrassa orayeba men beitna we beithom."),
    I("Nós e eles moramos no mesmo bairro.","إحنا وهما ساكنين في نفس الحي.","E7na we homa saknin fi nafs el 7ay."),
  ]},
  { id: "lei-39-ramy-quer-aprender-a-dirigir-apostila2", title: "Leitura · Ramy quer aprender a dirigir (Apostila 2 p.11)", src: S2(11), items: [
    I("Ramy tem uma reunião importante no trabalho hoje e precisa chegar cedo à empresa.","رامي عنده إجتِماع مُهِم في الشغل النهاردة ولازم يوصل الشركة بدري.","Ramy 3ando ektema3 mohem fe el sho8l enaharda we lazem yaussal el sherka badry."),
    I("Normalmente Ramy pega o ônibus para ir ao trabalho, mas hoje ele está com pressa, então decidiu pegar um táxi.","رامي عادةً بياخد الأتوبيس عشان يروح الشغل، بس النهاردة هو مِستعجِل فقرر ياخد تاكسي.","Ramy 3adatan bia5od el otobis 3ashan yeru7 el sho8l, bas enaharda howa mesta3gel fa karar ya5od taxi."),
    I("Ramy não tem carro porque não sabe dirigir.","رامي ماعندوش عربية لأنه مِش بيعرف يسوق.","Ramy ma3andush 3arabeya la2no mesh bei3raf yessu2."),
    I("Ele quer aprender a dirigir, mas não tem muito tempo livre, porque trabalha todos os dias das 8h da manhã às 5h da tarde e volta para casa por volta das 7h da noite.","هو عايز يتعلم السواقة بس هو ماعندوش وقت فاضي كتير، وده لأنه بيشتغل كل يوم من الساعة 8 الصبح للساعة 5 بعد الضهر وبيرجع البيت على الساعة 7 بالليل.","Howa 3aeiz yet3alem el seua2a, bas howa ma3andush wa2t fady ktir we da la2eno beishta8al men el sa3a 8 el sop7 lel sa3a 5 ba3d el dohr kol youm we beirga3 el beit 3ala el sa3a 7 beilel."),
    I("Ele vai tirar férias em julho que vem e está pensando em aproveitar a oportunidade para ir a uma autoescola aprender, porque vai ter muito tempo livre nas férias.","هو هياخد أجازة في شهر يوليو الجاي وبيفكر يستغِل الفُرصة ويروح مدرسة سواقة عشان يتعلم، لأنه هيكون عنده وقت فاضي كتير في الأجازة.","Howa haya5od agaza fi shahr yolyo el gai we beifakar yesta8el el forsa we yeru7 madraset seua2a 3ashan yet3alem, la2eno haykun 3ando wa2t fady ktir fe el agaza."),
    I("Ele está muito animado e quer comprar um carro assim que terminar as aulas e tirar a carteira.","هو مُتحَمِس اوي وعايز يشتري عربية أول ما يخلص الحِصَص وياخد الرُخصة.","Howa mota7ames awi we 3aeiz yeshtery 3arabeya awel ma ye5ales el 7essas we ya5od el ro5sa."),
  ]},
  { id: "lei-40-amir-e-samy-viagem-hurghada-apostila2", title: "Diálogo · Amir e Samy vão para Hurghada (Apostila 2 pp.15-16)", src: S2("15-16"), items: [
    I("Amir: Olá, Samy, tudo bem? Como você está?","أمير: أهلاً يا سامي، عامل إيه؟ إزيك؟","Amir: Ahlan ya Samy, 3amel eh? Ezayak?"),
    I("Samy: Tudo bem, graças a Deus. E você, quais as novidades?","سامي: تمام الحمد لله، وانت إيه الأخبار؟","Samy: Tmam el 7amdlelah, we enta eh el a5bar?"),
    I("Amir: Tudo certo. Só estou um pouco chateado.","أمير: كله تمام. بس زهقان شوية.","Amir: Kolo tmam, bas zah2an shewia."),
    I("Samy: Mas por quê?","سامي: ليه بس؟","Samy: Leh bas?"),
    I("Amir: Alguns problemas no trabalho, como sempre.","أمير: شوية مشاكِل في الشغل كالعادة.","Amir: Shewayet mashakel fe el sho8l kal 3ada."),
    I("Samy: Eu vou para Hurghada com Samir e Fahmy na quinta-feira; vamos ficar lá de quinta a sábado. Quer vir com a gente?","سامي: أنا هروح الغردقة مع سمير وفهمي يوم الخميس، هنقعد هناك من الخميس للسبت. تحب تيجي معانا؟","Samy: Ana haru7 el gharda2a ma3a Samir we Fahmy youm el 5amis, hano3od henak men el 5amis lel sapt. Te7eb tegy ma3ana?"),
    I("Amir: Sim, claro. Adoraria ir com vocês. Você sabe que eu não gosto de viajar para lugar nenhum sozinho.","أمير: آه، طبعاً. أحب أجي معاكوا. انت عارف مابحبش أسافر حِتة لوحدي.","Amir: Ah, tab3an. A7eb agy ma3aku. Enta 3aref maba7ebsh assafer 7eta leua7dy."),
    I("Samy: Ótimo. Prepara as malas, e eu te ligo depois para te contar os detalhes.","سامي: تمام اوي. جَهِز الشُنَط وهتِصِل بيك بعدين عشان أقولك التفاصيل.","Samy: Tmam awi. Gahez el shonat we hatessel bik ba3dein 3ashan a2ulak el tafassil."),
  ]},
  { id: "lei-41-amira-e-zeinab-ir-ao-medico-apostila2", title: "Diálogo · Amira e Zeinab vão ao médico (Apostila 2 pp.19-20)", src: S2("19-20"), items: [
    I("Amira: Como você está, Zeinab? Tudo bem? Faz muito tempo que você não vai à faculdade, você está bem?","أميرة: إزيك يا زينب؟ عاملة إيه؟ بقالِك كتير مِش بتروحي الكلية، انتي كويسة؟","Amira: Ezayek ya Zeinab? 3amla eh? Ba2alek ktir mesh betru7y el koleya, enty kouayessa?"),
    I("Zeinab: Estou um pouco doente há alguns dias e preciso ir ao médico.","زينب: أنا تعبانة شوية بقالي كام يوم ومِحتاجة أروح الدكتور.","Zeinab: Ana ta3bana shewia ba2aly kam youm we mei7taga aru7 el doctor."),
    I("Amira: Se não tiver ninguém para ir com você, eu posso ir com você.","أميرة: لو مافيش حد يروح معاكي، أنا مُمكِن أروح معاكي.","Amira: Lau mafish 7ad yeru7 ma3aky, ana momken aru7 ma3aky."),
    I("Zeinab: Muito obrigada, Amira. Você está sempre ao meu lado e me ajuda em muitas coisas.","زينب: مِتشكرة اوي يا أميرة. انتي دايماً جنبي وبتساعديني في حاجات كتير.","Zeinab: Motashakera awi ya Amira. Enty dayman gamby we betsa3dini fi 7agat ktir."),
    I("Amira: Quer que a gente vá ao médico hoje? Eu conheço um médico muito bom e a clínica é perto daqui.","أميرة: تحبي نروح الدكتور النهاردة؟ أنا أعرف دكتور شاطِر اوي والعيادة قريبة من هنا.","Amira: Te7eby neru7 el doctor enaharda? Ana a3raf doctor shater awi we el 3eyada orayeba men hena."),
    I("Zeinab: Combinado, hoje ao meio-dia está bom.","زينب: تمام، النهاردة الضهر كويس.","Zeinab: Tmam, enaharda el dohr kouayes."),
    I("Amira: Combinado, tchau. Até daqui a pouco.","أميرة: مِتفِقين، سلام. أشوفِك كمان شوية.","Amira: Metef2in, salam. Ashufek kaman shewia."),
  ]},
  { id: "lei-42-ali-liga-para-ramy-apostila2", title: "Diálogo · Ali liga para Ramy (Apostila 2 p.24)", src: S2(24), items: [
    I("Ali: Alô! Como vai, Ramy? Quais as novidades?","علي: ألو! إزيك يا رامي؟ إيه الأخبار؟","Ali: Alô! Ezayak ya Ramy? Eh el a5bar?"),
    I("Ramy: Estou bem, graças a Deus.","رامي: أنا تمام، الحمد لله.","Ramy: Ana tmam, el 7amdlelah."),
    I("Ali: Você pode me ajudar? Você tem o número do Amir?","علي: مُمكِن تساعدني؟ معاك رقم أمير؟","Ali: Momken tesa3edny? Ma3ak rakam Amir?"),
    I("Ramy: Sim, tenho.","رامي: آه، معايا.","Ramy: Ah, ma3aya."),
    I("Ali: Você pode me mandar o número? Preciso ligar para ele e não estou achando o número dele!","علي: مُمكِن تبعتلي الرقم؟ أنا مِحتاج أتِصِل بيه ومِش لاقي رقمه!","Ali: Momken teb3atly el rakam? Ana mei7tag atessel bih we mesh la2y rakamo!"),
    I("Ramy: Claro, um segundo, vou ver no celular.","رامي: أكيد، ثانية واحدة، هشوف على الموبايل.","Ramy: Akid, sanya wa7da, hashuf 3ala el mobile."),
    I("Ali: Ok, muito obrigado.","علي: تمام، شكراً اوي.","Ali: Tmam, shukran awi."),
    I("Ramy: Posso te ajudar em mais alguma coisa?","رامي: أساعدك في حاجة تانية؟","Ramy: Assa3dak fi 7aga tanya?"),
    I("Ali: Você também pode me dizer qual é o endereço da casa nova do Amir?","علي: مُمكِن كمان تقولي عِنوان بيت أمير الجديد إيه؟","Ali: Momken kaman te2uly 3enuan beit Amir el gedid?"),
    I("Ramy: Rua Al-Salam, 15, Heliópolis (Masr El Gedida).","رامي: 15 شارع السلام، مصر الجديدة.","Ramy: 15 share3 el salam, masr el gedida."),
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
B.baseadoEm = "Aulas até 93 (2026-11-06) · Apostila nível básico · Apostila 2 pp.1-24 · cards do site";
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
    .map(it => `\n        {pt:${JSON.stringify(it.pt + " — Apostila 2")}, ar:${JSON.stringify(it.ar)}, arabizi:${JSON.stringify(it.arabizi)}},`).join("");
  if (add) { h = h.slice(0, at) + add + h.slice(at); log.push(`card ${cat}: +${add.split("\n").length - 1}`); }
}
fs.writeFileSync(P("card-vocabulario.html"), h);
console.log(log.join("\n"));
