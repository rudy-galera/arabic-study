// Aula 94 — the teacher's model answers to Rudy's conversation questions (Arabic from the docx;
// arabizi + Portuguese written by Claude to match corpus spellings — flagged to Rudy 2026-11-11).
const fs = require('fs'), path = require('path');
const DIR = process.argv[2] || path.join(__dirname, '..');
const f = path.join(DIR, 'bank.js');
let s = fs.readFileSync(f, 'utf8');
const i0 = s.indexOf('{', s.indexOf('const BANK'));
const B = JSON.parse(s.slice(i0, s.lastIndexOf('};') + 1));
const I = (pt, ar, arabizi) => ({ pt, ar, arabizi });
const lei = { id: 'lei-44-respostas-sobre-mim-aula-94', title: 'Conversa · respostas sobre mim — leitura, aniversário, amigos, trabalho (Aula 94)', src: '2026-11-11 (Aula 94 · arabizi e tradução escritos pelo Claude)', items: [
  I('Você gosta de ler? Sobre o quê?', 'بِتحِب تِقرا؟ عَن ايه؟', 'Bet7eb te2ra? 3an eh?'),
  I('Sim, eu gosto de ler livros sobre negócios, crime e filosofia.', 'ايوة، أنا بحب أقرا كُتُب عن البيزنس والجريمة والفَلسَفة.', 'Aywa, ana ba7eb a2ra kotob 3an el business we elgarima we elfalsafa.'),
  I('Quem é o seu escritor favorito?', 'مين الكاتب المُفَضَل؟', 'Min elkateb elmofadal?'),
  I('Eu não tenho escritor favorito, eu leio qualquer livro.', 'أنا ماعنديش كاتب مفضل، أنا بقرا أي كُتُب.', 'Ana ma3andish kateb mofadal, ana ba2ra ay kotob.'),
  I('Quais são os seus livros favoritos?', 'ايه كتبك المفضلة؟', 'Eh kotobak elmofadala?'),
  I('Naguib Mahfouz.', 'نجيب محفوظ.', 'Naguib Mahfouz.'),
  I('Quando você lê?', 'انت بتقرا امتى؟', 'Enta bete2ra emta?'),
  I('Antes de dormir ou de manhã, depois do café da manhã.', 'قَبل ما أنام أو الصُبح بعد الفِطار.', '2abl ma anam aw elsop7 ba3d elfetar.'),
  I('O que você vai fazer no seu aniversário?', 'هَتعمِل ايه في عيد ميلادَك؟', 'Hate3mel eh fe 3id miladak?'),
  I('Vou jantar com a minha esposa e vou a uma festa com os meus amigos.', 'هَتعَشى مَعَ مراتي وهَروح حَفلة مَعَ أصحابي.', 'Hat3asha ma3a merati we haru7 7afla ma3a as7aby.'),
  I('Não vou fazer nada diferente. Normal.', 'أنا مِش هَعمِل حاجة مُختلفة. عادي.', 'Ana mesh ha3mel 7aga mo5talefa. 3ady.'),
  I('Quando é o seu aniversário?', 'عيد ميلادَك امتى؟', '3id miladak emta?'),
  I('O meu aniversário é no dia 4 de janeiro (quatro do um).', 'عيد ميلادي يوم 4 يناير. (أربعة واحِد)', '3id miladi yom 4 yanayer. (arba3a wa7ed)'),
  I('Quem é o seu amigo mais próximo? Por quê?', 'مين أقرب صاحِب ليك؟ ليه؟', 'Min a2rab sa7eb lik? Leh?'),
  I('Depois dos quarenta anos, eu já não tenho um amigo próximo. Porque é difícil.', 'بعد سن (أربعين سنة) ماعنديش صاحب قُريب خَلاص. عشان صَعب.', 'Ba3d sen (arb3in sana) ma3andish sa7eb orayeb 5alas. 3ashan sa3b.'),
  I('Há quanto tempo você trabalha? Gosta do seu trabalho? Por quê?', 'بقالَك قد ايه بتشتغل؟ بتحب شُغلَك؟ ليه؟', 'Ba2alak 2ad eh beteshta8al? Bet7eb sho8lak? Leh?'),
  I('Faz muito tempo que eu trabalho.', 'بَقالي كتير بشتغل.', 'Ba2aly ketir bashta8al.'),
  I('Faz uns vinte anos que eu trabalho.', 'بقالي حوالي عشرين سنة بشتغل.', 'Ba2aly 7awaly 3eshrin sana bashta8al.'),
  I('Sim, eu gosto do meu trabalho, graças a Deus, porque trabalho de casa todos os dias e aprendo coisas novas em marketing digital.', 'ايوة أنا بحب شغلي الحمد لله عشان بشتغل مِن البيت كل يوم وبتعلم حاجات جديدة في الديجيتال ماركتينج.', 'Aywa, ana ba7eb sho8ly el 7amdlelah 3ashan bashta8al men elbeit kol yom we bat3alem 7agat gedida fe eldigital marketing.'),
  I('Você gosta dos seus colegas?', 'بتحِب زَمايلَك؟', 'Bet7eb zamaylak?'),
  I('Sim, eu tenho uma colega próxima de mim que se chama Seresh; ela é do Paquistão, mas mora em Londres.', 'ايوة، أنا عَندي واحدة زميلتي قريبة مني اسمها سيريش، هي مِن باكستان بس هي ساكنة في لَندَن.', 'Aywa, ana 3andy wa7da zamilty orayeba meny esmaha Seresh, heya men Pakistan bas heya sakna fe London.'),
]};
if (!B.leitura.some(l => l.id === lei.id)) { B.leitura.push(lei); console.log('+ leitura', lei.id, lei.items.length, 'frases'); } else console.log('already present');
fs.writeFileSync(f, s.slice(0, i0) + JSON.stringify(B, null, 1) + ';\n');
