// ─────────────────────────────────────────────────────────────────────
// bank.js — banco de questões do Treino Diário (v2)
// Gerado a partir de fontes atestadas: card-verbos, card-vocabulario,
// card-pessoas, card-alfabeto + leituras/frases das lições verificadas.
// NUNCA inventar árabe: toda entrada nova deve vir de aula/apostila.
// Atualizado pelo skill /arabic-class-update.
// ─────────────────────────────────────────────────────────────────────
const BANK = {
 "version": "2026-11-11",
 "baseadoEm": "Aulas até 94 (2026-11-11) · Apostila nível básico · Apostila 2 pp.1-28 · cards do site",
 "numeros": [
  {
   "id": "num-sefr",
   "pt": "zero",
   "ar": "صِفر",
   "arabizi": "sefr",
   "num": "٠ / 0"
  },
  {
   "id": "num-wa7ed",
   "pt": "um",
   "ar": "واحِد",
   "arabizi": "wa7ed",
   "num": "١ / 1"
  },
  {
   "id": "num-etnein",
   "pt": "dois",
   "ar": "اِتنين",
   "arabizi": "etnein",
   "num": "٢ / 2"
  },
  {
   "id": "num-talata",
   "pt": "três",
   "ar": "تَلاتة",
   "arabizi": "talata",
   "num": "٣ / 3"
  },
  {
   "id": "num-arba3a",
   "pt": "quatro",
   "ar": "أَربَعة",
   "arabizi": "arba3a",
   "num": "٤ / 4"
  },
  {
   "id": "num-5amsa",
   "pt": "cinco",
   "ar": "خَمسة",
   "arabizi": "5amsa",
   "num": "٥ / 5"
  },
  {
   "id": "num-setta",
   "pt": "seis",
   "ar": "سِتّة",
   "arabizi": "setta",
   "num": "٦ / 6"
  },
  {
   "id": "num-sab3a",
   "pt": "sete",
   "ar": "سَبعة",
   "arabizi": "sab3a",
   "num": "٧ / 7"
  },
  {
   "id": "num-tamanya",
   "pt": "oito",
   "ar": "تَمانية",
   "arabizi": "tamanya",
   "num": "٨ / 8"
  },
  {
   "id": "num-tes3a",
   "pt": "nove",
   "ar": "تِسعة",
   "arabizi": "tes3a",
   "num": "٩ / 9"
  },
  {
   "id": "num-3ashara",
   "pt": "dez",
   "ar": "عَشَرة",
   "arabizi": "3ashara",
   "num": "١٠ / 10"
  },
  {
   "id": "num-7edashar",
   "pt": "onze",
   "ar": "حِداشَر",
   "arabizi": "7edashar",
   "num": "١١ / 11"
  },
  {
   "id": "num-etnashar",
   "pt": "doze",
   "ar": "اتناشَر",
   "arabizi": "etnashar",
   "num": "١٢ / 12"
  },
  {
   "id": "num-talattashar",
   "pt": "treze",
   "ar": "تَلَتاشَر",
   "arabizi": "talattashar",
   "num": "١٣ / 13"
  },
  {
   "id": "num-arba3tashar",
   "pt": "quatorze",
   "ar": "أربَعتاشَر",
   "arabizi": "arba3tashar",
   "num": "١٤ / 14"
  },
  {
   "id": "num-5amastashar",
   "pt": "quinze",
   "ar": "خَمَستاشَر",
   "arabizi": "5amastashar",
   "num": "١٥ / 15"
  },
  {
   "id": "num-settashar",
   "pt": "dezesseis",
   "ar": "سِتاشَر",
   "arabizi": "settashar",
   "num": "١٦ / 16"
  },
  {
   "id": "num-saba3tashar",
   "pt": "dezessete",
   "ar": "سَبَعتاشَر",
   "arabizi": "saba3tashar",
   "num": "١٧ / 17"
  },
  {
   "id": "num-tamantashar",
   "pt": "dezoito",
   "ar": "تَمَنتاشَر",
   "arabizi": "tamantashar",
   "num": "١٨ / 18"
  },
  {
   "id": "num-tesa3tashar",
   "pt": "dezenove",
   "ar": "تِسَعتاشَر",
   "arabizi": "tesa3tashar",
   "num": "١٩ / 19"
  },
  {
   "id": "num-3eshrin",
   "pt": "vinte",
   "ar": "عِشرين",
   "arabizi": "3eshrin",
   "num": "٢٠ / 20"
  },
  {
   "id": "num-3eshrin-2",
   "pt": "vinte",
   "ar": "عِشرين",
   "arabizi": "3eshrin",
   "num": "٢٠ / 20"
  },
  {
   "id": "num-talatin",
   "pt": "trinta",
   "ar": "تَلاتين",
   "arabizi": "talatin",
   "num": "٣٠ / 30"
  },
  {
   "id": "num-arba3in",
   "pt": "quarenta",
   "ar": "أَربَعين",
   "arabizi": "arba3in",
   "num": "٤٠ / 40"
  },
  {
   "id": "num-5amsin",
   "pt": "cinquenta",
   "ar": "خَمسين",
   "arabizi": "5amsin",
   "num": "٥٠ / 50"
  },
  {
   "id": "num-settin",
   "pt": "sessenta",
   "ar": "سِتّين",
   "arabizi": "settin",
   "num": "٦٠ / 60"
  },
  {
   "id": "num-sab3in",
   "pt": "setenta",
   "ar": "سَبعين",
   "arabizi": "sab3in",
   "num": "٧٠ / 70"
  },
  {
   "id": "num-tamanin",
   "pt": "oitenta",
   "ar": "تَمانين",
   "arabizi": "tamanin",
   "num": "٨٠ / 80"
  },
  {
   "id": "num-tes3in",
   "pt": "noventa",
   "ar": "تِسعين",
   "arabizi": "tes3in",
   "num": "٩٠ / 90"
  },
  {
   "id": "num-meya",
   "pt": "cem",
   "ar": "مية",
   "arabizi": "meya",
   "num": "١٠٠ / 100"
  },
  {
   "id": "num-wa7ed-we-3eshrin",
   "pt": "vinte e um",
   "ar": "وَاحِد وعِشرين",
   "arabizi": "wa7ed we 3eshrin",
   "num": "٢١ / 21 (padrão: número + we + dezena)"
  },
  {
   "id": "num-etnein-we-talatin",
   "pt": "trinta e dois",
   "ar": "اِتنين وتَلاتين",
   "arabizi": "etnein we talatin",
   "num": "٣٢ / 32"
  },
  {
   "id": "num-5amsa-we-arba3in",
   "pt": "quarenta e cinco",
   "ar": "خَمسة وأَربَعين",
   "arabizi": "5amsa we arba3in",
   "num": "٤٥ / 45"
  }
 ],
 "dias": [
  {
   "id": "dia-youm-el-sabt",
   "pt": "sábado",
   "ar": "يوم السَبت",
   "arabizi": "youm el-sabt"
  },
  {
   "id": "dia-youm-el-7ad",
   "pt": "domingo",
   "ar": "يوم الحَد",
   "arabizi": "youm el-7ad"
  },
  {
   "id": "dia-youm-el-etnein",
   "pt": "segunda-feira",
   "ar": "يوم الاتنين",
   "arabizi": "youm el-etnein"
  },
  {
   "id": "dia-youm-el-talat",
   "pt": "terça-feira",
   "ar": "يوم التَلات",
   "arabizi": "youm el-talat"
  },
  {
   "id": "dia-youm-el-arba3",
   "pt": "quarta-feira",
   "ar": "يوم الأَربَع",
   "arabizi": "youm el-arba3"
  },
  {
   "id": "dia-youm-el-5amis",
   "pt": "quinta-feira",
   "ar": "يوم الخَميس",
   "arabizi": "youm el-5amis"
  },
  {
   "id": "dia-youm-el-gom3a",
   "pt": "sexta-feira",
   "ar": "يوم الجُمعة",
   "arabizi": "youm el-gom3a"
  },
  {
   "id": "dia-enaharda",
   "pt": "hoje",
   "ar": "النَهاردة",
   "arabizi": "enaharda"
  },
  {
   "id": "dia-bokra",
   "pt": "amanhã",
   "ar": "بُكرة",
   "arabizi": "bokra"
  },
  {
   "id": "dia-embare7",
   "pt": "ontem",
   "ar": "اِمبارِح",
   "arabizi": "embare7"
  },
  {
   "id": "dia-el-week-end",
   "pt": "o fim de semana",
   "ar": "الويك اند",
   "arabizi": "el-week-end"
  },
  {
   "id": "dia-kol-youm",
   "pt": "todo dia",
   "ar": "كُل يوم",
   "arabizi": "kol youm"
  },
  {
   "id": "dia-auel-embare7",
   "pt": "anteontem",
   "ar": "أوِل امبارِح",
   "arabizi": "auel embare7"
  }
 ],
 "profissoes": [
  {
   "id": "prof-taleb",
   "pt": "Estudante",
   "arM": "طالِب",
   "aziM": "taleb",
   "arF": "طالِبة",
   "aziF": "taleba"
  },
  {
   "id": "prof-modares",
   "pt": "Professor(a)",
   "arM": "مُدَرِس",
   "aziM": "modares",
   "arF": "مُدَرِسة",
   "aziF": "modaressa"
  },
  {
   "id": "prof-doctor",
   "pt": "Médico(a)",
   "arM": "دُكتور",
   "aziM": "doctor",
   "arF": "دُكتورة",
   "aziF": "doctora"
  },
  {
   "id": "prof-momared",
   "pt": "Enfermeiro(a)",
   "arM": "مُمَرِض",
   "aziM": "momared",
   "arF": "مُمَرِضة",
   "aziF": "momareda"
  },
  {
   "id": "prof-mohandes",
   "pt": "Engenheiro(a)",
   "arM": "مُهَندِس",
   "aziM": "mohandes",
   "arF": "مُهَندِسة",
   "aziF": "mohandessa"
  },
  {
   "id": "prof-momassel",
   "pt": "Ator / Atriz",
   "arM": "مُمَثِل",
   "aziM": "momassel",
   "arF": "مُمَثِلة",
   "aziF": "momassela"
  },
  {
   "id": "prof-mo8any",
   "pt": "Cantor(a)",
   "arM": "مُغَني",
   "aziM": "mo8any",
   "arF": "مُغَنية",
   "aziF": "mo8aneya"
  },
  {
   "id": "prof-muazaf",
   "pt": "Funcionário(a)",
   "arM": "مُوَظَف",
   "aziM": "muazaf",
   "arF": "مُوَظَفة",
   "aziF": "muazafa"
  },
  {
   "id": "prof-na22ash",
   "pt": "Pintor(a) de parede",
   "arM": "نَقّاش",
   "aziM": "na22ash",
   "arF": "نَقّاشة",
   "aziF": "na22asha"
  },
  {
   "id": "prof-mo7amy",
   "pt": "Advogado(a)",
   "arM": "مُحامي",
   "aziM": "mo7amy",
   "arF": "مُحامية",
   "aziF": "mo7ameya"
  },
  {
   "id": "prof-sa7afy",
   "pt": "Jornalista",
   "arM": "صَحَفي",
   "aziM": "sa7afy",
   "arF": "صَحَفية",
   "aziF": "sa7afeya"
  },
  {
   "id": "prof-modir",
   "pt": "Gerente",
   "arM": "مُدير",
   "aziM": "modir",
   "arF": "مُديرة",
   "aziF": "modira"
  },
  {
   "id": "prof-kateb",
   "pt": "Escritor(a)",
   "arM": "كاتِب",
   "aziM": "kateb",
   "arF": "كاتِبة",
   "aziF": "kateba"
  },
  {
   "id": "prof-rassam",
   "pt": "Pintor(a) / artista",
   "arM": "رَسّام",
   "aziM": "rassam",
   "arF": "رَسّامة",
   "aziF": "rassama"
  },
  {
   "id": "prof-taba5",
   "pt": "Cozinheiro(a)",
   "arM": "طَبّاخ",
   "aziM": "taba5",
   "arF": "طَبّاخة",
   "aziF": "taba5a"
  },
  {
   "id": "prof-saydaly",
   "pt": "Farmacêutico(a)",
   "arM": "صَيدَلي",
   "aziM": "saydaly",
   "arF": "صَيدَلانية",
   "aziF": "saydalaneya"
  },
  {
   "id": "prof-mo7asseb",
   "pt": "Contador(a)",
   "arM": "مُحاسِب",
   "aziM": "mo7asseb",
   "arF": "مُحاسبة",
   "aziF": "mo7asba"
  },
  {
   "id": "prof-sekerter",
   "pt": "Secretário(a)",
   "arM": "سِكِرتير",
   "aziM": "sekerter",
   "arF": "سِكِرتيرة",
   "aziF": "sekertera"
  },
  {
   "id": "prof-garson",
   "pt": "Garçom / Garçonete",
   "arM": "جَرسون",
   "aziM": "garson",
   "arF": "جَرسونة",
   "aziF": "garsona"
  },
  {
   "id": "prof-baya3",
   "pt": "Vendedor(a)",
   "arM": "بَيّاع",
   "aziM": "baya3",
   "arF": "بَيّاعة",
   "aziF": "baya3a"
  },
  {
   "id": "prof-set-bet",
   "pt": "Dona de casa",
   "arM": "—",
   "aziM": "—",
   "arF": "سِت بيت",
   "aziF": "set bet"
  },
  {
   "id": "prof-mobarmeg",
   "pt": "Programador(a)",
   "arM": "مُبَرمِج",
   "aziM": "mobarmeg",
   "arF": "—",
   "aziF": "—"
  }
 ],
 "verbos": [
  {
   "id": "verbo-3aeiz",
   "pt": "querer",
   "ar": "عايِز",
   "arabizi": "3aeiz",
   "grupo": "auxiliares",
   "conj": {
    "Eu": {
     "ar": "أنا عايِز / عايزة",
     "arabizi": "Ana 3aeiz / 3aeiza"
    },
    "Você (m)": {
     "ar": "انتَ عايِز",
     "arabizi": "Enta 3aeiz"
    },
    "Você (f)": {
     "ar": "انتي عايزة",
     "arabizi": "Enty 3aeiza"
    },
    "Ele": {
     "ar": "هُوَ عايِز",
     "arabizi": "Howa 3aeiz"
    },
    "Ela": {
     "ar": "هِيَ عايزة",
     "arabizi": "Heya 3aeiza"
    },
    "Nós": {
     "ar": "احنا عايزين",
     "arabizi": "E7na 3aizin"
    },
    "Vocês": {
     "ar": "انتوا عايزين",
     "arabizi": "Entu 3aizin"
    },
    "Eles/Elas": {
     "ar": "هُما عايزين",
     "arabizi": "Homa 3aizin"
    }
   }
  },
  {
   "id": "verbo-mei7tag",
   "pt": "precisar",
   "ar": "مِحتاج",
   "arabizi": "mei7tag",
   "grupo": "auxiliares",
   "conj": {
    "Eu": {
     "ar": "أنا مِحتاج / مِحتاجة",
     "arabizi": "Ana mei7tag / mei7taga"
    },
    "Você (m)": {
     "ar": "انتَ مِحتاج",
     "arabizi": "Enta mei7tag"
    },
    "Você (f)": {
     "ar": "انتي مِحتاجة",
     "arabizi": "Enty mei7taga"
    },
    "Ele": {
     "ar": "هُوَ مِحتاج",
     "arabizi": "Howa mei7tag"
    },
    "Ela": {
     "ar": "هِيَ مِحتاجة",
     "arabizi": "Heya mei7taga"
    },
    "Nós": {
     "ar": "احنا مِحتاجين",
     "arabizi": "E7na me7tagin"
    },
    "Vocês": {
     "ar": "انتوا مِحتاجين",
     "arabizi": "Entu me7tagin"
    },
    "Eles/Elas": {
     "ar": "هُما مِحتاجين",
     "arabizi": "Homa me7tagin"
    }
   }
  },
  {
   "id": "verbo-lazem",
   "pt": "ter que / dever",
   "ar": "لازِم",
   "arabizi": "lazem",
   "grupo": "auxiliares",
   "conj": {
    "Eu": {
     "ar": "أنا لازِم",
     "arabizi": "Ana lazem"
    },
    "Você (m)": {
     "ar": "انتَ لازِم",
     "arabizi": "Enta lazem"
    },
    "Você (f)": {
     "ar": "انتي لازِم",
     "arabizi": "Enty lazem"
    },
    "Ele": {
     "ar": "هُوَ لازِم",
     "arabizi": "Howa lazem"
    },
    "Ela": {
     "ar": "هِيَ لازِم",
     "arabizi": "Heya lazem"
    },
    "Nós": {
     "ar": "احنا لازِم",
     "arabizi": "E7na lazem"
    },
    "Vocês": {
     "ar": "انتوا لازِم",
     "arabizi": "Entu lazem"
    },
    "Eles/Elas": {
     "ar": "هُما لازِم",
     "arabizi": "Homa lazem"
    }
   }
  },
  {
   "id": "verbo-bei7eb",
   "pt": "gostar (de)",
   "ar": "بِيحِب",
   "arabizi": "bei7eb",
   "grupo": "auxiliares",
   "conj": {
    "Eu": {
     "ar": "أنا بَحِب",
     "arabizi": "Ana ba7eb"
    },
    "Você (m)": {
     "ar": "انتَ بِتحِب",
     "arabizi": "Enta bet7eb"
    },
    "Você (f)": {
     "ar": "انتي بِتحِبي",
     "arabizi": "Enty bet7eby"
    },
    "Ele": {
     "ar": "هُوَ بِيحِب",
     "arabizi": "Howa bei7eb"
    },
    "Ela": {
     "ar": "هِيَ بِتحِب",
     "arabizi": "Heya bet7eb"
    },
    "Nós": {
     "ar": "احنا بِنحِب",
     "arabizi": "E7na ben7eb"
    },
    "Vocês": {
     "ar": "انتوا بِتحِبوا",
     "arabizi": "Entu bet7ebu"
    },
    "Eles/Elas": {
     "ar": "هُما بِيحِبوا",
     "arabizi": "Homa bei7ebu"
    }
   }
  },
  {
   "id": "verbo-gahez",
   "pt": "preparar",
   "ar": "جَهِز",
   "arabizi": "gahez",
   "grupo": "rotina",
   "conj": {
    "Eu": {
     "ar": "أنا بَجَهِز",
     "arabizi": "Ana bagahez"
    },
    "Você (m)": {
     "ar": "انتَ بِتجَهِز",
     "arabizi": "Enta betgahez"
    },
    "Você (f)": {
     "ar": "انتي بِتجَهِزي",
     "arabizi": "Enty betgahezy"
    },
    "Ele": {
     "ar": "هُوَ بيجَهِز",
     "arabizi": "Howa beigahez"
    },
    "Ela": {
     "ar": "هِيَ بِتجَهِز",
     "arabizi": "Heya betgahez"
    },
    "Nós": {
     "ar": "احنا بِنجَهِز",
     "arabizi": "E7na bengahez"
    },
    "Vocês": {
     "ar": "انتوا بِتجَهِزوا",
     "arabizi": "Entu betgahezu"
    },
    "Eles/Elas": {
     "ar": "هُما بيجَهِزوا",
     "arabizi": "Homa beigahezu"
    }
   }
  },
  {
   "id": "verbo-ebda2",
   "pt": "começar",
   "ar": "اِبدأ",
   "arabizi": "ebda2",
   "grupo": "rotina",
   "conj": {
    "Eu": {
     "ar": "أنا بَبدأ",
     "arabizi": "Ana babda2"
    },
    "Você (m)": {
     "ar": "انتَ بِتِبدأ",
     "arabizi": "Enta betebda2"
    },
    "Você (f)": {
     "ar": "انتي بِتِبدأي",
     "arabizi": "Enty betebda2y"
    },
    "Ele": {
     "ar": "هُوَ بِيبدأ",
     "arabizi": "Howa beibda2"
    },
    "Ela": {
     "ar": "هِيَ بِتِبدأ",
     "arabizi": "Heya betebda2"
    },
    "Nós": {
     "ar": "احنا بِنِبدأ",
     "arabizi": "E7na benebda2"
    },
    "Vocês": {
     "ar": "انتوا بِتِبدأوا",
     "arabizi": "Entu betebda2u"
    },
    "Eles/Elas": {
     "ar": "هُما بِيبدأوا",
     "arabizi": "Homa beibda2u"
    }
   }
  },
  {
   "id": "verbo-5alas",
   "pt": "terminar / acabar",
   "ar": "خَلَص",
   "arabizi": "5alas",
   "grupo": "rotina",
   "conj": {
    "Eu": {
     "ar": "أنا بَخَلَص",
     "arabizi": "Ana ba5alas"
    },
    "Você (m)": {
     "ar": "انتَ بِتخَلَص",
     "arabizi": "Enta bet5alas"
    },
    "Você (f)": {
     "ar": "انتي بِتخَلَصي",
     "arabizi": "Enty bet5alasy"
    },
    "Ele": {
     "ar": "هُوَ بيخَلَص",
     "arabizi": "Howa bei5alas"
    },
    "Ela": {
     "ar": "هِيَ بِتخَلَص",
     "arabizi": "Heya bet5alas"
    },
    "Nós": {
     "ar": "احنا بِنخَلَص",
     "arabizi": "E7na ben5alas"
    },
    "Vocês": {
     "ar": "انتوا بِتخَلَصوا",
     "arabizi": "Entu bet5alasu"
    },
    "Eles/Elas": {
     "ar": "هُما بيخَلَصوا",
     "arabizi": "Homa bei5alasu"
    }
   }
  },
  {
   "id": "verbo-raya7",
   "pt": "descansar",
   "ar": "رَيَح",
   "arabizi": "raya7",
   "grupo": "rotina",
   "conj": {
    "Eu": {
     "ar": "أنا بَريَح",
     "arabizi": "Ana baraya7"
    },
    "Você (m)": {
     "ar": "انتَ بِترَيَح",
     "arabizi": "Enta betraya7"
    },
    "Você (f)": {
     "ar": "انتي بِترَيَحي",
     "arabizi": "Enty betraya7y"
    },
    "Ele": {
     "ar": "هُوَ بيرَيَح",
     "arabizi": "Howa beiraya7"
    },
    "Ela": {
     "ar": "هِيَ بِترَيَح",
     "arabizi": "Heya betraya7"
    },
    "Nós": {
     "ar": "احنا بِنرَيَح",
     "arabizi": "E7na benraya7"
    },
    "Vocês": {
     "ar": "انتوا بِترَيَحوا",
     "arabizi": "Entu betraya7u"
    },
    "Eles/Elas": {
     "ar": "هُما بيرَيَحوا",
     "arabizi": "Homa beiraya7u"
    }
   }
  },
  {
   "id": "verbo-a3ad",
   "pt": "ficar / permanecer / sentar-se",
   "ar": "قَعَد",
   "arabizi": "a3ad",
   "grupo": "rotina",
   "conj": {
    "Eu": {
     "ar": "أنا بَقعُد",
     "arabizi": "Ana ba3od"
    },
    "Você (m)": {
     "ar": "انتَ بِتُقعُد",
     "arabizi": "Enta beto3od"
    },
    "Você (f)": {
     "ar": "انتي بِتُقعُدي",
     "arabizi": "Enty beto3ody"
    },
    "Ele": {
     "ar": "هُوَ بيقُعد",
     "arabizi": "Howa beio3od"
    },
    "Ela": {
     "ar": "هِيَ بِتُقعُد",
     "arabizi": "Heya beto3od"
    },
    "Nós": {
     "ar": "احنا بِنُقعُد",
     "arabizi": "E7na beno3od"
    },
    "Vocês": {
     "ar": "انتوا بِتُقعُدوا",
     "arabizi": "Entu beto3odu"
    },
    "Eles/Elas": {
     "ar": "هُما بيقُعدوا",
     "arabizi": "Homa beio3odu"
    }
   }
  },
  {
   "id": "verbo-rege3",
   "pt": "voltar (de algum lugar)",
   "ar": "رِجِع",
   "arabizi": "rege3",
   "grupo": "rotina",
   "conj": {
    "Eu": {
     "ar": "أنا بَرجَع",
     "arabizi": "Ana barga3"
    },
    "Você (m)": {
     "ar": "انتَ بِتِرجَع",
     "arabizi": "Enta beterga3"
    },
    "Você (f)": {
     "ar": "انتي بِتِرجَعي",
     "arabizi": "Enty beterga3y"
    },
    "Ele": {
     "ar": "هُوَ بيرجَع",
     "arabizi": "Howa beirga3"
    },
    "Ela": {
     "ar": "هِيَ بِتِرجَع",
     "arabizi": "Heya beterga3"
    },
    "Nós": {
     "ar": "احنا بِنِرجَع",
     "arabizi": "E7na benerga3"
    },
    "Vocês": {
     "ar": "انتوا بِتِرجَعوا",
     "arabizi": "Entu beterga3u"
    },
    "Eles/Elas": {
     "ar": "هُما بيرجَعوا",
     "arabizi": "Homa beirga3u"
    }
   }
  },
  {
   "id": "verbo-raua7",
   "pt": "voltar para casa",
   "ar": "رَوَح",
   "arabizi": "raua7",
   "grupo": "rotina",
   "conj": {
    "Eu": {
     "ar": "أنا بَرَوَح",
     "arabizi": "Ana baraua7"
    },
    "Você (m)": {
     "ar": "انتَ بِترَوَح",
     "arabizi": "Enta betraua7"
    },
    "Você (f)": {
     "ar": "انتي بِترَوَحي",
     "arabizi": "Enty betraua7y"
    },
    "Ele": {
     "ar": "هُوَ بيرَوَح",
     "arabizi": "Howa beiraua7"
    },
    "Ela": {
     "ar": "هِيَ بِترَوَح",
     "arabizi": "Heya betraua7"
    },
    "Nós": {
     "ar": "احنا بِنرَوَح",
     "arabizi": "E7na benraua7"
    },
    "Vocês": {
     "ar": "انتوا بِترَوَحوا",
     "arabizi": "Entu betraua7u"
    },
    "Eles/Elas": {
     "ar": "هُما بيرَوَحوا",
     "arabizi": "Homa beiraua7u"
    }
   }
  },
  {
   "id": "verbo-wesel",
   "pt": "chegar",
   "ar": "وِصِل",
   "arabizi": "wesel",
   "grupo": "rotina",
   "conj": {
    "Eu": {
     "ar": "أنا بَوصَل",
     "arabizi": "Ana baussal"
    },
    "Você (m)": {
     "ar": "انتَ بِتوصَل",
     "arabizi": "Enta beteussal"
    },
    "Você (f)": {
     "ar": "انتي بِتِوصَلي",
     "arabizi": "Enty beteussaly"
    },
    "Ele": {
     "ar": "هُوَ بيوصَل",
     "arabizi": "Howa beieussal"
    },
    "Ela": {
     "ar": "هِيَ بِتِوصَل",
     "arabizi": "Heya beteussal"
    },
    "Nós": {
     "ar": "احنا بِنوصَل",
     "arabizi": "E7na beneussal"
    },
    "Vocês": {
     "ar": "انتوا بِتِوصَلوا",
     "arabizi": "Entu beteussalu"
    },
    "Eles/Elas": {
     "ar": "هُما بيوصَلوا",
     "arabizi": "Homa beieussalu"
    }
   }
  },
  {
   "id": "verbo-safer",
   "pt": "viajar",
   "ar": "سافِر",
   "arabizi": "safer",
   "grupo": "rotina",
   "conj": {
    "Eu": {
     "ar": "أنا بِسافِر",
     "arabizi": "Ana basafer"
    },
    "Você (m)": {
     "ar": "انتَ بِتسافِر",
     "arabizi": "Enta betsafer"
    },
    "Você (f)": {
     "ar": "انتي بِتسافري",
     "arabizi": "Enty betsafery"
    },
    "Ele": {
     "ar": "هُوَ بيسافِر",
     "arabizi": "Howa beisafer"
    },
    "Ela": {
     "ar": "هِيَ بِتسافِر",
     "arabizi": "Heya betsafer"
    },
    "Nós": {
     "ar": "احنا بِنسافِر",
     "arabizi": "E7na bensafer"
    },
    "Vocês": {
     "ar": "انتوا بِتسافروا",
     "arabizi": "Entu betsaferu"
    },
    "Eles/Elas": {
     "ar": "هُما بيسافِروا",
     "arabizi": "Homa beisaferu"
    }
   }
  },
  {
   "id": "verbo-akal",
   "pt": "comer",
   "ar": "أَكَل",
   "arabizi": "akal",
   "grupo": "rotina",
   "conj": {
    "Eu": {
     "ar": "أنا باكُل",
     "arabizi": "Ana bakol"
    },
    "Você (m)": {
     "ar": "انتَ بِتاكُل",
     "arabizi": "Enta betakol"
    },
    "Você (f)": {
     "ar": "انتي بِتاكلي",
     "arabizi": "Enty betakly"
    },
    "Ele": {
     "ar": "هُوَ بياكُل",
     "arabizi": "Howa biakol"
    },
    "Ela": {
     "ar": "هِيَ بِتاكُل",
     "arabizi": "Heya betakol"
    },
    "Nós": {
     "ar": "احنا بِناكُل",
     "arabizi": "E7na benakol"
    },
    "Vocês": {
     "ar": "انتوا بِتاكلوا",
     "arabizi": "Entu betaklu"
    },
    "Eles/Elas": {
     "ar": "هُما بياكُلوا",
     "arabizi": "Homa biakolu"
    }
   }
  },
  {
   "id": "verbo-5ad",
   "pt": "tomar / pegar / tirar",
   "ar": "خَد",
   "arabizi": "5ad",
   "grupo": "rotina",
   "conj": {
    "Eu": {
     "ar": "أنا باخُد",
     "arabizi": "Ana ba5od"
    },
    "Você (m)": {
     "ar": "انتَ بِتاخُد",
     "arabizi": "Enta beta5od"
    },
    "Você (f)": {
     "ar": "انتي بتاخدي",
     "arabizi": "Enty beta5dy"
    },
    "Ele": {
     "ar": "هُوَ بياخُد",
     "arabizi": "Howa bia5od"
    },
    "Ela": {
     "ar": "هِيَ بِتاخُد",
     "arabizi": "Heya beta5od"
    },
    "Nós": {
     "ar": "احنا بِناخُد",
     "arabizi": "E7na bena5od"
    },
    "Vocês": {
     "ar": "انتوا بتاخدوا",
     "arabizi": "Entu beta5du"
    },
    "Eles/Elas": {
     "ar": "هُما بياخُدوا",
     "arabizi": "Homa bia5odu"
    }
   }
  },
  {
   "id": "verbo-se7y",
   "pt": "acordar",
   "ar": "صَحى",
   "arabizi": "se7y",
   "grupo": "rotina",
   "conj": {
    "Eu": {
     "ar": "أنا بَصحى",
     "arabizi": "Ana bas7a"
    },
    "Você (m)": {
     "ar": "انتَ بِتِصحى",
     "arabizi": "Enta bets7a"
    },
    "Você (f)": {
     "ar": "انتي بِتِصحي",
     "arabizi": "Enty bets7y"
    },
    "Ele": {
     "ar": "هُوَ بيصحى",
     "arabizi": "Howa beis7a"
    },
    "Ela": {
     "ar": "هِيَ بِتِصحى",
     "arabizi": "Heya bets7a"
    },
    "Nós": {
     "ar": "احنا بِنِصحى",
     "arabizi": "E7na bens7a"
    },
    "Vocês": {
     "ar": "انتوا بِتِصحوا",
     "arabizi": "Entu bets7u"
    },
    "Eles/Elas": {
     "ar": "هُما بيصحوا",
     "arabizi": "Homa beis7u"
    }
   }
  },
  {
   "id": "verbo-ra7",
   "pt": "ir",
   "ar": "راح",
   "arabizi": "ra7",
   "grupo": "rotina",
   "conj": {
    "Eu": {
     "ar": "أنا بَروح",
     "arabizi": "Ana baru7"
    },
    "Você (m)": {
     "ar": "انتَ بِتروح",
     "arabizi": "Enta betru7"
    },
    "Você (f)": {
     "ar": "انتي بِتروحي",
     "arabizi": "Enty betru7y"
    },
    "Ele": {
     "ar": "هُوَ بيروح",
     "arabizi": "Howa beiru7"
    },
    "Ela": {
     "ar": "هِيَ بِتروح",
     "arabizi": "Heya betru7"
    },
    "Nós": {
     "ar": "احنا بِنروح",
     "arabizi": "E7na benru7"
    },
    "Vocês": {
     "ar": "انتوا بِتروحوا",
     "arabizi": "Entu betru7u"
    },
    "Eles/Elas": {
     "ar": "هُما بيروحوا",
     "arabizi": "Homa beiru7u"
    }
   }
  },
  {
   "id": "verbo-5arag",
   "pt": "sair",
   "ar": "خَرَج",
   "arabizi": "5arag",
   "grupo": "rotina",
   "conj": {
    "Eu": {
     "ar": "أنا بَخرُج",
     "arabizi": "Ana ba5rog"
    },
    "Você (m)": {
     "ar": "انتَ بِتُخرُج",
     "arabizi": "Enta beto5rog"
    },
    "Você (f)": {
     "ar": "انتي بِتُخرُجي",
     "arabizi": "Enty beto5rogy"
    },
    "Ele": {
     "ar": "هُوَ بيُخرُج",
     "arabizi": "Howa beio5rog"
    },
    "Ela": {
     "ar": "هِيَ بِتُخرُج",
     "arabizi": "Heya beto5rog"
    },
    "Nós": {
     "ar": "احنا بِنُخرُج",
     "arabizi": "E7na beno5rog"
    },
    "Vocês": {
     "ar": "انتوا بِتُخرُجوا",
     "arabizi": "Entu beto5rogu"
    },
    "Eles/Elas": {
     "ar": "هُما بيُخرُجوا",
     "arabizi": "Homa beio5rogu"
    }
   }
  },
  {
   "id": "verbo-eshta8al",
   "pt": "trabalhar",
   "ar": "اِشتَغَل",
   "arabizi": "eshta8al",
   "grupo": "rotina",
   "conj": {
    "Eu": {
     "ar": "أنا بَشتَغَل",
     "arabizi": "Ana bashta8al"
    },
    "Você (m)": {
     "ar": "انتَ بِتِشتَغَل",
     "arabizi": "Enta beteshta8al"
    },
    "Você (f)": {
     "ar": "انتي بِتِشتَغَلي",
     "arabizi": "Enty beteshta8aly"
    },
    "Ele": {
     "ar": "هُوَ بيشتَغَل",
     "arabizi": "Howa beishta8al"
    },
    "Ela": {
     "ar": "هِيَ بِتِشتَغَل",
     "arabizi": "Heya beteshta8al"
    },
    "Nós": {
     "ar": "احنا بِنِشتَغَل",
     "arabizi": "E7na beneshta8al"
    },
    "Vocês": {
     "ar": "انتوا بِتِشتَغَلوا",
     "arabizi": "Entu beteshta8alu"
    },
    "Eles/Elas": {
     "ar": "هُما بيشتَغَلوا",
     "arabizi": "Homa beishta8alu"
    }
   }
  },
  {
   "id": "verbo-zaker",
   "pt": "estudar",
   "ar": "ذاكِر",
   "arabizi": "zaker",
   "grupo": "rotina",
   "conj": {
    "Eu": {
     "ar": "أنا بَذاكِر",
     "arabizi": "Ana bazaker"
    },
    "Você (m)": {
     "ar": "انتَ بِتذاكِر",
     "arabizi": "Enta betzaker"
    },
    "Você (f)": {
     "ar": "انتي بِتذاكري",
     "arabizi": "Enty betzakery"
    },
    "Ele": {
     "ar": "هُوَ بيذاكِر",
     "arabizi": "Howa beizaker"
    },
    "Ela": {
     "ar": "هِيَ بِتذاكِر",
     "arabizi": "Heya betzaker"
    },
    "Nós": {
     "ar": "احنا بِنذاكِر",
     "arabizi": "E7na benzaker"
    },
    "Vocês": {
     "ar": "انتوا بِتذاكروا",
     "arabizi": "Entu betzakeru"
    },
    "Eles/Elas": {
     "ar": "هُما بيذاكِروا",
     "arabizi": "Homa beizakeru"
    }
   }
  },
  {
   "id": "verbo-eshtara",
   "pt": "comprar",
   "ar": "اِشتَرى",
   "arabizi": "eshtara",
   "grupo": "rotina",
   "conj": {
    "Eu": {
     "ar": "أنا بَشتِري",
     "arabizi": "Ana bashtery"
    },
    "Você (m)": {
     "ar": "انتَ بِتِشتِري",
     "arabizi": "Enta beteshtery"
    },
    "Você (f)": {
     "ar": "انتي بِتِشتِري",
     "arabizi": "Enty beteshtery"
    },
    "Ele": {
     "ar": "هُوَ بيشتِري",
     "arabizi": "Howa beishtery"
    },
    "Ela": {
     "ar": "هِيَ بِتِشتِري",
     "arabizi": "Heya beteshtery"
    },
    "Nós": {
     "ar": "احنا بِنِشتِري",
     "arabizi": "E7na beneshtery"
    },
    "Vocês": {
     "ar": "انتوا بِتِشتِروا",
     "arabizi": "Entu beteshteru"
    },
    "Eles/Elas": {
     "ar": "هُما بيشتِروا",
     "arabizi": "Homa beishteru"
    }
   }
  },
  {
   "id": "verbo-zar",
   "pt": "visitar",
   "ar": "زار",
   "arabizi": "zar",
   "grupo": "rotina",
   "conj": {
    "Eu": {
     "ar": "أنا بَزور",
     "arabizi": "Ana bazur"
    },
    "Você (m)": {
     "ar": "انتَ بِتزور",
     "arabizi": "Enta betzur"
    },
    "Você (f)": {
     "ar": "انتي بِتزوري",
     "arabizi": "Enty betzury"
    },
    "Ele": {
     "ar": "هُوَ بيزور",
     "arabizi": "Howa beizur"
    },
    "Ela": {
     "ar": "هِيَ بِتزور",
     "arabizi": "Heya betzur"
    },
    "Nós": {
     "ar": "احنا بِنزور",
     "arabizi": "E7na benzur"
    },
    "Vocês": {
     "ar": "انتوا بِتزوروا",
     "arabizi": "Entu betzuru"
    },
    "Eles/Elas": {
     "ar": "هُما بيزوروا",
     "arabizi": "Homa beizuru"
    }
   }
  },
  {
   "id": "verbo-fatar",
   "pt": "tomar café da manhã",
   "ar": "فَطَر",
   "arabizi": "fatar",
   "grupo": "rotina",
   "conj": {
    "Eu": {
     "ar": "أنا بَفطُر",
     "arabizi": "Ana bafotr"
    },
    "Você (m)": {
     "ar": "انتَ بِتفطُر",
     "arabizi": "Enta betfotr"
    },
    "Você (f)": {
     "ar": "انتي بِتفطُري",
     "arabizi": "Enty betfotry"
    },
    "Ele": {
     "ar": "هُوَ بيفطُر",
     "arabizi": "Howa beifotr"
    },
    "Ela": {
     "ar": "هِيَ بِتفطُر",
     "arabizi": "Heya betfotr"
    },
    "Nós": {
     "ar": "احنا بِنفطُر",
     "arabizi": "E7na benfotr"
    },
    "Vocês": {
     "ar": "انتوا بِتفطُروا",
     "arabizi": "Entu betfotru"
    },
    "Eles/Elas": {
     "ar": "هُما بيفطُروا",
     "arabizi": "Homa beifotru"
    }
   }
  },
  {
   "id": "verbo-et8ada",
   "pt": "almoçar",
   "ar": "اِتغَدى",
   "arabizi": "et8ada",
   "grupo": "rotina",
   "conj": {
    "Eu": {
     "ar": "أنا بَتغَدى",
     "arabizi": "Ana bat8ada"
    },
    "Você (m)": {
     "ar": "انتَ بِتِتغَدى",
     "arabizi": "Enta betet8ada"
    },
    "Você (f)": {
     "ar": "انتي بِتِتغَدي",
     "arabizi": "Enty betet8ady"
    },
    "Ele": {
     "ar": "هُوَ بِيِتغَدى",
     "arabizi": "Howa beiet8ada"
    },
    "Ela": {
     "ar": "هِيَ بِتِتغَدى",
     "arabizi": "Heya betet8ada"
    },
    "Nós": {
     "ar": "احنا بِنِتغَدى",
     "arabizi": "E7na benet8ada"
    },
    "Vocês": {
     "ar": "انتوا بِتِتغَدوا",
     "arabizi": "Entu betet8adu"
    },
    "Eles/Elas": {
     "ar": "هُما بِيِتغَدوا",
     "arabizi": "Homa beiet8adu"
    }
   }
  },
  {
   "id": "verbo-et3asha",
   "pt": "jantar",
   "ar": "اِتعَشى",
   "arabizi": "et3asha",
   "grupo": "rotina",
   "conj": {
    "Eu": {
     "ar": "أنا بَتعَشى",
     "arabizi": "Ana bat3asha"
    },
    "Você (m)": {
     "ar": "انتَ بِتِتعَشى",
     "arabizi": "Enta betet3asha"
    },
    "Você (f)": {
     "ar": "انتي بِتِتعَشي",
     "arabizi": "Enty betet3ashy"
    },
    "Ele": {
     "ar": "هُوَ بِيِتعَشى",
     "arabizi": "Howa beiet3asha"
    },
    "Ela": {
     "ar": "هِيَ بِتِتعَشى",
     "arabizi": "Heya betet3asha"
    },
    "Nós": {
     "ar": "احنا بِنِتعَشى",
     "arabizi": "E7na benet3asha"
    },
    "Vocês": {
     "ar": "انتوا بِتِتعَشوا",
     "arabizi": "Entu betet3ashu"
    },
    "Eles/Elas": {
     "ar": "هُما بِيِتعَشوا",
     "arabizi": "Homa beiet3ashu"
    }
   }
  },
  {
   "id": "verbo-shereb",
   "pt": "beber",
   "ar": "شِرِب",
   "arabizi": "shereb",
   "grupo": "rotina",
   "conj": {
    "Eu": {
     "ar": "أنا بَشرَب",
     "arabizi": "Ana bashrab"
    },
    "Você (m)": {
     "ar": "انتَ بِتِشرَب",
     "arabizi": "Enta beteshrab"
    },
    "Você (f)": {
     "ar": "انتي بِتِشرَبي",
     "arabizi": "Enty beteshraby"
    },
    "Ele": {
     "ar": "هُوَ بيشرَب",
     "arabizi": "Howa beishrab"
    },
    "Ela": {
     "ar": "هِيَ بِتِشرَب",
     "arabizi": "Heya beteshrab"
    },
    "Nós": {
     "ar": "احنا بِنِشرَب",
     "arabizi": "E7na beneshrab"
    },
    "Vocês": {
     "ar": "انتوا بِتِشرَبوا",
     "arabizi": "Entu beteshrabu"
    },
    "Eles/Elas": {
     "ar": "هُما بيشرَبوا",
     "arabizi": "Homa beishrabu"
    }
   }
  },
  {
   "id": "verbo-etfarag-3ala",
   "pt": "assistir / ver",
   "ar": "اِتفَرَج (على)",
   "arabizi": "etfarag (3ala)",
   "grupo": "rotina",
   "conj": {
    "Eu": {
     "ar": "أنا بَتفَرَج",
     "arabizi": "Ana batfarag"
    },
    "Você (m)": {
     "ar": "انتَ بِتتفَرَج",
     "arabizi": "Enta betetfarag"
    },
    "Você (f)": {
     "ar": "انتي بِتتفَرجي",
     "arabizi": "Enty betetfaragy"
    },
    "Ele": {
     "ar": "هُوَ بيتفَرَج",
     "arabizi": "Howa beitfarag"
    },
    "Ela": {
     "ar": "هِيَ بِتتفَرَج",
     "arabizi": "Heya betetfarag"
    },
    "Nós": {
     "ar": "احنا بِنتفَرَج",
     "arabizi": "E7na benetfarag"
    },
    "Vocês": {
     "ar": "انتوا بِتتفَرجوا",
     "arabizi": "Entu betetfaragu"
    },
    "Eles/Elas": {
     "ar": "هُما بيتفَرَجوا",
     "arabizi": "Homa beitfaragu"
    }
   }
  },
  {
   "id": "verbo-3eref",
   "pt": "saber",
   "ar": "عِرِف",
   "arabizi": "3eref",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَعرَف",
     "arabizi": "Ana ba3raf"
    },
    "Você (m)": {
     "ar": "انتَ بِتِعرَف",
     "arabizi": "Enta bet3raf"
    },
    "Você (f)": {
     "ar": "انتي بِتِعرَفي",
     "arabizi": "Enty bet3rafy"
    },
    "Ele": {
     "ar": "هُوَ بيِعرَف",
     "arabizi": "Howa bei3raf"
    },
    "Ela": {
     "ar": "هِيَ بِتِعرَف",
     "arabizi": "Heya bet3raf"
    },
    "Nós": {
     "ar": "احنا بِنِعرَف",
     "arabizi": "E7na ben3raf"
    },
    "Vocês": {
     "ar": "انتوا بِتِعرَفوا",
     "arabizi": "Entu bet3rafu"
    },
    "Eles/Elas": {
     "ar": "هُما بيِعرَفوا",
     "arabizi": "Homa bei3rafu"
    }
   }
  },
  {
   "id": "verbo-3am",
   "pt": "nadar",
   "ar": "عام",
   "arabizi": "3am",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَعوم",
     "arabizi": "Ana ba3um"
    },
    "Você (m)": {
     "ar": "انتَ بِتِعوم",
     "arabizi": "Enta bet3um"
    },
    "Você (f)": {
     "ar": "انتي بِتِعومي",
     "arabizi": "Enty bet3umy"
    },
    "Ele": {
     "ar": "هُوَ بيِعوم",
     "arabizi": "Howa bei3um"
    },
    "Ela": {
     "ar": "هِيَ بِتِعوم",
     "arabizi": "Heya bet3um"
    },
    "Nós": {
     "ar": "احنا بِنِعوم",
     "arabizi": "E7na ben3um"
    },
    "Vocês": {
     "ar": "انتوا بِتِعوموا",
     "arabizi": "Entu bet3umu"
    },
    "Eles/Elas": {
     "ar": "هُما بيِعوموا",
     "arabizi": "Homa bei3umu"
    }
   }
  },
  {
   "id": "verbo-gery",
   "pt": "correr",
   "ar": "جِري",
   "arabizi": "gery",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَجري",
     "arabizi": "Ana bagry"
    },
    "Você (m)": {
     "ar": "انتَ بِتِجري",
     "arabizi": "Enta betgry"
    },
    "Você (f)": {
     "ar": "انتي بِتِجري",
     "arabizi": "Enty betgry"
    },
    "Ele": {
     "ar": "هُوَ بيجري",
     "arabizi": "Howa beigry"
    },
    "Ela": {
     "ar": "هِيَ بِتِجري",
     "arabizi": "Heya betgry"
    },
    "Nós": {
     "ar": "احنا بِنِجري",
     "arabizi": "E7na bengry"
    },
    "Vocês": {
     "ar": "انتوا بِتِجروا",
     "arabizi": "Entu betgru"
    },
    "Eles/Elas": {
     "ar": "هُما بيجروا",
     "arabizi": "Homa beigru"
    }
   }
  },
  {
   "id": "verbo-la3ab",
   "pt": "jogar / brincar / tocar (instrumento)",
   "ar": "لَعَب",
   "arabizi": "la3ab",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَلعَب",
     "arabizi": "Ana bal3ab"
    },
    "Você (m)": {
     "ar": "انتَ بِتلعَب",
     "arabizi": "Enta betl3ab"
    },
    "Você (f)": {
     "ar": "انتي بِتلعَبي",
     "arabizi": "Enty betl3aby"
    },
    "Ele": {
     "ar": "هُوَ بيلعَب",
     "arabizi": "Howa beil3ab"
    },
    "Ela": {
     "ar": "هِيَ بِتلعَب",
     "arabizi": "Heya betl3ab"
    },
    "Nós": {
     "ar": "احنا بِنلعَب",
     "arabizi": "E7na benl3ab"
    },
    "Vocês": {
     "ar": "انتوا بِتلعَبوا",
     "arabizi": "Entu betl3abu"
    },
    "Eles/Elas": {
     "ar": "هُما بيلعَبوا",
     "arabizi": "Homa beil3abu"
    }
   }
  },
  {
   "id": "verbo-ra2as",
   "pt": "dançar",
   "ar": "رَقَص",
   "arabizi": "ra2as",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَرقُص",
     "arabizi": "Ana bar2os"
    },
    "Você (m)": {
     "ar": "انتَ بِترقُص",
     "arabizi": "Enta betr2os"
    },
    "Você (f)": {
     "ar": "انتي بِترقُصي",
     "arabizi": "Enty betr2osy"
    },
    "Ele": {
     "ar": "هُوَ بيرقُص",
     "arabizi": "Howa beir2os"
    },
    "Ela": {
     "ar": "هِيَ بِترقُص",
     "arabizi": "Heya betr2os"
    },
    "Nós": {
     "ar": "احنا بِنرقُص",
     "arabizi": "E7na benr2os"
    },
    "Vocês": {
     "ar": "انتوا بِترقُصوا",
     "arabizi": "Entu betr2osu"
    },
    "Eles/Elas": {
     "ar": "هُما بيرقُصوا",
     "arabizi": "Homa beir2osu"
    }
   }
  },
  {
   "id": "verbo-8anny",
   "pt": "cantar",
   "ar": "غَنّى",
   "arabizi": "8anny",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَغَني",
     "arabizi": "Ana ba8any"
    },
    "Você (m)": {
     "ar": "انتَ بِتغَني",
     "arabizi": "Enta bet8any"
    },
    "Você (f)": {
     "ar": "انتي بِتغَني",
     "arabizi": "Enty bet8any"
    },
    "Ele": {
     "ar": "هُوَ بيغَني",
     "arabizi": "Howa bei8any"
    },
    "Ela": {
     "ar": "هِيَ بِتغَني",
     "arabizi": "Heya bet8any"
    },
    "Nós": {
     "ar": "احنا بِنغَني",
     "arabizi": "E7na ben8any"
    },
    "Vocês": {
     "ar": "انتوا بِتغَنوا",
     "arabizi": "Entu bet8anu"
    },
    "Eles/Elas": {
     "ar": "هُما بيغَنوا",
     "arabizi": "Homa bei8anu"
    }
   }
  },
  {
   "id": "verbo-sma3",
   "pt": "escutar / ouvir",
   "ar": "سِمِع",
   "arabizi": "sma3",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَسمَع",
     "arabizi": "Ana basma3"
    },
    "Você (m)": {
     "ar": "انتَ بِتِسمَع",
     "arabizi": "Enta betsma3"
    },
    "Você (f)": {
     "ar": "انتي بِتِسمَعي",
     "arabizi": "Enty betsma3y"
    },
    "Ele": {
     "ar": "هُوَ بيسمَع",
     "arabizi": "Howa beisma3"
    },
    "Ela": {
     "ar": "هِيَ بِتِسمَع",
     "arabizi": "Heya betsma3"
    },
    "Nós": {
     "ar": "احنا بِنِسمَع",
     "arabizi": "E7na bensma3"
    },
    "Vocês": {
     "ar": "انتوا بِتِسمَعوا",
     "arabizi": "Entu betsma3u"
    },
    "Eles/Elas": {
     "ar": "هُما بيسمَعوا",
     "arabizi": "Homa beisma3u"
    }
   }
  },
  {
   "id": "verbo-sa2",
   "pt": "dirigir",
   "ar": "ساق",
   "arabizi": "sa2",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَسوق",
     "arabizi": "Ana basu2"
    },
    "Você (m)": {
     "ar": "انتَ بِتسوق",
     "arabizi": "Enta betsu2"
    },
    "Você (f)": {
     "ar": "انتي بِتسوقي",
     "arabizi": "Enty betsu2y"
    },
    "Ele": {
     "ar": "هُوَ بيسوق",
     "arabizi": "Howa beisu2"
    },
    "Ela": {
     "ar": "هِيَ بِتسوق",
     "arabizi": "Heya betsu2"
    },
    "Nós": {
     "ar": "احنا بِنسوق",
     "arabizi": "E7na bensu2"
    },
    "Vocês": {
     "ar": "انتوا بِتسوقوا",
     "arabizi": "Entu betsu2u"
    },
    "Eles/Elas": {
     "ar": "هُما بيسوقوا",
     "arabizi": "Homa beisu2u"
    }
   }
  },
  {
   "id": "verbo-tabakh",
   "pt": "cozinhar",
   "ar": "طَبَخ",
   "arabizi": "tabakh",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَطبُخ",
     "arabizi": "Ana batbo5"
    },
    "Você (m)": {
     "ar": "انتَ بِتطبُخ",
     "arabizi": "Enta bettbo5"
    },
    "Você (f)": {
     "ar": "انتي بِتطبُخي",
     "arabizi": "Enty bettbo5y"
    },
    "Ele": {
     "ar": "هُوَ بيطبُخ",
     "arabizi": "Howa beitbo5"
    },
    "Ela": {
     "ar": "هِيَ بِتطبُخ",
     "arabizi": "Heya bettbo5"
    },
    "Nós": {
     "ar": "احنا بِنطبُخ",
     "arabizi": "E7na bentbo5"
    },
    "Vocês": {
     "ar": "انتوا بِتطبُخوا",
     "arabizi": "Entu bettbo5u"
    },
    "Eles/Elas": {
     "ar": "هُما بيطبُخوا",
     "arabizi": "Homa beitbo5u"
    }
   }
  },
  {
   "id": "verbo-meshy",
   "pt": "caminhar / andar",
   "ar": "مِشي",
   "arabizi": "meshy",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَمشي",
     "arabizi": "Ana bamshy"
    },
    "Você (m)": {
     "ar": "انتَ بِتِمشي",
     "arabizi": "Enta betmshy"
    },
    "Você (f)": {
     "ar": "انتي بِتِمشي",
     "arabizi": "Enty betmshy"
    },
    "Ele": {
     "ar": "هُوَ بيمشي",
     "arabizi": "Howa beimshy"
    },
    "Ela": {
     "ar": "هِيَ بِتِمشي",
     "arabizi": "Heya betmshy"
    },
    "Nós": {
     "ar": "احنا بِنِمشي",
     "arabizi": "E7na benmshy"
    },
    "Vocês": {
     "ar": "انتوا بِتِمشوا",
     "arabizi": "Entu betmshu"
    },
    "Eles/Elas": {
     "ar": "هُما بيمشوا",
     "arabizi": "Homa beimshu"
    }
   }
  },
  {
   "id": "verbo-ba3at",
   "pt": "mandar / enviar",
   "ar": "بَعَت",
   "arabizi": "ba3at",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَبعَت",
     "arabizi": "Ana bab3at"
    },
    "Você (m)": {
     "ar": "انتَ بِتِبعَت",
     "arabizi": "Enta beteb3at"
    },
    "Você (f)": {
     "ar": "انتي بِتِبعَتي",
     "arabizi": "Enty beteb3aty"
    },
    "Ele": {
     "ar": "هُوَ بيبعَت",
     "arabizi": "Howa beib3at"
    },
    "Ela": {
     "ar": "هِيَ بِتِبعَت",
     "arabizi": "Heya beteb3at"
    },
    "Nós": {
     "ar": "احنا بِنِبعَت",
     "arabizi": "E7na beneb3at"
    },
    "Vocês": {
     "ar": "انتوا بِتِبعَتوا",
     "arabizi": "Entu beteb3atu"
    },
    "Eles/Elas": {
     "ar": "هُما بيبعَتوا",
     "arabizi": "Homa beib3atu"
    }
   }
  },
  {
   "id": "verbo-katab",
   "pt": "escrever",
   "ar": "كَتَب",
   "arabizi": "katab",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَكتِب",
     "arabizi": "Ana bakteb"
    },
    "Você (m)": {
     "ar": "انتَ بِتِكتِب",
     "arabizi": "Enta betkteb"
    },
    "Você (f)": {
     "ar": "انتي بِتِكتِبي",
     "arabizi": "Enty betkteby"
    },
    "Ele": {
     "ar": "هُوَ بيكتِب",
     "arabizi": "Howa beikteb"
    },
    "Ela": {
     "ar": "هِيَ بِتِكتِب",
     "arabizi": "Heya betkteb"
    },
    "Nós": {
     "ar": "احنا بِنِكتِب",
     "arabizi": "E7na benkteb"
    },
    "Vocês": {
     "ar": "انتوا بِتِكتِبوا",
     "arabizi": "Entu betktebu"
    },
    "Eles/Elas": {
     "ar": "هُما بيكتِبوا",
     "arabizi": "Homa beiktebu"
    }
   }
  },
  {
   "id": "verbo-2ara",
   "pt": "ler",
   "ar": "قَرى",
   "arabizi": "2ara",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَقرا",
     "arabizi": "Ana ba2ra"
    },
    "Você (m)": {
     "ar": "انتَ بِتِقرا",
     "arabizi": "Enta bet2ra"
    },
    "Você (f)": {
     "ar": "انتي بِتِقري",
     "arabizi": "Enty bet2ry"
    },
    "Ele": {
     "ar": "هُوَ بيقرا",
     "arabizi": "Howa bei2ra"
    },
    "Ela": {
     "ar": "هِيَ بِتِقرا",
     "arabizi": "Heya bet2ra"
    },
    "Nós": {
     "ar": "احنا بِنِقرا",
     "arabizi": "E7na ben2ra"
    },
    "Vocês": {
     "ar": "انتوا بِتِقروا",
     "arabizi": "Entu bet2ru"
    },
    "Eles/Elas": {
     "ar": "هُما بيقروا",
     "arabizi": "Homa bei2ru"
    }
   }
  },
  {
   "id": "verbo-et3alem",
   "pt": "aprender",
   "ar": "اِتعَلِم",
   "arabizi": "et3alem",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَتعَلِم",
     "arabizi": "Ana bat3alem"
    },
    "Você (m)": {
     "ar": "انتَ بِتِتعَلِم",
     "arabizi": "Enta betet3alem"
    },
    "Você (f)": {
     "ar": "انتي بِتِتعَلِمي",
     "arabizi": "Enty betet3alemy"
    },
    "Ele": {
     "ar": "هُوَ بيتعَلِم",
     "arabizi": "Howa beit3alem"
    },
    "Ela": {
     "ar": "هِيَ بِتِتعَلِم",
     "arabizi": "Heya betet3alem"
    },
    "Nós": {
     "ar": "احنا بِنِتعَلِم",
     "arabizi": "E7na benet3alem"
    },
    "Vocês": {
     "ar": "انتوا بِتِتعَلِموا",
     "arabizi": "Entu betet3alemu"
    },
    "Eles/Elas": {
     "ar": "هُما بيتعَلِموا",
     "arabizi": "Homa beit3alemu"
    }
   }
  },
  {
   "id": "verbo-etkalem",
   "pt": "falar",
   "ar": "اِتكَلِم",
   "arabizi": "etkalem",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَتكَلِم",
     "arabizi": "Ana batkalem"
    },
    "Você (m)": {
     "ar": "انتَ بِتِتكَلِم",
     "arabizi": "Enta betetkalem"
    },
    "Você (f)": {
     "ar": "انتي بِتِتكَلِمي",
     "arabizi": "Enty betetkalemy"
    },
    "Ele": {
     "ar": "هُوَ بيتكَلِم",
     "arabizi": "Howa beitkalem"
    },
    "Ela": {
     "ar": "هِيَ بِتِتكَلِم",
     "arabizi": "Heya betetkalem"
    },
    "Nós": {
     "ar": "احنا بِنِتكَلِم",
     "arabizi": "E7na benetkalem"
    },
    "Vocês": {
     "ar": "انتوا بِتِتكَلِموا",
     "arabizi": "Entu betetkalemu"
    },
    "Eles/Elas": {
     "ar": "هُما بيتكَلِموا",
     "arabizi": "Homa beitkalemu"
    }
   }
  },
  {
   "id": "verbo-shaga3",
   "pt": "torcer por / apoiar",
   "ar": "شَجَع",
   "arabizi": "shaga3",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَشَجَّع",
     "arabizi": "Ana bashagg3"
    },
    "Você (m)": {
     "ar": "انتَ بِتشَجَّع",
     "arabizi": "Enta betshagg3"
    },
    "Você (f)": {
     "ar": "انتي بِتشَجَّعي",
     "arabizi": "Enty betshagg3y"
    },
    "Ele": {
     "ar": "هُوَ بيشَجَّع",
     "arabizi": "Howa beishagg3"
    },
    "Ela": {
     "ar": "هِيَ بِتشَجَّع",
     "arabizi": "Heya betshagg3"
    },
    "Nós": {
     "ar": "احنا بِنشَجَّع",
     "arabizi": "E7na benshagg3"
    },
    "Vocês": {
     "ar": "انتوا بِتشَجَّعوا",
     "arabizi": "Entu betshagg3u"
    },
    "Eles/Elas": {
     "ar": "هُما بيشَجَّعوا",
     "arabizi": "Homa beishagg3u"
    }
   }
  },
  {
   "id": "verbo-3emel",
   "pt": "fazer / produzir",
   "ar": "عِمِل",
   "arabizi": "3emel",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَعمِل",
     "arabizi": "Ana ba3mel"
    },
    "Você (m)": {
     "ar": "انتَ بِتِعمِل",
     "arabizi": "Enta bet3mel"
    },
    "Você (f)": {
     "ar": "انتي بِتِعمِلي",
     "arabizi": "Enty bet3mely"
    },
    "Ele": {
     "ar": "هُوَ بيِعمِل",
     "arabizi": "Howa bei3mel"
    },
    "Ela": {
     "ar": "هِيَ بِتِعمِل",
     "arabizi": "Heya bet3mel"
    },
    "Nós": {
     "ar": "احنا بِنِعمِل",
     "arabizi": "E7na ben3mel"
    },
    "Vocês": {
     "ar": "انتوا بِتِعمِلوا",
     "arabizi": "Entu bet3melu"
    },
    "Eles/Elas": {
     "ar": "هُما بيِعمِلوا",
     "arabizi": "Homa bei3melu"
    }
   }
  },
  {
   "id": "verbo-nadaf",
   "pt": "limpar",
   "ar": "نَضَّف",
   "arabizi": "nadaf",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَنَضَّف",
     "arabizi": "Ana banadaf"
    },
    "Você (m)": {
     "ar": "انتَ بِتنَضَّف",
     "arabizi": "Enta betnadaf"
    },
    "Você (f)": {
     "ar": "انتي بِتنَضَّفي",
     "arabizi": "Enty betnadafy"
    },
    "Ele": {
     "ar": "هُوَ بينَضَّف",
     "arabizi": "Howa beinadaf"
    },
    "Ela": {
     "ar": "هِيَ بِتنَضَّف",
     "arabizi": "Heya betnadaf"
    },
    "Nós": {
     "ar": "احنا بِننَضَّف",
     "arabizi": "E7na bennadaf"
    },
    "Vocês": {
     "ar": "انتوا بِتنَضَّفوا",
     "arabizi": "Entu betnadafu"
    },
    "Eles/Elas": {
     "ar": "هُما بينَضَّفوا",
     "arabizi": "Homa beinadafu"
    }
   }
  },
  {
   "id": "verbo-raua2",
   "pt": "arrumar / organizar",
   "ar": "رَوَّق",
   "arabizi": "raua2",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَرَوَّق",
     "arabizi": "Ana baraua2"
    },
    "Você (m)": {
     "ar": "انتَ بِترَوَّق",
     "arabizi": "Enta betraua2"
    },
    "Você (f)": {
     "ar": "انتي بِترَوَّقي",
     "arabizi": "Enty betraua2y"
    },
    "Ele": {
     "ar": "هُوَ بيرَوَّق",
     "arabizi": "Howa beiraua2"
    },
    "Ela": {
     "ar": "هِيَ بِترَوَّق",
     "arabizi": "Heya betraua2"
    },
    "Nós": {
     "ar": "احنا بِنرَوَّق",
     "arabizi": "E7na benraua2"
    },
    "Vocês": {
     "ar": "انتوا بِترَوَّقوا",
     "arabizi": "Entu betraua2u"
    },
    "Eles/Elas": {
     "ar": "هُما بيرَوَّقوا",
     "arabizi": "Homa beiraua2u"
    }
   }
  },
  {
   "id": "verbo-8asal",
   "pt": "lavar",
   "ar": "غَسَل",
   "arabizi": "8asal",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَغسِل",
     "arabizi": "Ana ba8sel"
    },
    "Você (m)": {
     "ar": "انتَ بِتغسِل",
     "arabizi": "Enta bet8sel"
    },
    "Você (f)": {
     "ar": "انتي بِتغسِلي",
     "arabizi": "Enty bet8sely"
    },
    "Ele": {
     "ar": "هُوَ بيغسِل",
     "arabizi": "Howa bei8sel"
    },
    "Ela": {
     "ar": "هِيَ بِتغسِل",
     "arabizi": "Heya bet8sel"
    },
    "Nós": {
     "ar": "احنا بِنغسِل",
     "arabizi": "E7na ben8sel"
    },
    "Vocês": {
     "ar": "انتوا بِتغسِلوا",
     "arabizi": "Entu bet8selu"
    },
    "Eles/Elas": {
     "ar": "هُما بيغسِلوا",
     "arabizi": "Homa bei8selu"
    }
   }
  },
  {
   "id": "verbo-sara7",
   "pt": "pentear (o cabelo)",
   "ar": "سَرَّح",
   "arabizi": "sara7",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَسَرَّح",
     "arabizi": "Ana basara7"
    },
    "Você (m)": {
     "ar": "انتَ بِتسَرَّح",
     "arabizi": "Enta betsara7"
    },
    "Você (f)": {
     "ar": "انتي بِتسَرَّحي",
     "arabizi": "Enty betsara7y"
    },
    "Ele": {
     "ar": "هُوَ بيسَرَّح",
     "arabizi": "Howa beisara7"
    },
    "Ela": {
     "ar": "هِيَ بِتسَرَّح",
     "arabizi": "Heya betsara7"
    },
    "Nós": {
     "ar": "احنا بِنسَرَّح",
     "arabizi": "E7na bensara7"
    },
    "Vocês": {
     "ar": "انتوا بِتسَرَّحوا",
     "arabizi": "Entu betsara7u"
    },
    "Eles/Elas": {
     "ar": "هُما بيسَرَّحوا",
     "arabizi": "Homa beisara7u"
    }
   }
  },
  {
   "id": "verbo-kawa",
   "pt": "passar (roupa) / alisar",
   "ar": "كَوى",
   "arabizi": "kawa",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَكوي",
     "arabizi": "Ana bakwy"
    },
    "Você (m)": {
     "ar": "انتَ بِتكوي",
     "arabizi": "Enta betkwy"
    },
    "Você (f)": {
     "ar": "انتي بِتكوي",
     "arabizi": "Enty betkwy"
    },
    "Ele": {
     "ar": "هُوَ بيكوي",
     "arabizi": "Howa beikwy"
    },
    "Ela": {
     "ar": "هِيَ بِتكوي",
     "arabizi": "Heya betkwy"
    },
    "Nós": {
     "ar": "احنا بِنكوي",
     "arabizi": "E7na benkwy"
    },
    "Vocês": {
     "ar": "انتوا بِتكووا",
     "arabizi": "Entu betkwu"
    },
    "Eles/Elas": {
     "ar": "هُما بيكووا",
     "arabizi": "Homa beikwu"
    }
   }
  },
  {
   "id": "verbo-kanas",
   "pt": "varrer",
   "ar": "كَنَس",
   "arabizi": "kanas",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَكنِس",
     "arabizi": "Ana baknes"
    },
    "Você (m)": {
     "ar": "انتَ بِتِكنِس",
     "arabizi": "Enta betknes"
    },
    "Você (f)": {
     "ar": "انتي بِتِكنِسي",
     "arabizi": "Enty betknesy"
    },
    "Ele": {
     "ar": "هُوَ بيكنِس",
     "arabizi": "Howa beiknes"
    },
    "Ela": {
     "ar": "هِيَ بِتِكنِس",
     "arabizi": "Heya betknes"
    },
    "Nós": {
     "ar": "احنا بِنِكنِس",
     "arabizi": "E7na benknes"
    },
    "Vocês": {
     "ar": "انتوا بِتِكنِسوا",
     "arabizi": "Entu betknesu"
    },
    "Eles/Elas": {
     "ar": "هُما بيكنِسوا",
     "arabizi": "Homa beiknesu"
    }
   }
  },
  {
   "id": "verbo-sa3ed",
   "pt": "ajudar",
   "ar": "ساعِد",
   "arabizi": "sa3ed",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَساعِد",
     "arabizi": "Ana basa3ed"
    },
    "Você (m)": {
     "ar": "انتَ بِتساعِد",
     "arabizi": "Enta betsa3ed"
    },
    "Você (f)": {
     "ar": "انتي بِتساعِدي",
     "arabizi": "Enty betsa3edy"
    },
    "Ele": {
     "ar": "هُوَ بيساعِد",
     "arabizi": "Howa beisa3ed"
    },
    "Ela": {
     "ar": "هِيَ بِتساعِد",
     "arabizi": "Heya betsa3ed"
    },
    "Nós": {
     "ar": "احنا بِنساعِد",
     "arabizi": "E7na bensa3ed"
    },
    "Vocês": {
     "ar": "انتوا بِتساعِدوا",
     "arabizi": "Entu betsa3edu"
    },
    "Eles/Elas": {
     "ar": "هُما بيساعِدوا",
     "arabizi": "Homa beisa3edu"
    }
   }
  },
  {
   "id": "verbo-nam",
   "pt": "dormir",
   "ar": "نام",
   "arabizi": "nam",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَنام",
     "arabizi": "Ana banam"
    },
    "Você (m)": {
     "ar": "انتَ بِتنام",
     "arabizi": "Enta betnam"
    },
    "Você (f)": {
     "ar": "انتي بِتنامي",
     "arabizi": "Enty betnamy"
    },
    "Ele": {
     "ar": "هُوَ بينام",
     "arabizi": "Howa beinam"
    },
    "Ela": {
     "ar": "هِيَ بِتنام",
     "arabizi": "Heya betnam"
    },
    "Nós": {
     "ar": "احنا بِننام",
     "arabizi": "E7na bennam"
    },
    "Vocês": {
     "ar": "انتوا بِتناموا",
     "arabizi": "Entu betnamu"
    },
    "Eles/Elas": {
     "ar": "هُما بيناموا",
     "arabizi": "Homa beinamu"
    }
   }
  },
  {
   "id": "verbo-esta7ama",
   "pt": "tomar banho (banhar-se)",
   "ar": "اِستَحمّى",
   "arabizi": "esta7ama",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَستَحمّى",
     "arabizi": "Ana basta7ama"
    },
    "Você (m)": {
     "ar": "انتَ بِتستَحمّى",
     "arabizi": "Enta betsta7ama"
    },
    "Você (f)": {
     "ar": "انتي بِتستَحمّي",
     "arabizi": "Enty betsta7amy"
    },
    "Ele": {
     "ar": "هُوَ بيستَحمّى",
     "arabizi": "Howa beista7ama"
    },
    "Ela": {
     "ar": "هِيَ بِتستَحمّى",
     "arabizi": "Heya betsta7ama"
    },
    "Nós": {
     "ar": "احنا بِنستَحمّى",
     "arabizi": "E7na bensta7ama"
    },
    "Vocês": {
     "ar": "انتوا بِتستَحمّوا",
     "arabizi": "Entu betsta7amu"
    },
    "Eles/Elas": {
     "ar": "هُما بيستَحمّوا",
     "arabizi": "Homa beista7amu"
    }
   }
  },
  {
   "id": "verbo-shaf",
   "pt": "ver / enxergar",
   "ar": "شاف",
   "arabizi": "shaf",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَشوف",
     "arabizi": "Ana bashuf"
    },
    "Você (m)": {
     "ar": "انتَ بِتشوف",
     "arabizi": "Enta betshuf"
    },
    "Você (f)": {
     "ar": "انتي بِتشوفي",
     "arabizi": "Enty betshufy"
    },
    "Ele": {
     "ar": "هُوَ بيشوف",
     "arabizi": "Howa beishuf"
    },
    "Ela": {
     "ar": "هِيَ بِتشوف",
     "arabizi": "Heya betshuf"
    },
    "Nós": {
     "ar": "احنا بِنشوف",
     "arabizi": "E7na benshuf"
    },
    "Vocês": {
     "ar": "انتوا بِتشوفوا",
     "arabizi": "Entu betshufu"
    },
    "Eles/Elas": {
     "ar": "هُما بيشوفوا",
     "arabizi": "Homa beishufu"
    }
   }
  },
  {
   "id": "verbo-rasam",
   "pt": "desenhar",
   "ar": "رَسَم",
   "arabizi": "rasam",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَرسِم",
     "arabizi": "Ana barsem"
    },
    "Você (m)": {
     "ar": "انتَ بِترسِم",
     "arabizi": "Enta betrsem"
    },
    "Você (f)": {
     "ar": "انتي بِترسِمي",
     "arabizi": "Enty betrsemy"
    },
    "Ele": {
     "ar": "هُوَ بيِرسِم",
     "arabizi": "Howa beirsem"
    },
    "Ela": {
     "ar": "هِيَ بِترسِم",
     "arabizi": "Heya betrsem"
    },
    "Nós": {
     "ar": "احنا بِنرسِم",
     "arabizi": "E7na benrsem"
    },
    "Vocês": {
     "ar": "انتوا بِترسِموا",
     "arabizi": "Entu betrsemu"
    },
    "Eles/Elas": {
     "ar": "هُما بيِرسِموا",
     "arabizi": "Homa beirsemu"
    }
   }
  },
  {
   "id": "verbo-kamel",
   "pt": "continuar",
   "ar": "كَمِّل",
   "arabizi": "kamel",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَكَمِّل",
     "arabizi": "Ana bakamel"
    },
    "Você (m)": {
     "ar": "انتَ بِتكَمِّل",
     "arabizi": "Enta betkamel"
    },
    "Você (f)": {
     "ar": "انتي بِتكَمِّلي",
     "arabizi": "Enty betkamely"
    },
    "Ele": {
     "ar": "هُوَ بيكَمِّل",
     "arabizi": "Howa beikamel"
    },
    "Ela": {
     "ar": "هِيَ بِتكَمِّل",
     "arabizi": "Heya betkamel"
    },
    "Nós": {
     "ar": "احنا بِنكَمِّل",
     "arabizi": "E7na benkamel"
    },
    "Vocês": {
     "ar": "انتوا بِتكَمِّلوا",
     "arabizi": "Entu betkamelu"
    },
    "Eles/Elas": {
     "ar": "هُما بيكَمِّلوا",
     "arabizi": "Homa beikamelu"
    }
   }
  },
  {
   "id": "verbo-fadal",
   "pt": "preferir",
   "ar": "فَضَّل",
   "arabizi": "fadal",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَفَضَّل",
     "arabizi": "Ana bafadal"
    },
    "Você (m)": {
     "ar": "انتَ بِتفَضَّل",
     "arabizi": "Enta betfadal"
    },
    "Você (f)": {
     "ar": "انتي بِتفَضَّلي",
     "arabizi": "Enty betfadaly"
    },
    "Ele": {
     "ar": "هُوَ بيفَضَّل",
     "arabizi": "Howa beifadal"
    },
    "Ela": {
     "ar": "هِيَ بِتفَضَّل",
     "arabizi": "Heya betfadal"
    },
    "Nós": {
     "ar": "احنا بِنفَضَّل",
     "arabizi": "E7na benfadal"
    },
    "Vocês": {
     "ar": "انتوا بِتفَضَّلوا",
     "arabizi": "Entu betfadalu"
    },
    "Eles/Elas": {
     "ar": "هُما بيفَضَّلوا",
     "arabizi": "Homa beifadalu"
    }
   }
  },
  {
   "id": "verbo-7awel",
   "pt": "tentar",
   "ar": "حاوِل",
   "arabizi": "7awel",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَحاوِل",
     "arabizi": "Ana ba7awel"
    },
    "Você (m)": {
     "ar": "انتَ بِتحاوِل",
     "arabizi": "Enta bet7awel"
    },
    "Você (f)": {
     "ar": "انتي بِتحاوِلي",
     "arabizi": "Enty bet7awely"
    },
    "Ele": {
     "ar": "هُوَ بيحاوِل",
     "arabizi": "Howa bei7awel"
    },
    "Ela": {
     "ar": "هِيَ بِتحاوِل",
     "arabizi": "Heya bet7awel"
    },
    "Nós": {
     "ar": "احنا بِنحاوِل",
     "arabizi": "E7na ben7awel"
    },
    "Vocês": {
     "ar": "انتوا بِتحاوِلوا",
     "arabizi": "Entu bet7awelu"
    },
    "Eles/Elas": {
     "ar": "هُما بيحاوِلوا",
     "arabizi": "Homa bei7awelu"
    }
   }
  },
  {
   "id": "verbo-seher",
   "pt": "virar a noite / ficar acordado até tarde",
   "ar": "سِهِر",
   "arabizi": "seher",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَسهَر",
     "arabizi": "Ana bashar"
    },
    "Você (m)": {
     "ar": "انتَ بِتِسهَر",
     "arabizi": "Enta betshar"
    },
    "Você (f)": {
     "ar": "انتي بِتِسهَري",
     "arabizi": "Enty betshary"
    },
    "Ele": {
     "ar": "هُوَ بيِسهَر",
     "arabizi": "Howa beishar"
    },
    "Ela": {
     "ar": "هِيَ بِتِسهَر",
     "arabizi": "Heya betshar"
    },
    "Nós": {
     "ar": "احنا بِنِسهَر",
     "arabizi": "E7na benshar"
    },
    "Vocês": {
     "ar": "انتوا بِتِسهَروا",
     "arabizi": "Entu betsharu"
    },
    "Eles/Elas": {
     "ar": "هُما بيِسهَروا",
     "arabizi": "Homa beisharu"
    }
   }
  },
  {
   "id": "verbo-kereh",
   "pt": "odiar / detestar",
   "ar": "كِرِه",
   "arabizi": "kereh",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَكرَه",
     "arabizi": "Ana bakrah"
    },
    "Você (m)": {
     "ar": "انتَ بِتِكرَه",
     "arabizi": "Enta betkrah"
    },
    "Você (f)": {
     "ar": "انتي بِتِكرَهي",
     "arabizi": "Enty betkrahy"
    },
    "Ele": {
     "ar": "هُوَ بيكرَه",
     "arabizi": "Howa beikrah"
    },
    "Ela": {
     "ar": "هِيَ بِتِكرَه",
     "arabizi": "Heya betkrah"
    },
    "Nós": {
     "ar": "احنا بِنِكرَه",
     "arabizi": "E7na benkrah"
    },
    "Vocês": {
     "ar": "انتوا بِتِكرَهوا",
     "arabizi": "Entu betkrahu"
    },
    "Eles/Elas": {
     "ar": "هُما بيكرَهوا",
     "arabizi": "Homa beikrahu"
    }
   }
  },
  {
   "id": "verbo-warra",
   "pt": "mostrar",
   "ar": "وَرّى",
   "arabizi": "warra",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَوَري",
     "arabizi": "Ana bauary"
    },
    "Você (m)": {
     "ar": "انتَ بِتوَري",
     "arabizi": "Enta betuary"
    },
    "Você (f)": {
     "ar": "انتي بِتوَري",
     "arabizi": "Enty betuary"
    },
    "Ele": {
     "ar": "هُوَ بيوَري",
     "arabizi": "Howa beiuary"
    },
    "Ela": {
     "ar": "هِيَ بِتوَري",
     "arabizi": "Heya betuary"
    },
    "Nós": {
     "ar": "احنا بِنوَري",
     "arabizi": "E7na benuary"
    },
    "Vocês": {
     "ar": "انتوا بِتوَروا",
     "arabizi": "Entu betuaru"
    },
    "Eles/Elas": {
     "ar": "هُما بيوَروا",
     "arabizi": "Homa beiuaru"
    }
   }
  },
  {
   "id": "verbo-fakar",
   "pt": "pensar",
   "ar": "فَكَر",
   "arabizi": "fakar",
   "grupo": "livro-pg88",
   "conj": {
    "Eu": {
     "ar": "أنا بَفَكَر",
     "arabizi": "Ana bafakar"
    },
    "Você (m)": {
     "ar": "انتَ بِتفَكَر",
     "arabizi": "Enta betfakar"
    },
    "Você (f)": {
     "ar": "انتي بِتفَكَري",
     "arabizi": "Enty betfakary"
    },
    "Ele": {
     "ar": "هُوَ بيفَكَر",
     "arabizi": "Howa beifakar"
    },
    "Ela": {
     "ar": "هِيَ بِتفَكَر",
     "arabizi": "Heya betfakar"
    },
    "Nós": {
     "ar": "احنا بِنفَكَر",
     "arabizi": "E7na benfakar"
    },
    "Vocês": {
     "ar": "انتوا بِتفَكَروا",
     "arabizi": "Entu betfakaru"
    },
    "Eles/Elas": {
     "ar": "هُما بيفَكَروا",
     "arabizi": "Homa beifakaru"
    }
   }
  },
  {
   "id": "verbo-faker",
   "pt": "lembrar-se",
   "ar": "فاكِر",
   "arabizi": "faker",
   "grupo": "auxiliares",
   "conj": {
    "Eu": {
     "ar": "أنا فاكِر / فاكرة",
     "arabizi": "Ana faker / fakra"
    },
    "Você (m)": {
     "ar": "انتَ فاكِر",
     "arabizi": "Enta faker"
    },
    "Você (f)": {
     "ar": "انتي فاكرة",
     "arabizi": "Enty fakra"
    },
    "Ele": {
     "ar": "هُوَ فاكِر",
     "arabizi": "Howa faker"
    },
    "Ela": {
     "ar": "هِيَ فاكرة",
     "arabizi": "Heya fakra"
    },
    "Nós": {
     "ar": "احنا فاكرين",
     "arabizi": "E7na fakrin"
    },
    "Vocês": {
     "ar": "انتوا فاكرين",
     "arabizi": "Entu fakrin"
    },
    "Eles/Elas": {
     "ar": "هُما فاكرين",
     "arabizi": "Homa fakrin"
    }
   }
  },
  {
   "id": "verbo-2abel",
   "pt": "encontrar (alguém)",
   "ar": "قابِل",
   "arabizi": "2abel",
   "grupo": "rotina",
   "conj": {
    "Eu": {
     "ar": "أنا بَقابِل",
     "arabizi": "Ana ba2abel"
    },
    "Você (m)": {
     "ar": "انتَ بِتقابِل",
     "arabizi": "Enta bet2abel"
    },
    "Você (f)": {
     "ar": "انتي بِتقابلي",
     "arabizi": "Enty bet2ably"
    },
    "Ele": {
     "ar": "هُوَ بيقابِل",
     "arabizi": "Howa bei2abel"
    },
    "Ela": {
     "ar": "هِيَ بِتقابِل",
     "arabizi": "Heya bet2abel"
    },
    "Nós": {
     "ar": "احنا بِنقابِل",
     "arabizi": "E7na ben2abel"
    },
    "Vocês": {
     "ar": "انتوا بِتقابلوا",
     "arabizi": "Entu bet2ablu"
    },
    "Eles/Elas": {
     "ar": "هُما بيقابلوا",
     "arabizi": "Homa bei2ablu"
    }
   }
  },
  {
   "id": "verbo-etessel",
   "pt": "ligar / telefonar (para) — اتصل بـ",
   "ar": "اِتصَل بـ",
   "arabizi": "etessal be-",
   "grupo": "rotina",
   "conj": {
    "Eu": {
     "ar": "أنا بَتِصِل",
     "arabizi": "Ana batessel"
    },
    "Você (m)": {
     "ar": "انتَ بِتِتصِل",
     "arabizi": "Enta betetessel"
    },
    "Você (f)": {
     "ar": "انتي بِتِتصِلي",
     "arabizi": "Enty betetesseli"
    },
    "Ele": {
     "ar": "هُوَ بيتصِل",
     "arabizi": "Howa beitessel"
    },
    "Ela": {
     "ar": "هِيَ بِتِتصِل",
     "arabizi": "Heya betetessel"
    },
    "Nós": {
     "ar": "احنا بِنِتصِل",
     "arabizi": "E7na benetessel"
    },
    "Vocês": {
     "ar": "انتوا بِتِتصِلوا",
     "arabizi": "Entu betetesselu"
    },
    "Eles/Elas": {
     "ar": "هُما بيتصِلوا",
     "arabizi": "Homa beitesselu"
    }
   }
  },
  {
   "id": "verbo-2al",
   "pt": "dizer",
   "ar": "قال",
   "arabizi": "2al",
   "grupo": "rotina",
   "conj": {
    "Eu": {
     "ar": "أنا بَقول",
     "arabizi": "Ana ba2ul"
    },
    "Você (m)": {
     "ar": "انتَ بِتقول",
     "arabizi": "Enta bet2ul"
    },
    "Você (f)": {
     "ar": "انتي بِتقولي",
     "arabizi": "Enty bet2uly"
    },
    "Ele": {
     "ar": "هُوَ بيقول",
     "arabizi": "Howa bei2ul"
    },
    "Ela": {
     "ar": "هِيَ بِتقول",
     "arabizi": "Heya bet2ul"
    },
    "Nós": {
     "ar": "احنا بِنقول",
     "arabizi": "E7na ben2ul"
    },
    "Vocês": {
     "ar": "انتوا بِتقولوا",
     "arabizi": "Entu bet2ulu"
    },
    "Eles/Elas": {
     "ar": "هُما بيقولوا",
     "arabizi": "Homa bei2ulu"
    }
   }
  }
 ],
 "vocab": [
  {
   "id": "voc-saudacoes-salam",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "olá / oi",
   "ar": "سَلام",
   "arabizi": "salam"
  },
  {
   "id": "voc-saudacoes-saba7-el-5er",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "bom dia",
   "ar": "صَباح الخير",
   "arabizi": "saba7 el-5er"
  },
  {
   "id": "voc-saudacoes-saba7-el-nur",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "resposta a bom dia",
   "ar": "صَباح النور",
   "arabizi": "saba7 el-nur"
  },
  {
   "id": "voc-saudacoes-masaa-el-5er",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "boa tarde / boa noite",
   "ar": "مَساء الخير",
   "arabizi": "masaa el-5er"
  },
  {
   "id": "voc-saudacoes-masaa-el-nur",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "resposta a boa tarde",
   "ar": "مَساء النور",
   "arabizi": "masaa el-nur"
  },
  {
   "id": "voc-saudacoes-ezayak",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "como vai? (m)",
   "ar": "اِزَيَك؟",
   "arabizi": "ezayak?"
  },
  {
   "id": "voc-saudacoes-ezayek",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "como vai? (f)",
   "ar": "اِزَيِك؟",
   "arabizi": "ezayek?"
  },
  {
   "id": "voc-saudacoes-kolo-tamam",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "tudo bem",
   "ar": "كُلُه تَمام",
   "arabizi": "kolo tamam"
  },
  {
   "id": "voc-saudacoes-kouayes",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "bem",
   "ar": "كُوَيِس",
   "arabizi": "kouayes"
  },
  {
   "id": "voc-saudacoes-kouayesa",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "bem (f)",
   "ar": "كُوَيِسة",
   "arabizi": "kouayesa"
  },
  {
   "id": "voc-saudacoes-shukran",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "obrigado",
   "ar": "شُكرًا",
   "arabizi": "shukran"
  },
  {
   "id": "voc-saudacoes-el-3afw",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "de nada",
   "ar": "العَفو",
   "arabizi": "el-3afw"
  },
  {
   "id": "voc-saudacoes-belhana-we-elshefa",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "bom apetite!",
   "ar": "بِالهنا والشِفا",
   "arabizi": "belhana we elshefa"
  },
  {
   "id": "voc-saudacoes-se7tein",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "saúde! (lit. duas saúdes)",
   "ar": "صِحتين",
   "arabizi": "se7tein"
  },
  {
   "id": "voc-saudacoes-men-fadlak",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "por favor",
   "ar": "مِن فَضلَك",
   "arabizi": "men fadlak"
  },
  {
   "id": "voc-saudacoes-ma3lesh",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "desculpe / sem problema",
   "ar": "مَعلِش",
   "arabizi": "ma3lesh"
  },
  {
   "id": "voc-saudacoes-aywa-ah",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "sim",
   "ar": "أيوة / آه",
   "arabizi": "aywa / ah"
  },
  {
   "id": "voc-saudacoes-la-la2",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "não",
   "ar": "لا / لأ",
   "arabizi": "la / la2"
  },
  {
   "id": "voc-saudacoes-ma3a-el-salama",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "tchau",
   "ar": "مَعَ السَلامة",
   "arabizi": "ma3a el-salama"
  },
  {
   "id": "voc-saudacoes-re7la-sa3ida",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "boa viagem",
   "ar": "رِحلة سَعيدة",
   "arabizi": "re7la sa3ida"
  },
  {
   "id": "voc-saudacoes-etfadal",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "aqui está",
   "ar": "اِتفَضَل",
   "arabizi": "etfadal"
  },
  {
   "id": "voc-saudacoes-inshallah",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "se Deus quiser / tomara",
   "ar": "إِن شاء الله",
   "arabizi": "inshallah"
  },
  {
   "id": "voc-saudacoes-ahlan",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "olá (alt.)",
   "ar": "أهلاً",
   "arabizi": "ahlan"
  },
  {
   "id": "voc-saudacoes-el-salamu-3alekom",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "a paz esteja convosco",
   "ar": "السَلامُ عَليكُم",
   "arabizi": "el salamu 3alekom"
  },
  {
   "id": "voc-saudacoes-we-3alekom-el-salam",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "resposta (e convosco a paz)",
   "ar": "وعَليكُم السَلام",
   "arabizi": "we 3alekom el salam"
  },
  {
   "id": "voc-saudacoes-tesba7-tesba7y-3ala-5er",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "boa noite (ao dormir) (m/f)",
   "ar": "تِصبَح / تِصبَحي عَلى خير",
   "arabizi": "tesba7 / tesba7y 3ala 5er"
  },
  {
   "id": "voc-saudacoes-tasharafna",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "prazer em conhecer",
   "ar": "تَشَرَفنا",
   "arabizi": "tasharafna"
  },
  {
   "id": "voc-saudacoes-el-sharaf-leya",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "resposta a prazer",
   "ar": "الشَرَف ليا",
   "arabizi": "el sharaf leya"
  },
  {
   "id": "voc-saudacoes-ahlan-wa-sahla",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "seja bem-vindo",
   "ar": "أهلاً وَسَهلا",
   "arabizi": "ahlan wa sahla"
  },
  {
   "id": "voc-saudacoes-ahlan-bik-ahlan-biky",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "bem-vindo (m/f)",
   "ar": "أهلاً بيك / بيكي",
   "arabizi": "ahlan bik / ahlan biky"
  },
  {
   "id": "voc-saudacoes-bye-bye",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "tchau (informal)",
   "ar": "باي باي",
   "arabizi": "bye bye"
  },
  {
   "id": "voc-saudacoes-3ala-eh",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "não há de quê",
   "ar": "عَلى إيه",
   "arabizi": "3ala eh"
  },
  {
   "id": "voc-saudacoes-motashaker-motashakera",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "agradecido (m/f)",
   "ar": "مُتَشَكِر / مُتَشَكِرة",
   "arabizi": "motashaker / motashakera"
  },
  {
   "id": "voc-saudacoes-law-sama7t-law-sama7ty",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "por favor (m/f)",
   "ar": "لو سَمَحت / لو سَمَحتي",
   "arabizi": "law sama7t / law sama7ty"
  },
  {
   "id": "voc-saudacoes-asef-asfa",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "desculpe (m/f)",
   "ar": "آسِف / آسفة",
   "arabizi": "asef / asfa"
  },
  {
   "id": "voc-saudacoes-mafish-moshkela",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "sem problema",
   "ar": "مافيش مُشكِلة",
   "arabizi": "mafish moshkela"
  },
  {
   "id": "voc-saudacoes-ezayoku",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "como vocês estão?",
   "ar": "اِزَيكوا",
   "arabizi": "ezayoku"
  },
  {
   "id": "voc-saudacoes-3amlin-eh",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "como estão? (fazendo o quê)",
   "ar": "عامْلين إيه",
   "arabizi": "3amlin eh"
  },
  {
   "id": "voc-saudacoes-tamam",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "certo / beleza",
   "ar": "تَمام",
   "arabizi": "tamam"
  },
  {
   "id": "voc-saudacoes-mashy-tayeb",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "tá bom",
   "ar": "ماشي / طَيِب",
   "arabizi": "mashy / tayeb"
  },
  {
   "id": "voc-saudacoes-fekra-kouayesa",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "boa ideia",
   "ar": "فِكرة كوَيسة",
   "arabizi": "fekra kouayesa"
  },
  {
   "id": "voc-saudacoes-3andak-3andek-7a2",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "você tem razão (m / f)",
   "ar": "عَندَك / عَندِك حَق",
   "arabizi": "3andak / 3andêk 7a2"
  },
  {
   "id": "voc-saudacoes-ta3ala-ta3ali-ta3alu",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "venha (m) / venha (f) / venham",
   "ar": "تعالى / تعالي / تعالوا",
   "arabizi": "ta3ala / ta3ali / ta3alu"
  },
  {
   "id": "voc-saudacoes-yala",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "vamos!",
   "ar": "يَلّا",
   "arabizi": "yala"
  },
  {
   "id": "voc-saudacoes-7adretak-7adretek",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "senhor / senhora (formal)",
   "ar": "حَضرِتَك / حَضرِتِك",
   "arabizi": "7adretak / 7adretek"
  },
  {
   "id": "voc-saudacoes-ostaz-ostaza",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "senhor(a) (título)",
   "ar": "أُستاذ / أُستاذة",
   "arabizi": "ostaz / ostaza"
  },
  {
   "id": "voc-saudacoes-el-7amdlelah",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "graças a Deus",
   "ar": "الحَمدُلله",
   "arabizi": "el 7amdlelah"
  },
  {
   "id": "voc-saudacoes-saba7-el-fol",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "bom dia (informal)",
   "ar": "صَباح الفل",
   "arabizi": "saba7 el fol"
  },
  {
   "id": "voc-comida-akl",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "comida",
   "ar": "أكل",
   "arabizi": "akl"
  },
  {
   "id": "voc-comida-akl-se7y",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "comida saudável",
   "ar": "أكل صِحي",
   "arabizi": "akl se7y"
  },
  {
   "id": "voc-comida-fetar",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "café da manhã",
   "ar": "فِطار",
   "arabizi": "fetar"
  },
  {
   "id": "voc-comida-8ada",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "almoço",
   "ar": "غَدا",
   "arabizi": "8ada"
  },
  {
   "id": "voc-comida-3asha",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "jantar",
   "ar": "عَشا",
   "arabizi": "3asha"
  },
  {
   "id": "voc-comida-fera5-dagag",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "frango",
   "ar": "فِراخ / دَجاج",
   "arabizi": "fera5 / dagag"
  },
  {
   "id": "voc-comida-la7ma",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "carne",
   "ar": "لَحمة",
   "arabizi": "la7ma"
  },
  {
   "id": "voc-comida-la7met-5anzir",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "carne de porco",
   "ar": "لَحمة خَنزير",
   "arabizi": "la7met 5anzir"
  },
  {
   "id": "voc-comida-samak",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "peixe",
   "ar": "سَمَك",
   "arabizi": "samak"
  },
  {
   "id": "voc-comida-roz",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "arroz",
   "ar": "رُز",
   "arabizi": "roz"
  },
  {
   "id": "voc-comida-salata",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "salada",
   "ar": "سَلَطة",
   "arabizi": "salata"
  },
  {
   "id": "voc-comida-3eish",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "pão",
   "ar": "عيش",
   "arabizi": "3eish"
  },
  {
   "id": "voc-comida-gebna",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "queijo",
   "ar": "جِبنة",
   "arabizi": "gebna"
  },
  {
   "id": "voc-comida-beda-bed",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "ovo / ovos",
   "ar": "بيضة / بيض",
   "arabizi": "beda / bed"
  },
  {
   "id": "voc-comida-fak-ha",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "fruta",
   "ar": "فاكهة",
   "arabizi": "fak-ha"
  },
  {
   "id": "voc-comida-5odar",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "verduras / legumes",
   "ar": "خُضار",
   "arabizi": "5odar"
  },
  {
   "id": "voc-comida-mayya",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "água",
   "ar": "مَيّة",
   "arabizi": "mayya"
  },
  {
   "id": "voc-comida-2ahwa",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "café",
   "ar": "قَهوة",
   "arabizi": "2ahwa"
  },
  {
   "id": "voc-comida-shay",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "chá",
   "ar": "شاي",
   "arabizi": "shay"
  },
  {
   "id": "voc-comida-laban",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "leite",
   "ar": "لَبَن",
   "arabizi": "laban"
  },
  {
   "id": "voc-comida-3asir",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "suco",
   "ar": "عَصير",
   "arabizi": "3asir"
  },
  {
   "id": "voc-comida-7aga-sa23a",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "refrigerante",
   "ar": "حاجة سَقعة",
   "arabizi": "7aga sa23a"
  },
  {
   "id": "voc-comida-7alaweyat",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "doces",
   "ar": "حَلَويات",
   "arabizi": "7alaweyat"
  },
  {
   "id": "voc-comida-shekolata",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "chocolate",
   "ar": "شِكولاتة",
   "arabizi": "shekolata"
  },
  {
   "id": "voc-comida-sokar",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "açúcar",
   "ar": "سُكَر",
   "arabizi": "sokar"
  },
  {
   "id": "voc-comida-mel7",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "sal",
   "ar": "مِلح",
   "arabizi": "mel7"
  },
  {
   "id": "voc-comida-sandawetch",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "sanduíche",
   "ar": "سَندَوِتش",
   "arabizi": "sandawetch"
  },
  {
   "id": "voc-comida-sandawtchat",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "sanduíches",
   "ar": "سَندَوِتشات",
   "arabizi": "sandawtchat"
  },
  {
   "id": "voc-comida-salatet-fawakeh",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "salada de fruta",
   "ar": "سَلَطة فَواكِه",
   "arabizi": "salatet fawakeh"
  },
  {
   "id": "voc-comida-pepsi",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "Pepsi / refrigerante",
   "ar": "بيبسي",
   "arabizi": "pepsi"
  },
  {
   "id": "voc-comida-baskout",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "biscoito",
   "ar": "بَسكوت",
   "arabizi": "baskout"
  },
  {
   "id": "voc-comida-shay-bel-laban",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "chá com leite",
   "ar": "شاي باللَبَن",
   "arabizi": "shay bel laban"
  },
  {
   "id": "voc-comida-2ahwa-bel-laban",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "café com leite",
   "ar": "قَهوة باللَبَن",
   "arabizi": "2ahwa bel laban"
  },
  {
   "id": "voc-comida-chocolata-bel-laban",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "achocolatado",
   "ar": "شوكولاتة باللَبَن",
   "arabizi": "chocolata bel laban"
  },
  {
   "id": "voc-comida-3asir-borto2an",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "suco de laranja",
   "ar": "عَصير بُرتُقان",
   "arabizi": "3asir borto2an"
  },
  {
   "id": "voc-comida-3asir-lamun",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "suco de limão",
   "ar": "عَصير لَمون",
   "arabizi": "3asir lamun"
  },
  {
   "id": "voc-comida-beera",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "cerveja",
   "ar": "بيرة",
   "arabizi": "beera"
  },
  {
   "id": "voc-comida-nebit",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "vinho",
   "ar": "نِبيت",
   "arabizi": "nebit"
  },
  {
   "id": "voc-comida-tabi5",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "comida cozida / preparo",
   "ar": "طَبيخ",
   "arabizi": "tabi5"
  },
  {
   "id": "voc-comida-akl-taklidy",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "comida típica",
   "ar": "أكل تَقليدي",
   "arabizi": "akl taklidy"
  },
  {
   "id": "voc-comida-la7ma-mafruma",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "carne moída",
   "ar": "لَحمة مَفرومة",
   "arabizi": "la7ma mafruma"
  },
  {
   "id": "voc-comida-fera5-baneh",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "frango à milanesa",
   "ar": "فِراخ بانيه",
   "arabizi": "fera5 baneh"
  },
  {
   "id": "voc-comida-nabaty-nabateya",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "vegetariano / vegano (m/f)",
   "ar": "نَباتي / نَباتية",
   "arabizi": "nabaty / nabateya"
  },
  {
   "id": "voc-comida-batates",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "batata",
   "ar": "بَطاطِس",
   "arabizi": "batates"
  },
  {
   "id": "voc-comida-batates-sauabe3",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "batata frita",
   "ar": "بَطاطِس صَوابِع",
   "arabizi": "batates sauabe3"
  },
  {
   "id": "voc-comida-lobya",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "feijão",
   "ar": "لوبيا",
   "arabizi": "lobya"
  },
  {
   "id": "voc-comida-fasolya",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "feijão branco / verde",
   "ar": "فاصوليا",
   "arabizi": "fasolya"
  },
  {
   "id": "voc-comida-ful",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "feijão-fava",
   "ar": "فول",
   "arabizi": "ful"
  },
  {
   "id": "voc-comida-macarona",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "macarrão",
   "ar": "مَكَرونة",
   "arabizi": "macarona"
  },
  {
   "id": "voc-comida-salsa",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "molho de tomate",
   "ar": "صَلصة",
   "arabizi": "salsa"
  },
  {
   "id": "voc-comida-macarona-bel-salsa",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "macarrão com molho",
   "ar": "مَكَرونة بالصَلصة",
   "arabizi": "macarona bel salsa"
  },
  {
   "id": "voc-comida-3esh-toast",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "pão de forma",
   "ar": "عيش توست",
   "arabizi": "3esh toast"
  },
  {
   "id": "voc-comida-zebda",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "manteiga",
   "ar": "زِبدة",
   "arabizi": "zebda"
  },
  {
   "id": "voc-comida-shorba",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "sopa",
   "ar": "شوربة",
   "arabizi": "shorba"
  },
  {
   "id": "voc-comida-shorbet-5odar",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "sopa de legumes",
   "ar": "شوربة خُضار",
   "arabizi": "shorbet 5odar"
  },
  {
   "id": "voc-comida-sabane5",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "espinafre",
   "ar": "سَبانِخ",
   "arabizi": "sabane5"
  },
  {
   "id": "voc-comida-feshar",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "pipoca",
   "ar": "فِشار",
   "arabizi": "feshar"
  },
  {
   "id": "voc-comida-cake",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "bolo",
   "ar": "كيك",
   "arabizi": "cake"
  },
  {
   "id": "voc-comida-burger",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "hambúrguer",
   "ar": "بُرجر",
   "arabizi": "burger"
  },
  {
   "id": "voc-comida-sosis",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "salsicha",
   "ar": "سوسيس",
   "arabizi": "sosis"
  },
  {
   "id": "voc-comida-pizza",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "pizza",
   "ar": "بيتزا",
   "arabizi": "pizza"
  },
  {
   "id": "voc-comida-sushi",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "sushi",
   "ar": "سوشي",
   "arabizi": "sushi"
  },
  {
   "id": "voc-comida-lasanha",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "lasanha",
   "ar": "لازانيا",
   "arabizi": "lasanha"
  },
  {
   "id": "voc-comida-ma7shi",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "mahshi (folhas/legumes recheados)",
   "ar": "مَحشي",
   "arabizi": "ma7shi"
  },
  {
   "id": "voc-comida-8azl-el-banat",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "algodão doce",
   "ar": "غَزل البَنات",
   "arabizi": "8azl el banat"
  },
  {
   "id": "voc-comida-tofa7",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "maçã",
   "ar": "تُفاح",
   "arabizi": "tofa7"
  },
  {
   "id": "voc-comida-3enab",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "uva",
   "ar": "عِنَب",
   "arabizi": "3enab"
  },
  {
   "id": "voc-comida-moz",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "banana",
   "ar": "موز",
   "arabizi": "moz"
  },
  {
   "id": "voc-comida-bati5",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "melancia",
   "ar": "بَطيخ",
   "arabizi": "bati5"
  },
  {
   "id": "voc-comida-faraula",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "morango",
   "ar": "فَراولة",
   "arabizi": "faraula"
  },
  {
   "id": "voc-comida-manga",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "manga",
   "ar": "مانجا",
   "arabizi": "manga"
  },
  {
   "id": "voc-comida-youstafandy",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "tangerina",
   "ar": "يوستَفَندي",
   "arabizi": "youstafandy"
  },
  {
   "id": "voc-comida-ananas",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "abacaxi",
   "ar": "أناناس",
   "arabizi": "ananas"
  },
  {
   "id": "voc-comida-5o5",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "pêssego",
   "ar": "خوخ",
   "arabizi": "5o5"
  },
  {
   "id": "voc-comida-gauafa",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "goiaba",
   "ar": "جَوافة",
   "arabizi": "gauafa"
  },
  {
   "id": "voc-comida-kometra",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "pera",
   "ar": "كُمِترى",
   "arabizi": "kometra"
  },
  {
   "id": "voc-comida-cantalob",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "melão",
   "ar": "كَنتالوب",
   "arabizi": "cantalob"
  },
  {
   "id": "voc-comida-avocado",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "abacate",
   "ar": "أفوكادو",
   "arabizi": "avocado"
  },
  {
   "id": "voc-comida-5eyar",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "pepino",
   "ar": "خيار",
   "arabizi": "5eyar"
  },
  {
   "id": "voc-comida-tamatem",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "tomate",
   "ar": "طَماطِم",
   "arabizi": "tamatem"
  },
  {
   "id": "voc-comida-bassal",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "cebola",
   "ar": "بَصَل",
   "arabizi": "bassal"
  },
  {
   "id": "voc-comida-gazar",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "cenoura",
   "ar": "جَزَر",
   "arabizi": "gazar"
  },
  {
   "id": "voc-comida-5as",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "alface",
   "ar": "خَس",
   "arabizi": "5as"
  },
  {
   "id": "voc-comida-betengan",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "berinjela",
   "ar": "بِتنجان",
   "arabizi": "betengan"
  },
  {
   "id": "voc-comida-kossa",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "abobrinha",
   "ar": "كوسة",
   "arabizi": "kossa"
  },
  {
   "id": "voc-comida-bamya",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "quiabo",
   "ar": "بامية",
   "arabizi": "bamya"
  },
  {
   "id": "voc-comida-bessela",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "ervilha",
   "ar": "بِسِلة",
   "arabizi": "bessela"
  },
  {
   "id": "voc-comida-koronb",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "repolho",
   "ar": "كُرُنب",
   "arabizi": "koronb"
  },
  {
   "id": "voc-comida-gambary",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "camarão",
   "ar": "جَمبَري",
   "arabizi": "gambary"
  },
  {
   "id": "voc-comida-estakoza",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "lagosta",
   "ar": "استاكوزا",
   "arabizi": "estakoza"
  },
  {
   "id": "voc-comida-kaborya",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "caranguejo",
   "ar": "كابوريا",
   "arabizi": "kaborya"
  },
  {
   "id": "voc-comida-a5tabut",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "polvo",
   "ar": "أخطَبوط",
   "arabizi": "a5tabut"
  },
  {
   "id": "voc-comida-salamon",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "salmão",
   "ar": "سَلَمون",
   "arabizi": "salamon"
  },
  {
   "id": "voc-comida-akl-beity",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "comida caseira",
   "ar": "أكل بيتي",
   "arabizi": "akl beity"
  },
  {
   "id": "voc-lugares-beit",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "casa",
   "ar": "بيت",
   "arabizi": "beit"
  },
  {
   "id": "voc-lugares-fe-el-beit",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "em casa",
   "ar": "في البيت",
   "arabizi": "fe el-beit"
  },
  {
   "id": "voc-lugares-sha2a",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "apartamento",
   "ar": "شَقة",
   "arabizi": "sha2a"
  },
  {
   "id": "voc-lugares-maktab",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "escritório",
   "ar": "مَكتَب",
   "arabizi": "maktab"
  },
  {
   "id": "voc-lugares-sherka",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "empresa",
   "ar": "شِركة",
   "arabizi": "sherka"
  },
  {
   "id": "voc-lugares-el-salon-el-koafeir",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "salão / cabeleireiro",
   "ar": "الصالون / الكوافير",
   "arabizi": "el-salon / el-koafeir"
  },
  {
   "id": "voc-lugares-sho8l",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "trabalho",
   "ar": "شُغل",
   "arabizi": "sho8l"
  },
  {
   "id": "voc-lugares-el-mudir",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "gerente / chefe",
   "ar": "المُدير",
   "arabizi": "el-mudir"
  },
  {
   "id": "voc-lugares-madrasa",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "escola",
   "ar": "مَدرَسة",
   "arabizi": "madrasa"
  },
  {
   "id": "voc-lugares-gam3a",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "universidade",
   "ar": "جامِعة",
   "arabizi": "gam3a"
  },
  {
   "id": "voc-lugares-bank",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "banco",
   "ar": "بَنك",
   "arabizi": "bank"
  },
  {
   "id": "voc-lugares-mostashfa",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "hospital",
   "ar": "مُستَشفى",
   "arabizi": "mostashfa"
  },
  {
   "id": "voc-lugares-3eyada",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "clínica",
   "ar": "عِيادة",
   "arabizi": "3eyada"
  },
  {
   "id": "voc-lugares-saidaleya",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "farmácia",
   "ar": "صَيدَلية",
   "arabizi": "saidaleya"
  },
  {
   "id": "voc-lugares-mat3am",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "restaurante",
   "ar": "مَطعَم",
   "arabizi": "mat3am"
  },
  {
   "id": "voc-lugares-2ahwa",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "café (lugar)",
   "ar": "قَهوة",
   "arabizi": "2ahwa"
  },
  {
   "id": "voc-lugares-ma7al",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "loja",
   "ar": "مَحَل",
   "arabizi": "ma7al"
  },
  {
   "id": "voc-lugares-ma7al-hedum",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "loja de roupas",
   "ar": "مَحَل هِدوم",
   "arabizi": "ma7al hedum"
  },
  {
   "id": "voc-lugares-el-mull",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "shopping / mall",
   "ar": "المول",
   "arabizi": "el-mull"
  },
  {
   "id": "voc-lugares-el-supermarket",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "supermercado",
   "ar": "السوبَرماركِت",
   "arabizi": "el-supermarket"
  },
  {
   "id": "voc-lugares-7ala2",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "barbeiro",
   "ar": "حَلاق",
   "arabizi": "7ala2"
  },
  {
   "id": "voc-lugares-nady",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "academia / clube",
   "ar": "نادي",
   "arabizi": "nady"
  },
  {
   "id": "voc-lugares-gym",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "academia (gym)",
   "ar": "جيم",
   "arabizi": "gym"
  },
  {
   "id": "voc-lugares-ba7r",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "praia / mar",
   "ar": "بَحر",
   "arabizi": "ba7r"
  },
  {
   "id": "voc-lugares-shat",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "praia (faixa de areia)",
   "ar": "شَط",
   "arabizi": "shat"
  },
  {
   "id": "voc-lugares-mo7it",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "oceano",
   "ar": "مُحيط",
   "arabizi": "mo7it"
  },
  {
   "id": "voc-lugares-bessin-pool",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "piscina",
   "ar": "بِسين / بول",
   "arabizi": "bessin / pool"
  },
  {
   "id": "voc-lugares-koshk",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "quiosque",
   "ar": "كُشك",
   "arabizi": "koshk"
  },
  {
   "id": "voc-lugares-7ammam",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "banheiro",
   "ar": "حَمّام",
   "arabizi": "7ammam"
  },
  {
   "id": "voc-lugares-el-matar",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "aeroporto",
   "ar": "المَطار",
   "arabizi": "el-matar"
  },
  {
   "id": "voc-lugares-share3",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "rua",
   "ar": "شارِع",
   "arabizi": "share3"
  },
  {
   "id": "voc-lugares-madina",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "cidade",
   "ar": "مَدينة",
   "arabizi": "madina"
  },
  {
   "id": "voc-lugares-balad",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "país",
   "ar": "بَلَد",
   "arabizi": "balad"
  },
  {
   "id": "voc-lugares-balacona",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "varanda",
   "ar": "بَلَكونة",
   "arabizi": "balacona"
  },
  {
   "id": "voc-lugares-dor",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "andar",
   "ar": "دور",
   "arabizi": "dor"
  },
  {
   "id": "voc-lugares-el-dor-el-talet",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "terceiro andar",
   "ar": "الدور التالِت",
   "arabizi": "el-dor el-talet"
  },
  {
   "id": "voc-lugares-saken-sakna",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "mora (m / f)",
   "ar": "ساكِن / ساكنة",
   "arabizi": "saken / sakna"
  },
  {
   "id": "voc-lugares-oda",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "quarto",
   "ar": "أوضة",
   "arabizi": "oda"
  },
  {
   "id": "voc-lugares-ouad",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "quartos (plural)",
   "ar": "أوَض",
   "arabizi": "ouad"
  },
  {
   "id": "voc-lugares-barra",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "fora / lá fora",
   "ar": "بَرّة",
   "arabizi": "barra"
  },
  {
   "id": "voc-lugares-orayeb-men",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "perto de",
   "ar": "قريب مِن",
   "arabizi": "orayeb men"
  },
  {
   "id": "voc-lugares-be3id-3an",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "longe de",
   "ar": "بَعيد عَن",
   "arabizi": "be3id 3an"
  },
  {
   "id": "voc-lugares-masna3",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "fábrica",
   "ar": "مَصنَع",
   "arabizi": "masna3"
  },
  {
   "id": "voc-lugares-koleya",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "faculdade",
   "ar": "كُلية",
   "arabizi": "koleya"
  },
  {
   "id": "voc-lugares-ma3mal",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "laboratório",
   "ar": "مَعمَل",
   "arabizi": "ma3mal"
  },
  {
   "id": "voc-lugares-cafe",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "cafeteria",
   "ar": "كافيه",
   "arabizi": "café"
  },
  {
   "id": "voc-lugares-bar",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "bar",
   "ar": "بار",
   "arabizi": "bar"
  },
  {
   "id": "voc-lugares-forn",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "padaria",
   "ar": "فُرن",
   "arabizi": "forn"
  },
  {
   "id": "voc-lugares-cinema",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "cinema",
   "ar": "سينما",
   "arabizi": "cinema"
  },
  {
   "id": "voc-lugares-kenisa",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "igreja",
   "ar": "كَنيسة",
   "arabizi": "kenisa"
  },
  {
   "id": "voc-lugares-game3",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "mesquita",
   "ar": "جامِع",
   "arabizi": "game3"
  },
  {
   "id": "voc-lugares-kauafer",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "cabeleireiro",
   "ar": "كوافير",
   "arabizi": "kauafer"
  },
  {
   "id": "voc-lugares-fondo2",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "hotel",
   "ar": "فُندُق",
   "arabizi": "fondo2"
  },
  {
   "id": "voc-lugares-estad",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "estádio",
   "ar": "إستاد",
   "arabizi": "estad"
  },
  {
   "id": "voc-lugares-su2",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "mercado / feira",
   "ar": "سوق",
   "arabizi": "su2"
  },
  {
   "id": "voc-lugares-mat7af",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "museu",
   "ar": "مَتحَف",
   "arabizi": "mat7af"
  },
  {
   "id": "voc-lugares-genena",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "jardim",
   "ar": "جِنينة",
   "arabizi": "genena"
  },
  {
   "id": "voc-lugares-3asema",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "capital",
   "ar": "عاصِمة",
   "arabizi": "3asema"
  },
  {
   "id": "voc-lugares-7ay",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "bairro",
   "ar": "حَي",
   "arabizi": "7ay"
  },
  {
   "id": "voc-lugares-makan-amaken",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "lugar / lugares",
   "ar": "مَكان / أماكِن",
   "arabizi": "makan / amaken"
  },
  {
   "id": "voc-lugares-doctor-elasnan",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "dentista",
   "ar": "دكتور الأسنان",
   "arabizi": "doctor elasnan"
  },
  {
   "id": "voc-lugares-3enuan",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "endereço",
   "ar": "عِنوان",
   "arabizi": "3enuan"
  },
  {
   "id": "voc-lugares-mabna",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "prédio",
   "ar": "مَبنى",
   "arabizi": "mabna"
  },
  {
   "id": "voc-lugares-3omara",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "prédio residencial",
   "ar": "عُمارة",
   "arabizi": "3omara"
  },
  {
   "id": "voc-lugares-sala",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "sala de estar",
   "ar": "صالة",
   "arabizi": "sala"
  },
  {
   "id": "voc-lugares-matba5",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "cozinha",
   "ar": "مَطبَخ",
   "arabizi": "matba5"
  },
  {
   "id": "voc-lugares-dolab",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "guarda-roupa",
   "ar": "دولاب",
   "arabizi": "dolab"
  },
  {
   "id": "voc-lugares-kanaba",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "sofá",
   "ar": "كَنَبة",
   "arabizi": "kanaba"
  },
  {
   "id": "voc-lugares-el-ahramat",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "as pirâmides",
   "ar": "الأهرامات",
   "arabizi": "el ahramat"
  },
  {
   "id": "voc-sentimentos-ta3ban",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "cansado (m)",
   "ar": "تَعبان",
   "arabizi": "ta3ban"
  },
  {
   "id": "voc-sentimentos-ta3bana",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "cansada (f)",
   "ar": "تَعبانة",
   "arabizi": "ta3bana"
  },
  {
   "id": "voc-sentimentos-mabsut-mabsuta",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "feliz (m / f)",
   "ar": "مَبسوط / مَبسوطة",
   "arabizi": "mabsut / mabsuta"
  },
  {
   "id": "voc-sentimentos-mabsutin",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "felizes (pl)",
   "ar": "مَبسوطين",
   "arabizi": "mabsutin"
  },
  {
   "id": "voc-sentimentos-7azin",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "triste",
   "ar": "حَزين",
   "arabizi": "7azin"
  },
  {
   "id": "voc-sentimentos-zah2an",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "chateado / entediado",
   "ar": "زَهقان",
   "arabizi": "zah2an"
  },
  {
   "id": "voc-sentimentos-ga3an-ga3ana",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "com fome (m / f)",
   "ar": "جَعان / جَعانة",
   "arabizi": "ga3an / ga3ana"
  },
  {
   "id": "voc-sentimentos-3atshan-3atshana",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "com sede (m / f)",
   "ar": "عَطشان / عَطشانة",
   "arabizi": "3atshan / 3atshana"
  },
  {
   "id": "voc-sentimentos-mash8ul-mash8ula",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "ocupado (m / f)",
   "ar": "مَشغول / مَشغولة",
   "arabizi": "mash8ul / mash8ula"
  },
  {
   "id": "voc-sentimentos-fady",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "livre",
   "ar": "فاضي",
   "arabizi": "fady"
  },
  {
   "id": "voc-sentimentos-wa2t-fady",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "tempo livre",
   "ar": "وَقت فاضي",
   "arabizi": "wa2t fady"
  },
  {
   "id": "voc-sentimentos-3ayan",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "doente",
   "ar": "عَيان",
   "arabizi": "3ayan"
  },
  {
   "id": "voc-sentimentos-3andy-soda3",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "com dor de cabeça",
   "ar": "عَندي صُداع",
   "arabizi": "3andy soda3"
  },
  {
   "id": "voc-sentimentos-met2a5ar",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "atrasado",
   "ar": "مِتأخَر",
   "arabizi": "met2a5ar"
  },
  {
   "id": "voc-sentimentos-badry",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "adiantado / cedo",
   "ar": "بَدري",
   "arabizi": "badry"
  },
  {
   "id": "voc-sentimentos-bardan",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "frio",
   "ar": "بَردان",
   "arabizi": "bardan"
  },
  {
   "id": "voc-sentimentos-7arran",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "quente / com calor",
   "ar": "حَرّان",
   "arabizi": "7arran"
  },
  {
   "id": "voc-sentimentos-3asaby",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "nervoso / bravo",
   "ar": "عَصبي",
   "arabizi": "3asaby"
  },
  {
   "id": "voc-sentimentos-mest3agel",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "com pressa (m / f)",
   "ar": "مِستَعجِل / مِستَعجِلة",
   "arabizi": "mest3agel / mest3agela"
  },
  {
   "id": "voc-sentimentos-messada3-messada3a",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "com dor de cabeça (m / f)",
   "ar": "مِصَدَع / مِصَدَعة",
   "arabizi": "messada3 / messada3a"
  },
  {
   "id": "voc-sentimentos-na3san-na3sana",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "com sono (m / f)",
   "ar": "نَعسان / نَعسانة",
   "arabizi": "na3san / na3sana"
  },
  {
   "id": "voc-sentimentos-ga3anin-3atshanin-ta3banin",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "plural (nós/eles): adjetivo + ـين",
   "ar": "جَعانين · عَطشانين · تَعبانين",
   "arabizi": "ga3anin · 3atshanin · ta3banin"
  },
  {
   "id": "voc-sentimentos-mena3kesh-mena3kesha",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "bagunçado (m/f)",
   "ar": "مِنَعكِش / مِنَعكِشة",
   "arabizi": "mena3kesh / mena3kesha"
  },
  {
   "id": "voc-sentimentos-mefarkesh-mefarkesha",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "bagunçado — variante das aulas (m/f)",
   "ar": "مِفَركِش / مِفَركِشة",
   "arabizi": "mefarkesh / mefarkesha"
  },
  {
   "id": "voc-sentimentos-sha3r-curly",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "cabelo encaracolado",
   "ar": "شَعر كيرلي",
   "arabizi": "sha3r curly"
  },
  {
   "id": "voc-sentimentos-rofaya3-rofaya3a",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "magro (m/f)",
   "ar": "رُفَيَع / رُفَيَعة",
   "arabizi": "rofaya3 / rofaya3a"
  },
  {
   "id": "voc-preposicoes-fe",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "em / no / na",
   "ar": "في",
   "arabizi": "fe"
  },
  {
   "id": "voc-preposicoes-ma3a",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "com (alguém)",
   "ar": "مَعَ",
   "arabizi": "ma3a"
  },
  {
   "id": "voc-preposicoes-ma3aya",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "comigo",
   "ar": "مَعايا",
   "arabizi": "ma3aya"
  },
  {
   "id": "voc-preposicoes-ma3ak-ma3aky",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "com você (m) / (f)",
   "ar": "مَعاك / مَعاكي",
   "arabizi": "ma3ak / ma3aky"
  },
  {
   "id": "voc-preposicoes-ma3aha-ma3ah",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "com ela / com ele",
   "ar": "مَعاها / مَعاه",
   "arabizi": "ma3aha / ma3ah"
  },
  {
   "id": "voc-preposicoes-ma3ahom-ma3ana",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "com eles / conosco",
   "ar": "مَعاهُم / مَعانا",
   "arabizi": "ma3ahom / ma3ana"
  },
  {
   "id": "voc-preposicoes-3and",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "em (na casa de) / com",
   "ar": "عَند",
   "arabizi": "3and"
  },
  {
   "id": "voc-preposicoes-men",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "de / desde",
   "ar": "مِن",
   "arabizi": "men"
  },
  {
   "id": "voc-preposicoes-le-ela",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "para",
   "ar": "لـ / إلى",
   "arabizi": "le / ela"
  },
  {
   "id": "voc-preposicoes-le8ayet-le7ad",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "até (lugar ou tempo)",
   "ar": "لِغاية / لِحَد",
   "arabizi": "le8ayet / le7ad"
  },
  {
   "id": "voc-preposicoes-kullo",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "o ___ todo (m)",
   "ar": "___ كُلُه",
   "arabizi": "___ kullo"
  },
  {
   "id": "voc-preposicoes-kullaha",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "a ___ toda (f)",
   "ar": "___ كُلَها",
   "arabizi": "___ kullaha"
  },
  {
   "id": "voc-preposicoes-ganb",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "perto de / ao lado de",
   "ar": "جَنب",
   "arabizi": "ganb"
  },
  {
   "id": "voc-preposicoes-ba3d",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "depois de",
   "ar": "بَعد",
   "arabizi": "ba3d"
  },
  {
   "id": "voc-preposicoes-2abl",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "antes de",
   "ar": "قَبل",
   "arabizi": "2abl"
  },
  {
   "id": "voc-preposicoes-3ala",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "sobre / em cima de / a respeito de",
   "ar": "عَلى",
   "arabizi": "3ala"
  },
  {
   "id": "voc-preposicoes-be",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "por (preço)",
   "ar": "بِـ",
   "arabizi": "be"
  },
  {
   "id": "voc-preposicoes-we",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "e",
   "ar": "و",
   "arabizi": "we"
  },
  {
   "id": "voc-preposicoes-bas",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "mas",
   "ar": "بَس",
   "arabizi": "bas"
  },
  {
   "id": "voc-preposicoes-au",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "ou (entre opções)",
   "ar": "أو",
   "arabizi": "au"
  },
  {
   "id": "voc-preposicoes-walla-wala",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "ou (em pergunta)",
   "ar": "وَلّا / وَلا",
   "arabizi": "walla / wala"
  },
  {
   "id": "voc-preposicoes-wala",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "nem",
   "ar": "وَلا",
   "arabizi": "wala"
  },
  {
   "id": "voc-preposicoes-ba3dein",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "depois (em seguida)",
   "ar": "بَعدين",
   "arabizi": "ba3dein"
  },
  {
   "id": "voc-preposicoes-momken",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "pode / posso? (pedido) · talvez",
   "ar": "مُمكِن",
   "arabizi": "momken"
  },
  {
   "id": "voc-preposicoes-delua2ty",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "agora",
   "ar": "دِلوَقتي",
   "arabizi": "delua2ty"
  },
  {
   "id": "voc-preposicoes-hena",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "aqui",
   "ar": "هِنا",
   "arabizi": "hena"
  },
  {
   "id": "voc-preposicoes-henak",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "lá",
   "ar": "هِناك",
   "arabizi": "henak"
  },
  {
   "id": "voc-preposicoes-barra",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "fora (de casa)",
   "ar": "بَرّة",
   "arabizi": "barra"
  },
  {
   "id": "voc-preposicoes-ma3a-ba3d",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "junto / com o outro",
   "ar": "مَعَ بَعض",
   "arabizi": "ma3a ba3d"
  },
  {
   "id": "voc-preposicoes-saua",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "juntos (variante)",
   "ar": "سوا",
   "arabizi": "saua"
  },
  {
   "id": "voc-preposicoes-lewa7du",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "sozinho",
   "ar": "لِوَحدُه",
   "arabizi": "lewa7du"
  },
  {
   "id": "voc-preposicoes-kaman",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "também",
   "ar": "كَمان",
   "arabizi": "kaman"
  },
  {
   "id": "voc-preposicoes-3ashan-keda",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "por isso",
   "ar": "عَشان كِدة",
   "arabizi": "3ashan keda"
  },
  {
   "id": "voc-preposicoes-ba3d-keda",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "depois disso",
   "ar": "بَعد كِدة",
   "arabizi": "ba3d keda"
  },
  {
   "id": "voc-preposicoes-ba3d-ma",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "depois de + verbo",
   "ar": "بَعد ما",
   "arabizi": "ba3d ma"
  },
  {
   "id": "voc-preposicoes-3an-tari2",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "através de",
   "ar": "عَن طَريق",
   "arabizi": "3an tari2"
  },
  {
   "id": "voc-preposicoes-besabab",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "por causa de",
   "ar": "بِسَبب",
   "arabizi": "besabab"
  },
  {
   "id": "voc-preposicoes-ra8m-keda",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "apesar disso",
   "ar": "رَغم كِدة",
   "arabizi": "ra8m keda"
  },
  {
   "id": "voc-preposicoes-ra8m-enohom",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "mesmo que (eles)",
   "ar": "رَغم إنُهُم",
   "arabizi": "ra8m enohom"
  },
  {
   "id": "voc-preposicoes-3ala-7asab",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "depende",
   "ar": "عَلى حَسَب",
   "arabizi": "3ala 7asab"
  },
  {
   "id": "voc-preposicoes-elly",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "que (relativo)",
   "ar": "اللي",
   "arabizi": "elly"
  },
  {
   "id": "voc-preposicoes-laken",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "mas (alt.)",
   "ar": "لَكِن",
   "arabizi": "laken"
  },
  {
   "id": "voc-preposicoes-bardo",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "também (alt.)",
   "ar": "بَرضُه",
   "arabizi": "bardo"
  },
  {
   "id": "voc-preposicoes-lazem",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "ter que / dever",
   "ar": "لازِم",
   "arabizi": "lazem"
  },
  {
   "id": "voc-preposicoes-fih",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "há",
   "ar": "فيه",
   "arabizi": "fih"
  },
  {
   "id": "voc-preposicoes-mafish",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "não há",
   "ar": "مافيش",
   "arabizi": "mafish"
  },
  {
   "id": "voc-preposicoes-bein",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "entre",
   "ar": "بين",
   "arabizi": "bein"
  },
  {
   "id": "voc-preposicoes-odam",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "em frente",
   "ar": "قُدّام",
   "arabizi": "odam"
  },
  {
   "id": "voc-preposicoes-wara",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "atrás",
   "ar": "وَرا",
   "arabizi": "wara"
  },
  {
   "id": "voc-preposicoes-fo2",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "em cima",
   "ar": "فوق",
   "arabizi": "fo2"
  },
  {
   "id": "voc-preposicoes-ta7t",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "embaixo",
   "ar": "تَحت",
   "arabizi": "ta7t"
  },
  {
   "id": "voc-preposicoes-gowa",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "dentro",
   "ar": "جوّة",
   "arabizi": "gowa"
  },
  {
   "id": "voc-preposicoes-le",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "até / para (prefixo)",
   "ar": "لِـ",
   "arabizi": "le-"
  },
  {
   "id": "voc-preposicoes-men-le",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "de … até … (dias)",
   "ar": "مِن … لِـ …",
   "arabizi": "men … le …"
  },
  {
   "id": "voc-preposicoes-mesh",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "não (nome, adjetivo, عايز/محتاج, futuro)",
   "ar": "مِش",
   "arabizi": "mesh"
  },
  {
   "id": "voc-preposicoes-ma-sh",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "não … (verbo no presente, passado ou imperativo)",
   "ar": "ما…ـش",
   "arabizi": "ma…sh"
  },
  {
   "id": "voc-preposicoes-3ashan-ma-sh",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "para não … (finalidade)",
   "ar": "عَشان ما…ـش",
   "arabizi": "3ashan ma…sh"
  },
  {
   "id": "voc-preposicoes-keda",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "assim / isso",
   "ar": "كِدة",
   "arabizi": "keda"
  },
  {
   "id": "voc-preposicoes-zay",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "como / igual a (comparação)",
   "ar": "زي",
   "arabizi": "zay"
  },
  {
   "id": "voc-preposicoes-sa3at",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "às vezes",
   "ar": "ساعات",
   "arabizi": "sa3at"
  },
  {
   "id": "voc-preposicoes-da-di",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "esse (vem depois do substantivo)",
   "ar": "ده",
   "arabizi": "da"
  },
  {
   "id": "voc-preposicoes-wala-wala",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "nem … nem …",
   "ar": "ولا … ولا …",
   "arabizi": "wala … wala …"
  },
  {
   "id": "voc-comida-akl-gahez",
   "cat": "comida",
   "catLabel": "Comida e bebida",
   "pt": "comida pronta",
   "ar": "أكل جاهِز",
   "arabizi": "akl gahez"
  },
  {
   "id": "voc-lugares-ma7ata",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "estação",
   "ar": "مَحَطة",
   "arabizi": "ma7ata"
  },
  {
   "id": "voc-lugares-fakahany",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "quitanda / fruteiro (o quitandeiro)",
   "ar": "الفَكَهاني",
   "arabizi": "elfakahany"
  },
  {
   "id": "voc-lugares-eskendereya",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "Alexandria",
   "ar": "اسكِندرية",
   "arabizi": "Eskendereya"
  },
  {
   "id": "voc-preposicoes-3and-lugar",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "عَند sozinho = onde alguém está (no médico, na casa de…)",
   "ar": "أنا عَند الدكتور",
   "arabizi": "Ana 3and eldoctor"
  },
  {
   "id": "voc-saudacoes-ashofak-elshahr-elgay",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "Te vejo o mês que vem!",
   "ar": "أشوفَك الشَهر الجاي!",
   "arabizi": "Ashofak elshahr elgay!"
  },
  {
   "id": "voc-preposicoes-3an",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "sobre / a respeito de",
   "ar": "عَن",
   "arabizi": "3an"
  },
  {
   "id": "voc-preposicoes-3an-nafsy",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "sobre mim",
   "ar": "عَن نَفسي",
   "arabizi": "3an nafsy"
  },
  {
   "id": "voc-preposicoes-auel-ma",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "assim que (+ verbo)",
   "ar": "أول ما",
   "arabizi": "auel ma"
  },
  {
   "id": "voc-preposicoes-leua7dy",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "sozinho / sozinha (eu)",
   "ar": "لِوَحدي",
   "arabizi": "leua7dy"
  },
  {
   "id": "voc-preposicoes-nafs-elbeit",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "na mesma casa",
   "ar": "نَفس البيت",
   "arabizi": "nafs elbeit"
  },
  {
   "id": "voc-lugares-oroba",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "Europa",
   "ar": "أوروبا",
   "arabizi": "Oroba"
  },
  {
   "id": "voc-lugares-afriqya",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "África",
   "ar": "أفريقيا",
   "arabizi": "Afriqya"
  },
  {
   "id": "voc-lugares-asya",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "Ásia",
   "ar": "أسيا",
   "arabizi": "Asya"
  },
  {
   "id": "voc-lugares-amrika-elganubeya",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "América do Sul / latina",
   "ar": "أمريكا الجَنوبية",
   "arabizi": "Amrika elganubeya"
  },
  {
   "id": "voc-preposicoes-nafs",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "mesmo / mesma",
   "ar": "نَفس",
   "arabizi": "nafs"
  },
  {
   "id": "voc-preposicoes-we-5alas",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "e pronto / e é isso",
   "ar": "وِخَلاص",
   "arabizi": "we 5alas"
  },
  {
   "id": "voc-preposicoes-men-8eir",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "sem (+ pessoa/coisa) — Aula 81",
   "ar": "مِن غير",
   "arabizi": "men 8eir"
  },
  {
   "id": "voc-preposicoes-men-8ery-8erak",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "sem mim / sem você (m) / sem você (f)",
   "ar": "مِن غيري / مِن غيرَك / مِن غيرِك",
   "arabizi": "men 8ery / men 8erak / men 8erek"
  },
  {
   "id": "voc-preposicoes-men-8ero-8erha",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "sem ele / sem ela",
   "ar": "مِن غيرُه / مِن غيرها",
   "arabizi": "men 8ero / men 8erha"
  },
  {
   "id": "voc-preposicoes-men-8erna-8erku-8erhom",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "sem nós / sem vocês / sem eles",
   "ar": "مِن غيرنا / مِن غيركوا / مِن غيرهُم",
   "arabizi": "men 8erna / men 8erku / men 8erhom"
  },
  {
   "id": "voc-preposicoes-ma3a-7ad",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "com alguém",
   "ar": "مَعَ حَد",
   "arabizi": "ma3a 7ad"
  },
  {
   "id": "voc-preposicoes-ma3ak-vs-3andak",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "estar com / ter consigo (مَعاك) ≠ possuir (عَندَك) — Aula 81",
   "ar": "مَعاك اللابتوب؟ / عَندَك لابتوب؟",
   "arabizi": "ma3ak ellaptop? / 3andak laptop?"
  },
  {
   "id": "voc-preposicoes-nafs-el-sherka",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "na mesma empresa com…",
   "ar": "في نَفس الشِركة مَعَ…",
   "arabizi": "fe nafs elsherka ma3a…"
  },
  {
   "id": "voc-sentimentos-nefsy",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "estar com vontade de / querer muito (نِفس + sufixo) — Aula 82",
   "ar": "نِفسي",
   "arabizi": "nefsy"
  },
  {
   "id": "voc-sentimentos-nefsy-fe",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "نِفس + في + substantivo = querer (uma coisa)",
   "ar": "أنا نِفسي في ماية",
   "arabizi": "Ana nefsy fe maya"
  },
  {
   "id": "voc-sentimentos-ru7-nafs",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "alma / si mesmo",
   "ar": "روح / نَفس",
   "arabizi": "ru7 / nafs"
  },
  {
   "id": "voc-lugares-fara7",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "casamento (a festa)",
   "ar": "فَرَح",
   "arabizi": "fara7"
  },
  {
   "id": "voc-lugares-7afla-3ard",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "festa / show / espetáculo",
   "ar": "حَفلة / عَرض",
   "arabizi": "7afla / 3ard"
  },
  {
   "id": "voc-preposicoes-odamy",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "na minha frente · na sua frente (m) — قُدّام + sufixo (Aula 83)",
   "ar": "قُدّامي / قُدّامَك",
   "arabizi": "odamy / odamak"
  },
  {
   "id": "voc-preposicoes-waraya",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "atrás de mim · de você (m) · dele — وَرا + sufixo",
   "ar": "ورايا / وَراك / وَراه",
   "arabizi": "waraya / warak / warah"
  },
  {
   "id": "voc-preposicoes-waraya-sho8l",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "ter coisas a fazer (وَرا + sufixo): tenho muito trabalho hoje",
   "ar": "ورايا شُغل كِتير النهاردة",
   "arabizi": "waraya sho8l ketir enaharda"
  },
  {
   "id": "voc-preposicoes-gambak",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "ao seu lado (m / f) — جَنب + sufixo",
   "ar": "جَنبَك / جَنبِك",
   "arabizi": "gambak / gambek"
  },
  {
   "id": "voc-sentimentos-zah2ana",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "chateada / entediada (f)",
   "ar": "زَهقانة",
   "arabizi": "zah2ana"
  },
  {
   "id": "voc-comida-tamr-madgul",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "tâmaras Medjool",
   "ar": "تَمر مَدجول",
   "arabizi": "tamr madgul"
  },
  {
   "id": "voc-saudacoes-wa7ashteny",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "Sinto sua falta / saudades (para homem / para mulher)",
   "ar": "وَحَشتِني / وَحَشتيني",
   "arabizi": "wa7ashteny / wa7ashtiny"
  },
  {
   "id": "voc-comida-mal7",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "sal",
   "ar": "مَلح",
   "arabizi": "mal7"
  },
  {
   "id": "voc-comida-shatta",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "pimenta (picante)",
   "ar": "شَطة",
   "arabizi": "shatta"
  },
  {
   "id": "voc-lugares-banzina",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "posto de gasolina",
   "ar": "بَنزينة",
   "arabizi": "banzina"
  },
  {
   "id": "voc-lugares-marua7a",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "ventilador",
   "ar": "مَروَحة",
   "arabizi": "marua7a"
  },
  {
   "id": "voc-lugares-takiif",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "ar-condicionado",
   "ar": "تَكييف",
   "arabizi": "takiif"
  },
  {
   "id": "voc-lugares-serir",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "cama",
   "ar": "سِرير",
   "arabizi": "serir"
  },
  {
   "id": "voc-lugares-shebak",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "janela",
   "ar": "شِباك",
   "arabizi": "shebak"
  },
  {
   "id": "voc-sentimentos-morhaq",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "cansado, sem energia (exausto)",
   "ar": "مُرهَق",
   "arabizi": "morhaq"
  },
  {
   "id": "voc-sentimentos-bard",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "gripe / resfriado (ter gripe = عَند + بَرد)",
   "ar": "بَرد",
   "arabizi": "bard"
  },
  {
   "id": "voc-preposicoes-orayeb-meni",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "perto de mim",
   "ar": "قُرَيِب مِني",
   "arabizi": "orayeb meni"
  },
  {
   "id": "voc-preposicoes-orayeb-menak",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "perto de você (m / f)",
   "ar": "قُرَيِب مِنَك / مِنِك",
   "arabizi": "orayeb menak / menek"
  },
  {
   "id": "voc-preposicoes-orayeb-menku",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "perto de vocês",
   "ar": "قُرَيِب مِنكوا",
   "arabizi": "orayeb menku"
  },
  {
   "id": "voc-preposicoes-be3id-3ani",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "longe de mim",
   "ar": "بِعيد عَني",
   "arabizi": "be3id 3ani"
  },
  {
   "id": "voc-preposicoes-be3id-3anha-3anhom",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "longe dela / longe deles",
   "ar": "بِعيد عَنها / عَنهُم",
   "arabizi": "be3id 3anha / 3anhom"
  },
  {
   "id": "voc-preposicoes-gamby",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "ao meu lado",
   "ar": "جَنبي",
   "arabizi": "gamby"
  },
  {
   "id": "voc-preposicoes-gambaha-gambena",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "ao lado dela / ao nosso lado",
   "ar": "جَنبَها / جَنبِنا",
   "arabizi": "gambaha / gambena"
  },
  {
   "id": "voc-preposicoes-warak-waraki",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "atrás de você (m / f)",
   "ar": "وَراك / وَراكي",
   "arabizi": "warak / waraki"
  },
  {
   "id": "voc-sentimentos-re5em-re5ma",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "chato / chata (pessoa)",
   "ar": "رِخِم / رِخمة",
   "arabizi": "re5em / re5ma"
  },
  {
   "id": "voc-comida-keka",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "bolo (keka)",
   "ar": "كيكة",
   "arabizi": "keka"
  },
  {
   "id": "voc-comida-messakar-messakara",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "doce (sabor, m/f)",
   "ar": "مِسَكَر / مِسَكَرة",
   "arabizi": "messakar / messakara"
  },
  {
   "id": "voc-comida-memala7-memala7a",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "salgado / salgada",
   "ar": "مِمَلَح / مِمَلَحة",
   "arabizi": "memala7 / memala7a"
  },
  {
   "id": "voc-lugares-genina",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "parque (jardim)",
   "ar": "جنينة",
   "arabizi": "genina"
  },
  {
   "id": "voc-sentimentos-nos-nos",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "mais ou menos (estou)",
   "ar": "نُص نُص",
   "arabizi": "nos nos"
  },
  {
   "id": "voc-sentimentos-mesh-a7san-7aga",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "não estou no meu melhor (não é a melhor coisa)",
   "ar": "مِش أحسَن حاجة",
   "arabizi": "mesh a7san 7aga"
  },
  {
   "id": "voc-sentimentos-mesada3",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "com dor de cabeça (m / f / pl)",
   "ar": "مِصَدَع / مِصدعة / مِصدعين",
   "arabizi": "mesada3 / mesad3a / mesad3in"
  },
  {
   "id": "voc-sentimentos-metdaye2",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "chateado / chateada (irritado)",
   "ar": "مِتضايِق / مِتضايقة",
   "arabizi": "metdaye2 / metday2a"
  },
  {
   "id": "voc-preposicoes-le2an",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "porque (= لِأن · لأُنه = porque ele)",
   "ar": "لِأن",
   "arabizi": "le2an"
  },
  {
   "id": "voc-preposicoes-lamma",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "quando (não-pergunta; pergunta = امتى)",
   "ar": "لَمّا",
   "arabizi": "lamma"
  },
  {
   "id": "voc-preposicoes-abadan",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "nunca (com negação)",
   "ar": "أبداً",
   "arabizi": "abadan"
  },
  {
   "id": "voc-preposicoes-tany",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "de novo",
   "ar": "تاني",
   "arabizi": "tany"
  },
  {
   "id": "voc-preposicoes-kaza-marra",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "várias vezes",
   "ar": "كِذا مَرّة",
   "arabizi": "kaza marra"
  },
  {
   "id": "voc-comida-diet",
   "cat": "comida",
   "catLabel": "Comida",
   "pt": "dieta (fazer dieta: بِنِعمِل دايت)",
   "ar": "دايت (رِجيم)",
   "arabizi": "diet"
  },
  {
   "id": "voc-sentimentos-za3lan-za3lana",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "triste / chateado (m / f) — Aula 91",
   "ar": "زَعلان / زَعلانة",
   "arabizi": "za3lan / za3lana"
  },
  {
   "id": "voc-preposicoes-masalan",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "por exemplo",
   "ar": "مَثَلاً",
   "arabizi": "masalan"
  },
  {
   "id": "voc-preposicoes-kaza-youm",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "alguns dias (vários dias)",
   "ar": "كِذا يوم",
   "arabizi": "kaza youm"
  },
  {
   "id": "voc-preposicoes-kol-7aga",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "tudo (todas as coisas)",
   "ar": "كُل حاجة",
   "arabizi": "kol 7aga"
  },
  {
   "id": "voc-preposicoes-7aleyan",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "atualmente",
   "ar": "حالياً",
   "arabizi": "7aleyan"
  },
  {
   "id": "voc-preposicoes-yemken",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "talvez (futuro incerto) — Aula 93",
   "ar": "يِمكِن",
   "arabizi": "yemken"
  },
  {
   "id": "voc-preposicoes-e7temal",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "talvez / provavelmente (احتِمال) — Aula 93",
   "ar": "احتِمال",
   "arabizi": "e7temal"
  },
  {
   "id": "voc-preposicoes-gayez",
   "cat": "preposicoes",
   "catLabel": "Preposições",
   "pt": "talvez / pode ser (جايِز) — Aula 93",
   "ar": "جايِز",
   "arabizi": "gayez"
  },
  {
   "id": "voc-outros-ektema3",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "reunião",
   "ar": "إجتِماع",
   "arabizi": "ektema3"
  },
  {
   "id": "voc-outros-mohem",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "importante (m / f / pl)",
   "ar": "مُهِم / مُهِمة / مُهِمين",
   "arabizi": "mohem / mohema / mohemin"
  },
  {
   "id": "voc-outros-3adatan",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "normalmente",
   "ar": "عادةً",
   "arabizi": "3adatan"
  },
  {
   "id": "voc-outros-karar",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "decidiu",
   "ar": "قَرَر",
   "arabizi": "karar"
  },
  {
   "id": "voc-outros-seua2a",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "dirigir (a direção)",
   "ar": "سِواقة",
   "arabizi": "seua2a"
  },
  {
   "id": "voc-outros-beista8el",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "aproveita (ele aproveita)",
   "ar": "بيستغِل",
   "arabizi": "beista8el"
  },
  {
   "id": "voc-outros-forsa",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "oportunidade",
   "ar": "فُرصة",
   "arabizi": "forsa"
  },
  {
   "id": "voc-outros-7essas",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "aulas (as sessões)",
   "ar": "حِصَص",
   "arabizi": "7essas"
  },
  {
   "id": "voc-outros-ro5sa",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "carteira de motorista",
   "ar": "رُخصة",
   "arabizi": "ro5sa"
  },
  {
   "id": "voc-outros-mashakel",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "problemas",
   "ar": "مَشاكِل",
   "arabizi": "mashakel"
  },
  {
   "id": "voc-outros-kal-3ada",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "como sempre (como de costume)",
   "ar": "كالعادة",
   "arabizi": "kal 3ada"
  },
  {
   "id": "voc-outros-ana-bagi",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "eu venho",
   "ar": "أنا بَجي",
   "arabizi": "ana bagi"
  },
  {
   "id": "voc-outros-tafassil",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "detalhes",
   "ar": "تَفاصِيل",
   "arabizi": "tafassil"
  },
  {
   "id": "voc-outros-shonat",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "malas",
   "ar": "شُنَط",
   "arabizi": "shonat"
  },
  {
   "id": "voc-outros-shater",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "bom / competente",
   "ar": "شاطِر",
   "arabizi": "shater"
  },
  {
   "id": "voc-outros-a7ya2",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "matéria: biologia",
   "ar": "أحياء",
   "arabizi": "a7ya2"
  },
  {
   "id": "voc-outros-go8rafya",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "matéria: geografia",
   "ar": "جُغرافيا",
   "arabizi": "go8rafya"
  },
  {
   "id": "voc-outros-tari5",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "matéria: história",
   "ar": "تاريخ",
   "arabizi": "tari5"
  },
  {
   "id": "voc-sentimentos-mota7ames",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "animado (m / f / pl)",
   "ar": "مُتحَمِس / مُتحَمِسة / مُتحَمِسين",
   "arabizi": "mota7ames / mota7amesa / mota7amesin"
  },
  {
   "id": "voc-sentimentos-mesta3gel",
   "cat": "sentimentos",
   "catLabel": "Sentimentos",
   "pt": "com pressa (m / f / pl)",
   "ar": "مِستعجِل / مِستعجِلة / مِستعجلين",
   "arabizi": "mesta3gel / mesta3gela / mesta3gelin"
  },
  {
   "id": "voc-lugares-7eta",
   "cat": "lugares",
   "catLabel": "Lugares",
   "pt": "lugar (حِتة)",
   "ar": "حِتة",
   "arabizi": "7eta"
  },
  {
   "id": "voc-saudacoes-metef2in",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "combinado",
   "ar": "مِتفِقين",
   "arabizi": "metef2in"
  },
  {
   "id": "voc-saudacoes-ashufek-kaman-shewia",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "até daqui a pouco (f)",
   "ar": "أشوفِك كمان شوية",
   "arabizi": "ashufek kaman shewia"
  },
  {
   "id": "voc-saudacoes-eh-el-a5bar",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "quais as novidades?",
   "ar": "إيه الأخبار؟",
   "arabizi": "eh el a5bar?"
  },
  {
   "id": "voc-saudacoes-sanya-wa7da",
   "cat": "saudacoes",
   "catLabel": "Saudações",
   "pt": "um segundo (só um instante)",
   "ar": "ثانية واحدة",
   "arabizi": "sanya wa7da"
  },
  {
   "id": "voc-preposicoes-elma7al-da-belcream-da",
   "cat": "preposicoes",
   "catLabel": "Preposições e conectores",
   "pt": "esse (vem DEPOIS do substantivo): dessa loja / com esse creme",
   "ar": "المَحَل ده · بالكريم ده",
   "arabizi": "elma7al da · belcream da",
   "imp": 1
  },
  {
   "id": "voc-preposicoes-ana-3and-maria",
   "cat": "preposicoes",
   "catLabel": "Preposições e conectores",
   "pt": "estar no lugar de alguém (na casa de)",
   "ar": "أنا عَند ماريا",
   "arabizi": "Ana 3and Maria",
   "imp": 1
  },
  {
   "id": "voc-preposicoes-leua7dak-leua7dek-leua7dena-leua7doku-le",
   "cat": "preposicoes",
   "catLabel": "Preposições e conectores",
   "pt": "sozinho: você m/f · nós (Aula 81) · vocês · eles (paradigma لِوَحد)",
   "ar": "لِوَحدَك / لِوَحدِك · لِوَحدِنا · لِوَحدُكوا · لِوَحدُهُم",
   "arabizi": "leua7dak / leua7dek · leua7dena · leua7doku · leua7dohom",
   "imp": 1
  },
  {
   "id": "voc-preposicoes-ma3aya-ma3aku",
   "cat": "preposicoes",
   "catLabel": "Preposições e conectores",
   "pt": "comigo · com vocês (Aula 81)",
   "ar": "معايا · معاكوا",
   "arabizi": "ma3aya · ma3aku",
   "imp": 1
  },
  {
   "id": "voc-preposicoes-au-walla",
   "cat": "preposicoes",
   "catLabel": "Preposições e conectores",
   "pt": "ou (entre opções) · ou então",
   "ar": "أو · ولا",
   "arabizi": "au · walla",
   "imp": 1
  },
  {
   "id": "voc-preposicoes-orayeb-meni-menak-menek-menha-menku",
   "cat": "preposicoes",
   "catLabel": "Preposições e conectores",
   "pt": "perto de mim · de você (m/f) · dela · de vocês — Aula 84",
   "ar": "قُرَيِب مِني · مِنَك / مِنِك · مِنها · مِنكوا",
   "arabizi": "orayeb meni · menak / menek · menha · menku",
   "imp": 1
  },
  {
   "id": "voc-preposicoes-be3id-3ani-3anha-3anhom",
   "cat": "preposicoes",
   "catLabel": "Preposições e conectores",
   "pt": "longe de mim · dela · deles — Aula 84",
   "ar": "بِعيد عَني · عَنها · عَنهُم",
   "arabizi": "be3id 3ani · 3anha · 3anhom",
   "imp": 1
  },
  {
   "id": "voc-preposicoes-gamby-gambaha-gambena",
   "cat": "preposicoes",
   "catLabel": "Preposições e conectores",
   "pt": "ao meu lado · ao lado dela · ao nosso lado — Aulas 84-85",
   "ar": "جَنبي · جَنبَها · جَنبِنا",
   "arabizi": "gamby · gambaha · gambena",
   "imp": 1
  },
  {
   "id": "voc-preposicoes-be-bel3arabi-shay-bellaban-beltayara",
   "cat": "preposicoes",
   "catLabel": "Preposições e conectores",
   "pt": "bi- = em (idioma) · com (comida) · de (transporte) — Aula 90",
   "ar": "بِـ · بالعربي · شاي باللبن · بالطيارة",
   "arabizi": "be- · bel3arabi · shay bellaban · beltayara",
   "imp": 1
  },
  {
   "id": "voc-negacao-ma-verbo-sh",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "«Sanduíche» — o ما...ـش envolve o verbo como o pão envolve o recheio (imagem da professora)",
   "ar": "ما + الفِعل + ـش",
   "arabizi": "ma + verbo + sh",
   "imp": 1
  },
  {
   "id": "voc-negacao-o-som-muda-a-escrita-nao",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "AULA 78 · mudanças fonéticas dentro da sanduíche: U→O · I→E · B→P · G→K",
   "ar": "ما + الفِعل + ـش",
   "arabizi": "o som muda, a escrita não",
   "imp": 1
  },
  {
   "id": "voc-negacao-e7na-maben7epsh",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "B→P · nós não gostamos",
   "ar": "احنا مابنحبِش",
   "arabizi": "E7na maben7epsh",
   "imp": 1
  },
  {
   "id": "voc-negacao-enta-mabteshrapsh",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "B→P · você não bebe",
   "ar": "انتَ مابتشَربش",
   "arabizi": "Enta mabteshrapsh",
   "imp": 1
  },
  {
   "id": "voc-negacao-heya-mabet7epesh",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "B→P · ela não gosta",
   "ar": "هي مابتحِبش",
   "arabizi": "heya mabet7epesh",
   "imp": 1
  },
  {
   "id": "voc-negacao-mabietfaraksh",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "G→K · ele não assiste",
   "ar": "مابيتفرجش",
   "arabizi": "mabietfaraksh",
   "imp": 1
  },
  {
   "id": "voc-negacao-enta-mabete8selsh",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "I→E · você não escova",
   "ar": "انتَ مابتغسلش",
   "arabizi": "Enta mabete8selsh",
   "imp": 1
  },
  {
   "id": "voc-negacao-entu-mabetakolush",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "U→O · vocês não comem (forma derivada, não ditada em aula)",
   "ar": "انتوا مابتاكلوش",
   "arabizi": "Entu mabetakolush",
   "imp": 1
  },
  {
   "id": "voc-negacao-ana-maba7ebesh",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "⚠ a mudança é de SOM, não de escrita — a professora também escreve maba7ebesh para أنا مابحبش",
   "ar": "أنا مابحبش",
   "arabizi": "Ana maba7ebesh",
   "imp": 1
  },
  {
   "id": "voc-negacao-ana-mesh-brazily",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "1· sem verbo: não sou brasileiro",
   "ar": "أنا مِش برازيلي",
   "arabizi": "Ana mesh brazily",
   "imp": 1
  },
  {
   "id": "voc-negacao-ana-mesh-esmy-mohamed",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "1· sem verbo: não me chamo Mohamed",
   "ar": "أنا مِش اسمي مَحَمد",
   "arabizi": "Ana mesh esmy Mohamed",
   "imp": 1
  },
  {
   "id": "voc-negacao-ana-mesh-mei7tag-maya",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "2· verbo irregular: não preciso de água",
   "ar": "أنا مِش مِحتاج ماية",
   "arabizi": "Ana mesh mei7tag maya",
   "imp": 1
  },
  {
   "id": "voc-negacao-ana-mesh-3aeiz-a5rog-bokra",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "2· verbo irregular: não quero sair amanhã",
   "ar": "أنا مِش عايِز أخرُج بُكرة",
   "arabizi": "Ana mesh 3aeiz a5rog bokra",
   "imp": 1
  },
  {
   "id": "voc-negacao-ana-mabakolsh-la7ma",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "3· presente (ما...ـش): não como carne",
   "ar": "أنا ماباكُلش لَحمة",
   "arabizi": "Ana mabakolsh la7ma",
   "imp": 1
  },
  {
   "id": "voc-negacao-ana-mesh-bakol-la7ma",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "3· presente (مِش): não como carne",
   "ar": "أنا مِش باكُل لَحمة",
   "arabizi": "Ana mesh bakol la7ma",
   "imp": 1
  },
  {
   "id": "voc-negacao-ana-mabnamsh-badry-kol-youm",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "3· presente: não durmo cedo todos os dias",
   "ar": "أنا مابنامش بَدري كل يوم",
   "arabizi": "Ana mabnamsh badry kol youm",
   "imp": 1
  },
  {
   "id": "voc-negacao-ana-mesh-haru7-elcinema-bokra",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "4· futuro (só مِش): não vou ao cinema amanhã",
   "ar": "أنا مِش هَروح السينما بكرة",
   "arabizi": "Ana mesh haru7 elcinema bokra",
   "imp": 1
  },
  {
   "id": "voc-negacao-ali-mesh-haieshta8al-elosbu3-elgay",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "4· futuro: Ali não vai trabalhar na semana que vem",
   "ar": "علي مِش هيشتغل الأسبوع الجاي",
   "arabizi": "Ali mesh haieshta8al elosbu3 elgay",
   "imp": 1
  },
  {
   "id": "voc-negacao-3ashan-matakolsh-barra",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "5· para não … : para não comer fora",
   "ar": "عشان ماتاكُلش برة",
   "arabizi": "3ashan matakolsh barra",
   "imp": 1
  },
  {
   "id": "voc-negacao-3ashan-maru7sh-elmaktab",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "5· para não … : para não ir ao escritório",
   "ar": "عشان ماروحش المَكتب",
   "arabizi": "3ashan maru7sh elmaktab",
   "imp": 1
  },
  {
   "id": "voc-negacao-ana-maro7tesh-elsupermarket-embare7",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "6· passado (ما...ـش): não fui ao supermercado ontem",
   "ar": "أنا مارُحتش السوبرماركت امبارح",
   "arabizi": "Ana maro7tesh elsupermarket embare7",
   "imp": 1
  },
  {
   "id": "voc-negacao-e3mel-keda",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "7· imperativo: faça isso",
   "ar": "اِعمِل كِدة",
   "arabizi": "E3mel keda",
   "imp": 1
  },
  {
   "id": "voc-negacao-mate3melsh-keda",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "7· imperativo negativo: não faça aquilo",
   "ar": "ماتِعمِلش كِدة",
   "arabizi": "Mate3melsh keda",
   "imp": 1
  },
  {
   "id": "voc-negacao-ana-3aref-ana-mesh-3aref",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "eu sei / eu não sei",
   "ar": "أنا عارِف / أنا مِش عارِف",
   "arabizi": "Ana 3aref / Ana mesh 3aref",
   "imp": 1
  },
  {
   "id": "voc-negacao-ana-mabaraua2sh-elbeit-bas-ana-banadaf-o",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "«bas» com negação: não arrumo a casa, mas eu limpo o meu quarto",
   "ar": "أنا مابَرَوقش البيت بس أنا بَنَضَف أوضتي",
   "arabizi": "Ana mabaraua2sh elbeit bas ana banadaf odty",
   "imp": 1
  },
  {
   "id": "voc-negacao-mabte2rash-leh-mabte2rish-leh",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "pergunta negativa (m / f): por que você não lê?",
   "ar": "مابتقراش … ليه؟ / مابتقريش … ليه؟",
   "arabizi": "mabte2rash … leh? / mabte2rish … leh?",
   "imp": 1
  },
  {
   "id": "voc-negacao-ma3and-sh",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "AULA 79 · não ter: ما + عَند + ـش",
   "ar": "ماعَندي...ش",
   "arabizi": "ma3and...sh",
   "imp": 1
  },
  {
   "id": "voc-negacao-ana-ma3andish",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "eu não tenho",
   "ar": "أنا ماعنديش",
   "arabizi": "Ana ma3andish",
   "imp": 1
  },
  {
   "id": "voc-negacao-enta-ma3andaksh",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "você não tem (m)",
   "ar": "انتَ ماعَندَكش",
   "arabizi": "Enta ma3andaksh",
   "imp": 1
  },
  {
   "id": "voc-negacao-enti-ma3andekish",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "você não tem (f)",
   "ar": "انتي ماعندِكيش",
   "arabizi": "Enti ma3andekish",
   "imp": 1
  },
  {
   "id": "voc-negacao-howa-ma3andush",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "ele não tem",
   "ar": "هُوَ ماعندوش",
   "arabizi": "Howa ma3andush",
   "imp": 1
  },
  {
   "id": "voc-negacao-heya-ma3andahash",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "ela não tem",
   "ar": "هي ماعندَهاش",
   "arabizi": "Heya ma3andahash",
   "imp": 1
  },
  {
   "id": "voc-negacao-e7na-ma3andenash",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "nós não temos",
   "ar": "احنا ماعَندِناش",
   "arabizi": "E7na ma3andenash",
   "imp": 1
  },
  {
   "id": "voc-negacao-entu-ma3andokush",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "vocês não têm",
   "ar": "انتوا ماعندكوش",
   "arabizi": "Entu ma3andokush",
   "imp": 1
  },
  {
   "id": "voc-negacao-homa-ma3andohomsh",
   "cat": "negacao",
   "catLabel": "Negação · مِش / ما...ـش",
   "pt": "eles não têm",
   "ar": "هُما ماعَندُهُمش",
   "arabizi": "Homa ma3andohomsh",
   "imp": 1
  },
  {
   "id": "voc-transporte-3arabeya",
   "cat": "transporte",
   "catLabel": "Transporte",
   "pt": "carro",
   "ar": "عَرَبية",
   "arabizi": "3arabeya",
   "imp": 1
  },
  {
   "id": "voc-transporte-bel-3arabeya",
   "cat": "transporte",
   "catLabel": "Transporte",
   "pt": "de carro",
   "ar": "بالعَرَبية",
   "arabizi": "bel-3arabeya",
   "imp": 1
  },
  {
   "id": "voc-transporte-el-metro",
   "cat": "transporte",
   "catLabel": "Transporte",
   "pt": "metrô",
   "ar": "المِترو",
   "arabizi": "el-metro",
   "imp": 1
  },
  {
   "id": "voc-transporte-bel-metro",
   "cat": "transporte",
   "catLabel": "Transporte",
   "pt": "de metrô",
   "ar": "بالمِترو",
   "arabizi": "bel-metro",
   "imp": 1
  },
  {
   "id": "voc-transporte-otobis",
   "cat": "transporte",
   "catLabel": "Transporte",
   "pt": "ônibus",
   "ar": "أوتوبيس",
   "arabizi": "otobis",
   "imp": 1
  },
  {
   "id": "voc-transporte-ta5od-el-otobis",
   "cat": "transporte",
   "catLabel": "Transporte",
   "pt": "pegar o ônibus",
   "ar": "تاخُد الأوتوبيس",
   "arabizi": "ta5od el-otobis",
   "imp": 1
  },
  {
   "id": "voc-transporte-taksy",
   "cat": "transporte",
   "catLabel": "Transporte",
   "pt": "táxi",
   "ar": "تاكسي",
   "arabizi": "taksy",
   "imp": 1
  },
  {
   "id": "voc-transporte-motosekl",
   "cat": "transporte",
   "catLabel": "Transporte",
   "pt": "motocicleta",
   "ar": "موتوسيكل",
   "arabizi": "motosekl",
   "imp": 1
  },
  {
   "id": "voc-transporte-3agala",
   "cat": "transporte",
   "catLabel": "Transporte",
   "pt": "bicicleta",
   "ar": "عَجَلة",
   "arabizi": "3agala",
   "imp": 1
  },
  {
   "id": "voc-transporte-tayara",
   "cat": "transporte",
   "catLabel": "Transporte",
   "pt": "avião",
   "ar": "طَيّارة",
   "arabizi": "tayara",
   "imp": 1
  },
  {
   "id": "voc-transporte-2atr",
   "cat": "transporte",
   "catLabel": "Transporte",
   "pt": "trem",
   "ar": "قَطر",
   "arabizi": "2atr",
   "imp": 1
  },
  {
   "id": "voc-transporte-3ala-regly",
   "cat": "transporte",
   "catLabel": "Transporte",
   "pt": "a pé",
   "ar": "على رِجلي",
   "arabizi": "3ala regly",
   "imp": 1
  },
  {
   "id": "voc-transporte-microbus",
   "cat": "transporte",
   "catLabel": "Transporte",
   "pt": "micro-ônibus",
   "ar": "ميكروباص",
   "arabizi": "microbus",
   "imp": 1
  },
  {
   "id": "voc-transporte-markeb",
   "cat": "transporte",
   "catLabel": "Transporte",
   "pt": "barco",
   "ar": "مَركِب",
   "arabizi": "markeb",
   "imp": 1
  },
  {
   "id": "voc-transporte-safina",
   "cat": "transporte",
   "catLabel": "Transporte",
   "pt": "navio",
   "ar": "سَفينة",
   "arabizi": "safina",
   "imp": 1
  },
  {
   "id": "voc-transporte-mashy",
   "cat": "transporte",
   "catLabel": "Transporte",
   "pt": "a pé (caminhando)",
   "ar": "مَشي",
   "arabizi": "mashy",
   "imp": 1
  },
  {
   "id": "voc-transporte-el-mouaslat-el-3ama",
   "cat": "transporte",
   "catLabel": "Transporte",
   "pt": "transporte público",
   "ar": "المواصلات العامة",
   "arabizi": "el mouaslat el 3ama",
   "imp": 1
  },
  {
   "id": "voc-transporte-sayara",
   "cat": "transporte",
   "catLabel": "Transporte",
   "pt": "carro (variante da Aula 79)",
   "ar": "سَيارة",
   "arabizi": "sayara",
   "imp": 1
  },
  {
   "id": "voc-transporte-beskeleta",
   "cat": "transporte",
   "catLabel": "Transporte",
   "pt": "bicicleta (variante da Aula 80)",
   "ar": "بِسكِلِتة",
   "arabizi": "beskeleta",
   "imp": 1
  },
  {
   "id": "voc-tempo-sa3a",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "hora / relógio",
   "ar": "ساعة",
   "arabizi": "sa3a",
   "imp": 1
  },
  {
   "id": "voc-tempo-el-sa3a-tamanya",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "às 8 horas",
   "ar": "الساعة تَمانية",
   "arabizi": "el-sa3a tamanya",
   "imp": 1
  },
  {
   "id": "voc-tempo-el-sob7",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "manhã",
   "ar": "الصُبح",
   "arabizi": "el-sob7",
   "imp": 1
  },
  {
   "id": "voc-tempo-el-dohr",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "meio-dia",
   "ar": "الضُهر",
   "arabizi": "el-dohr",
   "imp": 1
  },
  {
   "id": "voc-tempo-el-3asr-ba3d-el-dohr",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "à tarde",
   "ar": "العَصر / بَعد الضُهر",
   "arabizi": "el-3asr / ba3d el-dohr",
   "imp": 1
  },
  {
   "id": "voc-tempo-beleil",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "à noite",
   "ar": "بِليل",
   "arabizi": "beleil",
   "imp": 1
  },
  {
   "id": "voc-tempo-ba3d-bokra",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "depois de amanhã",
   "ar": "بَعد بُكرة",
   "arabizi": "ba3d bokra",
   "imp": 1
  },
  {
   "id": "voc-tempo-osbu3",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "semana",
   "ar": "أُسبوع",
   "arabizi": "osbu3",
   "imp": 1
  },
  {
   "id": "voc-tempo-el-osbu3-da",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "esta semana",
   "ar": "الأُسبوع ده",
   "arabizi": "el-osbu3 da",
   "imp": 1
  },
  {
   "id": "voc-tempo-el-osbu3-elly-gay",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "semana que vem",
   "ar": "الأُسبوع اللي جاي",
   "arabizi": "el-osbu3 elly gay",
   "imp": 1
  },
  {
   "id": "voc-tempo-shahr",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "mês",
   "ar": "شَهر",
   "arabizi": "shahr",
   "imp": 1
  },
  {
   "id": "voc-tempo-el-shahr-elly-gay",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "mês que vem",
   "ar": "الشَهر اللي جاي",
   "arabizi": "el-shahr elly gay",
   "imp": 1
  },
  {
   "id": "voc-tempo-sana",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "ano",
   "ar": "سَنة",
   "arabizi": "sana",
   "imp": 1
  },
  {
   "id": "voc-tempo-agaza",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "feriado",
   "ar": "أجازة",
   "arabizi": "agaza",
   "imp": 1
  },
  {
   "id": "voc-tempo-daiman",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "sempre",
   "ar": "دائِمًا",
   "arabizi": "daiman",
   "imp": 1
  },
  {
   "id": "voc-tempo-we-sa3at",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "outras vezes",
   "ar": "وساعات",
   "arabizi": "we sa3at",
   "imp": 1
  },
  {
   "id": "voc-tempo-lessa",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "ainda (com negação)",
   "ar": "لِسة",
   "arabizi": "lessa",
   "imp": 1
  },
  {
   "id": "voc-tempo-7awaly-nos-nos",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "mais ou menos",
   "ar": "حَوالي / نُص نُص",
   "arabizi": "7awaly / nos nos",
   "imp": 1
  },
  {
   "id": "voc-tempo-2abl-el-sa3a-3ashara",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "antes das 10h",
   "ar": "قَبل الساعة عَشَرة",
   "arabizi": "2abl el-sa3a 3ashara",
   "imp": 1
  },
  {
   "id": "voc-tempo-zay-kol-yom",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "como todos os dias",
   "ar": "زي كُل يوم",
   "arabizi": "zay kol yom",
   "imp": 1
  },
  {
   "id": "voc-tempo-3id-milad",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "aniversário",
   "ar": "عيد مِلاد",
   "arabizi": "3id milad",
   "imp": 1
  },
  {
   "id": "voc-tempo-sa3ten",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "duas horas",
   "ar": "ساعتين",
   "arabizi": "sa3ten",
   "imp": 1
  },
  {
   "id": "voc-tempo-3id-el-milad",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "Natal",
   "ar": "عيد الميلاد",
   "arabizi": "3id el milad",
   "imp": 1
  },
  {
   "id": "voc-tempo-el-carnaval",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "Carnaval",
   "ar": "الكَرنَفال",
   "arabizi": "el carnaval",
   "imp": 1
  },
  {
   "id": "voc-tempo-el-krismas",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "Natal (variante das aulas)",
   "ar": "الكريسماس",
   "arabizi": "el krismas",
   "imp": 1
  },
  {
   "id": "voc-tempo-ras-elsana",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "ano novo",
   "ar": "راس السنة",
   "arabizi": "ras elsana",
   "imp": 1
  },
  {
   "id": "voc-tempo-sheta",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "inverno",
   "ar": "شِتا",
   "arabizi": "sheta",
   "imp": 1
  },
  {
   "id": "voc-tempo-aa5er",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "final / fim de (o final do mês)",
   "ar": "آخِر",
   "arabizi": "aa5er",
   "imp": 1
  },
  {
   "id": "voc-tempo-de2i2a",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "minuto",
   "ar": "دِقيقة",
   "arabizi": "de2i2a",
   "imp": 1
  },
  {
   "id": "voc-tempo-elsana-di",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "este ano",
   "ar": "السَنة دي",
   "arabizi": "elsana di",
   "imp": 1
  },
  {
   "id": "voc-tempo-wa2t",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "tempo (duração)",
   "ar": "وَقت",
   "arabizi": "wa2t",
   "imp": 1
  },
  {
   "id": "voc-tempo-da2aye2",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "minutos — Aula 87",
   "ar": "دقايق",
   "arabizi": "da2aye2",
   "imp": 1
  },
  {
   "id": "voc-tempo-ba2aly-sana-bazaker-3arabi",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "faz (tempo) que… · بَقال + sufixo + tempo + verbo (eu: بَقالي) — Aula 87",
   "ar": "بَقالي سنة بَذاكِر عربي",
   "arabizi": "ba2aly sana bazaker 3arabi",
   "imp": 1
  },
  {
   "id": "voc-tempo-ba2aly-ketir",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "faz muito tempo que eu…",
   "ar": "بَقالي كتير",
   "arabizi": "ba2aly ketir",
   "imp": 1
  },
  {
   "id": "voc-tempo-tul-7ayaty",
   "cat": "tempo",
   "catLabel": "Tempo",
   "pt": "toda a minha vida",
   "ar": "طول حياتي",
   "arabizi": "tul 7ayaty",
   "imp": 1
  },
  {
   "id": "voc-sentimentos-farkasha",
   "cat": "sentimentos",
   "catLabel": "Sentimentos e estados",
   "pt": "bagunça (substantivo) — Aula 87",
   "ar": "فَركَشة",
   "arabizi": "farkasha",
   "imp": 1
  },
  {
   "id": "voc-sentimentos-nefsak-nefsek-nefso-nefsaha",
   "cat": "sentimentos",
   "catLabel": "Sentimentos e estados",
   "pt": "vontade: você m/f · ele · ela",
   "ar": "نِفسَك / نِفسِك · نِفسُه · نِفسَها",
   "arabizi": "nefsak / nefsek · nefso · nefsaha",
   "imp": 1
  },
  {
   "id": "voc-sentimentos-nefsena-nefsoku-nefsohom",
   "cat": "sentimentos",
   "catLabel": "Sentimentos e estados",
   "pt": "vontade: nós · vocês · eles",
   "ar": "نِفسِنا · نِفسُكوا · نِفسُهُم",
   "arabizi": "nefsena · nefsoku · nefsohom",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-kebir",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "grande",
   "ar": "كِبير",
   "arabizi": "kebir",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-so8ayar",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "pequeno",
   "ar": "صُغَيَر",
   "arabizi": "so8ayar",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-gedid-gedida",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "novo / nova",
   "ar": "جِديد / جِديدة",
   "arabizi": "gedid / gedida",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-2adim",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "velho / antigo",
   "ar": "قَديم",
   "arabizi": "2adim",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-8aly",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "caro",
   "ar": "غالي",
   "arabizi": "8aly",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-re5is",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "barato",
   "ar": "رِخيص",
   "arabizi": "re5is",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-gamil-7elw",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "bonito",
   "ar": "جَميل / حِلو",
   "arabizi": "gamil / 7elw",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-we7esh",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "feio",
   "ar": "وِحِش",
   "arabizi": "we7esh",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-nedif",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "limpo",
   "ar": "نِضيف",
   "arabizi": "nedif",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-wesi5",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "sujo",
   "ar": "وِسِخ",
   "arabizi": "wesi5",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-be3id",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "longe",
   "ar": "بِعيد",
   "arabizi": "be3id",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-2orayeb",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "perto",
   "ar": "قُرَيَب",
   "arabizi": "2orayeb",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-malyan",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "cheio",
   "ar": "مَليان",
   "arabizi": "malyan",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-mo5talef-mo5talefa",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "diferente (m / f)",
   "ar": "مُختَلِف / مُختَلِفة",
   "arabizi": "mo5talef / mo5talefa",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-el-mofadal-el-mofadala",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "favorito / favorita",
   "ar": "المُفَضَل / المُفَضَلة",
   "arabizi": "el-mofadal / el-mofadala",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-8any-8aneya",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "rico / rica",
   "ar": "غَني / غَنية",
   "arabizi": "8any / 8aneya",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-sahl",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "fácil",
   "ar": "سَهل",
   "arabizi": "sahl",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-sa3b",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "difícil",
   "ar": "صَعب",
   "arabizi": "sa3b",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-gahez",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "pronto",
   "ar": "جاهِز",
   "arabizi": "gahez",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-gahza",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "pronta (f) — Aula 87",
   "ar": "جاهزة",
   "arabizi": "gahza",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-mohem",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "importante",
   "ar": "مُهِم",
   "arabizi": "mohem",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-taza",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "fresco/a",
   "ar": "طازة",
   "arabizi": "taza",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-3ady",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "normal",
   "ar": "عادي",
   "arabizi": "3ady",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-maxhur-maxhura",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "famoso (m/f)",
   "ar": "مَشهور / مَشهورة",
   "arabizi": "maxhur / maxhura",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-hady-hadya",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "calmo / quieto (m/f)",
   "ar": "هادي / هادية",
   "arabizi": "hady / hadya",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-laziz-laziza",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "delicioso (m/f)",
   "ar": "لَذيذ / لَذيذة",
   "arabizi": "laziz / laziza",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-tayeb-tayeba",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "bondoso / bom (m/f)",
   "ar": "طَيِب / طَيبة",
   "arabizi": "tayeb / tayeba",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-sa7i7",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "correto / verdadeiro",
   "ar": "صَحيح",
   "arabizi": "sa7i7",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-sa7",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "certo",
   "ar": "صَح",
   "arabizi": "sa7",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-basit-basita",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "simples (m/f)",
   "ar": "بَسيط / بَسيطة",
   "arabizi": "basit / basita",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-monazam",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "organizado",
   "ar": "مُنَظَم",
   "arabizi": "monazam",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-3ala-elma3ash",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "aposentado/a (lit. na aposentadoria)",
   "ar": "على المَعاش",
   "arabizi": "3ala elma3ash",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-taqlidy",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "típico/a",
   "ar": "تَقليدي",
   "arabizi": "taqlidy",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-zaki-zakeya",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "inteligente (m/f)",
   "ar": "ذَكي / ذَكية",
   "arabizi": "zaki / zakeya",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-so8ayar-so8ayara",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "jovem / pequeno (m/f)",
   "ar": "صُغَيَر / صُغَيَرة",
   "arabizi": "so8ayar / so8ayara",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-romansey",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "romântico",
   "ar": "رومانسي",
   "arabizi": "romansey",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-ro3b",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "de terror",
   "ar": "رُعب",
   "arabizi": "ro3b",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-wasa2eki",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "documentário (adj.)",
   "ar": "وَثائِقي",
   "arabizi": "wasa2eki",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-se7y",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "saudável",
   "ar": "صِحي",
   "arabizi": "se7y",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-2azra2",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "azul",
   "ar": "أزرَق",
   "arabizi": "2azra2",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-sahl-sahl-awi",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "fácil / muito fácil",
   "ar": "سَهل / سَهل أوي",
   "arabizi": "sahl / sahl awi",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-garayem",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "de crime (séries de crime)",
   "ar": "جَرايِم",
   "arabizi": "garayem",
   "imp": 1
  },
  {
   "id": "voc-adjetivos-latif-latifa-lotaf",
   "cat": "adjetivos",
   "catLabel": "Adjetivos comuns",
   "pt": "gentil (m / f · plural) — Aula 89",
   "ar": "لَطيف / لَطيفة · لُطاف",
   "arabizi": "latif / latifa · lotaf",
   "imp": 1
  },
  {
   "id": "voc-intensidade-awi",
   "cat": "intensidade",
   "catLabel": "Advérbios de intensidade",
   "pt": "muito (após adjetivo/verbo)",
   "ar": "أوي",
   "arabizi": "awi",
   "imp": 1
  },
  {
   "id": "voc-intensidade-ketir",
   "cat": "intensidade",
   "catLabel": "Advérbios de intensidade",
   "pt": "muito / bastante",
   "ar": "كِتير",
   "arabizi": "ketir",
   "imp": 1
  },
  {
   "id": "voc-intensidade-shouaya",
   "cat": "intensidade",
   "catLabel": "Advérbios de intensidade",
   "pt": "um pouco",
   "ar": "شُوَيّة",
   "arabizi": "shouaya",
   "imp": 1
  },
  {
   "id": "voc-intensidade-shouayet-7agat",
   "cat": "intensidade",
   "catLabel": "Advérbios de intensidade",
   "pt": "pouco / poucos (poucas coisas)",
   "ar": "شُوَيّة حاجات",
   "arabizi": "shouayet 7agat",
   "imp": 1
  },
  {
   "id": "voc-intensidade-aktar",
   "cat": "intensidade",
   "catLabel": "Advérbios de intensidade",
   "pt": "demais / mais",
   "ar": "أكتَر",
   "arabizi": "aktar",
   "imp": 1
  },
  {
   "id": "voc-intensidade-a2al",
   "cat": "intensidade",
   "catLabel": "Advérbios de intensidade",
   "pt": "menos",
   "ar": "أَقَل",
   "arabizi": "a2al",
   "imp": 1
  },
  {
   "id": "voc-intensidade-kouayes-awi",
   "cat": "intensidade",
   "catLabel": "Advérbios de intensidade",
   "pt": "muito bem",
   "ar": "كُوَيِس أوي",
   "arabizi": "kouayes awi",
   "imp": 1
  },
  {
   "id": "voc-intensidade-beisor3a",
   "cat": "intensidade",
   "catLabel": "Advérbios de intensidade",
   "pt": "rápido",
   "ar": "بِسُرعة",
   "arabizi": "beisor3a",
   "imp": 1
  },
  {
   "id": "voc-intensidade-bebata",
   "cat": "intensidade",
   "catLabel": "Advérbios de intensidade",
   "pt": "devagar",
   "ar": "بِبَطَه",
   "arabizi": "bebata",
   "imp": 1
  },
  {
   "id": "voc-intensidade-begad",
   "cat": "intensidade",
   "catLabel": "Advérbios de intensidade",
   "pt": "de verdade / realmente",
   "ar": "بِجَد",
   "arabizi": "begad",
   "imp": 1
  },
  {
   "id": "voc-intensidade-gidan",
   "cat": "intensidade",
   "catLabel": "Advérbios de intensidade",
   "pt": "muito (após verbo/adj.)",
   "ar": "جِداً",
   "arabizi": "gidan",
   "imp": 1
  },
  {
   "id": "voc-intensidade-akid",
   "cat": "intensidade",
   "catLabel": "Advérbios de intensidade",
   "pt": "com certeza",
   "ar": "أكيد",
   "arabizi": "akid",
   "imp": 1
  },
  {
   "id": "voc-intensidade-tab3an",
   "cat": "intensidade",
   "catLabel": "Advérbios de intensidade",
   "pt": "claro",
   "ar": "طَبعاً",
   "arabizi": "tab3an",
   "imp": 1
  },
  {
   "id": "voc-intensidade-belzat",
   "cat": "intensidade",
   "catLabel": "Advérbios de intensidade",
   "pt": "especialmente",
   "ar": "بالذات",
   "arabizi": "belzat",
   "imp": 1
  },
  {
   "id": "voc-intensidade-besara7a",
   "cat": "intensidade",
   "catLabel": "Advérbios de intensidade",
   "pt": "sinceramente",
   "ar": "بِصَراحة",
   "arabizi": "besara7a",
   "imp": 1
  },
  {
   "id": "voc-intensidade-betalaka",
   "cat": "intensidade",
   "catLabel": "Advérbios de intensidade",
   "pt": "fluentemente",
   "ar": "بِطَلاقة",
   "arabizi": "betalaka",
   "imp": 1
  },
  {
   "id": "voc-intensidade-kefaya",
   "cat": "intensidade",
   "catLabel": "Advérbios de intensidade",
   "pt": "suficiente",
   "ar": "كِفاية",
   "arabizi": "kefaya",
   "imp": 1
  },
  {
   "id": "voc-intensidade-7alan",
   "cat": "intensidade",
   "catLabel": "Advérbios de intensidade",
   "pt": "imediatamente / agora mesmo",
   "ar": "حالاً",
   "arabizi": "7alan",
   "imp": 1
  },
  {
   "id": "voc-intensidade-ta2riban",
   "cat": "intensidade",
   "catLabel": "Advérbios de intensidade",
   "pt": "quase",
   "ar": "تَقريباً",
   "arabizi": "ta2riban",
   "imp": 1
  },
  {
   "id": "voc-pronomes-ana",
   "cat": "pronomes",
   "catLabel": "Pronomes pessoais e possessivos",
   "pt": "eu",
   "ar": "أنا",
   "arabizi": "ana",
   "imp": 1
  },
  {
   "id": "voc-pronomes-enta",
   "cat": "pronomes",
   "catLabel": "Pronomes pessoais e possessivos",
   "pt": "você (m)",
   "ar": "اِنتَ",
   "arabizi": "enta",
   "imp": 1
  },
  {
   "id": "voc-pronomes-enty",
   "cat": "pronomes",
   "catLabel": "Pronomes pessoais e possessivos",
   "pt": "você (f)",
   "ar": "اِنتي",
   "arabizi": "enty",
   "imp": 1
  },
  {
   "id": "voc-pronomes-howa",
   "cat": "pronomes",
   "catLabel": "Pronomes pessoais e possessivos",
   "pt": "ele",
   "ar": "هُوَ",
   "arabizi": "howa",
   "imp": 1
  },
  {
   "id": "voc-pronomes-heya",
   "cat": "pronomes",
   "catLabel": "Pronomes pessoais e possessivos",
   "pt": "ela",
   "ar": "هِيَ",
   "arabizi": "heya",
   "imp": 1
  },
  {
   "id": "voc-pronomes-e7na",
   "cat": "pronomes",
   "catLabel": "Pronomes pessoais e possessivos",
   "pt": "nós",
   "ar": "اِحنا",
   "arabizi": "e7na",
   "imp": 1
  },
  {
   "id": "voc-pronomes-entu",
   "cat": "pronomes",
   "catLabel": "Pronomes pessoais e possessivos",
   "pt": "vocês",
   "ar": "انتوا",
   "arabizi": "entu",
   "imp": 1
  },
  {
   "id": "voc-pronomes-homa",
   "cat": "pronomes",
   "catLabel": "Pronomes pessoais e possessivos",
   "pt": "eles / elas",
   "ar": "هُما",
   "arabizi": "homa",
   "imp": 1
  },
  {
   "id": "voc-pronomes-y-ya",
   "cat": "pronomes",
   "catLabel": "Pronomes pessoais e possessivos",
   "pt": "meu / minha (sufixo)",
   "ar": "ـي",
   "arabizi": "-y / -ya",
   "imp": 1
  },
  {
   "id": "voc-pronomes-ak",
   "cat": "pronomes",
   "catLabel": "Pronomes pessoais e possessivos",
   "pt": "seu / sua (m, sufixo)",
   "ar": "ـَك",
   "arabizi": "-ak",
   "imp": 1
  },
  {
   "id": "voc-pronomes-ek",
   "cat": "pronomes",
   "catLabel": "Pronomes pessoais e possessivos",
   "pt": "seu / sua (f, sufixo)",
   "ar": "ـِك",
   "arabizi": "-ek",
   "imp": 1
  },
  {
   "id": "voc-pronomes-o-u",
   "cat": "pronomes",
   "catLabel": "Pronomes pessoais e possessivos",
   "pt": "dele (sufixo)",
   "ar": "ـُه",
   "arabizi": "-o / -u",
   "imp": 1
  },
  {
   "id": "voc-pronomes-ha",
   "cat": "pronomes",
   "catLabel": "Pronomes pessoais e possessivos",
   "pt": "dela (sufixo)",
   "ar": "ـها",
   "arabizi": "-ha",
   "imp": 1
  },
  {
   "id": "voc-pronomes-na",
   "cat": "pronomes",
   "catLabel": "Pronomes pessoais e possessivos",
   "pt": "nosso (sufixo)",
   "ar": "ـنا",
   "arabizi": "-na",
   "imp": 1
  },
  {
   "id": "voc-pronomes-hom",
   "cat": "pronomes",
   "catLabel": "Pronomes pessoais e possessivos",
   "pt": "deles (sufixo)",
   "ar": "ـهُم",
   "arabizi": "-hom",
   "imp": 1
  },
  {
   "id": "voc-pronomes-nafsy",
   "cat": "pronomes",
   "catLabel": "Pronomes pessoais e possessivos",
   "pt": "eu mesmo/a",
   "ar": "نَفسي",
   "arabizi": "nafsy",
   "imp": 1
  },
  {
   "id": "voc-pronomes-di",
   "cat": "pronomes",
   "catLabel": "Pronomes pessoais e possessivos",
   "pt": "esta (f)",
   "ar": "دي",
   "arabizi": "di",
   "imp": 1
  },
  {
   "id": "voc-pronomes-dol",
   "cat": "pronomes",
   "catLabel": "Pronomes pessoais e possessivos",
   "pt": "esses / essas",
   "ar": "دول",
   "arabizi": "dol",
   "imp": 1
  },
  {
   "id": "voc-pronomes-bita3y",
   "cat": "pronomes",
   "catLabel": "Pronomes pessoais e possessivos",
   "pt": "meu / minha (partícula, vem depois)",
   "ar": "بِتاعي",
   "arabizi": "bita3y",
   "imp": 1
  },
  {
   "id": "voc-compras-el-7essab",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "a conta",
   "ar": "الحِساب",
   "arabizi": "el-7essab",
   "imp": 1
  },
  {
   "id": "voc-compras-gneh",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "libra egípcia",
   "ar": "جِنيه",
   "arabizi": "gneh",
   "imp": 1
  },
  {
   "id": "voc-compras-ba2y",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "troco",
   "ar": "باقي",
   "arabizi": "ba2y",
   "imp": 1
  },
  {
   "id": "voc-compras-ha5od",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "vou pegar / vou levar",
   "ar": "هاخُد",
   "arabizi": "ha5od",
   "imp": 1
  },
  {
   "id": "voc-compras-online",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "online",
   "ar": "أونلاين",
   "arabizi": "online",
   "imp": 1
  },
  {
   "id": "voc-compras-2amis",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "camisa",
   "ar": "قَميص",
   "arabizi": "2amis",
   "imp": 1
  },
  {
   "id": "voc-compras-2omsan",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "camisas (plural)",
   "ar": "قُمصان",
   "arabizi": "2omsan",
   "imp": 1
  },
  {
   "id": "voc-compras-blousa-tshirt",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "blusa / camiseta",
   "ar": "بلوزة / تيشرت",
   "arabizi": "blousa / tshirt",
   "imp": 1
  },
  {
   "id": "voc-compras-bantalon",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "calça",
   "ar": "بَنطَلون",
   "arabizi": "bantalon",
   "imp": 1
  },
  {
   "id": "voc-compras-bantalon-jeans",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "calça jeans",
   "ar": "بَنطَلون جينز",
   "arabizi": "bantalon jeans",
   "imp": 1
  },
  {
   "id": "voc-compras-gazma",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "sapato",
   "ar": "جَزمة",
   "arabizi": "gazma",
   "imp": 1
  },
  {
   "id": "voc-compras-shanta",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "bolsa",
   "ar": "شَنطة",
   "arabizi": "shanta",
   "imp": 1
  },
  {
   "id": "voc-compras-ma7faza",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "carteira",
   "ar": "مَحفَظة",
   "arabizi": "ma7faza",
   "imp": 1
  },
  {
   "id": "voc-compras-mogauharat",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "joias — Aula 83",
   "ar": "مُجَوهَرات",
   "arabizi": "mogauharat",
   "imp": 1
  },
  {
   "id": "voc-compras-5atem",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "anel",
   "ar": "خاتِم",
   "arabizi": "5atem",
   "imp": 1
  },
  {
   "id": "voc-compras-barfan",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "perfume",
   "ar": "بَرفان",
   "arabizi": "barfan",
   "imp": 1
  },
  {
   "id": "voc-compras-tar7a",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "lenço (de cabeça)",
   "ar": "طَرحة",
   "arabizi": "tar7a",
   "imp": 1
  },
  {
   "id": "voc-compras-hedum",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "roupa",
   "ar": "هِدوم",
   "arabizi": "hedum",
   "imp": 1
  },
  {
   "id": "voc-compras-hedumy",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "minha roupa",
   "ar": "هِدومي",
   "arabizi": "hedumy",
   "imp": 1
  },
  {
   "id": "voc-compras-felus",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "dinheiro",
   "ar": "فلوس",
   "arabizi": "felus",
   "imp": 1
  },
  {
   "id": "voc-compras-zoboun",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "cliente",
   "ar": "زَبون",
   "arabizi": "zoboun",
   "imp": 1
  },
  {
   "id": "voc-compras-fostan",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "vestido",
   "ar": "فُستان",
   "arabizi": "fostan",
   "imp": 1
  },
  {
   "id": "voc-compras-jiba",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "saia",
   "ar": "جيبة",
   "arabizi": "jiba",
   "imp": 1
  },
  {
   "id": "voc-compras-leps",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "roupa (peça)",
   "ar": "لِبس",
   "arabizi": "leps",
   "imp": 1
  },
  {
   "id": "voc-compras-meqyaj",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "maquiagem",
   "ar": "مِكياج",
   "arabizi": "meqyaj",
   "imp": 1
  },
  {
   "id": "voc-compras-hadaya",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "lembrancinhas / presentes",
   "ar": "هَدايا",
   "arabizi": "hadaya",
   "imp": 1
  },
  {
   "id": "voc-compras-derham-darahem",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "dirham / dirhams",
   "ar": "دِرهَم / دراهِم",
   "arabizi": "derham / darahem",
   "imp": 1
  },
  {
   "id": "voc-compras-2alam",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "caneta",
   "ar": "قَلَم",
   "arabizi": "2alam",
   "imp": 1
  },
  {
   "id": "voc-compras-felos-cash",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "dinheiro em notas / em espécie",
   "ar": "فلوس كاش",
   "arabizi": "felos cash",
   "imp": 1
  },
  {
   "id": "voc-compras-kandura-galabeya",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "kandura / galabeya",
   "ar": "كَندورة / جَلابية",
   "arabizi": "kandura / galabeya",
   "imp": 1
  },
  {
   "id": "voc-compras-korassa-kashkul",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "caderno — Aula 85",
   "ar": "كُراسة / كَشكول",
   "arabizi": "korassa / kashkul",
   "imp": 1
  },
  {
   "id": "voc-compras-banatil",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "calças (várias)",
   "ar": "بَناطيل",
   "arabizi": "banatil",
   "imp": 1
  },
  {
   "id": "voc-compras-hedeya",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "presente",
   "ar": "هِدية",
   "arabizi": "hedeya",
   "imp": 1
  },
  {
   "id": "voc-compras-rasid",
   "cat": "compras",
   "catLabel": "Compras e dinheiro",
   "pt": "crédito (do celular) — Aula 90",
   "ar": "رَصيد",
   "arabizi": "rasid",
   "imp": 1
  },
  {
   "id": "voc-outros-7aga",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "coisa",
   "ar": "حاجة",
   "arabizi": "7aga",
   "imp": 1
  },
  {
   "id": "voc-outros-7agat",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "coisas",
   "ar": "حاجات",
   "arabizi": "7agat",
   "imp": 1
  },
  {
   "id": "voc-outros-beeideiku",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "com as (vossas) mãos",
   "ar": "بِإيديكوا",
   "arabizi": "bêeideiku",
   "imp": 1
  },
  {
   "id": "voc-outros-ay-7aga",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "qualquer coisa",
   "ar": "أي حاجة",
   "arabizi": "ay 7aga",
   "imp": 1
  },
  {
   "id": "voc-outros-7ad",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "alguém / ninguém",
   "ar": "حُد",
   "arabizi": "7ad",
   "imp": 1
  },
  {
   "id": "voc-outros-kol",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "todos / cada",
   "ar": "كُل",
   "arabizi": "kol",
   "imp": 1
  },
  {
   "id": "voc-outros-marra",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "vez",
   "ar": "مَرّة",
   "arabizi": "marra",
   "imp": 1
  },
  {
   "id": "voc-outros-marra-tanya",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "outra vez",
   "ar": "مَرّة تانية",
   "arabizi": "marra tanya",
   "imp": 1
  },
  {
   "id": "voc-outros-emte7an",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "prova",
   "ar": "اِمتِحان",
   "arabizi": "emte7an",
   "imp": 1
  },
  {
   "id": "voc-outros-7essa",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "aula",
   "ar": "حِصة",
   "arabizi": "7essa",
   "imp": 1
  },
  {
   "id": "voc-outros-ketab",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "livro",
   "ar": "كِتاب",
   "arabizi": "ketab",
   "imp": 1
  },
  {
   "id": "voc-outros-kotob",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "livros",
   "ar": "كُتُب",
   "arabizi": "kotob",
   "imp": 1
  },
  {
   "id": "voc-outros-sura-suar",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "foto / fotos",
   "ar": "صورة / صُوَر",
   "arabizi": "sura / suar",
   "imp": 1
  },
  {
   "id": "voc-outros-7afla",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "festa",
   "ar": "حَفلة",
   "arabizi": "7afla",
   "imp": 1
  },
  {
   "id": "voc-outros-lo8a-lo8at",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "idioma / idiomas (Aula 80)",
   "ar": "لُغة / لُغات",
   "arabizi": "lo8a / lo8at",
   "imp": 1
  },
  {
   "id": "voc-outros-ana-2arart",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "eu decidi (passado)",
   "ar": "أنا قَرَرت",
   "arabizi": "Ana 2arart",
   "imp": 1
  },
  {
   "id": "voc-outros-seif",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "verão",
   "ar": "صيف",
   "arabizi": "seif",
   "imp": 1
  },
  {
   "id": "voc-outros-safar",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "viagem",
   "ar": "سَفَر",
   "arabizi": "safar",
   "imp": 1
  },
  {
   "id": "voc-outros-mossiqa",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "música (gênero / som)",
   "ar": "موسيقى",
   "arabizi": "mossiQa",
   "imp": 1
  },
  {
   "id": "voc-outros-o8neya",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "canção",
   "ar": "أُغنية",
   "arabizi": "o8neya",
   "imp": 1
  },
  {
   "id": "voc-outros-a8any",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "canções",
   "ar": "أَغاني",
   "arabizi": "a8any",
   "imp": 1
  },
  {
   "id": "voc-outros-el-radyo",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "rádio",
   "ar": "الراديو",
   "arabizi": "el-radyo",
   "imp": 1
  },
  {
   "id": "voc-outros-film",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "filme",
   "ar": "فيلم",
   "arabizi": "film",
   "imp": 1
  },
  {
   "id": "voc-outros-filmy-el-mufadal",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "meu filme favorito",
   "ar": "فيلمي المُفَضَل",
   "arabizi": "filmy el-mufadal",
   "imp": 1
  },
  {
   "id": "voc-outros-3arusa",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "dica / pista",
   "ar": "عَروسة",
   "arabizi": "3arusa",
   "imp": 1
  },
  {
   "id": "voc-outros-reyada",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "esporte",
   "ar": "رياضة",
   "arabizi": "reyada",
   "imp": 1
  },
  {
   "id": "voc-outros-koret-kadam",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "futebol",
   "ar": "كُرة قَدَم",
   "arabizi": "koret kadam",
   "imp": 1
  },
  {
   "id": "voc-outros-el-kora",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "futebol (forma usada nas aulas)",
   "ar": "الكورة",
   "arabizi": "el-kora",
   "imp": 1
  },
  {
   "id": "voc-outros-la3iba",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "jogadores — Aula 83",
   "ar": "لَعيبة",
   "arabizi": "la3iba",
   "imp": 1
  },
  {
   "id": "voc-outros-video-games",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "videogame(s)",
   "ar": "فيديو جيمز",
   "arabizi": "video games",
   "imp": 1
  },
  {
   "id": "voc-outros-basket",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "basquete",
   "ar": "باسكِت",
   "arabizi": "basket",
   "imp": 1
  },
  {
   "id": "voc-outros-samba",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "samba (dança)",
   "ar": "سامبا",
   "arabizi": "samba",
   "imp": 1
  },
  {
   "id": "voc-outros-tenis",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "tênis (esporte)",
   "ar": "تنس",
   "arabizi": "tenis",
   "imp": 1
  },
  {
   "id": "voc-outros-piano",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "piano",
   "ar": "بيانو",
   "arabizi": "piano",
   "imp": 1
  },
  {
   "id": "voc-outros-guitar",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "violão / guitarra",
   "ar": "جيتار",
   "arabizi": "guitar",
   "imp": 1
  },
  {
   "id": "voc-outros-kamanga-kaman",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "violino",
   "ar": "كَمَنجة / كَمان",
   "arabizi": "kamanga / kaman",
   "imp": 1
  },
  {
   "id": "voc-outros-tabla",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "tambor",
   "ar": "طَبلة",
   "arabizi": "tabla",
   "imp": 1
  },
  {
   "id": "voc-outros-beliardu",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "bilhar",
   "ar": "بِلياردو",
   "arabizi": "beliardu",
   "imp": 1
  },
  {
   "id": "voc-outros-shams",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "sol",
   "ar": "شَمس",
   "arabizi": "shams",
   "imp": 1
  },
  {
   "id": "voc-outros-computer",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "computador",
   "ar": "كُمبيوتَر",
   "arabizi": "computer",
   "imp": 1
  },
  {
   "id": "voc-outros-mobile",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "celular",
   "ar": "موبايل",
   "arabizi": "mobile",
   "imp": 1
  },
  {
   "id": "voc-outros-laptop",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "laptop / notebook",
   "ar": "لابتوب",
   "arabizi": "laptop",
   "imp": 1
  },
  {
   "id": "voc-outros-tablet",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "tablet",
   "ar": "تابلت",
   "arabizi": "tablet",
   "imp": 1
  },
  {
   "id": "voc-outros-daua",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "remédio",
   "ar": "دوا",
   "arabizi": "daua",
   "imp": 1
  },
  {
   "id": "voc-outros-lo8at",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "idiomas",
   "ar": "لُغات",
   "arabizi": "lo8at",
   "imp": 1
  },
  {
   "id": "voc-outros-3arabi",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "árabe",
   "ar": "عَرَبي",
   "arabizi": "3arabi",
   "imp": 1
  },
  {
   "id": "voc-outros-engelizy",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "inglês",
   "ar": "اِنجليزي",
   "arabizi": "engelizy",
   "imp": 1
  },
  {
   "id": "voc-outros-borto8aly",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "português",
   "ar": "بُرتُغالي",
   "arabizi": "borto8aly",
   "imp": 1
  },
  {
   "id": "voc-outros-ward",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "flores",
   "ar": "وَرد",
   "arabizi": "ward",
   "imp": 1
  },
  {
   "id": "voc-outros-kas-el-3alam",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "Copa do Mundo",
   "ar": "كاس العالَم",
   "arabizi": "kas el-3alam",
   "imp": 1
  },
  {
   "id": "voc-outros-ay",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "qualquer",
   "ar": "أي",
   "arabizi": "ay",
   "imp": 1
  },
  {
   "id": "voc-outros-nafs-el-sha2a",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "mesmo apartamento",
   "ar": "نَفس الشَقة",
   "arabizi": "nafs el-sha2a",
   "imp": 1
  },
  {
   "id": "voc-outros-fe3lan",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "realmente / de verdade",
   "ar": "فِعلاً",
   "arabizi": "fe3lan",
   "imp": 1
  },
  {
   "id": "voc-outros-sha3r",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "cabelo",
   "ar": "شَعر",
   "arabizi": "sha3r",
   "imp": 1
  },
  {
   "id": "voc-outros-5elal-el-osbu3",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "durante a semana",
   "ar": "خِلال الأُسبوع",
   "arabizi": "5elal el-osbu3",
   "imp": 1
  },
  {
   "id": "voc-outros-telefezion",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "televisão",
   "ar": "تلفزيون",
   "arabizi": "telefezion",
   "imp": 1
  },
  {
   "id": "voc-outros-aflam",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "filmes",
   "ar": "أفلام",
   "arabizi": "aflam",
   "imp": 1
  },
  {
   "id": "voc-outros-mosalsal",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "série / novela",
   "ar": "مُسَلسَل",
   "arabizi": "mosalsal",
   "imp": 1
  },
  {
   "id": "voc-outros-mosalsalat",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "séries / novelas",
   "ar": "مُسَلسَلات",
   "arabizi": "mosalsalat",
   "imp": 1
  },
  {
   "id": "voc-outros-nashara",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "jornal (na TV)",
   "ar": "نَشرة",
   "arabizi": "nashara",
   "imp": 1
  },
  {
   "id": "voc-outros-match",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "jogo / partida",
   "ar": "ماتش",
   "arabizi": "match",
   "imp": 1
  },
  {
   "id": "voc-outros-magala",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "revista",
   "ar": "مَجَلة",
   "arabizi": "magala",
   "imp": 1
  },
  {
   "id": "voc-outros-dars",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "lição",
   "ar": "دَرس",
   "arabizi": "dars",
   "imp": 1
  },
  {
   "id": "voc-outros-fezya",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "matéria: física",
   "ar": "فيزيا",
   "arabizi": "fezya",
   "imp": 1
  },
  {
   "id": "voc-outros-kemya",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "matéria: química",
   "ar": "كِميا",
   "arabizi": "kemya",
   "imp": 1
  },
  {
   "id": "voc-outros-nas-ketir",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "muitas pessoas",
   "ar": "ناس كِتير",
   "arabizi": "nas ketir",
   "imp": 1
  },
  {
   "id": "voc-outros-showaya",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "um pouco",
   "ar": "شوية",
   "arabizi": "showaya",
   "imp": 1
  },
  {
   "id": "voc-outros-cream",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "creme",
   "ar": "كريم",
   "arabizi": "cream",
   "imp": 1
  },
  {
   "id": "voc-outros-batkalem-3an",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "falar sobre (eu falo sobre)",
   "ar": "بتكلم عَن",
   "arabizi": "batkalem 3an",
   "imp": 1
  },
  {
   "id": "voc-outros-cv",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "currículo",
   "ar": "سي في",
   "arabizi": "CV",
   "imp": 1
  },
  {
   "id": "voc-outros-resala",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "mensagem",
   "ar": "رِسالة",
   "arabizi": "resala",
   "imp": 1
  },
  {
   "id": "voc-outros-gawab",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "carta",
   "ar": "جَواب",
   "arabizi": "gawab",
   "imp": 1
  },
  {
   "id": "voc-outros-e-mail",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "e-mail",
   "ar": "إيميل",
   "arabizi": "e-mail",
   "imp": 1
  },
  {
   "id": "voc-outros-mashru3",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "projeto",
   "ar": "مَشروع",
   "arabizi": "mashru3",
   "imp": 1
  },
  {
   "id": "voc-outros-mosa3da",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "ajuda",
   "ar": "مُساعدة",
   "arabizi": "mosa3da",
   "imp": 1
  },
  {
   "id": "voc-outros-mofag2a",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "surpresa",
   "ar": "مُفاجأة",
   "arabizi": "mofag2a",
   "imp": 1
  },
  {
   "id": "voc-outros-ser",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "segredo",
   "ar": "سِر",
   "arabizi": "ser",
   "imp": 1
  },
  {
   "id": "voc-outros-naga7",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "sucesso",
   "ar": "نَجاح",
   "arabizi": "naga7",
   "imp": 1
  },
  {
   "id": "voc-outros-maua3in",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "louça",
   "ar": "مواعين",
   "arabizi": "maua3in",
   "imp": 1
  },
  {
   "id": "voc-outros-el7ar",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "calor (o)",
   "ar": "الحَر",
   "arabizi": "el7ar",
   "imp": 1
  },
  {
   "id": "voc-outros-dausha",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "barulho",
   "ar": "دوشة",
   "arabizi": "dausha",
   "imp": 1
  },
  {
   "id": "voc-outros-estana-estany",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "espera! (m / f)",
   "ar": "اِستَنى / اِستَني",
   "arabizi": "estana / estany",
   "imp": 1
  },
  {
   "id": "voc-outros-houayat",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "hobbies",
   "ar": "هوايات",
   "arabizi": "houayat",
   "imp": 1
  },
  {
   "id": "voc-outros-seba7a",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "natação",
   "ar": "سِباحة",
   "arabizi": "seba7a",
   "imp": 1
  },
  {
   "id": "voc-outros-koret-sala",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "basquete (lit. bola de cesto)",
   "ar": "كُرة سَلة",
   "arabizi": "koret sala",
   "imp": 1
  },
  {
   "id": "voc-outros-golf",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "golfe",
   "ar": "جولف",
   "arabizi": "golf",
   "imp": 1
  },
  {
   "id": "voc-outros-action",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "ação",
   "ar": "أكشن",
   "arabizi": "action",
   "imp": 1
  },
  {
   "id": "voc-outros-mo8amarat",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "aventura",
   "ar": "مُغامَرات",
   "arabizi": "mo8amarat",
   "imp": 1
  },
  {
   "id": "voc-outros-cartoon",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "desenho animado",
   "ar": "كارتون",
   "arabizi": "cartoon",
   "imp": 1
  },
  {
   "id": "voc-outros-rock-pop-classic",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "rock / pop / clássica",
   "ar": "روك / بوب / كلاسيك",
   "arabizi": "rock / pop / classic",
   "imp": 1
  },
  {
   "id": "voc-outros-mashaya",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "esteira",
   "ar": "مَشاية",
   "arabizi": "mashaya",
   "imp": 1
  },
  {
   "id": "voc-outros-basbor",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "passaporte",
   "ar": "باسبور",
   "arabizi": "basbor",
   "imp": 1
  },
  {
   "id": "voc-outros-7amam-shams",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "banho de sol",
   "ar": "حَمّام شَمس",
   "arabizi": "7amam shams",
   "imp": 1
  },
  {
   "id": "voc-outros-asnan",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "dentes",
   "ar": "أسنان",
   "arabizi": "asnan",
   "imp": 1
  },
  {
   "id": "voc-outros-dauafer",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "unhas",
   "ar": "ضَوافِر",
   "arabizi": "dauafer",
   "imp": 1
  },
  {
   "id": "voc-outros-senan",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "dentes (variante das aulas)",
   "ar": "سِنان",
   "arabizi": "senan",
   "imp": 1
  },
  {
   "id": "voc-outros-el-7a2i2a",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "a verdade",
   "ar": "الحَقيقة",
   "arabizi": "el 7a2i2a",
   "imp": 1
  },
  {
   "id": "voc-outros-el-shonat",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "as malas",
   "ar": "الشُنَط",
   "arabizi": "el shonat",
   "imp": 1
  },
  {
   "id": "voc-outros-sabab",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "motivo",
   "ar": "سَبَب",
   "arabizi": "sabab",
   "imp": 1
  },
  {
   "id": "voc-outros-wasfa",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "receita (de cozinha)",
   "ar": "وَصفة",
   "arabizi": "wasfa",
   "imp": 1
  },
  {
   "id": "voc-outros-dosh",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "banho (ducha)",
   "ar": "دُش",
   "arabizi": "dosh",
   "imp": 1
  },
  {
   "id": "voc-outros-a5od-dosh",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "tomar banho",
   "ar": "آخُد دُش",
   "arabizi": "a5od dosh",
   "imp": 1
  },
  {
   "id": "voc-outros-se7a",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "saúde",
   "ar": "صِحة",
   "arabizi": "se7a",
   "imp": 1
  },
  {
   "id": "voc-outros-ba5aly-baly-ne5aly-balna",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "cuidar de / prestar atenção em (eu · nós)",
   "ar": "بَخَلي بالي · نِخَلَي بالنا",
   "arabizi": "ba5aly baly · ne5aly balna",
   "imp": 1
  },
  {
   "id": "voc-outros-kamanga",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "violino",
   "ar": "كَمانجا",
   "arabizi": "kamanga",
   "imp": 1
  },
  {
   "id": "voc-outros-vidiohat",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "vídeos",
   "ar": "فيديوهات",
   "arabizi": "vidiohat",
   "imp": 1
  },
  {
   "id": "voc-outros-7assa",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "aula (período de aula) — Aula 85",
   "ar": "حِصة",
   "arabizi": "7assa",
   "imp": 1
  },
  {
   "id": "voc-outros-3amatan",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "em geral — Aula 88",
   "ar": "عامةً",
   "arabizi": "3amatan",
   "imp": 1
  },
  {
   "id": "voc-outros-moshkela",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "problema — Aula 90",
   "ar": "مُشكِلة",
   "arabizi": "moshkela",
   "imp": 1
  },
  {
   "id": "voc-outros-kaza-marra-marrat",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "várias vezes · vezes — Aula 90",
   "ar": "كِذا مَرّة · مَرّات",
   "arabizi": "kaza marra · marrat",
   "imp": 1
  },
  {
   "id": "voc-outros-nadara",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "óculos — Aula 90",
   "ar": "نَضارة",
   "arabizi": "nadara",
   "imp": 1
  },
  {
   "id": "voc-outros-wageb",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "TPC / dever de casa — Aula 89",
   "ar": "واجِب",
   "arabizi": "wageb",
   "imp": 1
  },
  {
   "id": "voc-outros-elnas-elkebira",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "idosos (as pessoas mais velhas) — Aula 89",
   "ar": "الناس الكبيرة",
   "arabizi": "elnas elkebira",
   "imp": 1
  },
  {
   "id": "voc-outros-5alas-bas-kefaya",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "chega! / basta! — Aula 89",
   "ar": "خَلاص / بَس / كِفاية",
   "arabizi": "5alas / bas / kefaya",
   "imp": 1
  },
  {
   "id": "voc-outros-vedio",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "vídeo (singular) — Aula 90",
   "ar": "فيديو",
   "arabizi": "vedio",
   "imp": 1
  },
  {
   "id": "voc-outros-kelma",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "palavra — Aula 91",
   "ar": "كِلمة",
   "arabizi": "kelma",
   "imp": 1
  },
  {
   "id": "voc-outros-7ekaya-qessa-7aduta",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "história / conto (para crianças) — Aula 93",
   "ar": "حِكاية / قِصة / حَدوتة",
   "arabizi": "7ekaya / qessa / 7aduta",
   "imp": 1
  },
  {
   "id": "voc-outros-lo8atein",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "duas línguas — Aula 91",
   "ar": "لُغتين",
   "arabizi": "lo8atein",
   "imp": 1
  },
  {
   "id": "voc-outros-shad-3adaly",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "cãibra — Aula 91",
   "ar": "شَد عَضَلي",
   "arabizi": "shad 3adaly",
   "imp": 1
  },
  {
   "id": "voc-outros-ana-ba5es",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "eu emagreço (emagrecer) — Aula 91",
   "ar": "أنا بَخِس",
   "arabizi": "Ana ba5es",
   "imp": 1
  },
  {
   "id": "voc-futuro-ana-ha",
   "cat": "futuro",
   "catLabel": "Futuro · هَـ",
   "pt": "[regra] eu (futuro)",
   "ar": "أنا هَـ…",
   "arabizi": "Ana ha…",
   "imp": 1
  },
  {
   "id": "voc-futuro-howa-hay",
   "cat": "futuro",
   "catLabel": "Futuro · هَـ",
   "pt": "[regra] ele (futuro)",
   "ar": "هُوَ هَيـ…",
   "arabizi": "Howa hay…",
   "imp": 1
  },
  {
   "id": "voc-futuro-heya-hat",
   "cat": "futuro",
   "catLabel": "Futuro · هَـ",
   "pt": "[regra] ela (futuro)",
   "ar": "هِيَ هَتـ…",
   "arabizi": "Heya hat…",
   "imp": 1
  },
  {
   "id": "voc-futuro-enta-hat",
   "cat": "futuro",
   "catLabel": "Futuro · هَـ",
   "pt": "[regra] você m (futuro)",
   "ar": "انتَ هَتـ…",
   "arabizi": "Enta hat…",
   "imp": 1
  },
  {
   "id": "voc-futuro-enty-hat-y",
   "cat": "futuro",
   "catLabel": "Futuro · هَـ",
   "pt": "[regra] você f (futuro)",
   "ar": "انتي هَتـ…ـي",
   "arabizi": "Enty hat…y",
   "imp": 1
  },
  {
   "id": "voc-futuro-e7na-han",
   "cat": "futuro",
   "catLabel": "Futuro · هَـ",
   "pt": "[regra] nós (futuro)",
   "ar": "احنا هَنـ…",
   "arabizi": "E7na han…",
   "imp": 1
  },
  {
   "id": "voc-futuro-ana-hatkalem",
   "cat": "futuro",
   "catLabel": "Futuro · هَـ",
   "pt": "ex: eu vou falar",
   "ar": "أنا هَتكَلِم",
   "arabizi": "Ana hatkalem",
   "imp": 1
  },
  {
   "id": "voc-futuro-howa-haishtery",
   "cat": "futuro",
   "catLabel": "Futuro · هَـ",
   "pt": "ex: ele vai comprar",
   "ar": "هُوَ هَيشتِري",
   "arabizi": "Howa haishtery",
   "imp": 1
  },
  {
   "id": "voc-futuro-e7na-hansafer",
   "cat": "futuro",
   "catLabel": "Futuro · هَـ",
   "pt": "ex: nós vamos viajar",
   "ar": "احنا هَنسافِر",
   "arabizi": "E7na hansafer",
   "imp": 1
  },
  {
   "id": "voc-futuro-fe-el-seif",
   "cat": "futuro",
   "catLabel": "Futuro · هَـ",
   "pt": "no verão",
   "ar": "في الصيف",
   "arabizi": "fe el-seif",
   "imp": 1
  },
  {
   "id": "voc-futuro-hat3mel-eh-fe-el-seif",
   "cat": "futuro",
   "catLabel": "Futuro · هَـ",
   "pt": "O que vai fazer no verão?",
   "ar": "هَتِعمِل ايه في الصيف؟",
   "arabizi": "Hat3mel eh fe el-seif?",
   "imp": 1
  },
  {
   "id": "voc-futuro-ana-mish-ha",
   "cat": "futuro",
   "catLabel": "Futuro · هَـ",
   "pt": "[negativo] eu não vou…",
   "ar": "أنا مِش هَـ…",
   "arabizi": "Ana mish ha…",
   "imp": 1
  },
  {
   "id": "voc-futuro-e7na-mish-han",
   "cat": "futuro",
   "catLabel": "Futuro · هَـ",
   "pt": "[negativo] nós não vamos…",
   "ar": "احنا مِش هَنـ…",
   "arabizi": "E7na mish han…",
   "imp": 1
  },
  {
   "id": "voc-futuro-enta-mish-hat",
   "cat": "futuro",
   "catLabel": "Futuro · هَـ",
   "pt": "[negativo] você m não vai…",
   "ar": "انتَ مِش هَتـ…",
   "arabizi": "Enta mish hat…",
   "imp": 1
  },
  {
   "id": "voc-futuro-mish-hashtry-7aga",
   "cat": "futuro",
   "catLabel": "Futuro · هَـ",
   "pt": "ex: não vou comprar nada",
   "ar": "مِش هَشتِري حاجة",
   "arabizi": "mish hashtry 7aga",
   "imp": 1
  },
  {
   "id": "voc-futuro-mish-haneshtery-7aga",
   "cat": "futuro",
   "catLabel": "Futuro · هَـ",
   "pt": "ex: não vamos comprar nada",
   "ar": "مِش هَنِشتِري حاجة",
   "arabizi": "mish haneshtery 7aga",
   "imp": 1
  },
  {
   "id": "voc-futuro-2abl-ma-verb",
   "cat": "futuro",
   "catLabel": "Futuro · هَـ",
   "pt": "antes de + verbo",
   "ar": "قَبل ما + فِعل",
   "arabizi": "2abl ma + verb",
   "imp": 1
  },
  {
   "id": "voc-futuro-2abl-ma-teru7-el-7afla",
   "cat": "futuro",
   "catLabel": "Futuro · هَـ",
   "pt": "ex: antes de ir à festa",
   "ar": "قَبل ما تِروح الحَفلة",
   "arabizi": "2abl ma teru7 el-7afla",
   "imp": 1
  },
  {
   "id": "voc-futuro-lamma-baru7",
   "cat": "futuro",
   "catLabel": "Futuro · هَـ",
   "pt": "ex: quando eu for / vou",
   "ar": "لَمّا بَروح",
   "arabizi": "lamma baru7",
   "imp": 1
  },
  {
   "id": "voc-futuro-kan-haikun",
   "cat": "futuro",
   "catLabel": "Futuro · هَـ",
   "pt": "[Aula 84] كان / هَيكون = auxiliar «ser» p/ passado e futuro dos irregulares (ex.: عَند)",
   "ar": "كان / هَيكون",
   "arabizi": "kan / haikun",
   "imp": 1
  },
  {
   "id": "voc-futuro-ana-kan-3andy",
   "cat": "futuro",
   "catLabel": "Futuro · هَـ",
   "pt": "eu tinha / tive (ter no passado)",
   "ar": "أنا كان عَندي",
   "arabizi": "Ana kan 3andy",
   "imp": 1
  },
  {
   "id": "voc-futuro-ana-haikun-3andy",
   "cat": "futuro",
   "catLabel": "Futuro · هَـ",
   "pt": "eu vou ter (ter no futuro)",
   "ar": "أنا هَيكون عَندي",
   "arabizi": "Ana haikun 3andy",
   "imp": 1
  },
  {
   "id": "voc-numeros-etnen",
   "cat": "numeros",
   "catLabel": "Números",
   "pt": "2 · dois",
   "ar": "اِتنين",
   "arabizi": "etnen",
   "imp": 1
  },
  {
   "id": "voc-numeros-seta",
   "cat": "numeros",
   "catLabel": "Números",
   "pt": "6 · seis",
   "ar": "سِتة",
   "arabizi": "seta",
   "imp": 1
  },
  {
   "id": "voc-numeros-saba3a",
   "cat": "numeros",
   "catLabel": "Números",
   "pt": "7 · sete",
   "ar": "سَبعة",
   "arabizi": "saba3a",
   "imp": 1
  },
  {
   "id": "voc-numeros-tesa3a",
   "cat": "numeros",
   "catLabel": "Números",
   "pt": "9 · nove",
   "ar": "تِسعة",
   "arabizi": "tesa3a",
   "imp": 1
  },
  {
   "id": "voc-numeros-talatashar",
   "cat": "numeros",
   "catLabel": "Números",
   "pt": "13 · treze",
   "ar": "تَلاتاشر",
   "arabizi": "talatashar",
   "imp": 1
  },
  {
   "id": "voc-numeros-setashar",
   "cat": "numeros",
   "catLabel": "Números",
   "pt": "16 · dezesseis",
   "ar": "سِتاشر",
   "arabizi": "setashar",
   "imp": 1
  },
  {
   "id": "voc-numeros-arbe3in",
   "cat": "numeros",
   "catLabel": "Números",
   "pt": "40 · quarenta",
   "ar": "أربِعين",
   "arabizi": "arbe3in",
   "imp": 1
  },
  {
   "id": "voc-numeros-setin",
   "cat": "numeros",
   "catLabel": "Números",
   "pt": "60 · sessenta",
   "ar": "سِتين",
   "arabizi": "setin",
   "imp": 1
  },
  {
   "id": "voc-numeros-auel-aula",
   "cat": "numeros",
   "catLabel": "Números",
   "pt": "1º (m/f)",
   "ar": "أوّل / أولى",
   "arabizi": "auel / aula",
   "imp": 1
  },
  {
   "id": "voc-numeros-tany-tanya",
   "cat": "numeros",
   "catLabel": "Números",
   "pt": "2º (m/f)",
   "ar": "تاني / تانية",
   "arabizi": "tany / tanya",
   "imp": 1
  },
  {
   "id": "voc-numeros-talet-talta",
   "cat": "numeros",
   "catLabel": "Números",
   "pt": "3º (m/f)",
   "ar": "تالِت / تالتة",
   "arabizi": "talet / talta",
   "imp": 1
  },
  {
   "id": "voc-numeros-rabe3-rab3a",
   "cat": "numeros",
   "catLabel": "Números",
   "pt": "4º (m/f)",
   "ar": "رابِع / رابعة",
   "arabizi": "rabe3 / rab3a",
   "imp": 1
  },
  {
   "id": "voc-numeros-5ames-5amsa",
   "cat": "numeros",
   "catLabel": "Números",
   "pt": "5º (m/f)",
   "ar": "خامِس / خامسة",
   "arabizi": "5ames / 5amsa",
   "imp": 1
  },
  {
   "id": "voc-numeros-sades-satsa",
   "cat": "numeros",
   "catLabel": "Números",
   "pt": "6º (m/f)",
   "ar": "سادِس / سادسة",
   "arabizi": "sades / satsa",
   "imp": 1
  },
  {
   "id": "voc-numeros-sabe3-sab3a",
   "cat": "numeros",
   "catLabel": "Números",
   "pt": "7º (m/f)",
   "ar": "سابِع / سابعة",
   "arabizi": "sabe3 / sab3a",
   "imp": 1
  },
  {
   "id": "voc-numeros-tamen-tamna",
   "cat": "numeros",
   "catLabel": "Números",
   "pt": "8º (m/f)",
   "ar": "تامِن / تامنة",
   "arabizi": "tamen / tamna",
   "imp": 1
  },
  {
   "id": "voc-numeros-tase3-tas3a",
   "cat": "numeros",
   "catLabel": "Números",
   "pt": "9º (m/f)",
   "ar": "تاسِع / تاسعة",
   "arabizi": "tase3 / tas3a",
   "imp": 1
  },
  {
   "id": "voc-numeros-3asher-3ashra",
   "cat": "numeros",
   "catLabel": "Números",
   "pt": "10º (m/f)",
   "ar": "عاشِر / عاشرة",
   "arabizi": "3asher / 3ashra",
   "imp": 1
  },
  {
   "id": "voc-meses-yanayer",
   "cat": "meses",
   "catLabel": "Meses do ano",
   "pt": "janeiro",
   "ar": "يناير",
   "arabizi": "yanayer",
   "imp": 1
  },
  {
   "id": "voc-meses-febrayer",
   "cat": "meses",
   "catLabel": "Meses do ano",
   "pt": "fevereiro",
   "ar": "فبراير",
   "arabizi": "febrayer",
   "imp": 1
  },
  {
   "id": "voc-meses-mares",
   "cat": "meses",
   "catLabel": "Meses do ano",
   "pt": "março",
   "ar": "مارس",
   "arabizi": "mares",
   "imp": 1
  },
  {
   "id": "voc-meses-abril",
   "cat": "meses",
   "catLabel": "Meses do ano",
   "pt": "abril",
   "ar": "أبريل",
   "arabizi": "abril",
   "imp": 1
  },
  {
   "id": "voc-meses-maio",
   "cat": "meses",
   "catLabel": "Meses do ano",
   "pt": "maio",
   "ar": "مايو",
   "arabizi": "maio",
   "imp": 1
  },
  {
   "id": "voc-meses-yonyo",
   "cat": "meses",
   "catLabel": "Meses do ano",
   "pt": "junho",
   "ar": "يونيو",
   "arabizi": "yonyo",
   "imp": 1
  },
  {
   "id": "voc-meses-yolyo",
   "cat": "meses",
   "catLabel": "Meses do ano",
   "pt": "julho",
   "ar": "يوليو",
   "arabizi": "yolyo",
   "imp": 1
  },
  {
   "id": "voc-meses-a8ostos",
   "cat": "meses",
   "catLabel": "Meses do ano",
   "pt": "agosto",
   "ar": "أغسطس",
   "arabizi": "a8ostos",
   "imp": 1
  },
  {
   "id": "voc-meses-september",
   "cat": "meses",
   "catLabel": "Meses do ano",
   "pt": "setembro",
   "ar": "سبتمبر",
   "arabizi": "september",
   "imp": 1
  },
  {
   "id": "voc-meses-october",
   "cat": "meses",
   "catLabel": "Meses do ano",
   "pt": "outubro",
   "ar": "أكتوبر",
   "arabizi": "october",
   "imp": 1
  },
  {
   "id": "voc-meses-november",
   "cat": "meses",
   "catLabel": "Meses do ano",
   "pt": "novembro",
   "ar": "نوفمبر",
   "arabizi": "november",
   "imp": 1
  },
  {
   "id": "voc-meses-dezember",
   "cat": "meses",
   "catLabel": "Meses do ano",
   "pt": "dezembro",
   "ar": "ديسمبر",
   "arabizi": "dezember",
   "imp": 1
  },
  {
   "id": "voc-estado_civil-a3zab",
   "cat": "estado_civil",
   "catLabel": "Estado civil",
   "pt": "solteiro",
   "ar": "أعزَب",
   "arabizi": "a3zab",
   "imp": 1
  },
  {
   "id": "voc-estado_civil-anessa",
   "cat": "estado_civil",
   "catLabel": "Estado civil",
   "pt": "solteira",
   "ar": "آنِسة",
   "arabizi": "anessa",
   "imp": 1
  },
  {
   "id": "voc-estado_civil-metgauez-metgaueza",
   "cat": "estado_civil",
   "catLabel": "Estado civil",
   "pt": "casado / casada",
   "ar": "مِتجَوِز / مِتجَوِزة",
   "arabizi": "metgauez / metgaueza",
   "imp": 1
  },
  {
   "id": "voc-estado_civil-motalaq-motalaqa",
   "cat": "estado_civil",
   "catLabel": "Estado civil",
   "pt": "divorciado / divorciada",
   "ar": "مُطَلَق / مُطَلَقة",
   "arabizi": "motalaq / motalaqa",
   "imp": 1
  },
  {
   "id": "voc-estado_civil-armal-armala",
   "cat": "estado_civil",
   "catLabel": "Estado civil",
   "pt": "viúvo / viúva",
   "ar": "أرمَل / أرمَلة",
   "arabizi": "armal / armala",
   "imp": 1
  },
  {
   "id": "voc-estado_civil-monfassel-monfassela",
   "cat": "estado_civil",
   "catLabel": "Estado civil",
   "pt": "separado / separada",
   "ar": "مُنفَصِل / مُنفَصِلة",
   "arabizi": "monfassel / monfassela",
   "imp": 1
  },
  {
   "id": "voc-paises-masr-masry-masreya",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "Egito — egípcio(a)",
   "ar": "مَصر — مَصري / مَصرية",
   "arabizi": "Masr — masry / masreya",
   "imp": 1
  },
  {
   "id": "voc-paises-masreyin-masreyat",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "egípcios / egípcias (pl)",
   "ar": "مَصريين / مَصريات",
   "arabizi": "masreyin / masreyat",
   "imp": 1
  },
  {
   "id": "voc-paises-barazileiin-barazileyat",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "brasileiros / brasileiras (pl)",
   "ar": "بَرازيليين / برازيليات",
   "arabizi": "barazileiin / barazileyat",
   "imp": 1
  },
  {
   "id": "voc-paises-el-sudan-sudany-sudaneya",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "Sudão — sudanês(a)",
   "ar": "السودان — سوداني / سودانية",
   "arabizi": "el Sudan — sudany / sudaneya",
   "imp": 1
  },
  {
   "id": "voc-paises-el-gaza2er-gaza2ery-gaza2erya",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "Argélia — argelino(a)",
   "ar": "الجَزائر — جَزائري / جَزائرية",
   "arabizi": "el Gaza2er — gaza2ery / gaza2erya",
   "imp": 1
  },
  {
   "id": "voc-paises-el-ma8reb-ma8reby-ma8rebeya",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "Marrocos — marroquino(a)",
   "ar": "المَغرِب — مَغرِبي / مَغرِبية",
   "arabizi": "el Ma8reb — ma8reby / ma8rebeya",
   "imp": 1
  },
  {
   "id": "voc-paises-lobnan-lobnany-lobnaneya",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "Líbano — libanês(a)",
   "ar": "لُبنان — لُبناني / لُبنانية",
   "arabizi": "Lobnan — lobnany / lobnaneya",
   "imp": 1
  },
  {
   "id": "voc-paises-sorya-sury-sureya",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "Síria — sírio(a)",
   "ar": "سوريا — سوري / سورية",
   "arabizi": "Sorya — sury / sureya",
   "imp": 1
  },
  {
   "id": "voc-paises-el-3era2-3era2y-3era2eya",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "Iraque — iraquiano(a)",
   "ar": "العِراق — عِراقي / عِراقية",
   "arabizi": "el 3era2 — 3era2y / 3era2eya",
   "imp": 1
  },
  {
   "id": "voc-paises-lebya-liby-libeya",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "Líbia — líbio(a)",
   "ar": "ليبيا — ليبي / ليبية",
   "arabizi": "Lebya — liby / libeya",
   "imp": 1
  },
  {
   "id": "voc-paises-felestin-felestiny-felestineya",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "Palestina — palestino(a)",
   "ar": "فِلَسطين — فِلَسطيني / فِلَسطينية",
   "arabizi": "Felestin — felestiny / felestineya",
   "imp": 1
  },
  {
   "id": "voc-paises-el-ordon-ordony-ordoneya",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "Jordânia — jordaniano(a)",
   "ar": "الأُردُن — أُردُني / أُردُنية",
   "arabizi": "el Ordon — ordony / ordoneya",
   "imp": 1
  },
  {
   "id": "voc-paises-el-so3udeya-so3udy-so3udeya",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "Arábia Saudita — saudita",
   "ar": "السعودية — سعودي / سعودية",
   "arabizi": "el So3udeya — so3udy / so3udeya",
   "imp": 1
  },
  {
   "id": "voc-paises-el-emarat-emaraty-emarateya",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "Emirados — emiradense",
   "ar": "الإمارات — إماراتي / إماراتية",
   "arabizi": "el Emarat — emaraty / emarateya",
   "imp": 1
  },
  {
   "id": "voc-paises-qatar-qatary-qatareya",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "Catar — catariano(a)",
   "ar": "قَطَر — قَطَري / قَطَرية",
   "arabizi": "Qatar — qatary / qatareya",
   "imp": 1
  },
  {
   "id": "voc-paises-el-kowait-kowety-koweteya",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "Kuwait — kuwaitiano(a)",
   "ar": "الكُويت — كُويتي / كُويتية",
   "arabizi": "el Kowait — kowety / koweteya",
   "imp": 1
  },
  {
   "id": "voc-paises-italia-italy-italeya",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "Itália — italiano(a)",
   "ar": "إيطاليا — إيطالي / إيطالية",
   "arabizi": "Italia — italy / italeya",
   "imp": 1
  },
  {
   "id": "voc-paises-el-borto8al-borto8aly-borto8aleya",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "Portugal — português(a)",
   "ar": "البُرتُغال — بُرتُغالي / بُرتُغالية",
   "arabizi": "el Borto8al — borto8aly / borto8aleya",
   "imp": 1
  },
  {
   "id": "voc-paises-faransa-faransauy-faransaueya",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "França — francês(a)",
   "ar": "فَرَنسا — فَرَنساوي / فَرَنساوية",
   "arabizi": "Faransa — faransauy / faransaueya",
   "imp": 1
  },
  {
   "id": "voc-paises-asbanya-asbany-asbaneya",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "Espanha — espanhol(a)",
   "ar": "إسبانيا — أسباني / أسبانية",
   "arabizi": "Asbanya — asbany / asbaneya",
   "imp": 1
  },
  {
   "id": "voc-paises-engeltera-engelezy-engelezeya",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "Inglaterra — inglês(a)",
   "ar": "إنجلترا — إنجليزي / إنجليزية",
   "arabizi": "Engeltera — engelezy / engelezeya",
   "imp": 1
  },
  {
   "id": "voc-paises-almanya-almany-almaneya",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "Alemanha — alemão(ã)",
   "ar": "ألمانيا — ألماني / ألمانية",
   "arabizi": "Almanya — almany / almaneya",
   "imp": 1
  },
  {
   "id": "voc-paises-rossya-russy-rosseya",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "Rússia — russo(a)",
   "ar": "روسيا — روسي / روسية",
   "arabizi": "Rossya — russy / rosseya",
   "imp": 1
  },
  {
   "id": "voc-paises-torkeya-torky-torkeya",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "Turquia — turco(a)",
   "ar": "تُركيا — تُركي / تُركية",
   "arabizi": "Torkeya — torky / torkeya",
   "imp": 1
  },
  {
   "id": "voc-paises-el-hend-hendy-hendeya",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "Índia — indiano(a)",
   "ar": "الهِند — هِندي / هِندية",
   "arabizi": "el Hend — hendy / hendeya",
   "imp": 1
  },
  {
   "id": "voc-paises-iran-irany-iraneya",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "Irã — iraniano(a)",
   "ar": "إيران — إيراني / إيرانية",
   "arabizi": "Iran — irany / iraneya",
   "imp": 1
  },
  {
   "id": "voc-paises-el-sin-siny-sineya",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "China — chinês(a)",
   "ar": "الصين — صيني / صينية",
   "arabizi": "el Sin — siny / sineya",
   "imp": 1
  },
  {
   "id": "voc-paises-el-yaban-yabany-yabaneya",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "Japão — japonês(a)",
   "ar": "اليابان — ياباني / يابانية",
   "arabizi": "el Yaban — yabany / yabaneya",
   "imp": 1
  },
  {
   "id": "voc-paises-korya-kory-koreya",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "Coreia — coreano(a)",
   "ar": "كوريا — كوري / كورية",
   "arabizi": "Korya — kory / koreya",
   "imp": 1
  },
  {
   "id": "voc-paises-amrika-amriky-amrikeya",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "EUA — americano(a)",
   "ar": "أمريكا — أمريكي / أمريكية",
   "arabizi": "Amrika — amriky / amrikeya",
   "imp": 1
  },
  {
   "id": "voc-paises-canada-canady-canadeya",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "Canadá — canadense",
   "ar": "كَنَدا — كَنَدي / كَنَدية",
   "arabizi": "Canada — canady / canadeya",
   "imp": 1
  },
  {
   "id": "voc-paises-el-maksik-maksiky-maksikeya",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "México — mexicano(a)",
   "ar": "المكسيك — مكسيكي / مكسيكية",
   "arabizi": "el Maksik — maksiky / maksikeya",
   "imp": 1
  },
  {
   "id": "voc-paises-el-barazil-barazily-barazileya",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "Brasil — brasileiro(a)",
   "ar": "البَرازيل — بَرازيلي / بَرازيلية",
   "arabizi": "el Barazil — barazily / barazileya",
   "imp": 1
  },
  {
   "id": "voc-paises-el-arjantin-arjantiny-arjanteneya",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "Argentina — argentino(a)",
   "ar": "الأرجَنتين — أرجَنتيني / أرجَنتينية",
   "arabizi": "el Arjantin — arjantiny / arjanteneya",
   "imp": 1
  },
  {
   "id": "voc-paises-colombeya-colomby-colombeya",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "Colômbia — colombiano(a)",
   "ar": "كولومبيا — كولومبي / كولومبية",
   "arabizi": "Colombeya — colomby / colombeya",
   "imp": 1
  },
  {
   "id": "voc-paises-el-3arab",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "os árabes (povo)",
   "ar": "العَرَب",
   "arabizi": "el 3arab",
   "imp": 1
  },
  {
   "id": "voc-paises-el-3alam-kollo",
   "cat": "paises",
   "catLabel": "Países e nacionalidades",
   "pt": "o mundo (todo)",
   "ar": "العالَم كُلُه",
   "arabizi": "el 3alam kollo",
   "imp": 1
  },
  {
   "id": "voc-animais-7ayauan-7ayauanat",
   "cat": "animais",
   "catLabel": "Animais",
   "pt": "animal / animais",
   "ar": "حَيوان / حَيوانات",
   "arabizi": "7ayauan / 7ayauanat",
   "imp": 1
  },
  {
   "id": "voc-animais-genenet-el-7ayauanat",
   "cat": "animais",
   "catLabel": "Animais",
   "pt": "zoológico",
   "ar": "جِنينة الحَيوانات",
   "arabizi": "genenet el 7ayauanat",
   "imp": 1
  },
  {
   "id": "voc-animais-assad",
   "cat": "animais",
   "catLabel": "Animais",
   "pt": "leão",
   "ar": "أسَد",
   "arabizi": "assad",
   "imp": 1
  },
  {
   "id": "voc-animais-nemr",
   "cat": "animais",
   "catLabel": "Animais",
   "pt": "tigre",
   "ar": "نِمر",
   "arabizi": "nemr",
   "imp": 1
  },
  {
   "id": "voc-animais-zarafa",
   "cat": "animais",
   "catLabel": "Animais",
   "pt": "girafa",
   "ar": "زَرافة",
   "arabizi": "zarafa",
   "imp": 1
  },
  {
   "id": "voc-animais-fil",
   "cat": "animais",
   "catLabel": "Animais",
   "pt": "elefante",
   "ar": "فيل",
   "arabizi": "fil",
   "imp": 1
  },
  {
   "id": "voc-animais-malahy",
   "cat": "animais",
   "catLabel": "Animais",
   "pt": "parque de diversão",
   "ar": "مَلاهي",
   "arabizi": "malahy",
   "imp": 1
  },
  {
   "id": "voc-animais-kalb",
   "cat": "animais",
   "catLabel": "Animais",
   "pt": "cachorro",
   "ar": "كَلب",
   "arabizi": "kalb",
   "imp": 1
  },
  {
   "id": "voc-animais-2otta",
   "cat": "animais",
   "catLabel": "Animais",
   "pt": "gato / gata (feminino em árabe)",
   "ar": "قُطة",
   "arabizi": "2otta",
   "imp": 1
  },
  {
   "id": "voc-outros-darury",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "é necessário (ضروري + verbo)",
   "ar": "ضَروري",
   "arabizi": "darury"
  },
  {
   "id": "voc-outros-el-mafrud",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "deveria (المفروض + verbo)",
   "ar": "المَفروض",
   "arabizi": "el mafrud"
  },
  {
   "id": "voc-outros-7a2i2y",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "certo / é verdade",
   "ar": "حَقيقي",
   "arabizi": "7a2i2y"
  },
  {
   "id": "voc-outros-wallahi",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "sério? / juro",
   "ar": "والله",
   "arabizi": "wallahi"
  },
  {
   "id": "voc-outros-a3mal",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "negócios",
   "ar": "أعمال",
   "arabizi": "a3mal"
  },
  {
   "id": "voc-outros-ragol-a3mal",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "empresário",
   "ar": "رَجُل أعمال",
   "arabizi": "ragol a3mal"
  },
  {
   "id": "voc-outros-garima",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "crime",
   "ar": "جَريمة",
   "arabizi": "garima"
  },
  {
   "id": "voc-outros-falsafa",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "filosofia",
   "ar": "فَلسَفة",
   "arabizi": "falsafa"
  },
  {
   "id": "voc-outros-namima",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "fofoca",
   "ar": "نَميمة",
   "arabizi": "namima"
  },
  {
   "id": "voc-outros-mosta7il",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "é impossível",
   "ar": "مُستَحيل",
   "arabizi": "mosta7il"
  },
  {
   "id": "voc-outros-mamnu3",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "é proibido",
   "ar": "مَمنوع",
   "arabizi": "mamnu3"
  },
  {
   "id": "voc-outros-masmu7",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "é permitido",
   "ar": "مَسموح",
   "arabizi": "masmu7"
  },
  {
   "id": "voc-outros-ma3ad",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "horário (o horário marcado)",
   "ar": "ميعاد",
   "arabizi": "ma3ad"
  },
  {
   "id": "voc-outros-be-sot-3aly",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "em voz alta",
   "ar": "بِصوت عالي",
   "arabizi": "be sot 3aly"
  },
  {
   "id": "voc-outros-barken",
   "cat": "outros",
   "catLabel": "Outros",
   "pt": "estacionar",
   "ar": "بَركِن",
   "arabizi": "barken"
  }
 ],
 "familia": [
  {
   "id": "fam-3ela",
   "pt": "família",
   "ar": "عيلة",
   "arabizi": "3ela"
  },
  {
   "id": "fam-3elty",
   "pt": "minha família",
   "ar": "عيلتي",
   "arabizi": "3elty"
  },
  {
   "id": "fam-ab-baba",
   "pt": "pai",
   "ar": "أب / بابا",
   "arabizi": "ab / baba"
  },
  {
   "id": "fam-om-mama",
   "pt": "mãe",
   "ar": "أم / ماما",
   "arabizi": "om / mama"
  },
  {
   "id": "fam-ebn-walad",
   "pt": "filho",
   "ar": "اِبن / وَلَد",
   "arabizi": "ebn / walad"
  },
  {
   "id": "fam-bent",
   "pt": "filha",
   "ar": "بِنت",
   "arabizi": "bent"
  },
  {
   "id": "fam-aulady",
   "pt": "meus filhos / crianças",
   "ar": "أولادي",
   "arabizi": "aulady"
  },
  {
   "id": "fam-a5",
   "pt": "irmão",
   "ar": "أَخ",
   "arabizi": "a5"
  },
  {
   "id": "fam-o5t",
   "pt": "irmã",
   "ar": "أُخت",
   "arabizi": "o5t"
  },
  {
   "id": "fam-gedo",
   "pt": "avô",
   "ar": "جِدو",
   "arabizi": "gedo"
  },
  {
   "id": "fam-teta",
   "pt": "avó",
   "ar": "تيتة",
   "arabizi": "teta"
  },
  {
   "id": "fam-goz",
   "pt": "marido",
   "ar": "جوز",
   "arabizi": "goz"
  },
  {
   "id": "fam-guzy",
   "pt": "meu marido",
   "ar": "جوزي",
   "arabizi": "guzy"
  },
  {
   "id": "fam-mara",
   "pt": "esposa",
   "ar": "مَرة",
   "arabizi": "mara"
  },
  {
   "id": "fam-meraty",
   "pt": "minha esposa",
   "ar": "مِراتي",
   "arabizi": "meraty"
  },
  {
   "id": "fam-merato",
   "pt": "sua esposa (dele)",
   "ar": "مِراتُه",
   "arabizi": "merato"
  },
  {
   "id": "fam-meratak",
   "pt": "sua esposa (de você-m)",
   "ar": "مِراتَك",
   "arabizi": "meratak"
  },
  {
   "id": "fam-3am-3ama",
   "pt": "tio (paterno) / tia",
   "ar": "عَم / عَمة",
   "arabizi": "3am / 3ama"
  },
  {
   "id": "fam-5al-5ala",
   "pt": "tio (materno) / tia",
   "ar": "خال / خالة",
   "arabizi": "5al / 5ala"
  },
  {
   "id": "fam-ebn-3am-bent-3am",
   "pt": "primo / prima",
   "ar": "اِبن عَم / بِنت عَم",
   "arabizi": "ebn 3am / bent 3am"
  },
  {
   "id": "fam-sa7eb-sa7ba",
   "pt": "amigo / amiga",
   "ar": "صاحِب / صاحبة",
   "arabizi": "sa7eb / sa7ba"
  },
  {
   "id": "fam-sa7by",
   "pt": "meu amigo",
   "ar": "صاحبي",
   "arabizi": "sa7by"
  },
  {
   "id": "fam-as7aby",
   "pt": "meus amigos",
   "ar": "أصحابي",
   "arabizi": "as7aby"
  },
  {
   "id": "fam-zamil",
   "pt": "colega de trabalho",
   "ar": "زَميل",
   "arabizi": "zamil"
  },
  {
   "id": "fam-zomalay",
   "pt": "meus colegas",
   "ar": "زُمَلائي",
   "arabizi": "zomalay"
  },
  {
   "id": "fam-e5uat",
   "pt": "irmãos / irmãs",
   "ar": "إخوات",
   "arabizi": "e5uat"
  },
  {
   "id": "fam-auladna",
   "pt": "nossos filhos",
   "ar": "أولادنا",
   "arabizi": "auladna"
  },
  {
   "id": "fam-benten",
   "pt": "duas filhas",
   "ar": "بِنتين",
   "arabizi": "benten"
  },
  {
   "id": "fam-ebn-3am-bent-3am-2",
   "pt": "primo/a (filho/a do tio paterno)",
   "ar": "ابن عَم / بِنت عَم",
   "arabizi": "ebn 3am / bent 3am"
  },
  {
   "id": "fam-ebn-3ama-bent-3ama",
   "pt": "primo/a (filho/a da tia paterna)",
   "ar": "ابن عَمة / بِنت عَمة",
   "arabizi": "ebn 3ama / bent 3ama"
  },
  {
   "id": "fam-ebn-5al-bent-5al",
   "pt": "primo/a (filho/a do tio materno)",
   "ar": "ابن خال / بِنت خال",
   "arabizi": "ebn 5al / bent 5al"
  },
  {
   "id": "fam-ebn-5ala-bent-5ala",
   "pt": "primo/a (filho/a da tia materna)",
   "ar": "ابن خالة / بِنت خالة",
   "arabizi": "ebn 5ala / bent 5ala"
  },
  {
   "id": "fam-ebn-a5-bent-a5",
   "pt": "sobrinho/a (filho/a do irmão)",
   "ar": "ابن أخ / بِنت أخ",
   "arabizi": "ebn a5 / bent a5"
  },
  {
   "id": "fam-ebn-o5t-bent-o5t",
   "pt": "sobrinho/a (filho/a da irmã)",
   "ar": "ابن أخت / بِنت أخت",
   "arabizi": "ebn o5t / bent o5t"
  },
  {
   "id": "fam-goz-o5t",
   "pt": "cunhado (marido da irmã)",
   "ar": "جوز أخت",
   "arabizi": "goz o5t"
  },
  {
   "id": "fam-merat-a5",
   "pt": "cunhada (esposa do irmão)",
   "ar": "مِرات أخ",
   "arabizi": "merat a5"
  },
  {
   "id": "fam-a5-goz",
   "pt": "cunhado (irmão do marido)",
   "ar": "أخ جوز",
   "arabizi": "a5 goz"
  },
  {
   "id": "fam-a5u-meraty",
   "pt": "meu cunhado (irmão da minha esposa)",
   "ar": "أخو مِراتي",
   "arabizi": "a5u meraty"
  },
  {
   "id": "fam-7ama",
   "pt": "sogro",
   "ar": "حَما",
   "arabizi": "7ama"
  },
  {
   "id": "fam-7amaya",
   "pt": "meu sogro",
   "ar": "حَمايا",
   "arabizi": "7amaya"
  },
  {
   "id": "fam-babaya",
   "pt": "meu pai (com sufixo)",
   "ar": "بابايا",
   "arabizi": "babaya"
  },
  {
   "id": "fam-a5oya",
   "pt": "meu irmão (com sufixo)",
   "ar": "أخويا",
   "arabizi": "a5oya"
  },
  {
   "id": "fam-madrasty-sa7by",
   "pt": "minha escola / meu amigo",
   "ar": "مَدرَستي / صاحبي",
   "arabizi": "madrasty / sa7by"
  },
  {
   "id": "fam-gedetha",
   "pt": "a avó dela",
   "ar": "جِدِتها",
   "arabizi": "gedetha"
  },
  {
   "id": "fam-gar",
   "pt": "vizinho",
   "ar": "جار",
   "arabizi": "gar"
  },
  {
   "id": "fam-gara",
   "pt": "vizinha",
   "ar": "جارة",
   "arabizi": "gara"
  },
  {
   "id": "fam-geran",
   "pt": "vizinhos / vizinhas",
   "ar": "جيران",
   "arabizi": "geran"
  },
  {
   "id": "fam-zamayel",
   "pt": "colegas (plural)",
   "ar": "زَمايِل",
   "arabizi": "zamayel"
  },
  {
   "id": "fam-e5uat-welad",
   "pt": "irmãos (homens)",
   "ar": "اخوات وِلاد",
   "arabizi": "e5uat welad"
  },
  {
   "id": "fam-3id-elom",
   "pt": "Dia da Mãe",
   "ar": "عيد الأم",
   "arabizi": "3id elom"
  },
  {
   "id": "fam-waledein",
   "pt": "pais (pai e mãe)",
   "ar": "والدين",
   "arabizi": "waledein"
  },
  {
   "id": "fam-5atib-5atiba",
   "pt": "noivo / noiva",
   "ar": "خَطيب / خَطيبة",
   "arabizi": "5atib / 5atiba"
  },
  {
   "id": "fam-osra",
   "pt": "família (núcleo)",
   "ar": "أُسرة",
   "arabizi": "osra"
  },
  {
   "id": "fam-atfal",
   "pt": "crianças",
   "ar": "أطفال",
   "arabizi": "atfal"
  },
  {
   "id": "fam-zog-zoga",
   "pt": "marido / esposa (formal)",
   "ar": "زوج / زوجة",
   "arabizi": "zog / zoga"
  },
  {
   "id": "fam-ragel",
   "pt": "homem",
   "ar": "رَجِل",
   "arabizi": "ragel"
  },
  {
   "id": "fam-set",
   "pt": "mulher",
   "ar": "سِت",
   "arabizi": "set"
  },
  {
   "id": "fam-nas",
   "pt": "pessoas",
   "ar": "ناس",
   "arabizi": "nas"
  },
  {
   "id": "fam-7afid-7afida",
   "pt": "neto / neta",
   "ar": "حَفِيد / حَفِيدة",
   "arabizi": "7afid / 7afida"
  },
  {
   "id": "fam-7amaa",
   "pt": "sogra",
   "ar": "حَماة",
   "arabizi": "7amaa"
  }
 ],
 "perguntas": [
  {
   "id": "perg-eh",
   "pt": "o que / qual",
   "ar": "إيه",
   "arabizi": "eh"
  },
  {
   "id": "perg-anhy",
   "pt": "qual (entre opções)",
   "ar": "أَنهي",
   "arabizi": "anhy"
  },
  {
   "id": "perg-min",
   "pt": "quem",
   "ar": "مين",
   "arabizi": "min"
  },
  {
   "id": "perg-fein",
   "pt": "onde / cadê",
   "ar": "فين",
   "arabizi": "fein"
  },
  {
   "id": "perg-menein",
   "pt": "de onde",
   "ar": "مِنين",
   "arabizi": "menein"
  },
  {
   "id": "perg-emta",
   "pt": "quando",
   "ar": "اِمتى",
   "arabizi": "emta"
  },
  {
   "id": "perg-el-sa3a-kam",
   "pt": "a que horas",
   "ar": "الساعة كام",
   "arabizi": "el-sa3a kam"
  },
  {
   "id": "perg-leh",
   "pt": "por que",
   "ar": "ليه",
   "arabizi": "leh"
  },
  {
   "id": "perg-3ashan",
   "pt": "porque",
   "ar": "عَشان",
   "arabizi": "3ashan"
  },
  {
   "id": "perg-ezay",
   "pt": "como",
   "ar": "اِزاي",
   "arabizi": "ezay"
  },
  {
   "id": "perg-bekam",
   "pt": "quanto custa",
   "ar": "بِكام",
   "arabizi": "bekam"
  },
  {
   "id": "perg-kam-marra",
   "pt": "quantas vezes",
   "ar": "كام مَرّة",
   "arabizi": "kam marra"
  },
  {
   "id": "perg-kol-2ad-eh",
   "pt": "com qual frequência",
   "ar": "كُل قَد ايه",
   "arabizi": "kol 2ad eh"
  },
  {
   "id": "perg-kam",
   "pt": "quanto / quantos",
   "ar": "كام",
   "arabizi": "kam"
  },
  {
   "id": "perg-kam-marra-fe-el-youm",
   "pt": "quantas vezes por dia",
   "ar": "كام مَرّة في اليوم",
   "arabizi": "kam marra fe el youm"
  },
  {
   "id": "perg-kam-marra-fe-el-osbu3",
   "pt": "quantas vezes por semana",
   "ar": "كام مَرّة في الأُسبوع",
   "arabizi": "kam marra fe el osbu3"
  },
  {
   "id": "perg-kam-marra-fe-el-shahr",
   "pt": "quantas vezes por mês",
   "ar": "كام مَرّة في الشَهر",
   "arabizi": "kam marra fe el shahr"
  },
  {
   "id": "perg-kam-marra-fe-el-sana",
   "pt": "quantas vezes por ano",
   "ar": "كام مَرّة في السَنة",
   "arabizi": "kam marra fe el sana"
  },
  {
   "id": "perg-3andak-kam-sana",
   "pt": "Quantos anos você tem? (m)",
   "ar": "انتَ عَندَك كام سَنة؟",
   "arabizi": "Enta 3andak kam sana?"
  },
  {
   "id": "perg-3andek-kam-sana",
   "pt": "Quantos anos você tem? (f)",
   "ar": "انتي عَندِك كام سَنة؟",
   "arabizi": "Enty 3andek kam sana?"
  },
  {
   "id": "perg-malak-malek",
   "pt": "O que você tem? / O que houve? (m / f)",
   "ar": "مالَك؟ / مالِك؟",
   "arabizi": "Malak? / Malek?"
  },
  {
   "id": "perg-ba2alak-2ad-eh",
   "pt": "faz quanto tempo que você…? (بَقال + sufixo + قَد ايه)",
   "ar": "بَقالَك قَد ايه",
   "arabizi": "ba2alak 2ad eh"
  }
 ],
 "possessivos": [
  {
   "id": "poss-sogro",
   "pt": "Sogro",
   "ar": "حَما",
   "forms": {
    "Eu": {
     "ar": "حَمايا",
     "arabizi": "7amaya"
    },
    "Ele": {
     "ar": "حماه",
     "arabizi": "7amah"
    },
    "Ela": {
     "ar": "حَماها",
     "arabizi": "7amaha"
    },
    "Você (m)": {
     "ar": "حَماك",
     "arabizi": "7amak"
    },
    "Você (f)": {
     "ar": "حَماكي",
     "arabizi": "7amaki"
    },
    "Nós": {
     "ar": "حمانا",
     "arabizi": "7amana"
    },
    "Vocês": {
     "ar": "حماكوا",
     "arabizi": "7amaku"
    },
    "Eles": {
     "ar": "حماهُم",
     "arabizi": "7amahom"
    }
   },
   "src": "2026-08-14"
  },
  {
   "id": "poss-irmao",
   "pt": "Irmão",
   "ar": "أخ",
   "forms": {
    "Eu": {
     "ar": "أخويا",
     "arabizi": "A5oya"
    },
    "Ele": {
     "ar": "أخوه",
     "arabizi": "A5uh"
    },
    "Ela": {
     "ar": "أخوها",
     "arabizi": "A5uha"
    },
    "Você (m)": {
     "ar": "أخوك",
     "arabizi": "A5uk"
    },
    "Você (f)": {
     "ar": "أخوكي",
     "arabizi": "A5uki"
    },
    "Nós": {
     "ar": "أخونا",
     "arabizi": "A5una"
    },
    "Vocês": {
     "ar": "أخوكوا",
     "arabizi": "A5uku"
    },
    "Eles": {
     "ar": "أخوهم",
     "arabizi": "A5uhom"
    }
   },
   "src": "2026-08-14"
  },
  {
   "id": "poss-pai",
   "pt": "Pai",
   "ar": "بابا",
   "forms": {
    "Eu": {
     "ar": "بابايا",
     "arabizi": "Babaya"
    },
    "Ele": {
     "ar": "باباه",
     "arabizi": "Babah"
    },
    "Ela": {
     "ar": "باباها",
     "arabizi": "Babaha"
    },
    "Você (m)": {
     "ar": "باباك",
     "arabizi": "Babak"
    },
    "Você (f)": {
     "ar": "باباكي",
     "arabizi": "Babaki"
    },
    "Nós": {
     "ar": "بابانا",
     "arabizi": "Babana"
    },
    "Vocês": {
     "ar": "باباكوا",
     "arabizi": "Babaku"
    },
    "Eles": {
     "ar": "باباهُم",
     "arabizi": "Babahom"
    }
   },
   "src": "2026-08-14"
  },
  {
   "id": "poss-escola",
   "pt": "Escola",
   "ar": "مَدرَسة",
   "forms": {
    "Eu": {
     "ar": "مَدرَستي",
     "arabizi": "Madrasty"
    },
    "Ele": {
     "ar": "مَدرَستُه",
     "arabizi": "Madrasto"
    },
    "Ela": {
     "ar": "مَدرَسِتها",
     "arabizi": "Madrasetha"
    },
    "Você (m)": {
     "ar": "مَدرَستَك",
     "arabizi": "Madrastak"
    },
    "Você (f)": {
     "ar": "مَدرَستِك",
     "arabizi": "Madrastek"
    },
    "Nós": {
     "ar": "مَدرسِتنا",
     "arabizi": "Madrasetna"
    },
    "Vocês": {
     "ar": "مَدرَسِتكوا",
     "arabizi": "Madrasetku"
    },
    "Eles": {
     "ar": "مَدرَسِتهُم",
     "arabizi": "Madrasethom"
    }
   },
   "src": "2026-08-15"
  },
  {
   "id": "poss-amigo",
   "pt": "Amigo",
   "ar": "صاحِب",
   "forms": {
    "Eu": {
     "ar": "صاحبي",
     "arabizi": "Sa7by"
    },
    "Ele": {
     "ar": "صاحبُه",
     "arabizi": "Sa7bo"
    },
    "Ela": {
     "ar": "صاحِبها",
     "arabizi": "Sa7ebha"
    },
    "Você (m)": {
     "ar": "صاحبَك",
     "arabizi": "Sa7bak"
    },
    "Você (f)": {
     "ar": "صاحبِك",
     "arabizi": "Sa7bek"
    },
    "Nós": {
     "ar": "صاحِبنا",
     "arabizi": "Sa7ebna"
    },
    "Vocês": {
     "ar": "صاحِبكوا",
     "arabizi": "Sa7ebku"
    },
    "Eles": {
     "ar": "صاحِبهُم",
     "arabizi": "Sa7ebhom"
    }
   },
   "src": "2026-08-15"
  },
  {
   "id": "poss-avo",
   "pt": "Avô",
   "ar": "جِد",
   "forms": {
    "Eu": {
     "ar": "جِدي",
     "arabizi": "Gedy"
    },
    "Ele": {
     "ar": "جِدُه",
     "arabizi": "Gedo"
    },
    "Ela": {
     "ar": "جِدَها",
     "arabizi": "Gedaha"
    },
    "Você (m)": {
     "ar": "جِدَك",
     "arabizi": "Gedak"
    },
    "Você (f)": {
     "ar": "جِدِك",
     "arabizi": "Gedek"
    },
    "Nós": {
     "ar": "جِدِنا",
     "arabizi": "Gedena"
    },
    "Vocês": {
     "ar": "جِدكوا",
     "arabizi": "Gedku"
    },
    "Eles": {
     "ar": "جِدُهُم",
     "arabizi": "Gedohom"
    }
   },
   "src": "2026-08-15"
  },
  {
   "id": "poss-relogio",
   "pt": "Relógio",
   "ar": "ساعة",
   "forms": {
    "Eu": {
     "ar": "ساعتي",
     "arabizi": "Sa3ty"
    },
    "Ele": {
     "ar": "ساعتُه",
     "arabizi": "Sa3to"
    },
    "Ela": {
     "ar": "ساعِتها",
     "arabizi": "Sa3etha"
    },
    "Você (m)": {
     "ar": "ساعتَك",
     "arabizi": "Sa3tak"
    },
    "Você (f)": {
     "ar": "ساعتِك",
     "arabizi": "Sa3tek"
    },
    "Nós": {
     "ar": "ساعِتنا",
     "arabizi": "Sa3etna"
    },
    "Vocês": {
     "ar": "ساعتكوا",
     "arabizi": "Sa3etku"
    },
    "Eles": {
     "ar": "ساعتهُم",
     "arabizi": "Sa3ethom"
    }
   },
   "src": "2026-08-15"
  },
  {
   "id": "poss-tio-paterno",
   "pt": "Tio paterno",
   "ar": "عَم",
   "forms": {
    "Eu": {
     "ar": "عَمي",
     "arabizi": "3amy"
    },
    "Ele": {
     "ar": "عَمُه",
     "arabizi": "3amo"
    },
    "Ela": {
     "ar": "عَمَها",
     "arabizi": "3amaha"
    },
    "Você (m)": {
     "ar": "عَمَك",
     "arabizi": "3amak"
    },
    "Você (f)": {
     "ar": "عَمِك",
     "arabizi": "3amek"
    },
    "Nós": {
     "ar": "عَمِنا",
     "arabizi": "3amena"
    },
    "Vocês": {
     "ar": "عَمكوا",
     "arabizi": "3amku"
    },
    "Eles": {
     "ar": "عَمُهَم",
     "arabizi": "3amohom"
    }
   },
   "src": "2026-08-16"
  },
  {
   "id": "poss-tio-materno",
   "pt": "Tio materno",
   "ar": "خال",
   "forms": {
    "Eu": {
     "ar": "خالي",
     "arabizi": "5aly"
    },
    "Ele": {
     "ar": "خالُه",
     "arabizi": "5alo"
    },
    "Ela": {
     "ar": "خالها",
     "arabizi": "5alha"
    },
    "Você (m)": {
     "ar": "خالَك",
     "arabizi": "5alak"
    },
    "Você (f)": {
     "ar": "خالِك",
     "arabizi": "5alek"
    },
    "Nós": {
     "ar": "خالنا",
     "arabizi": "5alna"
    },
    "Vocês": {
     "ar": "خالكوا",
     "arabizi": "5alku"
    },
    "Eles": {
     "ar": "خالهُم",
     "arabizi": "5alhom"
    }
   },
   "src": "2026-08-16"
  },
  {
   "id": "poss-3and",
   "pt": "Ter (عَند + sufixo)",
   "ar": "عَند",
   "forms": {
    "Eu": {
     "ar": "عَندي",
     "arabizi": "3andi"
    },
    "Ele": {
     "ar": "عَندُه",
     "arabizi": "3ando"
    },
    "Ela": {
     "ar": "عَندَها",
     "arabizi": "3andaha"
    },
    "Você (m)": {
     "ar": "عَندَك",
     "arabizi": "3andak"
    },
    "Você (f)": {
     "ar": "عَندِك",
     "arabizi": "3andek"
    },
    "Nós": {
     "ar": "عَندِنا",
     "arabizi": "3andena"
    },
    "Vocês": {
     "ar": "عَندُكوا",
     "arabizi": "3andoku"
    },
    "Eles": {
     "ar": "عَندُهُم",
     "arabizi": "3andohom"
    }
   },
   "src": "2026-08-21 · confirmado 2026-08-26"
  },
  {
   "id": "poss-3and-neg",
   "pt": "Não ter (ما + عَند + ـش)",
   "ar": "ماعَندي...ش",
   "forms": {
    "Eu": {
     "ar": "أنا ماعنديش",
     "arabizi": "Ana ma3andish"
    },
    "Você (m)": {
     "ar": "انتَ ماعَندَكش",
     "arabizi": "Enta ma3andaksh"
    },
    "Você (f)": {
     "ar": "انتي ماعندِكيش",
     "arabizi": "Enti ma3andekish"
    },
    "Ele": {
     "ar": "هُوَ ماعندوش",
     "arabizi": "Howa ma3andush"
    },
    "Ela": {
     "ar": "هي ماعندَهاش",
     "arabizi": "Heya ma3andahash"
    },
    "Nós": {
     "ar": "احنا ماعَندِناش",
     "arabizi": "E7na ma3andenash"
    },
    "Vocês": {
     "ar": "انتوا ماعندكوش",
     "arabizi": "Entu ma3andokush"
    },
    "Eles": {
     "ar": "هُما ماعَندُهُمش",
     "arabizi": "Homa ma3andohomsh"
    }
   },
   "src": "2026-08-26"
  },
  {
   "id": "poss-leua7d",
   "pt": "Sozinho (لِوَحد + sufixo)",
   "ar": "لِوَحد",
   "forms": {
    "Eu": {
     "ar": "لِوَحدي",
     "arabizi": "leua7dy"
    },
    "Ele": {
     "ar": "لِوَحدُه",
     "arabizi": "leua7do"
    },
    "Ela": {
     "ar": "لِوَحدَها",
     "arabizi": "leua7daha"
    },
    "Você (m)": {
     "ar": "لِوَحدَك",
     "arabizi": "leua7dak"
    },
    "Você (f)": {
     "ar": "لِوَحدِك",
     "arabizi": "leua7dek"
    },
    "Nós": {
     "ar": "لِوَحدِنا",
     "arabizi": "leua7dena"
    },
    "Vocês": {
     "ar": "لِوَحدُكوا",
     "arabizi": "leua7doku"
    },
    "Eles": {
     "ar": "لِوَحدُهُم",
     "arabizi": "leua7dohom"
    }
   },
   "src": "2026-09-02"
  },
  {
   "id": "poss-men-8eir",
   "pt": "Sem (مِن غير + sufixo)",
   "ar": "مِن غير",
   "forms": {
    "Eu": {
     "ar": "مِن غيري",
     "arabizi": "men 8ery"
    },
    "Ele": {
     "ar": "مِن غيرُه",
     "arabizi": "men 8ero"
    },
    "Ela": {
     "ar": "مِن غيرها",
     "arabizi": "men 8erha"
    },
    "Você (m)": {
     "ar": "مِن غيرَك",
     "arabizi": "men 8erak"
    },
    "Você (f)": {
     "ar": "مِن غيرِك",
     "arabizi": "men 8erek"
    },
    "Nós": {
     "ar": "مِن غيرنا",
     "arabizi": "men 8erna"
    },
    "Vocês": {
     "ar": "مِن غيركوا",
     "arabizi": "men 8erku"
    },
    "Eles": {
     "ar": "مِن غيرهُم",
     "arabizi": "men 8erhom"
    }
   },
   "src": "2026-09-04"
  },
  {
   "id": "poss-ma3a",
   "pt": "Com / estar com (مَعَ + sufixo)",
   "ar": "مَعَ",
   "forms": {
    "Eu": {
     "ar": "معايا",
     "arabizi": "ma3aya"
    },
    "Ele": {
     "ar": "معاه",
     "arabizi": "ma3ah"
    },
    "Ela": {
     "ar": "معاها",
     "arabizi": "ma3aha"
    },
    "Você (m)": {
     "ar": "معاك",
     "arabizi": "ma3ak"
    },
    "Você (f)": {
     "ar": "معاكي",
     "arabizi": "ma3aki"
    },
    "Nós": {
     "ar": "معانا",
     "arabizi": "ma3ana"
    },
    "Vocês": {
     "ar": "معاكوا",
     "arabizi": "ma3aku"
    },
    "Eles": {
     "ar": "معاهُم",
     "arabizi": "ma3ahom"
    }
   },
   "src": "2026-09-04"
  },
  {
   "id": "poss-nefs",
   "pt": "Estar com vontade de (نِفس + sufixo)",
   "ar": "نِفس",
   "forms": {
    "Eu": {
     "ar": "نِفسي",
     "arabizi": "nefsy"
    },
    "Ele": {
     "ar": "نِفسُه",
     "arabizi": "nefso"
    },
    "Ela": {
     "ar": "نِفسَها",
     "arabizi": "nefsaha"
    },
    "Você (m)": {
     "ar": "نِفسَك",
     "arabizi": "nefsak"
    },
    "Você (f)": {
     "ar": "نِفسِك",
     "arabizi": "nefsek"
    },
    "Nós": {
     "ar": "نِفسِنا",
     "arabizi": "nefsena"
    },
    "Vocês": {
     "ar": "نِفسُكوا",
     "arabizi": "nefsoku"
    },
    "Eles": {
     "ar": "نِفسُهُم",
     "arabizi": "nefsohom"
    }
   },
   "src": "2026-09-09"
  },
  {
   "id": "poss-kan-3and",
   "pt": "Ter no passado — tinha/tive (كان + عَند)",
   "ar": "كان عَند",
   "forms": {
    "Eu": {
     "ar": "كان عَندي",
     "arabizi": "kan 3andi"
    },
    "Ele": {
     "ar": "كان عَندُه",
     "arabizi": "kan 3ando"
    },
    "Ela": {
     "ar": "كان عَندَها",
     "arabizi": "kan 3andaha"
    },
    "Você (m)": {
     "ar": "كان عَندَك",
     "arabizi": "kan 3andak"
    },
    "Você (f)": {
     "ar": "كان عَندِك",
     "arabizi": "kan 3andek"
    },
    "Nós": {
     "ar": "كان عَندِنا",
     "arabizi": "kan 3andena"
    },
    "Vocês": {
     "ar": "كان عَندُكوا",
     "arabizi": "kan 3andoku"
    },
    "Eles": {
     "ar": "كان عَندُهُم",
     "arabizi": "kan 3andohom"
    }
   },
   "src": "2026-09-18 (Aula 84) · كان invariável + paradigma عَند"
  },
  {
   "id": "poss-haikun-3and",
   "pt": "Ter no futuro — vou ter (هَيكون + عَند)",
   "ar": "هَيكون عَند",
   "forms": {
    "Eu": {
     "ar": "هَيكون عَندي",
     "arabizi": "haikun 3andi"
    },
    "Ele": {
     "ar": "هَيكون عَندُه",
     "arabizi": "haikun 3ando"
    },
    "Ela": {
     "ar": "هَيكون عَندَها",
     "arabizi": "haikun 3andaha"
    },
    "Você (m)": {
     "ar": "هَيكون عَندَك",
     "arabizi": "haikun 3andak"
    },
    "Você (f)": {
     "ar": "هَيكون عَندِك",
     "arabizi": "haikun 3andek"
    },
    "Nós": {
     "ar": "هَيكون عَندِنا",
     "arabizi": "haikun 3andena"
    },
    "Vocês": {
     "ar": "هَيكون عَندُكوا",
     "arabizi": "haikun 3andoku"
    },
    "Eles": {
     "ar": "هَيكون عَندُهُم",
     "arabizi": "haikun 3andohom"
    }
   },
   "src": "2026-09-18 (Aula 84) · هَيكون invariável + paradigma عَند"
  },
  {
   "id": "poss-camisa",
   "pt": "Camisa",
   "ar": "قَميص",
   "forms": {
    "Eu": {
     "ar": "قَميصي",
     "arabizi": "2amisy"
    },
    "Ele": {
     "ar": "قَميصُه",
     "arabizi": "2amiso"
    },
    "Ela": {
     "ar": "قَميصها",
     "arabizi": "2amisha"
    },
    "Você (m)": {
     "ar": "قَميصَك",
     "arabizi": "2amisak"
    },
    "Você (f)": {
     "ar": "قَميصِك",
     "arabizi": "2amisek"
    },
    "Nós": {
     "ar": "قَميصنا",
     "arabizi": "2amisna"
    },
    "Vocês": {
     "ar": "قَميصكوا",
     "arabizi": "2amisku"
    },
    "Eles": {
     "ar": "قَميصهُم",
     "arabizi": "2amishom"
    }
   },
   "src": "2026-09-18 (Aula 84)"
  },
  {
   "id": "poss-caneta",
   "pt": "Caneta",
   "ar": "قَلَم",
   "forms": {
    "Eu": {
     "ar": "قَلَمي",
     "arabizi": "2alamy"
    },
    "Ele": {
     "ar": "قَلَمُه",
     "arabizi": "2alamo"
    },
    "Ela": {
     "ar": "قَلمها",
     "arabizi": "2alamha"
    },
    "Você (m)": {
     "ar": "قَلَمَك",
     "arabizi": "2alamak"
    },
    "Você (f)": {
     "ar": "قَلمِك",
     "arabizi": "2alamek"
    },
    "Nós": {
     "ar": "قَلَمنا",
     "arabizi": "2alamna"
    },
    "Vocês": {
     "ar": "قَلمكوا",
     "arabizi": "2alamku"
    },
    "Eles": {
     "ar": "قَلَمهُم",
     "arabizi": "2alamhom"
    }
   },
   "src": "2026-09-30 (Aula 85)"
  },
  {
   "id": "poss-caderno",
   "pt": "Caderno",
   "ar": "كُراسة",
   "forms": {
    "Eu": {
     "ar": "كُراستي",
     "arabizi": "Korasty"
    },
    "Ele": {
     "ar": "كُراستُه",
     "arabizi": "Korasto"
    },
    "Ela": {
     "ar": "كراسِتها",
     "arabizi": "Korassetha"
    },
    "Você (m)": {
     "ar": "كُراستَك",
     "arabizi": "Korastak"
    },
    "Você (f)": {
     "ar": "كراستِك",
     "arabizi": "Korastek"
    },
    "Nós": {
     "ar": "كُراسِتنا",
     "arabizi": "Korassetna"
    },
    "Vocês": {
     "ar": "كُراسِتكوا",
     "arabizi": "Korassetku"
    },
    "Eles": {
     "ar": "كُراسِتهُم",
     "arabizi": "Korasethom"
    }
   },
   "src": "2026-09-30 (Aula 85)"
  },
  {
   "id": "poss-empresa",
   "pt": "Empresa",
   "ar": "شِركة",
   "forms": {
    "Eu": {
     "ar": "شِركِتي",
     "arabizi": "sherkety"
    },
    "Ele": {
     "ar": "شِركِتُه",
     "arabizi": "sherketo"
    },
    "Ela": {
     "ar": "شِركِتها",
     "arabizi": "sherketha"
    },
    "Você (m)": {
     "ar": "شِركِتَك",
     "arabizi": "sherketak"
    },
    "Você (f)": {
     "ar": "شِركِتك",
     "arabizi": "sherketek"
    },
    "Nós": {
     "ar": "شِركِتنا",
     "arabizi": "sherketna"
    },
    "Vocês": {
     "ar": "شِركِتكوا",
     "arabizi": "sherketku"
    },
    "Eles": {
     "ar": "شِركِتهُم",
     "arabizi": "sherkethom"
    }
   },
   "src": "2026-09-30 (Aula 85)"
  },
  {
   "id": "poss-laken",
   "pt": "Mas (لَكِن + sufixo)",
   "ar": "لَكِن",
   "forms": {
    "Eu": {
     "ar": "لكني",
     "arabizi": "lakeny"
    },
    "Ele": {
     "ar": "لَكنُه",
     "arabizi": "lakeno"
    },
    "Ela": {
     "ar": "لَكنها",
     "arabizi": "lakenaha"
    },
    "Você (m)": {
     "ar": "لَكِنَك",
     "arabizi": "lakenak"
    },
    "Você (f)": {
     "ar": "لَكِنِك",
     "arabizi": "lakenek"
    },
    "Nós": {
     "ar": "لَكنِنا",
     "arabizi": "lakenena"
    },
    "Vocês": {
     "ar": "لَكنُكوا",
     "arabizi": "lakenoku"
    },
    "Eles": {
     "ar": "لَكنُهُم",
     "arabizi": "lakenohom"
    }
   },
   "src": "2026-10-07 (Aula 86)"
  },
  {
   "id": "poss-ba2al",
   "pt": "Faz (tempo) que… (بَقال + sufixo + tempo + verbo)",
   "ar": "بَقال",
   "forms": {
    "Eu": {
     "ar": "بَقالي",
     "arabizi": "ba2aly"
    },
    "Ele": {
     "ar": "بَقالُه",
     "arabizi": "ba2alo"
    },
    "Ela": {
     "ar": "بَقالها",
     "arabizi": "ba2alha"
    },
    "Você (m)": {
     "ar": "بَقالَك",
     "arabizi": "ba2alak"
    },
    "Você (f)": {
     "ar": "بَقالِك",
     "arabizi": "ba2alek"
    },
    "Nós": {
     "ar": "بَقالنا",
     "arabizi": "ba2alna"
    },
    "Vocês": {
     "ar": "بَقالكوا",
     "arabizi": "ba2alku"
    },
    "Eles": {
     "ar": "بقالهم",
     "arabizi": "ba2alhom"
    }
   },
   "src": "2026-10-09 (Aula 87)"
  },
  {
   "id": "poss-casa",
   "pt": "Casa",
   "ar": "بيت",
   "src": "Apostila 2 p.2",
   "forms": {
    "Eu": {
     "ar": "بيتي",
     "arabizi": "beity"
    },
    "Ele": {
     "ar": "بيته",
     "arabizi": "beito"
    },
    "Ela": {
     "ar": "بيتها",
     "arabizi": "beitha"
    },
    "Você (m)": {
     "ar": "بيتَك",
     "arabizi": "beitak"
    },
    "Você (f)": {
     "ar": "بيتِك",
     "arabizi": "beitek"
    },
    "Nós": {
     "ar": "بيتنا",
     "arabizi": "beitna"
    },
    "Vocês": {
     "ar": "بيتكوا",
     "arabizi": "beitku"
    },
    "Eles": {
     "ar": "بيتهُم",
     "arabizi": "beithom"
    }
   }
  },
  {
   "id": "poss-filha",
   "pt": "Filha / menina",
   "ar": "بِنت",
   "src": "Apostila 2 p.2",
   "forms": {
    "Eu": {
     "ar": "بِنتي",
     "arabizi": "benty"
    },
    "Ele": {
     "ar": "بِنته",
     "arabizi": "bento"
    },
    "Ela": {
     "ar": "بِنتها",
     "arabizi": "bentaha"
    },
    "Você (m)": {
     "ar": "بِنتَك",
     "arabizi": "bentak"
    },
    "Você (f)": {
     "ar": "بِنتِك",
     "arabizi": "bentek"
    },
    "Nós": {
     "ar": "بِنتِنا",
     "arabizi": "bentena"
    },
    "Vocês": {
     "ar": "بِنتكوا",
     "arabizi": "bentoku"
    },
    "Eles": {
     "ar": "بِنتهُم",
     "arabizi": "bentohom"
    }
   }
  },
  {
   "id": "poss-filhos",
   "pt": "Filhos / crianças",
   "ar": "أولاد",
   "src": "Apostila 2 p.2",
   "forms": {
    "Eu": {
     "ar": "أولادي",
     "arabizi": "aulady"
    },
    "Ele": {
     "ar": "أولاده",
     "arabizi": "aulado"
    },
    "Ela": {
     "ar": "أولادها",
     "arabizi": "auladha"
    },
    "Você (m)": {
     "ar": "أولادَك",
     "arabizi": "auladak"
    },
    "Você (f)": {
     "ar": "أولادِك",
     "arabizi": "auladek"
    },
    "Nós": {
     "ar": "أولادنا",
     "arabizi": "auladna"
    },
    "Vocês": {
     "ar": "أولادكوا",
     "arabizi": "auladku"
    },
    "Eles": {
     "ar": "أولادهُم",
     "arabizi": "auladhom"
    }
   }
  },
  {
   "id": "poss-carteira",
   "pt": "Carteira",
   "ar": "مَحفَظة",
   "src": "Apostila 2 p.4",
   "forms": {
    "Eu": {
     "ar": "مَحفَظتي",
     "arabizi": "ma7fazty"
    },
    "Ele": {
     "ar": "مَحفَظته",
     "arabizi": "ma7fazto"
    },
    "Ela": {
     "ar": "مَحفَظِتها",
     "arabizi": "ma7fazetha"
    },
    "Você (m)": {
     "ar": "مَحفَظتَك",
     "arabizi": "ma7faztak"
    },
    "Você (f)": {
     "ar": "مَحفَظتِك",
     "arabizi": "ma7faztek"
    },
    "Nós": {
     "ar": "مَحفَظِتنا",
     "arabizi": "ma7fazetna"
    },
    "Vocês": {
     "ar": "مَحفَظِتكوا",
     "arabizi": "ma7fazetku"
    },
    "Eles": {
     "ar": "مَحفَظِتهُم",
     "arabizi": "ma7fazethom"
    }
   }
  },
  {
   "id": "poss-oculos",
   "pt": "Óculos",
   "ar": "نَضارة",
   "src": "Apostila 2 p.4",
   "forms": {
    "Eu": {
     "ar": "نَضارتي",
     "arabizi": "nadarty"
    },
    "Ele": {
     "ar": "نَضارته",
     "arabizi": "nadarto"
    },
    "Ela": {
     "ar": "نَضارِتها",
     "arabizi": "nadaretha"
    },
    "Você (m)": {
     "ar": "نَضارتَك",
     "arabizi": "nadartak"
    },
    "Você (f)": {
     "ar": "نَضارتِك",
     "arabizi": "nadartek"
    },
    "Nós": {
     "ar": "نَضارِتنا",
     "arabizi": "nadaretna"
    },
    "Vocês": {
     "ar": "نَضارِتكوا",
     "arabizi": "nadaretku"
    },
    "Eles": {
     "ar": "نَضارِتهُم",
     "arabizi": "nadarethom"
    }
   }
  },
  {
   "id": "poss-wara",
   "pt": "Atrás (وَرا)",
   "ar": "وَرا",
   "src": "Apostila 2 p.17",
   "forms": {
    "Eu": {
     "ar": "ورايا",
     "arabizi": "waraya"
    },
    "Ele": {
     "ar": "وَراه",
     "arabizi": "warah"
    },
    "Ela": {
     "ar": "وَراها",
     "arabizi": "waraha"
    },
    "Você (m)": {
     "ar": "وَراك",
     "arabizi": "warak"
    },
    "Você (f)": {
     "ar": "وَراكي",
     "arabizi": "waraky"
    },
    "Nós": {
     "ar": "وَرانا",
     "arabizi": "warana"
    },
    "Vocês": {
     "ar": "وَراكوا",
     "arabizi": "waraku"
    },
    "Eles": {
     "ar": "وَراهُم",
     "arabizi": "warahom"
    }
   }
  },
  {
   "id": "poss-gamb",
   "pt": "Ao lado (جَنب)",
   "ar": "جَنب",
   "src": "Apostila 2 p.17",
   "forms": {
    "Eu": {
     "ar": "جَنبي",
     "arabizi": "gamby"
    },
    "Ele": {
     "ar": "جَنبه",
     "arabizi": "gambo"
    },
    "Ela": {
     "ar": "جَنبها",
     "arabizi": "gambaha"
    },
    "Você (m)": {
     "ar": "جَنبَك",
     "arabizi": "gambak"
    },
    "Você (f)": {
     "ar": "جَنبِك",
     "arabizi": "gambek"
    },
    "Nós": {
     "ar": "جَنبِنا",
     "arabizi": "gambena"
    },
    "Vocês": {
     "ar": "جَنبكوا",
     "arabizi": "gamboku"
    },
    "Eles": {
     "ar": "جَنبهُم",
     "arabizi": "gambohom"
    }
   }
  },
  {
   "id": "poss-odam",
   "pt": "Em frente (قُدام)",
   "ar": "قُدام",
   "src": "Apostila 2 p.17",
   "forms": {
    "Eu": {
     "ar": "قُدامي",
     "arabizi": "odamy"
    },
    "Ele": {
     "ar": "قُدامه",
     "arabizi": "odamo"
    },
    "Ela": {
     "ar": "قُدامها",
     "arabizi": "odamha"
    },
    "Você (m)": {
     "ar": "قُدامَك",
     "arabizi": "odamak"
    },
    "Você (f)": {
     "ar": "قُدامِك",
     "arabizi": "odamek"
    },
    "Nós": {
     "ar": "قُدامنا",
     "arabizi": "odamna"
    },
    "Vocês": {
     "ar": "قُدامكوا",
     "arabizi": "odamku"
    },
    "Eles": {
     "ar": "قُدامهُم",
     "arabizi": "odamhom"
    }
   }
  },
  {
   "id": "poss-bi",
   "pt": "Preposição بـ + pronome (ligar para…)",
   "ar": "بـ",
   "src": "Apostila 2 p.22",
   "forms": {
    "Eu": {
     "ar": "بيا",
     "arabizi": "beya"
    },
    "Ele": {
     "ar": "بِيه",
     "arabizi": "bih"
    },
    "Ela": {
     "ar": "بِيها",
     "arabizi": "biha"
    },
    "Você (m)": {
     "ar": "بِيك",
     "arabizi": "bik"
    },
    "Você (f)": {
     "ar": "بِيكي",
     "arabizi": "biky"
    },
    "Nós": {
     "ar": "بِينا",
     "arabizi": "bina"
    },
    "Vocês": {
     "ar": "بِيكوا",
     "arabizi": "biku"
    },
    "Eles": {
     "ar": "بِيهُم",
     "arabizi": "bihom"
    }
   }
  },
  {
   "id": "poss-bei7eb-objeto",
   "pt": "Ele ama … (هو بيحِب + pronome-objeto)",
   "ar": "هو بيحِب",
   "src": "Apostila 2 p.17",
   "forms": {
    "Eu": {
     "ar": "هو بيحِبني",
     "arabizi": "howa bei7ebeny"
    },
    "Ele": {
     "ar": "هو بيحِبه",
     "arabizi": "howa bei7ebo"
    },
    "Ela": {
     "ar": "هو بيحِبها",
     "arabizi": "howa bei7ebaha"
    },
    "Você (m)": {
     "ar": "هو بيحِبَك",
     "arabizi": "howa bei7ebak"
    },
    "Você (f)": {
     "ar": "هو بيحِبِك",
     "arabizi": "howa bei7ebek"
    },
    "Nós": {
     "ar": "هو بيحِبِنا",
     "arabizi": "howa bei7ebena"
    },
    "Vocês": {
     "ar": "هو بيحِبكوا",
     "arabizi": "howa bei7eboku"
    },
    "Eles": {
     "ar": "هو بيحِبهُم",
     "arabizi": "howa bei7ebohom"
    }
   }
  }
 ],
 "escrita": [
  {
   "id": "esc-0-voces-estao-fazendo-o-qu",
   "pt": "Vocês estão fazendo o quê agora?",
   "ar": "انتوا بِتِعمِلوا ايه دِلوَقتي؟",
   "arabizi": "Entu bete3melu eh delua2ty?",
   "src": "2026-07-20"
  },
  {
   "id": "esc-1-voces-cozinham-carne-mui",
   "pt": "Vocês cozinham carne muito bem! Posso pegar a receita?",
   "ar": "انتوا بِتُطبُخوا لَحمة حِلو أوي! مُمكِن آخُد الوَصفة؟",
   "arabizi": "Entu betotbo5u la7ma 7elw awi! Momken a5od el-wasfa?",
   "src": "2026-07-20"
  },
  {
   "id": "esc-2-voces-dancam-samba-muito",
   "pt": "Vocês dançam samba muito bem! De onde vocês são?",
   "ar": "انتوا بِتُرقُصوا سامبا كويس أوي! انتوا مِنين؟",
   "arabizi": "Entu betor2osu samba kowayes awi! Entu menein?",
   "src": "2026-07-20"
  },
  {
   "id": "esc-3-quantas-vezes-por-dia-vo",
   "pt": "Quantas vezes por dia vocês escovam os dentes?",
   "ar": "انتوا بِتِغسِلوا سِنانكوا كام مَرة في اليوم؟",
   "arabizi": "Entu bete8selu senanku kam marra fe el-youm?",
   "src": "2026-07-20"
  },
  {
   "id": "esc-4-quando-voces-vao-arrumar",
   "pt": "Quando vocês vão arrumar o quarto? Está muito bagunçado!",
   "ar": "انتوا هَترَوَقوا الأوضة امتى؟ مِفَركِشة أوي!",
   "arabizi": "Entu hatraua2u el-ouda emta? Mefarkesha awi!",
   "src": "2026-07-20"
  },
  {
   "id": "esc-5-eu-estou-atrasado-e-prec",
   "pt": "Eu estou atrasado e preciso de ajuda!",
   "ar": "أنا مِتأخَر ومِحتاج مُساعدة!",
   "arabizi": "Ana met2a5ar we mei7tag mossa3da!",
   "src": "2026-07-21"
  },
  {
   "id": "esc-6-ta-bom-voce-vai-para-ond",
   "pt": "Tá bom! Você vai para onde? (m)",
   "ar": "ماشي! انتَ هَتروح فين؟",
   "arabizi": "Mashy! Enta hatru7 fein?",
   "src": "2026-07-21"
  },
  {
   "id": "esc-7-tenho-uma-reuniao-na-emp",
   "pt": "Tenho uma reunião na empresa hoje, preciso chegar antes das 9h30.",
   "ar": "أنا عَندي اجتِماع في الشِركة النهاردة، مِحتاج أوصَل قَبل الساعة 9:30.",
   "arabizi": "Ana 3andy ektema3 fe el-sherka enaharda, mei7tag aussal 2abl el-sa3a 9:30.",
   "src": "2026-07-21"
  },
  {
   "id": "esc-8-eu-gosto-de-passar-a-rou",
   "pt": "Eu gosto de passar a roupa antes de sair de casa.",
   "ar": "أنا بَحِب أكوي الهُدوم قَبل ما أخرُج مِن البيت.",
   "arabizi": "Ana ba7eb akwi el-hodum 2abl ma a5rog men el-beit.",
   "src": "2026-07-21"
  },
  {
   "id": "esc-9-nao-obrigado-eu-vou-toma",
   "pt": "Não, obrigado. Eu vou tomar banho e escovar os dentes.",
   "ar": "لا، شُكراً. أنا هاخُد دُش وهَغسِل سِناني.",
   "arabizi": "La, shukran. Ana ha5od dosh we ha8sel senany.",
   "src": "2026-07-21"
  },
  {
   "id": "esc-10-voces-estao-fazendo-o-qu",
   "pt": "Vocês estão fazendo o quê agora?",
   "ar": "انتوا بِتعمِلوا ايه دِلوَقتي؟",
   "arabizi": "Entu bete3melu eh delua2ty?",
   "src": "2026-07-22"
  },
  {
   "id": "esc-11-voces-vao-para-onde-na-s",
   "pt": "Vocês vão para onde na sexta-feira?",
   "ar": "انتوا بِتروحوا فين يوم الجُمعة؟",
   "arabizi": "Entu betru7u fein youm el-gom3a?",
   "src": "2026-07-22"
  },
  {
   "id": "esc-12-voces-gostam-de-escutar-",
   "pt": "Vocês gostam de escutar música árabe?",
   "ar": "انتوا بِتحِبوا تِسمَعوا أغاني عربي؟",
   "arabizi": "Entu bet7ebu tesma3u a8any 3arabi?",
   "src": "2026-07-22"
  },
  {
   "id": "esc-13-voces-querem-beber-algum",
   "pt": "Vocês querem beber alguma coisa?",
   "ar": "انتوا عايزين تِشرَبوا حاجة؟",
   "arabizi": "Entu 3aeizin teshrabu 7aga?",
   "src": "2026-07-22"
  },
  {
   "id": "esc-14-voces-precisam-descansar",
   "pt": "Vocês precisam descansar um pouco!",
   "ar": "انتوا مِحتاجين تِرَيَحوا شوية!",
   "arabizi": "Entu mei7tagin teraya7u shewaya!",
   "src": "2026-07-22"
  },
  {
   "id": "esc-15-por-que-voces-nao-querem",
   "pt": "Por que vocês não querem assistir ao filme novo conosco?",
   "ar": "انتوا مِش عايزين تِتفَرَجوا عَلى الفيلم الجِديد معانا ليه؟",
   "arabizi": "Entu mesh 3eizin tetfaragu 3ala le-felm el-gedid ma3ana leh?",
   "src": "2026-07-23"
  },
  {
   "id": "esc-16-como-voces-sabem-dancar-",
   "pt": "Como vocês sabem dançar samba muito bem?",
   "ar": "انتوا بِتعرفوا ترقُصوا سامبا كويس أوي إزاي؟",
   "arabizi": "Entu bete3rafu tor2osu samba kowayes awi ezay?",
   "src": "2026-07-23"
  },
  {
   "id": "esc-17-porque-somos-brasileiros",
   "pt": "Porque somos brasileiros.",
   "ar": "عشان احنا بَرازيليين.",
   "arabizi": "3ashan e7na barazileiin.",
   "src": "2026-07-23"
  },
  {
   "id": "esc-18-por-que-voces-gostam-mui",
   "pt": "Por que vocês gostam muito de comer mahshi?",
   "ar": "انتوا بِتحِبوا تاكلوا مَحشي أوي ليه؟",
   "arabizi": "Entu bet7ebu taklu ma7shi awi leh?",
   "src": "2026-07-23"
  },
  {
   "id": "esc-19-por-que-voces-querem-pre",
   "pt": "Por que vocês querem preparar as malas agora? A viagem é ainda na semana que vem!",
   "ar": "انتوا عايزين تِجَهِزوا الشُنَط دِلوَقتي ليه؟ السَفَر لِسا الأسبوع الجاي!",
   "arabizi": "Entu 3aeizin tegahezu el-shonat delua2ty leh? El-safar lessa el-osbu3 el-gay!",
   "src": "2026-07-23"
  },
  {
   "id": "esc-20-eles-nao-trabalham-conos",
   "pt": "Eles não trabalham conosco.",
   "ar": "هما مِش بيشتغلوا معانا.",
   "arabizi": "Homa mesh bieshta8alu ma3ana.",
   "src": "2026-07-24"
  },
  {
   "id": "esc-21-eles-vao-trabalhar-em-ou",
   "pt": "Eles vão trabalhar em outra empresa no ano que vem.",
   "ar": "هُما هيشتَغَلوا في شرِكة تانية السنة الجاية.",
   "arabizi": "Homa haieshta8alu fe sherka tanya el-sana el-gaya.",
   "src": "2026-07-24"
  },
  {
   "id": "esc-22-ahmed-e-mona-visitam-a-f",
   "pt": "Ahmed e Mona visitam a família no Egito em janeiro.",
   "ar": "أحمَد ومُنى بيزوروا العيلة في مَصر في يَنايِر.",
   "arabizi": "Ahmed we Mona beizuru el-3ela fe Masr fe yanayer.",
   "src": "2026-07-24"
  },
  {
   "id": "esc-23-os-egipcios-sempre-chega",
   "pt": "Os egípcios sempre chegam atrasados.",
   "ar": "المَصريين دايماً بيوصَلوا مِتأخرين.",
   "arabizi": "El-masreyin dayman beieussalu met2a5arin.",
   "src": "2026-07-24"
  },
  {
   "id": "esc-24-eles-nao-cozinham-na-sex",
   "pt": "Eles não cozinham na sexta porque comem fora.",
   "ar": "هُما مِش بيطبخوا يوم الجُمعة عَشان بياكلوا بُرة.",
   "arabizi": "Homa mesh beitbo5u youm el-goma3a 3ashan biaklu bara.",
   "src": "2026-07-24"
  },
  {
   "id": "esc-25-meus-amigos-nao-falam-po",
   "pt": "Meus amigos não falam português bem.",
   "ar": "أصحابي مِش بيتكلموا بُرتُغالي كويس.",
   "arabizi": "As7aby mesh beitkalemu borto8aly kowayes.",
   "src": "2026-07-25"
  },
  {
   "id": "esc-26-a-que-horas-voces-vao-ch",
   "pt": "A que horas vocês vão chegar no Brasil?",
   "ar": "انتوا هَتِوصَلوا البرازيل الساعة كام؟",
   "arabizi": "Entu hatuessalu el-barazil el-sa3a kam?",
   "src": "2026-07-26"
  },
  {
   "id": "esc-27-a-casa-esta-muito-bagunc",
   "pt": "A casa está muito bagunçada.",
   "ar": "البيت مِفَركِش أوي.",
   "arabizi": "El-beit mefarkesh awi.",
   "src": "2026-07-27"
  },
  {
   "id": "esc-28-precisamos-tambem-lavar-",
   "pt": "Precisamos também lavar a louça e lavar e passar as roupas antes da viagem.",
   "ar": "مِحتاجين كَمان نِغسِل المواعين ونِغسِل ونكوي الهِدوم قَبل السَفَر.",
   "arabizi": "Mei7tagin kaman ne8sel el-mawa3in we ne8sel we nekwi el-hedum 2abl el-safar.",
   "src": "2026-07-27"
  },
  {
   "id": "esc-29-mas-estamos-muito-felize",
   "pt": "Mas estamos muito felizes, porque vamos viajar e descansar um pouco.",
   "ar": "بَس اِحنا مَبسوطين أوي، عَشان هَنسافِر وهَنرَيَح شوية.",
   "arabizi": "Bas e7na mabsutin awi, 3ashan hansafer we hanraya7 shewaya.",
   "src": "2026-07-27"
  },
  {
   "id": "esc-30-nos-vamos-acordar-cedo-p",
   "pt": "Nós vamos acordar cedo porque precisamos arrumar a casa.",
   "ar": "احنا هَنصحى بَدري عشان مِحتاجين نِرَوَق البيت.",
   "arabizi": "E7na hanes7a badry 3ashan mei7tagin neraua2 el-beit.",
   "src": "2026-07-27"
  },
  {
   "id": "esc-31-nos-estamos-aqui-na-sala",
   "pt": "Nós estamos aqui na sala assistindo a um filme.",
   "ar": "احنا هِنا في الصالة بِنتفَرَج على فيلم.",
   "arabizi": "E7na hena fe el-sala benetfarag 3ala film.",
   "src": "2026-07-27"
  },
  {
   "id": "esc-32-voces-precisam-descansar",
   "pt": "Vocês precisam descansar um pouco! Vocês estão muito cansados e com sono.",
   "ar": "انتوا مِحتاجين تِرَيَحوا شوية! انتوا تَعبانين ونَعسانين أوي.",
   "arabizi": "Entu mei7tagin teraya7u shewaya! Entu ta3banin we na3sanin awi.",
   "src": "2026-07-28"
  },
  {
   "id": "esc-33-voces-so-ficam-em-casa-e",
   "pt": "Vocês só ficam em casa, e isso não é bom!",
   "ar": "انتوا بِتُقعَدوا في البيت بَس، وكِدة مِش كويس!",
   "arabizi": "Entu beto3odu fe el-beit bas, we keda mesh kowayes!",
   "src": "2026-07-28"
  },
  {
   "id": "esc-34-voces-os-arabes-gostam-d",
   "pt": "Vocês, os árabes, gostam de comer com as mãos.",
   "ar": "انتوا، العَرَب، بِتحِبوا تاكلوا بإيديكوا.",
   "arabizi": "Entu el-3arab bet7ebu taklu bêeideiku.",
   "src": "2026-07-28"
  },
  {
   "id": "esc-35-voces-querem-preparar-as",
   "pt": "Vocês querem preparar as malas agora? A viagem é só na semana que vem!",
   "ar": "انتوا عايزين تِجَهِزوا الشُنَط دِلوَقتي؟ السَفَر لِسا الأسبوع الجاي!",
   "arabizi": "Entu 3aeizin tegahezu el-shonat delua2ty? El-safar lessa el-osbu3 el-gay!",
   "src": "2026-07-28"
  },
  {
   "id": "esc-36-voces-vao-sair-de-casa-a",
   "pt": "Vocês vão sair de casa a que horas?",
   "ar": "انتوا هَتُخرُجوا مِن البيت الساعة كام؟",
   "arabizi": "Entu hato5rogu men el-beit el-sa3a kam?",
   "src": "2026-07-29"
  },
  {
   "id": "esc-37-voce-tem-razao-m-f",
   "pt": "Você tem razão! (m / f)",
   "ar": "عَندَك حَق / عَندِك حَق.",
   "arabizi": "3andak 7a2 / 3andek 7a2.",
   "src": "2026-07-29"
  },
  {
   "id": "esc-38-voces-vao-jantar-amanha-",
   "pt": "Vocês vão jantar amanhã na casa de Samir, né?",
   "ar": "انتوا هتتعَشوا بُكرة في بيت سَمير، صَح؟",
   "arabizi": "Entu hatet3ashu bokra fe beit Samir, sa7?",
   "src": "2026-07-30"
  },
  {
   "id": "esc-39-venham-voces",
   "pt": "Venham! (vocês)",
   "ar": "تعالوا!",
   "arabizi": "Ta3alu!",
   "src": "2026-07-30"
  },
  {
   "id": "esc-40-eles-trabalham-de-doming",
   "pt": "Eles trabalham de domingo a quinta.",
   "ar": "هُما بيشتَغَلوا مِن الحَد لِلخَميس.",
   "arabizi": "Homa bieshta8alu men el-7ad lel-5amis.",
   "src": "2026-07-31"
  },
  {
   "id": "esc-41-voces-querem-ir-para-ond",
   "pt": "Vocês querem ir para onde?",
   "ar": "انتوا عايزين تِروحوا فين؟",
   "arabizi": "Entu 3aeizin teru7u fein?",
   "src": "2026-07-31"
  },
  {
   "id": "esc-42-por-que-voces-estao-feli",
   "pt": "Por que vocês estão felizes?",
   "ar": "انتوا مَبسوطين ليه؟",
   "arabizi": "Entu mabsutin leh?",
   "src": "2026-07-31"
  },
  {
   "id": "esc-43-porque-amanha-e-feriado-",
   "pt": "Porque amanhã é feriado e não vamos trabalhar.",
   "ar": "عَشان بُكرة أجازة ومِش هَنِشتَغِل.",
   "arabizi": "3ashan bokra agaza we mesh haneshta8al.",
   "src": "2026-07-31"
  },
  {
   "id": "esc-44-eu-gosto-de-comida-egipc",
   "pt": "Eu gosto de comida egípcia, mas sinceramente prefiro comida brasileira.",
   "ar": "أنا بَحِب الأكل المَصري، بَس بِصَراحة بَفَضَل الأكل البرازيلي.",
   "arabizi": "Ana ba7eb el-akl el-masry, bas besara7a bafadal el-akl el-barazily.",
   "src": "2026-07-31"
  },
  {
   "id": "esc-45-eu-gosto-de-comida-egipc",
   "pt": "Eu gosto de comida egípcia, mas prefiro comida brasileira.",
   "ar": "أنا بَحِب الأكل المَصري، بَس بَفَضَل الأكل البرازيلي.",
   "arabizi": "Ana ba7eb el-akl el-masry, bas bafadal el-akl el-barazily.",
   "src": "2026-08-01"
  },
  {
   "id": "esc-46-eles-nao-cozinham-na-sex",
   "pt": "Eles não cozinham na sexta-feira porque comem fora.",
   "ar": "هُما مِش بيطبُخوا يوم الجُمعة عَشان بياكلوا بَرة.",
   "arabizi": "Homa mesh beitbo5u youm el-gom3a 3ashan biaklu barra.",
   "src": "2026-08-01"
  },
  {
   "id": "esc-47-nos-preferimos-a-comida-",
   "pt": "Nós preferimos a comida caseira.",
   "ar": "احنا بِنفَضَل الأكل البيتي.",
   "arabizi": "E7na benfadal el-akl el-beity.",
   "src": "2026-08-01"
  },
  {
   "id": "esc-48-bom-apetite-saude",
   "pt": "Bom apetite! Saúde!",
   "ar": "بِالهنا والشِفا! صِحتين!",
   "arabizi": "Belhana we elshefa! Se7tein!",
   "src": "2026-08-01"
  },
  {
   "id": "esc-49-voces-estao-muito-cansad",
   "pt": "Vocês estão muito cansados e com sono.",
   "ar": "انتوا تَعبانين ونَعسانين أوي.",
   "arabizi": "Entu ta3banin we na3sanin awi.",
   "src": "2026-08-02"
  },
  {
   "id": "esc-50-eles-nao-querem-limpar-a",
   "pt": "Eles não querem limpar a casa hoje, eles querem descansar.",
   "ar": "هُما مِش عايزين يِنَضَفوا البيت النهاردة، هُما عايزين يِرَيَحوا.",
   "arabizi": "Homa mesh 3aeizin yenadafu el-beit enaharda, homa 3aeizin yeraya7u.",
   "src": "2026-08-02"
  },
  {
   "id": "esc-51-nos-estamos-muito-felize",
   "pt": "Nós estamos muito felizes.",
   "ar": "احنا مَبسوطين أوي.",
   "arabizi": "E7na mabsutin awi.",
   "src": "2026-08-02"
  },
  {
   "id": "esc-52-eles-nao-gostam-de-viaja",
   "pt": "Eles não gostam de viajar para o Líbano.",
   "ar": "هُما مِش بيحِبوا يِسافروا لبنان.",
   "arabizi": "Homa mesh bei7ebu yesafru Lobnan.",
   "src": "2026-08-03"
  },
  {
   "id": "esc-53-os-meus-amigos-nao-falam",
   "pt": "Os meus amigos não falam português bem.",
   "ar": "أصحابي مِش بيتكَلِموا بُرتُغالي كويس.",
   "arabizi": "As7aby mesh beitkalemu borto8aly kowayes.",
   "src": "2026-08-03"
  },
  {
   "id": "esc-54-eles-nao-trabalham-conno",
   "pt": "Eles não trabalham connosco.",
   "ar": "هُما مِش بيشتَغَلوا معانا.",
   "arabizi": "Homa mesh bieshta8alu ma3ana.",
   "src": "2026-08-03"
  },
  {
   "id": "esc-55-voces-so-ficam-em-casa-e",
   "pt": "Vocês só ficam em casa, e isso não é bom!",
   "ar": "انتوا بِتُقعَدوا في البيت بَس، وده مِش كويس!",
   "arabizi": "Entu beto23adu fe el-beit bas, we da mesh kowayes!",
   "src": "2026-08-03"
  },
  {
   "id": "esc-56-voces-os-arabes-nao-gost",
   "pt": "Vocês, os árabes, não gostam de nadar no mar.",
   "ar": "انتوا، العَرَب، مِش بِتحِبوا تِعوموا في البَحر.",
   "arabizi": "Entu, el3arab, mesh bet7ebu te3umu fe el-ba7r.",
   "src": "2026-08-03"
  },
  {
   "id": "esc-57-nos-vamos-ao-brasil-no-f",
   "pt": "Nós vamos ao Brasil no final deste mês.",
   "ar": "احنا هَنروح البرازيل في آخِر الشَهر ده.",
   "arabizi": "E7na hanru7 el-barazil fe aa5er el-shahr da.",
   "src": "2026-08-04"
  },
  {
   "id": "esc-58-eles-vao-trabalhar-noutr",
   "pt": "Eles vão trabalhar noutra empresa no ano que vem.",
   "ar": "هُما هَيشتَغَلوا في شرِكة تانية السَنة الجاية.",
   "arabizi": "Homa haieshta8alu fe sherka tanya el-sana el-gaya.",
   "src": "2026-08-04"
  },
  {
   "id": "esc-59-sinceramente-nos-preferi",
   "pt": "Sinceramente, nós preferimos a comida caseira porque é mais saudável e gostamos de praticar esporte e cuidar da nossa saúde.",
   "ar": "بِصَراحة احنا بِنفَضَل الأكل البيتي عَشان صِحي أكتَر وبِنحِب نِلعَب رِياضة ونِخَلَي بالنا مِن صِحتنا.",
   "arabizi": "Besara7a e7na benfadal el-akl el-beity 3ashan se7y aktar we ben7eb nel3ab reyada we ne5aly balna men se7etna.",
   "src": "2026-08-05"
  },
  {
   "id": "esc-60-mariam-e-ali-precisam-te",
   "pt": "Mariam e Ali precisam terminar o trabalho cedo na terça-feira porque querem visitar a avó.",
   "ar": "مريم وعلي مِحتاجين يِخَلَصوا الشُغل بَدري يوم التلات عَشان عايزين يِزوروا تيتة.",
   "arabizi": "Mariam we 3Aly mei7tagin ye5alasu el-sho8l badry youm el-talat 3ashan 3aeizin yezuru teta.",
   "src": "2026-08-05"
  },
  {
   "id": "esc-61-voces-preferem-comer-em-",
   "pt": "Vocês preferem comer em casa ou comer fora?",
   "ar": "انتوا بِتفَضَلوا تاكلوا في البيت وَلا تاكلوا بَرة؟",
   "arabizi": "Entu betfadalu taklu fe el-beit wala taklu barra?",
   "src": "2026-08-05"
  },
  {
   "id": "esc-62-eu-estou-muito-feliz-por",
   "pt": "Eu estou muito feliz, porque a minha esposa e eu vamos ao Brasil no final deste mês.",
   "ar": "أنا مَبسوط أوي عَشان أنا ومِراتي هَنروح البرازيل في آخِر الشَهر ده.",
   "arabizi": "Ana mabsut awi 3ashan ana we meraty hanru7 el-barazil fe aa5er el-shahr da.",
   "src": "2026-08-05"
  },
  {
   "id": "esc-63-nos-preferimos-a-comida-",
   "pt": "Nós preferimos a comida caseira porque é mais saudável.",
   "ar": "احنا بِنفَضَل الأكل البيتي عَشان صِحي أكتَر.",
   "arabizi": "E7na benfadal el-akl el-beity 3ashan se7y aktar.",
   "src": "2026-08-06"
  },
  {
   "id": "esc-64-o-meu-pai-vai-viajar-par",
   "pt": "O meu pai vai viajar para o Líbano no ano que vem.",
   "ar": "بابايا هَيسافِر لِبنان السنة الجاية.",
   "arabizi": "Babaya haissafer lebnan elsana elgaya.",
   "src": "2026-08-14"
  },
  {
   "id": "esc-65-voce-visita-o-seu-pai-qu",
   "pt": "Você visita o seu pai quantas vezes por mês?",
   "ar": "انتَ بِتزور باباك كام مَرة في الشَهر؟",
   "arabizi": "Enta betzur babak kam marra fe elshahr?",
   "src": "2026-08-14"
  },
  {
   "id": "esc-66-qual-e-a-profissao-do-te",
   "pt": "Qual é a profissão do teu irmão? (lit. o teu irmão trabalha o quê?)",
   "ar": "أخوك بيشتَغَل ايه؟",
   "arabizi": "A5uk bieshta8al eh?",
   "src": "2026-08-14"
  },
  {
   "id": "esc-67-o-vosso-irmao-fala-alema",
   "pt": "O vosso irmão fala alemão muito bem.",
   "ar": "أخوكوا بيتكلم ألماني كويس اوي.",
   "arabizi": "A5uku bietkalem almany kwayes awi.",
   "src": "2026-08-14"
  },
  {
   "id": "esc-68-o-meu-sogro-e-muito-orga",
   "pt": "O meu sogro é muito organizado, ele gosta de limpar e arrumar a casa duas vezes por semana.",
   "ar": "حَمايا مُنَظَم أوي، هو بيحِب يِنَضَف ويِرَوَق البيت مرتين في الأسبوع.",
   "arabizi": "7amaya monazam awi, howa bei7eb yenadaf we yerawa2 elbeit marreten fe elosbu3.",
   "src": "2026-08-14"
  },
  {
   "id": "esc-69-a-tua-avo-mora-com-quem",
   "pt": "A tua avó mora com quem?",
   "ar": "جِدِتَك ساكنة مَع مين؟",
   "arabizi": "Gedetak sakna ma3a min?",
   "src": "2026-08-15"
  },
  {
   "id": "esc-70-o-avo-dela-nao-trabalha-",
   "pt": "O avô dela não trabalha, ele é aposentado.",
   "ar": "جِدَها مِش بيشتَغل، هو على المَعاش.",
   "arabizi": "Gedaha mesh bieshta8al, howa 3ala elma3ash.",
   "src": "2026-08-15"
  },
  {
   "id": "esc-71-o-meu-tio-paterno-mora-c",
   "pt": "O meu tio (paterno) mora com a vovó no mesmo apartamento.",
   "ar": "عَمي ساكِن مَعَ تيتة في نَفس الشَقة.",
   "arabizi": "3amy saken ma3a teita fe nafs elsha2a.",
   "src": "2026-08-15"
  },
  {
   "id": "esc-72-a-esposa-dele-trabalha-c",
   "pt": "A esposa dele trabalha comigo na mesma empresa.",
   "ar": "مِراتُه بِتشتَغَل معايا في نَفس الشركة.",
   "arabizi": "Merato betshta8al ma3aya fe nafs elsherka.",
   "src": "2026-08-15"
  },
  {
   "id": "esc-73-os-meus-irmaos-moram-nos",
   "pt": "Os meus irmãos moram nos Emirados.",
   "ar": "إخواتي ساكنين في الإمارات.",
   "arabizi": "E5waty sakenin fe elemarat.",
   "src": "2026-08-15"
  },
  {
   "id": "esc-74-o-tio-materno-dela-tem-u",
   "pt": "O tio (materno) dela tem uma loja pequena no bairro.",
   "ar": "خالها عَندُه مَحَل صغير في الحي.",
   "arabizi": "5alha 3ando ma7al so8ayar fe el7ay.",
   "src": "2026-08-16"
  },
  {
   "id": "esc-75-o-teu-sobrinho-filho-da-",
   "pt": "O teu sobrinho (filho da irmã) sabe falar e escrever árabe ou não?",
   "ar": "ابن أختَك بيعرَف يتكلم و يِكتِب عربي ولّا لا؟",
   "arabizi": "Ebn o5tak bie3raf yetkalem we yekteb 3arabi wala la?",
   "src": "2026-08-16"
  },
  {
   "id": "esc-76-a-minha-prima-filha-da-t",
   "pt": "A minha prima (filha da tia materna) fala espanhol muito bem.",
   "ar": "بِنت خالتي بتتكَلِم أسباني كويس أوي.",
   "arabizi": "Bent 5alty betetkalem asbany kwayes awi.",
   "src": "2026-08-16"
  },
  {
   "id": "esc-77-o-meu-tio-paterno-hossam",
   "pt": "O meu tio (paterno) Hossam tem um filho que se chama Amir e uma filha que se chama Manar, e a esposa dele se chama Nur.",
   "ar": "عَمي حُسام عَندُه ابن اسمُه أمير وبنت اسمها منار، ومِراتُه اسمها نور.",
   "arabizi": "3amy Hossam 3ando ebn esmo Amir we bent esmaha Manar, we merato esmaha Nur.",
   "src": "2026-08-16"
  },
  {
   "id": "esc-78-eu-tenho-um-filho-e-uma-",
   "pt": "Eu tenho um filho e uma filha.",
   "ar": "أنا عَندي اِبن وبِنت.",
   "arabizi": "Ana 3andy ebn we bent.",
   "src": "2026-08-16"
  },
  {
   "id": "esc-79-o-meu-irmao-nao-e-casado",
   "pt": "O meu irmão não é casado nem tem filhos. Ele ainda é estudante.",
   "ar": "أخويا مِش مِتجَوِز ولا عَندُه أولاد. هو لسة طالِب.",
   "arabizi": "A5oya mesh metgawez wala 3ando aulad. Howa lessa taleb.",
   "src": "2026-08-17"
  },
  {
   "id": "esc-80-nos-precisamos-levar-o-n",
   "pt": "Nós precisamos levar o nosso pai ao dentista.",
   "ar": "احنا مِحتاجين ناخُد بابانا دكتور الأسنان.",
   "arabizi": "E7na mei7tagin na5od babana doctor elasnan.",
   "src": "2026-08-17"
  },
  {
   "id": "esc-81-os-nossos-filhos-sabem-n",
   "pt": "Os nossos filhos sabem nadar e cantar.",
   "ar": "أولادنا بيعرَفوا يعوموا ويِغَنوا.",
   "arabizi": "Auladna bie3rafu ye3umu we ye8anu.",
   "src": "2026-08-17"
  },
  {
   "id": "esc-82-eu-gosto-de-viajar-com-a",
   "pt": "Eu gosto de viajar com a minha família no verão todo ano.",
   "ar": "أنا بَحِب أسافِر مع عيلتي في الصيف كُل سنة.",
   "arabizi": "Ana ba7eb asafer ma3a 3eilty fe elseif kol sana.",
   "src": "2026-08-17"
  },
  {
   "id": "esc-83-eu-quero-te-mostrar-uma-",
   "pt": "Eu quero te mostrar uma foto.",
   "ar": "أنا عايز أوريك صورة.",
   "arabizi": "Ana 3aeiz auarik sura.",
   "src": "2026-08-17"
  },
  {
   "id": "esc-84-eu-prefiro-o-inverno",
   "pt": "Eu prefiro o inverno.",
   "ar": "أنا بَفَضَل الشِتا.",
   "arabizi": "Ana bafadal elsheta.",
   "src": "2026-08-18"
  },
  {
   "id": "esc-85-eu-odeio-o-calor",
   "pt": "Eu odeio o calor.",
   "ar": "أنا بَكره الحَر.",
   "arabizi": "Ana bakrah el7ar.",
   "src": "2026-08-18"
  },
  {
   "id": "esc-86-o-papai-odeia-o-barulho",
   "pt": "O papai odeia o barulho.",
   "ar": "بابا بِيِكره الدوشة.",
   "arabizi": "Baba biekrah eldausha.",
   "src": "2026-08-18"
  },
  {
   "id": "esc-87-eu-estou-a-tentar-aprend",
   "pt": "Eu estou a tentar aprender a dirigir.",
   "ar": "أنا بَحاوِل أتعَلِم أسوق.",
   "arabizi": "Ana ba7awel at3alem assu2.",
   "src": "2026-08-18"
  },
  {
   "id": "esc-88-eles-nao-gostam-de-ficar",
   "pt": "Eles não gostam de ficar em hotéis caros, preferem lugares baratos.",
   "ar": "هُما مِش بيحِبوا يقعدوا في فَنادِق غالية، بيفضلوا الأماكِن الرِخيصة.",
   "arabizi": "Homa mesh bei7ebu yo3odu fe fanade2 8alya, beifadalu elamaken elre5isa.",
   "src": "2026-08-18"
  },
  {
   "id": "esc-89-a-tua-avo-mora-com-quem-",
   "pt": "A tua avó mora com quem? (para mulher)",
   "ar": "جِدِتِك ساكنة مع مين؟",
   "arabizi": "Gedetek sakna ma3a min?",
   "src": "2026-08-19"
  },
  {
   "id": "esc-90-o-irmao-delas-mora-no-ca",
   "pt": "O irmão delas mora no Canadá, por isso ele sempre viaja para o Brasil no Natal e no ano novo.",
   "ar": "أخوهُم ساكِن في كَنَدا، عشان كدة، هو دايماً بيسافِر البرازيل في الكريسماس وراس السنة.",
   "arabizi": "A5uhom saken fe Kanada, 3ashan keda, howa dayman beisafer elBrazil fe elkrismas we ras elsana.",
   "src": "2026-08-19"
  },
  {
   "id": "esc-91-voce-visita-o-seu-pai-qu",
   "pt": "Você visita o seu pai quantas vezes por mês? (para mulher — o gabarito da aula saiu com erro de digitação; forma reconstruída)",
   "ar": "انتي بِتزوري باباكي كام مَرة في الشَهر؟",
   "arabizi": "Enty betzury babaki kam marra fe elshahr?",
   "src": "2026-08-19"
  },
  {
   "id": "esc-92-qual-e-a-profissao-do-te",
   "pt": "Qual é a profissão do teu irmão? (para mulher)",
   "ar": "أخوكي بيشتغل ايه؟",
   "arabizi": "A5uki bieshta8al eh?",
   "src": "2026-08-19"
  },
  {
   "id": "esc-93-o-filho-dele-se-chama-se",
   "pt": "O filho dele se chama Seif.",
   "ar": "ابنُه اسمُه سيف.",
   "arabizi": "Ebno esmo Seif.",
   "src": "2026-08-19"
  },
  {
   "id": "esc-94-normalmente-acordo-cedo-",
   "pt": "Normalmente acordo cedo, preparo o café da manhã e saio de casa às 9h20.",
   "ar": "عادةً بَصحى بَدري وبَجَهِز الفِطار وبَخرُج مِن البيت الساعة تِسعة وتِلت.",
   "arabizi": "3adatan bas7a badry we bagahez elfetar we ba5rog men elbeit elsa3a tesa3a we telt.",
   "src": "2026-08-20"
  },
  {
   "id": "esc-95-ahmed-normalmente-lava-a",
   "pt": "Ahmed normalmente lava a louça e a esposa dele passa a roupa.",
   "ar": "أحمَد عادةً بيغسِل المواعين ومِراتُه بِتِكوي الهِدوم.",
   "arabizi": "Ahmed 3adatan bie8sel elmaua3in we merato betekwi elhodum.",
   "src": "2026-08-20"
  },
  {
   "id": "esc-96-eles-cozinham-limpam-a-c",
   "pt": "Eles cozinham, limpam a casa e trabalham juntos. Este é o segredo do sucesso deles.",
   "ar": "هُما بيطبخوا وبينضَفوا البيت وبيشتغلوا مع بعض. ده سِر نَجاحهُم.",
   "arabizi": "Homa biotbo5u we beinadafu elbeit we bieshta8alu ma3a ba3d. Da ser naga7hom.",
   "src": "2026-08-20"
  },
  {
   "id": "esc-97-eles-tem-que-acordar-ced",
   "pt": "Eles têm que acordar cedo, levar as crianças à escola e preparar o café da manhã, o almoço e o jantar.",
   "ar": "هما لازِم يصحوا بَدري وياخدوا الأولاد المدرسة ولازِم يجهزوا الفِطار والغِدا والعَشا.",
   "arabizi": "Homa lazem yes7u badry we ya5du elaulad elmadrasa we lazem yegahezu elfetar we el8ada we el3asha.",
   "src": "2026-08-20"
  },
  {
   "id": "esc-98-mas-eles-sempre-tentam-f",
   "pt": "Mas eles sempre tentam fazer tudo juntos.",
   "ar": "بَس هما دايماً بيحاولوا يعملوا كل حاجة مع بعض.",
   "arabizi": "Bas homa dayman bei7awlu ye3melu kol 7aga ma3a ba3d.",
   "src": "2026-08-20"
  },
  {
   "id": "esc-99-eu-tenho-40-anos",
   "pt": "Eu tenho 40 anos.",
   "ar": "أنا عَندي أربعين سَنة.",
   "arabizi": "Ana 3andy arba3in sana.",
   "src": "2026-08-21"
  },
  {
   "id": "esc-100-eu-gosto-de-futebol",
   "pt": "Eu gosto de futebol.",
   "ar": "أنا بَحِب الكورة.",
   "arabizi": "Ana ba7eb elkora.",
   "src": "2026-08-21"
  },
  {
   "id": "esc-101-eu-nao-gosto-de-futebol-com",
   "pt": "Eu não gosto de futebol. (com ما...ـش)",
   "ar": "أنا مابحبش الكورة.",
   "arabizi": "Ana maba7ebesh elkora.",
   "src": "2026-08-21"
  },
  {
   "id": "esc-102-eu-nao-gosto-de-futebol-com",
   "pt": "Eu não gosto de futebol. (com مِش)",
   "ar": "أنا مِش بَحِب الكورة.",
   "arabizi": "Ana mesh ba7eb elkora.",
   "src": "2026-08-21"
  },
  {
   "id": "esc-103-eu-nao-sou-brasileiro-frase-se",
   "pt": "Eu não sou brasileiro. (frase sem verbo)",
   "ar": "أنا مِش برازيلي.",
   "arabizi": "Ana mesh brazily.",
   "src": "2026-08-21"
  },
  {
   "id": "esc-104-eu-nao-me-chamo-mohamed-frase",
   "pt": "Eu não me chamo Mohamed. (frase sem verbo)",
   "ar": "أنا مِش اسمي مَحَمد.",
   "arabizi": "Ana mesh esmy Mohamed.",
   "src": "2026-08-21"
  },
  {
   "id": "esc-105-eu-nao-preciso-de-agua-verbo-i",
   "pt": "Eu não preciso de água. (verbo irregular)",
   "ar": "أنا مِش مِحتاج ماية.",
   "arabizi": "Ana mesh mei7tag maya.",
   "src": "2026-08-21"
  },
  {
   "id": "esc-106-eu-nao-quero-sair-amanha-verbo",
   "pt": "Eu não quero sair amanhã. (verbo irregular)",
   "ar": "أنا مِش عايِز أخرُج بُكرة.",
   "arabizi": "Ana mesh 3aeiz a5rog bokra.",
   "src": "2026-08-21"
  },
  {
   "id": "esc-107-eu-nao-durmo-cedo-todos-os-dia",
   "pt": "Eu não durmo cedo todos os dias. (presente, ما...ـش)",
   "ar": "أنا مابنامش بَدري كل يوم.",
   "arabizi": "Ana mabnamsh badry kol youm.",
   "src": "2026-08-21"
  },
  {
   "id": "esc-108-eu-nao-como-carne-presente",
   "pt": "Eu não como carne. (presente, ما...ـش)",
   "ar": "أنا ماباكُلش لَحمة.",
   "arabizi": "Ana mabakolsh la7ma.",
   "src": "2026-08-21"
  },
  {
   "id": "esc-109-eu-nao-como-carne-presente",
   "pt": "Eu não como carne. (presente, مِش)",
   "ar": "أنا مِش باكُل لَحمة.",
   "arabizi": "Ana mesh bakol la7ma.",
   "src": "2026-08-21"
  },
  {
   "id": "esc-110-eu-nao-vou-ao-cinema-amanha-co",
   "pt": "Eu não vou ao cinema amanhã com Mariam. (futuro)",
   "ar": "أنا مِش هَروح السينما بكرة مع مريم.",
   "arabizi": "Ana mesh haru7 elcinema bokra ma3a Mariam.",
   "src": "2026-08-21"
  },
  {
   "id": "esc-111-ali-nao-vai-trabalhar-na-seman",
   "pt": "Ali não vai trabalhar na semana que vem. (futuro)",
   "ar": "علي مِش هيشتغل الأسبوع الجاي.",
   "arabizi": "Ali mesh haieshta8al elosbu3 elgay.",
   "src": "2026-08-21"
  },
  {
   "id": "esc-112-menna-nao-vai-sair-conosco-par",
   "pt": "Menna não vai sair conosco para não comer fora.",
   "ar": "منة مِش هَتُخرُج معانا عشان ماتاكُلش برة.",
   "arabizi": "Menna mesh hato5rog ma3ana 3ashan matakolsh barra.",
   "src": "2026-08-21"
  },
  {
   "id": "esc-113-eu-vou-trabalhar-na-sexta-feir",
   "pt": "Eu vou trabalhar na sexta-feira que vem para não ir ao escritório no domingo.",
   "ar": "أنا هَشتَغَل يوم الجمعة الجاية عشان ماروحش المَكتب يوم الحَد.",
   "arabizi": "Ana hashta8al youm elgom3a elgaya 3ashan maru7sh elmaktab youm el7ad.",
   "src": "2026-08-21"
  },
  {
   "id": "esc-114-eu-fui-ao-supermercado-ontem-p",
   "pt": "Eu fui ao supermercado ontem. (passado)",
   "ar": "أنا رُحت السوبرماركت امبارح.",
   "arabizi": "Ana ro7t elsupermarket embare7.",
   "src": "2026-08-21"
  },
  {
   "id": "esc-115-eu-nao-fui-ao-supermercado-ont",
   "pt": "Eu não fui ao supermercado ontem. (passado, ما...ـش)",
   "ar": "أنا مارُحتش السوبرماركت امبارح.",
   "arabizi": "Ana maro7tesh elsupermarket embare7.",
   "src": "2026-08-21"
  },
  {
   "id": "esc-116-faca-isso-imperativo",
   "pt": "Faça isso. (imperativo)",
   "ar": "اِعمِل كِدة.",
   "arabizi": "E3mel keda.",
   "src": "2026-08-21"
  },
  {
   "id": "esc-117-nao-faca-aquilo-imperativo-neg",
   "pt": "Não faça aquilo. (imperativo negativo)",
   "ar": "ماتِعمِلش كِدة.",
   "arabizi": "Mate3melsh keda.",
   "src": "2026-08-21"
  },
  {
   "id": "esc-118-eu-nao-arrumo-a-casa-mas-eu-li",
   "pt": "Eu não arrumo a casa, mas eu limpo o meu quarto.",
   "ar": "أنا مابَرَوقش البيت بس أنا بَنَضَف أوضتي.",
   "arabizi": "Ana mabaraua2sh elbeit bas ana banadaf odty.",
   "src": "2026-08-21"
  },
  {
   "id": "esc-119-eu-nao-trabalho-em-fevereiro-p",
   "pt": "Eu não trabalho em fevereiro porque eu sempre viajo para o Brasil.",
   "ar": "أنا مابشتغلش في شَهر اتنين (فِبرايِر) عشان أنا دايماً بَسافِر البرازيل.",
   "arabizi": "Ana mabashta8alsh fe shahr etnein (febrayer) 3ashan ana dayman basafer elbrazil.",
   "src": "2026-08-21"
  },
  {
   "id": "esc-120-eu-nao-jogo-tenis-mas-sempre-v",
   "pt": "Eu não jogo tênis, mas sempre vou à academia.",
   "ar": "أنا مابَلعَبش تنس، بس دايماً بَروح الجيم.",
   "arabizi": "Ana mabal3absh tenis, bas dayman baru7 elgym.",
   "src": "2026-08-21"
  },
  {
   "id": "esc-121-hossam-nao-fala-comigo-e-eu-na",
   "pt": "Hossam não fala comigo e eu não sei por quê.",
   "ar": "حُسام مابيتكَلِمش معايا وأنا مِش عارِف ليه.",
   "arabizi": "Hossam mabeitkalemsh ma3aya we ana mesh 3aref leh.",
   "src": "2026-08-21"
  },
  {
   "id": "esc-122-eu-sei-eu-nao-sei",
   "pt": "Eu sei. / Eu não sei.",
   "ar": "أنا عارِف · أنا مِش عارِف",
   "arabizi": "Ana 3aref · Ana mesh 3aref",
   "src": "2026-08-21"
  },
  {
   "id": "esc-123-nadia-nao-sabe-falar-portugues",
   "pt": "Nadia não sabe falar português porque ela é egípcia.",
   "ar": "نادية مابتعرفش تتكلم برتغالي علشان هي مَصرية.",
   "arabizi": "Nadia mabte3rafsh tetkalem borto8aly 3alashan heya masreya.",
   "src": "2026-08-21"
  },
  {
   "id": "esc-124-nos-nao-passamos-a-roupa-porqu",
   "pt": "Nós não passamos a roupa porque não sabemos como.",
   "ar": "احنا مابنكويش الهِدوم عشان مانعرفش ازاي.",
   "arabizi": "E7na mabenekwish elhedum 3ashan mane3rafsh ezay.",
   "src": "2026-08-21"
  },
  {
   "id": "esc-125-por-que-voce-nao-le-livros-do",
   "pt": "Por que você não lê livros do Paulo Coelho? (m)",
   "ar": "انت مابتقراش كتب باولو كويليو ليه؟",
   "arabizi": "Enta mabte2rash kotob Paulo Coelho leh?",
   "src": "2026-08-21"
  },
  {
   "id": "esc-126-por-que-voce-nao-le-livros-do",
   "pt": "Por que você não lê livros do Paulo Coelho? (f)",
   "ar": "انتي مابتقريش كتب باولو كويليو ليه؟",
   "arabizi": "Enty mabte2rish kotob Paulo Coelho leh?",
   "src": "2026-08-21"
  },
  {
   "id": "esc-127-eu-nao-estou-com-pressa",
   "pt": "Eu não estou com pressa.",
   "ar": "أنا مِش مِستَعجِل.",
   "arabizi": "Ana mesh mesta3gel.",
   "src": "2026-08-22"
  },
  {
   "id": "esc-128-ali-nao-esta-aqui",
   "pt": "Ali não está aqui.",
   "ar": "علي مِش هِنا.",
   "arabizi": "Ali mesh hena.",
   "src": "2026-08-22"
  },
  {
   "id": "esc-129-nos-nao-gostamos-de-jogar-fute",
   "pt": "Nós não gostamos de jogar futebol, preferimos correr.",
   "ar": "احنا مابنحبِش نِلعَب كورة، بِنفَضَل نِجري.",
   "arabizi": "E7na maben7epsh nel3ab kora, benfadal negry.",
   "src": "2026-08-22"
  },
  {
   "id": "esc-130-por-que-voce-nao-bebe-cerveja",
   "pt": "Por que você não bebe cerveja?",
   "ar": "انتَ مابتشَربش بيرة ليه؟",
   "arabizi": "Enta mabteshrapsh bira leh?",
   "src": "2026-08-22"
  },
  {
   "id": "esc-131-hana-nao-sabe-ler-alemao",
   "pt": "Hana não sabe ler alemão.",
   "ar": "هَنا مابتعرفش تِقرا ألماني.",
   "arabizi": "Hana mabte3rafsh te2ra almany.",
   "src": "2026-08-22"
  },
  {
   "id": "esc-132-o-meu-amigo-ahmed-nao-sabe-que",
   "pt": "O meu amigo Ahmed não sabe quem é Leandro Hassum porque não assiste a filmes de comédia.",
   "ar": "صاحبي أحمَد مابيعرَفش مين لياندرو هاسوم عشان مابيتفرجش على أفلام كوميدي.",
   "arabizi": "Sa7by Ahmed mabie3rafsh min Leandro Hassum 3ashan mabietfaraksh 3ala aflam comedy.",
   "src": "2026-08-22"
  },
  {
   "id": "esc-133-voce-nao-vai-para-a-festa-de-a",
   "pt": "Você não vai para a festa de aniversário de Fady? Por quê?",
   "ar": "انت مِش هَتروح عيد ميلاد فادي؟ ليه؟",
   "arabizi": "Enta mesh hatru7 3id milad Fady? Leh?",
   "src": "2026-08-22"
  },
  {
   "id": "esc-134-voces-nao-dirigem-bem-tem-que",
   "pt": "Vocês não dirigem bem! Têm que aprender!",
   "ar": "انتوا مابِتسوقوش كويس! لازِم تِتعَلِموا!",
   "arabizi": "Entu mabetsu2ush kowayes! Lazem tet3alemu!",
   "src": "2026-08-22"
  },
  {
   "id": "esc-135-eles-nao-devem-lavar-a-louca",
   "pt": "Eles não devem lavar a louça.",
   "ar": "هُما مِش لازِم يِغسِلوا المواعين.",
   "arabizi": "Homa mesh lazem ye8selu elmaua3in.",
   "src": "2026-08-22"
  },
  {
   "id": "esc-136-eu-nao-compro-uma-prenda-para",
   "pt": "Eu não compro uma prenda para a minha mãe no Dia da Mãe porque ela não gosta.",
   "ar": "أنا مابَشتِريش هدية لِماما في عيد الأم عشان هي مابتحِبش.",
   "arabizi": "Ana mabashterish hedeya lemama fe 3id elom 3ashan heya mabet7epesh.",
   "src": "2026-08-22"
  },
  {
   "id": "esc-137-o-meu-primo-filho-do-tio-pater",
   "pt": "O meu primo (filho do tio paterno) não sabe dançar samba.",
   "ar": "ابن عَمي مابيعرَفش يرقُص سامبا.",
   "arabizi": "Ebn 3amy mabie3rafsh yor2os samba.",
   "src": "2026-08-22"
  },
  {
   "id": "esc-138-a-minha-prima-filha-da-tia-mat",
   "pt": "A minha prima (filha da tia materna) não canta bem.",
   "ar": "بِنت خالتي مابتغَنيش كويس (حِلو)!",
   "arabizi": "Bent 5alty mabet8anish kowayes (7elw).",
   "src": "2026-08-22"
  },
  {
   "id": "esc-139-o-meu-sobrinho-filho-da-minha",
   "pt": "O meu sobrinho (filho da minha irmã) não penteia o cabelo dele porque ainda é muito novo.",
   "ar": "ابن أُختي مابيسرحش شَعرُه عشان هو لِسة صُغَيَر.",
   "arabizi": "Ebn o5ty mabeisara7sh sha3ro 3ashan howa lessa so8ayar.",
   "src": "2026-08-22"
  },
  {
   "id": "esc-140-o-meu-irmao-nao-quer-ir-ao-med",
   "pt": "O meu irmão não quer ir ao médico para não tomar remédio.",
   "ar": "أخويا مِش عايز يِروح الدكتور عشان ماياخُدش دوا.",
   "arabizi": "A5oya mesh 3aeiz yeru7 eldoctor 3ashan maya5odsh daua.",
   "src": "2026-08-22"
  },
  {
   "id": "esc-141-o-meu-sogro-sempre-pega-um-tax",
   "pt": "O meu sogro sempre pega um táxi para não chegar atrasado.",
   "ar": "حَمايا دايماً بياخُد تاكسي عشان مايوصَلش مِتأخَر.",
   "arabizi": "7amaya dayiman bia5od taksy 3ashan maieussalsh met2a5ar.",
   "src": "2026-08-22"
  },
  {
   "id": "esc-142-eu-nao-comeco-o-trabalho-as-9h",
   "pt": "Eu não começo o trabalho às 9h30 na quarta-feira.",
   "ar": "أنا مابَبدأش الشغل الساعة تسعة ونص يوم الأربع.",
   "arabizi": "Ana mababda2sh elsho8l elsa3a tes3a we nos youm elarba3.",
   "src": "2026-08-22"
  },
  {
   "id": "esc-143-meu-irmao-nao-compra-nada-dess",
   "pt": "Meu irmão não compra nada dessa loja.",
   "ar": "أخويا مابيشتريش حاجة مِن المَحَل ده.",
   "arabizi": "A5oya mabieshterish 7aga men elma7al da.",
   "src": "2026-08-22"
  },
  {
   "id": "esc-144-minha-prima-filha-do-tio-mater",
   "pt": "Minha prima (filha do tio materno) não aprende física na faculdade.",
   "ar": "بنت خالي مابتتعَلمِش فيزيا في الكلية.",
   "arabizi": "Bent 5aly mabtet3alemsh fezya fe elkoleya.",
   "src": "2026-08-22"
  },
  {
   "id": "esc-145-eu-aprendo-portugues-na-faculd",
   "pt": "Eu aprendo português na faculdade.",
   "ar": "أنا بَتعَلم برتغالي في الكلية.",
   "arabizi": "Ana bat3alem borto8aly fe elkoleya.",
   "src": "2026-08-22"
  },
  {
   "id": "esc-146-voce-nao-escova-os-dentes-ante",
   "pt": "Você não escova os dentes antes de dormir? (m)",
   "ar": "انتَ مابتغسلش سِنانَك قَبل ما تنام؟",
   "arabizi": "Enta mabete8selsh senanak 2abl ma tenam?",
   "src": "2026-08-22"
  },
  {
   "id": "esc-147-voce-nao-escova-os-dentes-ante",
   "pt": "Você não escova os dentes antes de dormir? (f)",
   "ar": "انتي مابتغسليش سنانِك قَبل ما تِنامي؟",
   "arabizi": "Enty mabete8selish senanek 2abl ma tenamy?",
   "src": "2026-08-22"
  },
  {
   "id": "esc-148-ela-nao-penteia-o-cabelo-com-e",
   "pt": "Ela não penteia o cabelo com esse creme.",
   "ar": "هي مابِتسَرَحش شَعرَها بالكريم ده.",
   "arabizi": "Heya mabetsara7sh sha3raha belcream da.",
   "src": "2026-08-22"
  },
  {
   "id": "esc-149-nos-nao-escutamos-o-radio-de-m",
   "pt": "Nós não escutamos o rádio de manhã.",
   "ar": "احنا مابِنِسمَعش الراديو الصُبح.",
   "arabizi": "E7na mabenesma3sh elradyo elsob7.",
   "src": "2026-08-22"
  },
  {
   "id": "esc-150-eles-nao-sabem-fazer-comida-br",
   "pt": "Eles não sabem fazer comida brasileira.",
   "ar": "هُما مابيعرفوش يعملوا أكل برازيلي.",
   "arabizi": "Homa mabie3rafush ye3melu akl brazily.",
   "src": "2026-08-22"
  },
  {
   "id": "esc-151-eu-nao-chego-no-trabalho-cedo",
   "pt": "Eu não chego no trabalho cedo na quinta-feira.",
   "ar": "أنا مابوصَلش الشُغل بدري يوم الخَميس.",
   "arabizi": "Ana mabaussalsh elsho8l badry youm el5amis.",
   "src": "2026-08-22"
  },
  {
   "id": "esc-152-voces-nao-comem-peixe",
   "pt": "Vocês não comem peixe?",
   "ar": "انتوا مابتاكلوش سَمَك؟",
   "arabizi": "Entu mabetakolush samak?",
   "src": "2026-08-22"
  },
  {
   "id": "esc-153-meu-pai-nao-cozinha-bem",
   "pt": "Meu pai não cozinha bem.",
   "ar": "بابا مابيطبُخش كويس.",
   "arabizi": "Baba mabietbo5sh kowayes.",
   "src": "2026-08-22"
  },
  {
   "id": "esc-154-soraya-nao-visita-a-avo-dela-t",
   "pt": "Soraya não visita a avó dela todo fim de semana.",
   "ar": "ثُرَية مابِتزورش جِدِتها كُل أجازة.",
   "arabizi": "Thoraya mabetzorsh gedetha kol agaza.",
   "src": "2026-08-22"
  },
  {
   "id": "esc-155-nos-nao-dancamos-bem-ainda-est",
   "pt": "Nós não dançamos bem, ainda estamos aprendendo.",
   "ar": "احنا مابنرقُصش حِلو، لِسة بِنِتعَلِم.",
   "arabizi": "E7na mabenor2osh 7elw, lessa benet3alem.",
   "src": "2026-08-22"
  },
  {
   "id": "esc-156-eu-tenho-um-supermercado",
   "pt": "Eu tenho um supermercado.",
   "ar": "أنا عَندي سوبرماركت.",
   "arabizi": "Ana 3andi supermarket.",
   "src": "2026-08-26"
  },
  {
   "id": "esc-157-eu-estou-no-advogado",
   "pt": "Eu estou no advogado.",
   "ar": "أنا عَند المُحامي.",
   "arabizi": "Ana 3and elmo7amy.",
   "src": "2026-08-26"
  },
  {
   "id": "esc-158-eu-estou-na-quitanda-no-frutei",
   "pt": "Eu estou na quitanda (no fruteiro).",
   "ar": "أنا عَند الفَكَهاني.",
   "arabizi": "Ana 3and elfakahany.",
   "src": "2026-08-26"
  },
  {
   "id": "esc-159-eu-tenho-muitos-amigos-na-esco",
   "pt": "Eu tenho muitos amigos na escola.",
   "ar": "أنا عَندي أصحاب كِتير في المَدرَسة.",
   "arabizi": "Ana 3andi as7ab ketir fi elmadrassa.",
   "src": "2026-08-26"
  },
  {
   "id": "esc-160-eu-nao-tenho-irmaos",
   "pt": "Eu não tenho irmãos.",
   "ar": "أنا ماعَنديش اخوات وِلاد.",
   "arabizi": "Ana ma3andish e5uat welad.",
   "src": "2026-08-26"
  },
  {
   "id": "esc-161-ele-tem-um-carro-novo",
   "pt": "Ele tem um carro novo.",
   "ar": "هُوَ عَندُه سَيارة جديدة.",
   "arabizi": "Howa 3ando sayara gedida.",
   "src": "2026-08-26"
  },
  {
   "id": "esc-162-ele-nao-tem-tempo-hoje",
   "pt": "Ele não tem tempo hoje.",
   "ar": "هُوَ ماعندوش وَقت النهاردة.",
   "arabizi": "Howa ma3andush wa2t elnaharda.",
   "src": "2026-08-26"
  },
  {
   "id": "esc-163-ela-tem-um-cachorro-que-se-cha",
   "pt": "Ela tem um cachorro que se chama Max.",
   "ar": "هي عَندَها كَلب اسمُه ماكس.",
   "arabizi": "Heya 3andaha kalb esmo Max.",
   "src": "2026-08-26"
  },
  {
   "id": "esc-164-ela-nao-tem-aula-amanha",
   "pt": "Ela não tem aula amanhã.",
   "ar": "هي ماعندَهاش حصة بكرة.",
   "arabizi": "Heya ma3andahash 7essa bokra.",
   "src": "2026-08-26"
  },
  {
   "id": "esc-165-voce-tem-filhos-m",
   "pt": "Você tem filhos? (m)",
   "ar": "انت عَندَك أولاد؟",
   "arabizi": "Enta 3andak aulad?",
   "src": "2026-08-26"
  },
  {
   "id": "esc-166-voce-tem-filhos-f",
   "pt": "Você tem filhos? (f)",
   "ar": "انتي عَندِك أولاد؟",
   "arabizi": "Enti 3andek aulad?",
   "src": "2026-08-26"
  },
  {
   "id": "esc-167-voce-nao-tem-um-computador-m",
   "pt": "Você não tem um computador? (m)",
   "ar": "انتَ ماعنَدكش كمبيوتر؟",
   "arabizi": "Enta ma3andaksh computer?",
   "src": "2026-08-26"
  },
  {
   "id": "esc-168-voce-nao-tem-um-computador-f",
   "pt": "Você não tem um computador? (f)",
   "ar": "انتي ماعندكيش كمبيوتر؟",
   "arabizi": "Enti ma3andekish computer?",
   "src": "2026-08-26"
  },
  {
   "id": "esc-169-nos-temos-tempo-livre-no-sabad",
   "pt": "Nós temos tempo livre no sábado de manhã.",
   "ar": "احنا عَندِنا وقت فاضي يوم السَبت الصُبح.",
   "arabizi": "E7na 3andena wa2t fady youm elsabt elsob7.",
   "src": "2026-08-26"
  },
  {
   "id": "esc-170-nos-nao-temos-muitos-vizinhos",
   "pt": "Nós não temos muitos vizinhos.",
   "ar": "احنا ماعندِناش جيران كتير.",
   "arabizi": "E7na ma3andenash geran ketir.",
   "src": "2026-08-26"
  },
  {
   "id": "esc-171-eles-tem-uma-casa-grande-em-al",
   "pt": "Eles têm uma casa grande em Alexandria.",
   "ar": "هُما عَندُهُم بيت كبير في اسكِندرية.",
   "arabizi": "Homa 3andohom beit kebir fe eskendereya.",
   "src": "2026-08-26"
  },
  {
   "id": "esc-172-eles-nao-tem-muitos-vizinhos",
   "pt": "Eles não têm muitos vizinhos.",
   "ar": "هُما ماعندُهُمش جيران كتير.",
   "arabizi": "Homa ma3andohomsh geran ketir.",
   "src": "2026-08-26"
  },
  {
   "id": "esc-173-voces-tem-dinheiro-no-banco",
   "pt": "Vocês têm dinheiro no banco?",
   "ar": "انتوا عَندُكوا فلوس في البنك؟",
   "arabizi": "Entu 3andoku felus fe elbank?",
   "src": "2026-08-26"
  },
  {
   "id": "esc-174-voces-nao-tem-amigos-na-univer",
   "pt": "Vocês não têm amigos na universidade?",
   "ar": "انتوا ماعندكوش أصحاب في الجامعة؟",
   "arabizi": "Entu ma3andokush as7ab fe elgam3a?",
   "src": "2026-08-26"
  },
  {
   "id": "esc-175-te-vejo-o-mes-que-vem",
   "pt": "Te vejo o mês que vem!",
   "ar": "أشوفَك الشَهر الجاي!",
   "arabizi": "Ashofak elshahr elgay!",
   "src": "2026-08-26"
  },
  {
   "id": "esc-176-eu-moro-em-dubai-nos-emirados",
   "pt": "Eu moro em Dubai, nos Emirados.",
   "ar": "أنا ساكِن في دبي في الامارات.",
   "arabizi": "Ana saken fe Dubai fe elEmarat.",
   "src": "2026-09-02"
  },
  {
   "id": "esc-177-eu-vou-viajar-para-o-egito-assim-que-e",
   "pt": "Eu vou viajar para o Egito assim que eu terminar as aulas de árabe.",
   "ar": "أنا هَسافِر مَصر أول ما أخَلَص حصص العَربي.",
   "arabizi": "Ana hasafer Masr auel ma a5alas 7esas el3araby.",
   "src": "2026-09-02"
  },
  {
   "id": "esc-178-eu-vou-tomar-um-banho-assim-que-voltar",
   "pt": "Eu vou tomar um banho assim que voltar da academia.",
   "ar": "أنا هاخُد دُش أوِل ما أرجَع مِن الجيم.",
   "arabizi": "Ana ha5od dush auel ma arga3 men el-gym.",
   "src": "2026-09-02"
  },
  {
   "id": "esc-179-eu-decidi-ir-a-academia-amanha",
   "pt": "Eu decidi ir à academia amanhã.",
   "ar": "أنا قَرَرت أروح الجيم بُكرة.",
   "arabizi": "Ana 2arart aru7 el-gym bokra.",
   "src": "2026-09-02"
  },
  {
   "id": "esc-180-eu-nao-gosto-de-ficar-em-casa-sozinho",
   "pt": "Eu não gosto de ficar em casa sozinho/a.",
   "ar": "أنا مابحبش أقعُد في البيت لِوَحدي.",
   "arabizi": "Ana maba7ebsh a3od fe elbeit leua7dy.",
   "src": "2026-09-02"
  },
  {
   "id": "esc-181-ele-nao-sabe-fazer-tudo-sozinho",
   "pt": "Ele não sabe fazer tudo sozinho.",
   "ar": "هو مابيعرَفش يِعمِل كل حاجة لِوَحدُه.",
   "arabizi": "Howa mabie3rafsh ye3mel kol 7aga leua7do.",
   "src": "2026-09-02"
  },
  {
   "id": "esc-182-ela-esta-aprendendo-ingles-sozinha",
   "pt": "Ela está aprendendo inglês sozinha.",
   "ar": "هي بِتِتعَلِم انجليزي لِوَحدَها.",
   "arabizi": "Heya betet3alem engelizy leua7daha.",
   "src": "2026-09-02"
  },
  {
   "id": "esc-183-voce-esta-sozinho-ou-com-alguem-m",
   "pt": "Você está sozinho? Ou com alguém? (m)",
   "ar": "انتَ لِوحَدَك؟ وَلّا مَعَ حَد؟",
   "arabizi": "Enta leua7dak? Walla ma3a 7ad?",
   "src": "2026-09-02"
  },
  {
   "id": "esc-184-voce-esta-sozinha-ou-com-alguem-f",
   "pt": "Você está sozinha? Ou com alguém? (f)",
   "ar": "انتي لِوَحدِك؟ ولّا مَعَ حَد؟",
   "arabizi": "Enty leua7dek? Walla ma3a 7ad?",
   "src": "2026-09-02"
  },
  {
   "id": "esc-185-nos-nao-queremos-ir-ao-cinema-sozinhos",
   "pt": "Nós não queremos ir ao cinema sozinhos.",
   "ar": "احنا مِش عايزين نِروح السينما لِوحدِنا.",
   "arabizi": "E7na mesh 3aeizin neru7 elcinema leua7dena.",
   "src": "2026-09-02"
  },
  {
   "id": "esc-186-eles-sempre-saem-sozinhos-no-fim-de-se",
   "pt": "Eles sempre saem sozinhos no fim de semana.",
   "ar": "هُما دايماً بيخرُجوا لِوحَدُهُم في الأجازة.",
   "arabizi": "Homa dayman bei5rogu leua7dohom fe el-agaza.",
   "src": "2026-09-02"
  },
  {
   "id": "esc-187-voces-estao-aqui-sozinhos",
   "pt": "Vocês estão aqui sozinhos?",
   "ar": "انتوا لوحدُكوا هِنا؟",
   "arabizi": "Entu leua7doku hena?",
   "src": "2026-09-02"
  },
  {
   "id": "esc-188-o-meu-sobrinho-filho-da-minha-irma-nao",
   "pt": "O meu sobrinho (filho da minha irmã) não sabe escrever sozinho.",
   "ar": "ابن أختي مابيعرفش يِكتِب لِوَحدُه.",
   "arabizi": "Ebn o5ty mabie3rafsh yekteb leua7do.",
   "src": "2026-09-02"
  },
  {
   "id": "esc-189-o-que-voce-faz-nas-ferias-m",
   "pt": "O que você faz nas férias? (m)",
   "ar": "انتَ بِتِعمِل ايه في الأجازة؟",
   "arabizi": "Enta bete3mel eh fe el-agaza?",
   "src": "2026-09-02"
  },
  {
   "id": "esc-190-eu-nao-faco-nada-eu-so-descanso",
   "pt": "Eu não faço nada, eu só descanso.",
   "ar": "أنا مابَعمِلش حاجة، أنا بَرَيَح بَس.",
   "arabizi": "Ana maba3melsh 7aga, ana baraya7 bas.",
   "src": "2026-09-02"
  },
  {
   "id": "esc-191-eu-nao-me-lembro",
   "pt": "Eu não me lembro.",
   "ar": "أنا مِش فاكِر.",
   "arabizi": "Ana mesh faker.",
   "src": "2026-09-02"
  },
  {
   "id": "esc-192-eu-moro-nos-emirados-em-dubai",
   "pt": "Eu moro nos Emirados, em Dubai. (ordem alternativa)",
   "ar": "أنا ساكِن في الامارات في دبي.",
   "arabizi": "Ana saken fe elEmarat fe Dubai.",
   "src": "2026-09-02"
  },
  {
   "id": "esc-193-eu-nao-gosto-de-comer-sozinho-a",
   "pt": "Eu não gosto de comer sozinho/a.",
   "ar": "أنا مابحبش آكُل لِوَحدي.",
   "arabizi": "Ana maba7ebesh aakol leua7dy.",
   "src": "2026-09-04"
  },
  {
   "id": "esc-194-ahmed-mora-sozinho",
   "pt": "Ahmed mora sozinho.",
   "ar": "أحمَد ساكِن لِوَحده.",
   "arabizi": "Ahmed saken leua7do.",
   "src": "2026-09-04"
  },
  {
   "id": "esc-195-jana-gosta-de-viajar-sozinha",
   "pt": "Jana gosta de viajar sozinha.",
   "ar": "جنى بِتحِب تِسافِر لِوحدَها.",
   "arabizi": "Jana bet7eb tessafer leua7daha.",
   "src": "2026-09-04"
  },
  {
   "id": "esc-196-como-voce-vai-limpar-toda-a-casa-sozinho-m",
   "pt": "Como você vai limpar toda a casa sozinho? (m)",
   "ar": "انتَ هَتنَضَف البيت كُلُه لِوحدَك ازاي؟",
   "arabizi": "Enta hatnadaf kol elbeit leua7dak ezay?",
   "src": "2026-09-04"
  },
  {
   "id": "esc-197-como-voce-vai-limpar-toda-a-casa-sozinha-f",
   "pt": "Como você vai limpar toda a casa sozinha? (f)",
   "ar": "انتي هَتنضفي كل البيت لوحدِك ازاي؟",
   "arabizi": "Enti hatnadafi kol elbeit leua7dek ezay?",
   "src": "2026-09-04"
  },
  {
   "id": "esc-198-nos-nao-gostamos-de-sair-sozinhos-as",
   "pt": "Nós não gostamos de sair sozinhos/as.",
   "ar": "احنا مابِنحِبِش نُخرُج لِوحدِنا.",
   "arabizi": "E7na maben7ebesh no5rog leua7dena.",
   "src": "2026-09-04"
  },
  {
   "id": "esc-199-o-meu-marido-gosta-de-beber-cafe-sem-acucar",
   "pt": "O meu marido gosta de beber café sem açúcar.",
   "ar": "جوزي بيحِب يِشرَب قَهوة مِن غير سُكَر.",
   "arabizi": "Gozi bei7eb yeshrab 2ahwa men 8eir sokar.",
   "src": "2026-09-04"
  },
  {
   "id": "esc-200-a-minha-esposa-vai-preparar-mahshy-sem-carne",
   "pt": "A minha esposa vai preparar mahshy sem carne.",
   "ar": "مِراتي هَتجَهِز مَحشي مِن غير لَحمة.",
   "arabizi": "Meraty hatgahez ma7shy men 8eir la7ma.",
   "src": "2026-09-04"
  },
  {
   "id": "esc-201-por-que-voces-vao-sair-sem-ali",
   "pt": "Por que vocês vão sair sem Ali?",
   "ar": "انتوا هَتُخرُجوا مِن غير عَلي ليه؟",
   "arabizi": "Entu hato5rogu men 8eir Ali leh?",
   "src": "2026-09-04"
  },
  {
   "id": "esc-202-ele-nao-quer-ir-ao-casamento-sem-mim",
   "pt": "Ele não quer ir ao casamento sem mim.",
   "ar": "هُوَ مِش عايِز يِروح الفَرَح مِن غيري.",
   "arabizi": "Howa mesh 3aeiz yeru7 elfara7 men 8ery.",
   "src": "2026-09-04"
  },
  {
   "id": "esc-203-eu-nao-quero-viajar-sem-ela",
   "pt": "Eu não quero viajar sem ela.",
   "ar": "أنا مِش عايِز أسافِر مِن غيرها.",
   "arabizi": "Ana mesh 3aeiz assafer men 8erha.",
   "src": "2026-09-04"
  },
  {
   "id": "esc-204-ela-nao-sabe-fazer-nada-sem-ele",
   "pt": "Ela não sabe fazer nada sem ele.",
   "ar": "هي مابِتِعرَفش تعمِل حاجة مِن غيرُه.",
   "arabizi": "Heya mabete3rafsh te3mel 7aga men 8ero.",
   "src": "2026-09-04"
  },
  {
   "id": "esc-205-eu-nao-quero-sair-hoje-sem-voce-m",
   "pt": "Eu não quero sair hoje sem você. (m)",
   "ar": "أنا مِش عايز أخرُج النهاردة مِن غيرَك.",
   "arabizi": "Ana mesh 3aeiz a5rog elnaharda men 8erak.",
   "src": "2026-09-04"
  },
  {
   "id": "esc-206-eu-nao-quero-sair-hoje-sem-voce-f",
   "pt": "Eu não quero sair hoje sem você. (f)",
   "ar": "أنا مِش عايز أخرج النهاردة مِن غيرِك.",
   "arabizi": "Ana mesh 3aeiz a5rog elnaharda men 8erek.",
   "src": "2026-09-04"
  },
  {
   "id": "esc-207-nos-queremos-jogar-esta-partida-sem-eles",
   "pt": "Nós queremos jogar esta partida sem eles.",
   "ar": "احنا عايزين نِلعَب الماتش ده مِن غيرهُم.",
   "arabizi": "E7na 3aeizin nel3ab elmatch da men 8erhom.",
   "src": "2026-09-04"
  },
  {
   "id": "esc-208-eles-querem-fazer-tudo-sem-nos",
   "pt": "Eles querem fazer tudo sem nós.",
   "ar": "هُما عايزين يعمِلوا كُل حاجة مِن غيرنا.",
   "arabizi": "Homa 3aeizin ye3melu kol 7aga men 8erna.",
   "src": "2026-09-04"
  },
  {
   "id": "esc-209-eles-querem-visitar-ahmed-sem-voces",
   "pt": "Eles querem visitar Ahmed sem vocês.",
   "ar": "هُما عايزين يِزوروا أحمَد مِن غيركوا.",
   "arabizi": "Homa 3aeizin yezuru Ahmed men 8erku.",
   "src": "2026-09-04"
  },
  {
   "id": "esc-210-eu-tenho-estou-com-muito-dinheiro-no-banco",
   "pt": "Eu tenho (estou com) muito dinheiro no banco.",
   "ar": "أنا معايا فِلوس كِتير في البَنك.",
   "arabizi": "Ana ma3aya felus ketir fe elbank.",
   "src": "2026-09-04"
  },
  {
   "id": "esc-211-alguem-tem-esta-com-uma-caneta-azul",
   "pt": "Alguém tem (está com) uma caneta azul?",
   "ar": "حَد مَعاه قَلَم أزرَق؟",
   "arabizi": "7ad ma3ah 2alam 2azra2?",
   "src": "2026-09-04"
  },
  {
   "id": "esc-212-voce-esta-com-o-livro-m",
   "pt": "Você está com o livro? (m)",
   "ar": "انتَ معاك الكِتاب؟",
   "arabizi": "Enta ma3ak elketab?",
   "src": "2026-09-04"
  },
  {
   "id": "esc-213-voce-esta-com-dinheiro-em-notas-m",
   "pt": "Você está com dinheiro em notas? (m)",
   "ar": "انتَ معاك فلوس كاش؟",
   "arabizi": "Enta ma3ak felos cash?",
   "src": "2026-09-04"
  },
  {
   "id": "esc-214-voce-esta-com-dinheiro-em-notas-f",
   "pt": "Você está com dinheiro em notas? (f)",
   "ar": "انتي معاكي فلوس كاش؟",
   "arabizi": "Enti ma3aki felos cash?",
   "src": "2026-09-04"
  },
  {
   "id": "esc-215-voce-esta-com-o-laptop-m-ter-consigo",
   "pt": "Você está com o laptop? (m · مَعاك = ter consigo)",
   "ar": "انت مَعاك اللابتوب؟",
   "arabizi": "Enta ma3ak ellaptop?",
   "src": "2026-09-04"
  },
  {
   "id": "esc-216-voce-possui-um-laptop-m-possuir",
   "pt": "Você possui um laptop? (m · عَندَك = possuir)",
   "ar": "انت عَندَك لابتوب؟",
   "arabizi": "Enta 3andak laptop?",
   "src": "2026-09-04"
  },
  {
   "id": "esc-217-voce-esta-com-o-carro",
   "pt": "Você está com o carro?",
   "ar": "انت معاك العربية؟",
   "arabizi": "Enta ma3ak el3arabeya?",
   "src": "2026-09-04"
  },
  {
   "id": "esc-218-voce-vai-limpar-a-casa-comigo-hoje",
   "pt": "Você vai limpar a casa comigo hoje?",
   "ar": "انتَ هَتنَضَف البيت معايا النهاردة؟",
   "arabizi": "Enta hatnadaf elbeit ma3aya elnaharda?",
   "src": "2026-09-04"
  },
  {
   "id": "esc-219-ela-quer-cantar-com-eles-no-show",
   "pt": "Ela quer cantar com eles no show.",
   "ar": "هي عايزة تِغَني معاهُم في الحَفلة.",
   "arabizi": "Heya 3aeiza te8any ma3ahom fe el7afla.",
   "src": "2026-09-04"
  },
  {
   "id": "esc-220-ele-quer-dancar-com-ela-na-festa-amanha",
   "pt": "Ele quer dançar com ela na festa amanhã.",
   "ar": "هُوَ عايِز يِرقُص معاها في الحَفلة بُكرة.",
   "arabizi": "Howa 3aeiz yor2os ma3aha fe el7afla bokra.",
   "src": "2026-09-04"
  },
  {
   "id": "esc-221-eu-nao-gosto-de-trabalhar-com-ele",
   "pt": "Eu não gosto de trabalhar com ele.",
   "ar": "أنا مابَحِبِش أشتَغَل معاه.",
   "arabizi": "Ana maba7ebesh ashta8al ma3ah.",
   "src": "2026-09-04"
  },
  {
   "id": "esc-222-eu-gosto-de-conversar-com-voce-m-f",
   "pt": "Eu gosto de conversar com você. (m/f)",
   "ar": "أنا بَحِب أتكلم معاك/معاكي.",
   "arabizi": "Ana ba7eb atkalem ma3ak/ma3aki.",
   "src": "2026-09-04"
  },
  {
   "id": "esc-223-eles-vao-arrumar-a-casa-conosco",
   "pt": "Eles vão arrumar a casa conosco.",
   "ar": "هُما هَيرَوَقوا البيت معانا.",
   "arabizi": "Homa hairaua2u elbeit ma3ana.",
   "src": "2026-09-04"
  },
  {
   "id": "esc-224-nos-vamos-ficar-aqui-com-voces",
   "pt": "Nós vamos ficar aqui com vocês.",
   "ar": "احنا هَنُقعُد هِنا معاكوا.",
   "arabizi": "E7na hano3od hena ma3aku.",
   "src": "2026-09-04"
  },
  {
   "id": "esc-225-eu-nao-quero-falar-contigo-m-f",
   "pt": "Eu não quero falar contigo. (m/f)",
   "ar": "أنا مِش عايز أتكَلِم مَعاك/معاكي.",
   "arabizi": "Ana mesh 3aeiz atkalem ma3ak/ma3aki.",
   "src": "2026-09-04"
  },
  {
   "id": "esc-226-por-que-voces-nao-querem-sair-sem-ela",
   "pt": "Por que vocês não querem sair sem ela?",
   "ar": "انتوا مِش عايزين تُخرُجوا مِن غيرها ليه؟",
   "arabizi": "Entu mesh 3aeizin to5rogu men 8erha leh?",
   "src": "2026-09-04"
  },
  {
   "id": "esc-227-eu-vou-lavar-a-louca-com-voces",
   "pt": "Eu vou lavar a louça com vocês.",
   "ar": "أنا هَغسِل المواعين معاكوا.",
   "arabizi": "Ana ha8sel elmaua3in ma3aku.",
   "src": "2026-09-04"
  },
  {
   "id": "esc-228-eu-trabalho-na-mesma-empresa-com-ali",
   "pt": "Eu trabalho na mesma empresa com Ali.",
   "ar": "أنا بَشتَغَل في نفس الشِركة مَعَ عَلي.",
   "arabizi": "Ana bashta8al fe nafs elsherka ma3a Ali.",
   "src": "2026-09-04"
  },
  {
   "id": "esc-229-eu-nao-gosto-de-sair-sem-voce-m",
   "pt": "Eu não gosto de sair sem você. (m)",
   "ar": "أنا مابَحِبش أخرُج مِن غيرَك.",
   "arabizi": "Ana maba7ebesh a5rog men 8eirak.",
   "src": "2026-09-09"
  },
  {
   "id": "esc-230-quais-sao-as-coisas-que-voce-gosta-de-fazer-sozinho",
   "pt": "Quais são as coisas que você gosta de fazer sozinho?",
   "ar": "ايه الحاجات اللي بِتحِب تِعمِلها لِوَحدك؟",
   "arabizi": "Eh el7agat elly bet7eb te3melha leua7dak?",
   "src": "2026-09-09"
  },
  {
   "id": "esc-231-eu-gosto-de-ler-um-livro-sozinho",
   "pt": "Eu gosto de ler um livro sozinho.",
   "ar": "أنا بَحِب أقرا كِتاب لِوحدي.",
   "arabizi": "Ana ba7eb a2ra ketab leua7dy.",
   "src": "2026-09-09"
  },
  {
   "id": "esc-232-eu-jogo-videogame-sozinho",
   "pt": "Eu jogo videogame sozinho.",
   "ar": "أنا بَلعَب فيديو جيمز لِوَحدي.",
   "arabizi": "Ana bal3ab video games leua7dy.",
   "src": "2026-09-09"
  },
  {
   "id": "esc-233-a-minha-esposa-gosta-de-dancar-sozinha",
   "pt": "A minha esposa gosta de dançar sozinha.",
   "ar": "مِراتي بِتحِب تُرقُص لِوَحدَها.",
   "arabizi": "Meraty bet7eb tor2os leua7daha.",
   "src": "2026-09-09"
  },
  {
   "id": "esc-234-a-minha-esposa-gosta-de-assistir-series-de-crime-sozinha",
   "pt": "A minha esposa gosta de assistir séries de crime sozinha.",
   "ar": "مراتي بِتحِب تِتفَرَج عَلى مُسَلسَلات جَرايِم لِوَحدَها.",
   "arabizi": "Meraty bet7eb tetfarag 3ala mosalsalat garayem leua7daha.",
   "src": "2026-09-09"
  },
  {
   "id": "esc-235-eu-gosto-de-viajar-com-alguem",
   "pt": "Eu gosto de viajar com alguém.",
   "ar": "أنا بَحِب أسافِر مَعَ حَد.",
   "arabizi": "Ana ba7eb assafer ma3a 7ad.",
   "src": "2026-09-09"
  },
  {
   "id": "esc-236-eu-nao-gosto-de-viajar-com-eles",
   "pt": "Eu não gosto de viajar com eles.",
   "ar": "أنا مابحبش أسافِر معاهُم.",
   "arabizi": "Ana maba7ebesh assafer ma3ahom.",
   "src": "2026-09-09"
  },
  {
   "id": "esc-237-eu-prefiro-viajar-com-ela",
   "pt": "Eu prefiro viajar com ela.",
   "ar": "أنا بَفَضَل أسافِر مَعاها.",
   "arabizi": "Ana bafadal assafer ma3aha.",
   "src": "2026-09-09"
  },
  {
   "id": "esc-238-voce-limpa-a-casa-sozinho-m",
   "pt": "Você limpa a casa sozinho? (m)",
   "ar": "انتَ بِتنَضَف البيت لِوَحدَك؟",
   "arabizi": "Enta betnadaf elbeit leua7dak?",
   "src": "2026-09-09"
  },
  {
   "id": "esc-239-nao-as-vezes-eu-limpo-sozinho-e-as-vezes-limpo-com-ele",
   "pt": "Não, às vezes eu limpo sozinho e às vezes limpo com ele.",
   "ar": "لا، أنا ساعات بَنَضَف لِوَحدي وساعات بَنَضَف مَعاه.",
   "arabizi": "La, ana sa3at banadaf leua7dy we sa3at banadaf ma3ah.",
   "src": "2026-09-09"
  },
  {
   "id": "esc-240-voce-prefere-trabalhar-sozinho-ou-com-salma-e-omar",
   "pt": "Você prefere trabalhar sozinho ou com Salma e Omar?",
   "ar": "انتَ بِتفَضَل تِشتَغَل لِوحَدَك ولا مَعَ سَلمى وعُمَر؟",
   "arabizi": "Enta betfadal teshta8al leua7dak walla ma3a Salma we Omar?",
   "src": "2026-09-09"
  },
  {
   "id": "esc-241-eu-prefiro-trabalhar-com-eles",
   "pt": "Eu prefiro trabalhar com eles.",
   "ar": "أنا بَفَضَل أشتَغَل مَعَاهُم.",
   "arabizi": "Ana bafadal ashta8al ma3ahom.",
   "src": "2026-09-09"
  },
  {
   "id": "esc-242-voce-tem-esta-com-caneta-m",
   "pt": "Você tem (está com) caneta? (m)",
   "ar": "معاك قَلَم؟",
   "arabizi": "Ma3ak 2alam?",
   "src": "2026-09-09"
  },
  {
   "id": "esc-243-voce-tem-esta-com-um-livro-f",
   "pt": "Você tem (está com) um livro? (f)",
   "ar": "معاكي كِتاب؟",
   "arabizi": "Ma3aki ketab?",
   "src": "2026-09-09"
  },
  {
   "id": "esc-244-voce-tem-um-minuto",
   "pt": "Você tem um minuto?",
   "ar": "معاك دِقيقة؟",
   "arabizi": "Ma3ak de2i2a?",
   "src": "2026-09-09"
  },
  {
   "id": "esc-245-eu-estou-com-vontade-de-ir-a-praia",
   "pt": "Eu estou com vontade de ir à praia.",
   "ar": "أنا نِفسي أروح البَحر.",
   "arabizi": "Ana nefsy aru7 elba7r.",
   "src": "2026-09-09"
  },
  {
   "id": "esc-246-eslam-quer-muito-comprar-um-carro-novo",
   "pt": "Eslam quer muito comprar um carro novo.",
   "ar": "إسلام نِفسُه يِشتِري عربية جديدة.",
   "arabizi": "Eslam nefso yeshtery 3arabeya gedida.",
   "src": "2026-09-09"
  },
  {
   "id": "esc-247-hala-esta-com-vontade-de-ir-ao-cinema",
   "pt": "Hala está com vontade de ir ao cinema.",
   "ar": "هاله نِفسَها تِروح السينما.",
   "arabizi": "Hala nefsaha teru7 elcinema.",
   "src": "2026-09-09"
  },
  {
   "id": "esc-248-voce-quer-tem-vontade-de-viajar-conosco-m",
   "pt": "Você quer (tem vontade de) viajar conosco? (m)",
   "ar": "انتَ نِفسَك تِسافِر معانا؟",
   "arabizi": "Enta nefsak tessafer ma3ana?",
   "src": "2026-09-09"
  },
  {
   "id": "esc-249-voce-quer-tem-vontade-de-viajar-conosco-f",
   "pt": "Você quer (tem vontade de) viajar conosco? (f)",
   "ar": "انتي نِفسِك تِسافري معانا؟",
   "arabizi": "Enty nefsek tessafry ma3ana?",
   "src": "2026-09-09"
  },
  {
   "id": "esc-250-nos-estamos-com-vontade-de-ir-ao-cabeleireiro-e-fazer-o-cabelo",
   "pt": "Nós estamos com vontade de ir ao cabeleireiro e fazer o cabelo.",
   "ar": "اِحنا نِفسِنا نِروح الكوافير ونِعمِل شَعرِنا.",
   "arabizi": "E7na nefsena neru7 elkowafeir we ne3mel sha3rena.",
   "src": "2026-09-09"
  },
  {
   "id": "esc-251-o-que-voces-querem-comer",
   "pt": "O que vocês querem comer?",
   "ar": "انتوا نِفسُكوا تاكلوا ايه؟",
   "arabizi": "Entu nefsoku taklu eh?",
   "src": "2026-09-09"
  },
  {
   "id": "esc-252-elas-estao-com-vontade-de-aprender-a-dancar",
   "pt": "Elas estão com vontade de aprender a dançar.",
   "ar": "هُما نِفسُهُم يِتعَلِموا يُرقَصوا.",
   "arabizi": "Homa nefsohom yet3alemu yor2osu.",
   "src": "2026-09-09"
  },
  {
   "id": "esc-253-eu-quero-estou-com-vontade-de-agua",
   "pt": "Eu quero (estou com vontade de) água.",
   "ar": "أنا نِفسي في ماية.",
   "arabizi": "Ana nefsy fe maya.",
   "src": "2026-09-09"
  },
  {
   "id": "esc-254-eu-estou-com-vontade-de-tomar-um-banho-ducha",
   "pt": "Eu estou com vontade de tomar um banho (ducha).",
   "ar": "أنا نِفسي آخُد دُش.",
   "arabizi": "Ana nefsy a5od dosh.",
   "src": "2026-09-09"
  },
  {
   "id": "esc-255-eu-estou-com-vontade-de-tirar-ferias",
   "pt": "Eu estou com vontade de tirar férias.",
   "ar": "نِفسي في أجازة.",
   "arabizi": "Nefsy fe agaza.",
   "src": "2026-09-09"
  },
  {
   "id": "esc-256-ahmed-quer-tem-vontade-de-um-carro",
   "pt": "Ahmed quer (tem vontade de) um carro.",
   "ar": "أحمَد نِفسُه في عربية.",
   "arabizi": "Ahmed nefso fe 3arabeya.",
   "src": "2026-09-09"
  },
  {
   "id": "esc-257-estou-com-vontade-de-dormir-cedo-hoje",
   "pt": "Estou com vontade de dormir cedo hoje.",
   "ar": "أنا نِفسي أنام بَدري النهاردة.",
   "arabizi": "Ana nefsy anam badry elnaharda.",
   "src": "2026-09-09"
  },
  {
   "id": "esc-258-ele-quer-muito-viajar-este-ano",
   "pt": "Ele quer muito viajar este ano.",
   "ar": "هُوَ نِفسُه يِسافِر كِتير السنة دي.",
   "arabizi": "Howa nefso yessafer ketir elsana di.",
   "src": "2026-09-09"
  },
  {
   "id": "esc-259-ela-esta-com-vontade-de-comprar-um-vestido-novo",
   "pt": "Ela está com vontade de comprar um vestido novo.",
   "ar": "هي نِفسَها تِشتِري فُستان جِديد.",
   "arabizi": "Heya nefsaha teshtery fostan gedid.",
   "src": "2026-09-09"
  },
  {
   "id": "esc-260-voce-m-esta-com-vontade-de-sair-no-fim-de-semana",
   "pt": "Você (m) está com vontade de sair no fim de semana?",
   "ar": "نِفسَك تخرُج في الأجازة؟",
   "arabizi": "Nefsak to5rog fe elagaza?",
   "src": "2026-09-09"
  },
  {
   "id": "esc-261-voce-f-esta-com-vontade-de-tomar-refrigerante",
   "pt": "Você (f) está com vontade de tomar refrigerante?",
   "ar": "نِفسِك تِشرَبي بيبسي؟",
   "arabizi": "Nefsek teshraby pepsi?",
   "src": "2026-09-09"
  },
  {
   "id": "esc-262-nos-queremos-ler-um-livro-novo",
   "pt": "Nós queremos ler um livro novo.",
   "ar": "احنا نِفسِنا نِقرا كِتاب جِديد.",
   "arabizi": "E7na nefsena ne2ra ketab gedid.",
   "src": "2026-09-09"
  },
  {
   "id": "esc-263-eles-querem-aprender-a-tocar-violino",
   "pt": "Eles querem aprender a tocar violino.",
   "ar": "هُما نِفسُهُم يِتعَلموا يِلعبوا كَمانجا.",
   "arabizi": "Homa nefsohom yet3alemu yel3abu kamanga.",
   "src": "2026-09-09"
  },
  {
   "id": "esc-264-o-que-voce-esta-com-vontade-de-fazer-m",
   "pt": "O que você está com vontade de fazer? (m)",
   "ar": "انتَ نِفسَك تِعمِل ايه؟",
   "arabizi": "Enta nefsak te3mel eh?",
   "src": "2026-09-09"
  },
  {
   "id": "esc-265-estou-com-vontade-de-jogar-bola-a-noite-com-eles",
   "pt": "Estou com vontade de jogar bola à noite com eles.",
   "ar": "أنا نِفسي ألعَب كورة بِليل مَعَاهُم.",
   "arabizi": "Ana nefsy al3ab kora beleil ma3ahom.",
   "src": "2026-09-09"
  },
  {
   "id": "esc-266-estou-com-vontade-de-almocar",
   "pt": "Estou com vontade de almoçar.",
   "ar": "أنا نِفسي أتغَدى.",
   "arabizi": "Ana nefsy at8ada.",
   "src": "2026-09-09"
  },
  {
   "id": "esc-267-estou-com-vontade-de-assistir-videos-no-youtube",
   "pt": "Estou com vontade de assistir vídeos no YouTube.",
   "ar": "أنا نفسي أتفرج عَلى فيديوهات على اليوتيوب.",
   "arabizi": "Ana nefsy atfarag 3ala vidiohat 3ala elyoutube.",
   "src": "2026-09-09"
  },
  {
   "id": "esc-268-voce-esta-com-vontade-de-tirar-ferias-m",
   "pt": "Você está com vontade de tirar férias? (m)",
   "ar": "انتَ نِفسَك تاخُد أجازة؟",
   "arabizi": "Enta nefsak ta5od agaza?",
   "src": "2026-09-09"
  },
  {
   "id": "esc-269-sim-estou-com-muita-muita-vontade-de-tirar-ferias",
   "pt": "Sim, estou com muita, muita vontade de tirar férias.",
   "ar": "ايوة، نِفسي أوي أوي آخُد أجازة.",
   "arabizi": "Aiwa, nefsy awi awi a5od agaza.",
   "src": "2026-09-09"
  },
  {
   "id": "esc-270-com-a-sua-familia-m",
   "pt": "Com a sua família? (m)",
   "ar": "مَع عيلتَك؟",
   "arabizi": "Ma3a 3eiltak?",
   "src": "2026-09-09"
  },
  {
   "id": "esc-271-o-que-voce-esta-com-vontade-de-comer-hoje-m",
   "pt": "O que você está com vontade de comer hoje? (m)",
   "ar": "نِفسَك تاكُل ايه النهاردة؟",
   "arabizi": "Nefsak takol eh enaharda?",
   "src": "2026-09-11"
  },
  {
   "id": "esc-272-eu-nao-quero-comer-nada",
   "pt": "Eu não quero comer nada.",
   "ar": "أنا مِش عايِز آكُل حاجة.",
   "arabizi": "Ana mesh 3aeiz akol 7aga.",
   "src": "2026-09-11"
  },
  {
   "id": "esc-273-estou-com-vontade-de-tomar-cafe",
   "pt": "Estou com vontade de tomar café.",
   "ar": "نفسي أشرَب قَهوة.",
   "arabizi": "Nefsy ashrab 2ahwa.",
   "src": "2026-09-11"
  },
  {
   "id": "esc-274-o-que-voce-esta-com-vontade-de-fazer-no-fim-de-semana-m",
   "pt": "O que você está com vontade de fazer no fim de semana? (m)",
   "ar": "نِفسَك تِعمِل ايه في الويك اند؟",
   "arabizi": "Nefsak te3mel eh fe elweekend?",
   "src": "2026-09-11"
  },
  {
   "id": "esc-275-estou-com-vontade-de-jogar-tenis-a-noite-e-de-ir-ao-cinema-a",
   "pt": "Estou com vontade de jogar tênis à noite e de ir ao cinema amanhã.",
   "ar": "أنا نِفسي ألعَب تِنِس بليل ونِفسي أروح السينما بُكرة.",
   "arabizi": "Ana nefsy al3ab tenis beleil we nefsy aru7 elcinema bokra.",
   "src": "2026-09-11"
  },
  {
   "id": "esc-276-que-filme-voce-esta-com-vontade-de-ver-no-cinema-m",
   "pt": "Que filme você está com vontade de ver no cinema? (m)",
   "ar": "نِفسَك تِتفَرَج على فيلم ايه في السينما؟",
   "arabizi": "Nefsak tetfarag 3ala film eh fe elcinema?",
   "src": "2026-09-11"
  },
  {
   "id": "esc-277-com-quem-voce-esta-com-vontade-de-sair-m",
   "pt": "Com quem você está com vontade de sair? (m)",
   "ar": "نِفسَك تُخرُج مَعَ مين؟",
   "arabizi": "Nefsak to5rog ma3a min?",
   "src": "2026-09-11"
  },
  {
   "id": "esc-278-estou-com-vontade-de-sair-com-a-minha-esposa",
   "pt": "Estou com vontade de sair com a minha esposa.",
   "ar": "نِفسي أخرُج مَعَ مِراتي.",
   "arabizi": "Nefsy a5rog ma3a meraty.",
   "src": "2026-09-11"
  },
  {
   "id": "esc-279-com-qual-jogador-do-flamengo-voce-tem-vontade-de-jogar-bola",
   "pt": "Com qual jogador do Flamengo você tem vontade de jogar bola? (m)",
   "ar": "نِفسَك تِلعَب كورة مَعَ مين مِن لَعيبة فلامِنجو؟",
   "arabizi": "Nefsak tel3ab kora ma3a min men la3ibet Flamengo?",
   "src": "2026-09-11"
  },
  {
   "id": "esc-280-para-onde-voce-esta-com-vontade-de-viajar-m",
   "pt": "Para onde você está com vontade de viajar? (m)",
   "ar": "نِفسَك تِسافِر فين؟",
   "arabizi": "Nefsak tessafer fein?",
   "src": "2026-09-11"
  },
  {
   "id": "esc-281-estou-com-vontade-de-viajar-para-o-japao-e-a-coreia-no-ano-q",
   "pt": "Estou com vontade de viajar para o Japão e a Coreia no ano que vem.",
   "ar": "نفسي أسافِر اليابان وكوريا السنة اللي جاية.",
   "arabizi": "Nefsy asafer elyaban we Korya elsana elly gaya.",
   "src": "2026-09-11"
  },
  {
   "id": "esc-282-hoje-e-o-aniversario-da-sua-esposa",
   "pt": "Hoje é o aniversário da sua esposa.",
   "ar": "النهاردة عيد ميلاد مِراتك.",
   "arabizi": "Enaharda 3id milad meratak.",
   "src": "2026-09-11"
  },
  {
   "id": "esc-283-que-presente-ela-quer",
   "pt": "Que presente ela quer? (نِفسها في…)",
   "ar": "هي نِفسها في ايه هِدية؟",
   "arabizi": "Heya nefsaha fe eh hedeya?",
   "src": "2026-09-11"
  },
  {
   "id": "esc-284-ela-quer-um-anel-da-tiffany",
   "pt": "Ela quer um anel da Tiffany.",
   "ar": "هي نِفسِها في خاتِم مِن تيفاني.",
   "arabizi": "Heya nefsaha fe 5atem men Tiffany.",
   "src": "2026-09-11"
  },
  {
   "id": "esc-285-ela-esta-com-vontade-de-viajar-no-aniversario-dela",
   "pt": "Ela está com vontade de viajar no aniversário dela?",
   "ar": "هِيَ نِفسها تِسافِر في عيد ميلادها؟",
   "arabizi": "Heya nefsaha tessafer fe 3id miladha?",
   "src": "2026-09-11"
  },
  {
   "id": "esc-286-sim-ela-esta-com-vontade-de-viajar-para-a-italia",
   "pt": "Sim, ela está com vontade de viajar para a Itália.",
   "ar": "ايوة، هي نِفسها تِسافِر إيطاليا.",
   "arabizi": "Aiwa, heya nefsaha tessafer Italia.",
   "src": "2026-09-11"
  },
  {
   "id": "esc-287-hoje-e-o-aniversario-do-seu-irmao-que-presente-ele-quer",
   "pt": "Hoje é o aniversário do seu irmão; que presente ele quer?",
   "ar": "النهاردة عيد ميلاد أخوك، هو نِفسه في ايه هِدية؟",
   "arabizi": "Enaharda 3id milad a5uk, howa nefso fe eh hedeya?",
   "src": "2026-09-11"
  },
  {
   "id": "esc-288-ele-quer-videogames",
   "pt": "Ele quer videogames.",
   "ar": "هو نفسُه في فيديو جيمز.",
   "arabizi": "Howa nefso fe video games.",
   "src": "2026-09-11"
  },
  {
   "id": "esc-289-voce-tem-irmao-m",
   "pt": "Você tem irmão? (m)",
   "ar": "انتَ عَندَك أخ؟",
   "arabizi": "Enta 3andak a5?",
   "src": "2026-09-11"
  },
  {
   "id": "esc-290-sim-eu-tenho-um-irmao-por-parte-de-mae",
   "pt": "Sim, eu tenho um irmão por parte de mãe.",
   "ar": "ايوة، أنا عَندي أخ مِن ماما.",
   "arabizi": "Aiwa, ana 3andi a5 men mama.",
   "src": "2026-09-11"
  },
  {
   "id": "esc-291-o-que-sua-mae-e-seu-pai-querem-m",
   "pt": "O que sua mãe e seu pai querem? (m)",
   "ar": "مامتَك وباباك نِفسُهم في ايه؟",
   "arabizi": "Mamtak we babak nefsohom fe eh?",
   "src": "2026-09-11"
  },
  {
   "id": "esc-292-eles-estao-com-vontade-de-comprar-muitas-tamaras-medjool-dos",
   "pt": "Eles estão com vontade de comprar muitas tâmaras Medjool dos Emirados.",
   "ar": "هُما نِفسُهُم يِشتِروا تَمر مَدجول كِتير مِن الإمارات.",
   "arabizi": "Homa nefsohom yeshteru tamr madgul ketir men elEmarat.",
   "src": "2026-09-11"
  },
  {
   "id": "esc-293-o-que-ha-na-sua-frente-m",
   "pt": "O que há na sua frente? (m)",
   "ar": "فيه ايه قُدامَك؟",
   "arabizi": "Fih eh odamak?",
   "src": "2026-09-11"
  },
  {
   "id": "esc-294-na-minha-frente-fica-o-supermercado-al-hayah",
   "pt": "Na minha frente fica o supermercado Al Hayah.",
   "ar": "قُدامي سوبرماركِت الحياة.",
   "arabizi": "Odamy supermarket el7aya.",
   "src": "2026-09-11"
  },
  {
   "id": "esc-295-voce-esta-na-frente-de-que-m",
   "pt": "Você está na frente de quê? (m)",
   "ar": "انتَ قُدام ايه؟",
   "arabizi": "Enta odam eh?",
   "src": "2026-09-11"
  },
  {
   "id": "esc-296-eu-estou-em-frente-ao-supermercado",
   "pt": "Eu estou em frente ao supermercado.",
   "ar": "أنا قُدام السوبَرماركِت.",
   "arabizi": "Ana odam elsupermarket.",
   "src": "2026-09-11"
  },
  {
   "id": "esc-297-o-supermercado-fica-na-minha-frente",
   "pt": "O supermercado fica na minha frente.",
   "ar": "السوبر ماركِت قُدامي.",
   "arabizi": "Elsupermarket odamy.",
   "src": "2026-09-11"
  },
  {
   "id": "esc-298-o-que-ha-atras-de-voce-m",
   "pt": "O que há atrás de você? (m)",
   "ar": "فيه ايه وراك؟",
   "arabizi": "Fih eh warak?",
   "src": "2026-09-11"
  },
  {
   "id": "esc-299-minha-mae-esta-atras-de-mim",
   "pt": "Minha mãe está atrás de mim.",
   "ar": "ماما ورايا.",
   "arabizi": "Mama waraya.",
   "src": "2026-09-11"
  },
  {
   "id": "esc-300-atras-de-mim-ha-uma-mesa-de-escritorio",
   "pt": "Atrás de mim há uma escrivaninha (mesa de escritório).",
   "ar": "ورايا فيه مَكتَب.",
   "arabizi": "Waraya fih maktab.",
   "src": "2026-09-11"
  },
  {
   "id": "esc-301-eu-quero-sentar-ao-seu-lado-m-f",
   "pt": "Eu quero sentar ao seu lado. (m / f)",
   "ar": "أنا عايِز أقعُد جَنبَك (جَنبِك).",
   "arabizi": "Ana 3aeiz a3od gambak (gambek).",
   "src": "2026-09-11"
  },
  {
   "id": "esc-302-eu-tenho-muito-trabalho-hoje-com-3and",
   "pt": "Eu tenho muito trabalho hoje. (com عَند)",
   "ar": "أنا عَندي شُغل كِتير النهاردة.",
   "arabizi": "Ana 3andi sho8l ketir enaharda.",
   "src": "2026-09-11"
  },
  {
   "id": "esc-303-eu-tenho-muito-trabalho-a-fazer-hoje-com-wara",
   "pt": "Eu tenho muito trabalho (a fazer) hoje. (com ورا)",
   "ar": "أنا ورايا شُغل كتير النهاردة.",
   "arabizi": "Ana waraya sho8l ketir enaharda.",
   "src": "2026-09-11"
  },
  {
   "id": "esc-304-ali-tem-muitas-coisas-a-fazer-hoje-ele-tem-que-limpar-e-arru",
   "pt": "Ali tem muitas coisas (a fazer) hoje: ele tem que limpar e arrumar a casa, depois tem que estudar português.",
   "ar": "علي وراه حاجات كِتير النهاردة، هو لازِم يِنَضَف ويِرَوَق البيت، بَعدين لازِم يِذاكِر بُرتغالي.",
   "arabizi": "Ali warah 7agat ketir enaharda, howa lazem yenadaf we yeraua2 elbeit, ba3dein lazem yezaker borto8aly.",
   "src": "2026-09-11"
  },
  {
   "id": "esc-305-estou-muito-chateado-mas-nao-vou-sair-de-casa",
   "pt": "Estou muito chateado, mas não vou sair de casa.",
   "ar": "أنا زَهقان أوي، لَكني مِش هخرُج مِن البيت.",
   "arabizi": "Ana zah2an awi, lakeni mesh ha5rog men elbeit.",
   "src": "2026-09-11"
  },
  {
   "id": "esc-306-eu-vou-ter-muito-trabalho-no-proximo-dezembro",
   "pt": "Eu vou ter muito trabalho no próximo dezembro.",
   "ar": "أنا هَيكون عندي شُغل كِتير في ديسَمبر الجاي.",
   "arabizi": "Ana haikun 3andy sho8l ketir fe December elgay.",
   "src": "2026-09-18"
  },
  {
   "id": "esc-307-ali-vai-ter-uma-reuniao-muito-importante-na-empresa-no-dia-8",
   "pt": "Ali vai ter uma reunião muito importante na empresa no dia 8 de outubro.",
   "ar": "علي هَيكون عَندُه اِجتِماع مُهِم أوي في الشِركة يوم 8 أكتوبَر.",
   "arabizi": "Ali haikun 3ando ektema3 mohem awi fe elsherka youm 8 october.",
   "src": "2026-09-18"
  },
  {
   "id": "esc-308-voces-vao-ter-tempo-livre-no-fim-de-semana",
   "pt": "Vocês vão ter tempo livre no fim de semana?",
   "ar": "انتوا هَيكون عَندُكوا وَقت فاضي في الأجازة (الويكيند)؟",
   "arabizi": "Entu haikun 3andoku wa2t fady fe elagaza?",
   "src": "2026-09-18"
  },
  {
   "id": "esc-309-nos-vamos-ter-uma-viagem-no-proximo-verao",
   "pt": "Nós vamos ter uma viagem no próximo verão.",
   "ar": "احنا هَيكون عَندِنا سَفر الصيف الجاي.",
   "arabizi": "E7na haikun 3andena safar elseif elgay.",
   "src": "2026-09-18"
  },
  {
   "id": "esc-310-voce-m-tinha-teve-gripe",
   "pt": "Você (m) tinha/teve gripe?",
   "ar": "انتَ كان عَندَك بَرد؟",
   "arabizi": "Enta kan 3andak bard?",
   "src": "2026-09-18"
  },
  {
   "id": "esc-311-voce-f-tinha-teve-gripe",
   "pt": "Você (f) tinha/teve gripe?",
   "ar": "انتي كان عَندِك بَرد؟",
   "arabizi": "Enty kan 3andek bard?",
   "src": "2026-09-18"
  },
  {
   "id": "esc-312-nos-tinhamos-tivemos-muito-trabalho-ontem",
   "pt": "Nós tínhamos/tivemos muito trabalho ontem.",
   "ar": "احنا كان عَندِنا شُغل كِتير امبارِح.",
   "arabizi": "E7na kan 3andena sho8l ketir embare7.",
   "src": "2026-09-18"
  },
  {
   "id": "esc-313-eu-tinha-tive-uma-reuniao-com-o-gerente-anteontem",
   "pt": "Eu tinha/tive uma reunião com o gerente anteontem.",
   "ar": "أنا كان عَندي اِجتِماع مَعَ المدير أول امبارِح.",
   "arabizi": "Ana kan 3andy ektema3 ma3a elmodir auel embare7.",
   "src": "2026-09-18"
  },
  {
   "id": "esc-314-eu-quero-cafe-sem-acucar-por-favor",
   "pt": "Eu quero café sem açúcar, por favor!",
   "ar": "أنا عايز قَهوة مِن غير سُكَر، لَو سَمَحت!",
   "arabizi": "Ana 3aeiz 2ahwa men 8eir sokar, lau sama7t!",
   "src": "2026-09-18"
  },
  {
   "id": "esc-315-a-comida-esta-sem-sal",
   "pt": "A comida está sem sal!",
   "ar": "الأكل مِن غير مَلح!",
   "arabizi": "Elakl men 8eir mal7!",
   "src": "2026-09-18"
  },
  {
   "id": "esc-316-eu-quero-a-pizza-sem-cebola-por-favor",
   "pt": "Eu quero a pizza sem cebola, por favor!",
   "ar": "أنا عايز البيتزا مِن غير بَصَل لو سَمَحت!",
   "arabizi": "Ana 3aeiz elpizza men 8eir bassal lau sama7t!",
   "src": "2026-09-18"
  },
  {
   "id": "esc-317-eu-quero-a-comida-sem-pimenta-por-favor",
   "pt": "Eu quero a comida sem pimenta, por favor!",
   "ar": "أنا عايِز الأكل مِن غير شَطة، لو سَمَحت!",
   "arabizi": "Ana 3aeiz elakl men 8eir shatta lau sama7t!",
   "src": "2026-09-30 · também na Aula 84"
  },
  {
   "id": "esc-318-a-minha-mae-mora-perto-de-mim",
   "pt": "A minha mãe mora perto de mim.",
   "ar": "ماما ساكنة قُرَيب مِني.",
   "arabizi": "Mama sakna orayeb meni.",
   "src": "2026-09-18"
  },
  {
   "id": "esc-319-ha-um-posto-de-gasolina-perto-de-voce-m-f",
   "pt": "Há um posto de gasolina perto de você (m / f)?",
   "ar": "فيه بَنزينة قريب مِنَك؟ / فيه بنزينة قريب مِنك؟",
   "arabizi": "Fih banzina orayeb menak? / Fih banzina orayeb menek?",
   "src": "2026-09-18"
  },
  {
   "id": "esc-320-ha-um-supermercado-perto-dela",
   "pt": "Há um supermercado perto dela?",
   "ar": "فيه سوبرماركِت قريب مِنها؟",
   "arabizi": "Fih supermarket orayeb menha?",
   "src": "2026-09-18"
  },
  {
   "id": "esc-321-os-meus-irmaos-moram-longe-de-mim",
   "pt": "Os meus irmãos moram longe de mim.",
   "ar": "إخواتي ساكنين بِعيد عَني.",
   "arabizi": "E5uaty saknin be3id 3ani.",
   "src": "2026-09-18"
  },
  {
   "id": "esc-322-a-minha-irma-mora-longe-dela-da-mae",
   "pt": "A minha irmã mora longe dela (da mãe).",
   "ar": "أُختي ساكنة بِعيد عَنها.",
   "arabizi": "O5ty sakna be3id 3anha.",
   "src": "2026-09-18"
  },
  {
   "id": "esc-323-ali-vai-sentar-se-ficar-longe-deles-porque-ele-tem-gripe",
   "pt": "Ali vai sentar-se (ficar) longe deles, porque ele tem gripe.",
   "ar": "علي هَيُقعُد بِعيد عَنهُم عَشان هو عَندُه بَرد.",
   "arabizi": "Ali haio3od be3id 3anhom 3ashan howa 3ando bard.",
   "src": "2026-09-18"
  },
  {
   "id": "esc-324-os-meus-pais-moram-muito-perto-de-voces",
   "pt": "Os meus pais moram muito perto de vocês!",
   "ar": "ماما وبابا ساكنين قُريب أوي مِنكوا!",
   "arabizi": "Mama we baba saknin orayeb awi menku!",
   "src": "2026-09-18"
  },
  {
   "id": "esc-325-karim-gosta-de-sentar-se-ao-lado-dela",
   "pt": "Karim gosta de sentar-se ao lado dela.",
   "ar": "كريم بيحِب يُقعُد جَمبَها.",
   "arabizi": "Karim bei7eb yo3od gambaha.",
   "src": "2026-09-18"
  },
  {
   "id": "esc-326-o-que-tem-ao-seu-lado-m-f",
   "pt": "O que tem ao seu lado (m / f)?",
   "ar": "فيه ايه جَنبَك/جَنبِك؟",
   "arabizi": "Fih eh gambak / gambek?",
   "src": "2026-09-18"
  },
  {
   "id": "esc-327-ao-meu-lado-ha-uma-escrivaninha-e-um-ventilador",
   "pt": "Ao meu lado há uma escrivaninha e um ventilador.",
   "ar": "جَنبي فيه مَكتَب ومَروَحة.",
   "arabizi": "Gamby fih maktab we marua7a.",
   "src": "2026-09-18"
  },
  {
   "id": "esc-328-o-que-voce-m-faz-em-casa",
   "pt": "O que você (m) faz em casa?",
   "ar": "انتَ بِتِعمِل ايه في البيت؟",
   "arabizi": "Enta bet3mel eh fe elbeit?",
   "src": "2026-09-18"
  },
  {
   "id": "esc-329-eu-nao-viajo-em-janeiro",
   "pt": "Eu não viajo em janeiro.",
   "ar": "أنا مابسافِرش في ينايِر (شَهر 1).",
   "arabizi": "Ana mabasafersh fe yanayer.",
   "src": "2026-09-30"
  },
  {
   "id": "esc-330-meu-cunhado-marido-da-minha-irma-nao-trabalha-na-arabia-saud",
   "pt": "Meu cunhado (marido da minha irmã) não trabalha na Arábia Saudita.",
   "ar": "جوز أختي مابيشتَغَلش في السعودية.",
   "arabizi": "Goz o5ty mabieshta8alsh fe elso3deya.",
   "src": "2026-09-30"
  },
  {
   "id": "esc-331-a-minha-sobrinha-filha-do-meu-irmao-nao-tem-escola-amanha",
   "pt": "A minha sobrinha (filha do meu irmão) não tem escola amanhã.",
   "ar": "بِنت أخويا ماعَندَهاش مَدرسة بكرة.",
   "arabizi": "Bent a5oya ma3andahash madrassa bokra.",
   "src": "2026-09-30"
  },
  {
   "id": "esc-332-a-minha-esposa-e-eu-nao-gostamos-de-viajar-sozinhos",
   "pt": "A minha esposa e eu não gostamos de viajar sozinhos.",
   "ar": "أنا وِمراتي مابِنحِبش نِسافِر لِوَحدِنا.",
   "arabizi": "Ana we meraty maben7ebesh nessafer leua7dena.",
   "src": "2026-09-30"
  },
  {
   "id": "esc-333-eles-vao-arrumar-a-sala-sem-voces",
   "pt": "Eles vão arrumar a sala sem vocês.",
   "ar": "هُما هَيروقوا الصالة مِن غيركوا.",
   "arabizi": "Homa hairaua2u elsala men 8eirku.",
   "src": "2026-09-30"
  },
  {
   "id": "esc-334-eu-quero-ir-ao-museu-com-voce-m-f",
   "pt": "Eu quero ir ao museu com você (m / f).",
   "ar": "أنا عايِز أروح المَتحَف مَعاك (مَعاكي).",
   "arabizi": "Ana 3aeiz aru7 elmat7af ma3ak (ma3aki).",
   "src": "2026-09-30"
  },
  {
   "id": "esc-335-o-que-voce-m-tem-vontade-de-fazer-no-verao",
   "pt": "O que você (m) tem vontade de fazer no verão?",
   "ar": "انتَ نِفسَك تِعمِل ايه في الصيف؟",
   "arabizi": "Enta nefsak te3mel eh fe elseif?",
   "src": "2026-09-30"
  },
  {
   "id": "esc-336-o-que-voce-f-tem-vontade-de-fazer-no-verao",
   "pt": "O que você (f) tem vontade de fazer no verão?",
   "ar": "انتي نِفسِك تِعملي ايه في الصيف؟",
   "arabizi": "Enty nefsek te3mely eh fe elseif?",
   "src": "2026-09-30"
  },
  {
   "id": "esc-337-eu-estou-atras-de-voce-m-f",
   "pt": "Eu estou atrás de você (m / f)!",
   "ar": "أنا وراك! / أنا وراكي!",
   "arabizi": "Ana warak! / Ana waraki!",
   "src": "2026-09-30"
  },
  {
   "id": "esc-338-eu-moro-perto-de-voce-m",
   "pt": "Eu moro perto de você (m)!",
   "ar": "أنا ساكِن قريب مِنَك!",
   "arabizi": "Ana saken orayeb menak!",
   "src": "2026-09-30"
  },
  {
   "id": "esc-339-a-sara-mora-longe-de-mim",
   "pt": "A Sara mora longe de mim.",
   "ar": "سارة ساكنة بعيد عَني.",
   "arabizi": "Sara sakna be3id 3ani.",
   "src": "2026-09-30"
  },
  {
   "id": "esc-340-eles-querem-sentar-se-ao-nosso-lado",
   "pt": "Eles querem sentar-se ao nosso lado.",
   "ar": "هُما عايزين يُقعُدوا جَنبِنا.",
   "arabizi": "Homa 3aeizin yo3odo gambena.",
   "src": "2026-09-30"
  },
  {
   "id": "esc-341-nos-vamos-a-praia-e-depois-almocamos-num-restaur",
   "pt": "Nós vamos à praia e depois almoçamos num restaurante com a minha irmã, o marido dela, a minha tia (materna) e a filha dela. Foi um dia lindo!",
   "ar": "احنا بِنروح البَحر وبعدين بِنِتغَدى في مَطعَم مَعَ أُختي وجوزها وخالتي وبِنتَها وكان يوم حِلو أوي.",
   "arabizi": "E7na benru7 elba7r we ba3dein benetghada fe mat3am ma3a o5ty we gozha we 5alty we bentha we kan youm 7elw awi.",
   "src": "2026-10-07"
  },
  {
   "id": "esc-342-os-nossos-filhos-sao-brasileiros-mas-eles-nao-fa",
   "pt": "Os nossos filhos são brasileiros, mas eles não falam português bem.",
   "ar": "أولادنا بَرازيليين، لَكنُهُم مابيتكَلموش بُرتُغالي كويس.",
   "arabizi": "Auladna barazileiin, lakenohom maboetkalemosh borto8aly kowayes.",
   "src": "2026-10-07"
  },
  {
   "id": "esc-343-eu-quero-viajar-de-carro-mas-eu-nao-quero-dirigi",
   "pt": "Eu quero viajar de carro, mas eu não quero dirigir.",
   "ar": "أنا عايِز أسافِر بالعربية لَكني مِش عايِز أسوق.",
   "arabizi": "Ana 3aeiz assafer bel3arabeya, lakeny mesh 3aaeiz assu2.",
   "src": "2026-10-07"
  },
  {
   "id": "esc-344-ali-quer-visitar-a-vovo-mas-ele-nao-tem-tempo",
   "pt": "Ali quer visitar a vovó, mas ele não tem tempo.",
   "ar": "علي عايِز يِزور تيتة (جِدِتُه)، لَكنُه ماعندوش وَقت.",
   "arabizi": "Ali 3aeiz yezur tita (gedeto), lakeno ma3andush wa2t.",
   "src": "2026-10-07"
  },
  {
   "id": "esc-345-nos-vamos-a-praia-amanha-mas-nos-nao-vamos-nadar",
   "pt": "Nós vamos à praia amanhã, mas nós não vamos nadar.",
   "ar": "احنا هَنروح البَحر بُكرة، لَكِننا مِش هَنعوم.",
   "arabizi": "E7na hanru7 elba7r bokra, lakenena mesh han3um.",
   "src": "2026-10-07"
  },
  {
   "id": "esc-346-voces-podem-sair-com-os-amigos-mas-voces-tem-que",
   "pt": "Vocês podem sair com os amigos, mas vocês têm que voltar para casa às 11:30.",
   "ar": "انتوا مُمكِن تُخرُجوا مَعَ أصحابكوا، لَكنُكوا لازِم تِرَوَحوا الساعة حِداشَر ونُص.",
   "arabizi": "Entu momken to5rogu ma3a as7abku, lakenoku lazem terau7u elsa3a 7edashar we nos.",
   "src": "2026-10-07"
  },
  {
   "id": "esc-347-amanha-e-o-dia-da-mae-eu-vou-comprar-um-presente",
   "pt": "Amanhã é o dia da mãe, eu vou comprar um presente para a minha mãe e vou visitá-la.",
   "ar": "بُكرة عيد الأم، هَشتِري هدية لِماما وهَزورها.",
   "arabizi": "Bokra 3id elom, hashtery hedeya le mama we hazorha.",
   "src": "2026-10-07"
  },
  {
   "id": "esc-348-ali-quer-visitar-me-na-minha-casa-nova",
   "pt": "Ali quer visitar-me na minha casa nova.",
   "ar": "علي عايِز يِزورني في بيتي الجديد.",
   "arabizi": "Ali 3aeiz yezorni fe beity elgedid.",
   "src": "2026-10-07"
  },
  {
   "id": "esc-349-eu-nao-quero-falar-com-o-ahmed-ele-nao-gosta-de",
   "pt": "Eu não quero falar com o Ahmed, ele não gosta de mim.",
   "ar": "أنا مِش عايِز اتكَلِم مَع أحمَد، هو مابيحِبِنيش.",
   "arabizi": "Ana mesh 3aeiz atkalem ma3a Ahmed, howa mabei7ebenish.",
   "src": "2026-10-07"
  },
  {
   "id": "esc-350-o-ahmed-e-muito-chato-eu-nao-gosto-dele",
   "pt": "O Ahmed é muito chato, eu não gosto dele.",
   "ar": "أحمَد رِخِم أوي، مِابَحِبُوش.",
   "arabizi": "Ahmed re5em awi, maba7ebush.",
   "src": "2026-10-07"
  },
  {
   "id": "esc-351-nos-vamos-visitar-te-m-depois-do-casamento",
   "pt": "Nós vamos visitar-te (m) depois do casamento.",
   "ar": "احنا هَنزورَك بَعَد الفَرح.",
   "arabizi": "E7na hanzorak ba3d elfara7.",
   "src": "2026-10-07"
  },
  {
   "id": "esc-352-nos-vamos-visitar-te-f-depois-do-casamento",
   "pt": "Nós vamos visitar-te (f) depois do casamento.",
   "ar": "احنا هَنزورِك بَعد الفَرَح.",
   "arabizi": "E7na hanzorek ba3d elfara7.",
   "src": "2026-10-07"
  },
  {
   "id": "esc-353-quando-voces-estao-livres-eu-quero-visitar-vos-p",
   "pt": "Quando vocês estão livres? Eu quero visitar-vos para conversarmos um pouco.",
   "ar": "انتوا فاضيين امتى؟ أنا عايز أزوركوا عشان نِتكَلِم شوية.",
   "arabizi": "Entu fadyin emta? Ana 3aeiz azorku 3ashan netkalem shewaya.",
   "src": "2026-10-07"
  },
  {
   "id": "esc-354-o-ahmed-e-a-mona-estao-muito-doentes-voce-tem-qu",
   "pt": "O Ahmed e a Mona estão muito doentes, você tem que visitá-los.",
   "ar": "أحمَد ومُنى تعبانين أوي، انت لازِم تِزورهُم.",
   "arabizi": "Ahmed we Mona ta3banin awi, enta lazem tezorhom.",
   "src": "2026-10-07"
  },
  {
   "id": "esc-355-estas-calcas-sao-muito-bonitas-eu-quero-compra-l",
   "pt": "Estas calças são muito bonitas, eu quero comprá-las.",
   "ar": "البَنطَلون ده حِلو أوي، عايِز أشتريه.",
   "arabizi": "Elbantalon da 7elw awi, 3aeiz ashterih.",
   "src": "2026-10-07"
  },
  {
   "id": "esc-356-este-bolo-e-muito-doce-nao-quero-come-lo",
   "pt": "Este bolo é muito doce, não quero comê-lo.",
   "ar": "الكيكة دي مِسَكَرة أوي، مِش عايِز آكُلها.",
   "arabizi": "Elkeka di messakara awi, mesh 3aeiz akolha.",
   "src": "2026-10-07"
  },
  {
   "id": "esc-357-este-cha-e-muito-doce-nao-quero-bebe-lo",
   "pt": "Este chá é muito doce, não quero bebê-lo.",
   "ar": "الشاي ده مِسَكَر أوي، مِش عايِز أشرَبُه.",
   "arabizi": "Elshay da messakar awi, mesh 3aeiz ashrabo.",
   "src": "2026-10-07"
  },
  {
   "id": "esc-358-a-minha-casa-e-muito-grande-eu-nao-gosto-de-a-ar",
   "pt": "A minha casa é muito grande, eu não gosto de a arrumar.",
   "ar": "بيتي كبير أوي، أنا مابحبش أروقُه.",
   "arabizi": "Beity kebir awi, ana maba7ebesh araua2o.",
   "src": "2026-10-09"
  },
  {
   "id": "esc-359-o-meu-quarto-esta-muito-baguncado-nao-o-quero-li",
   "pt": "O meu quarto está muito bagunçado, não o quero limpar.",
   "ar": "أوضتي مِفَركِشة أوي، مِش عايِز أنَضَفها.",
   "arabizi": "Odty mefarkesha awi, mesh 3aeiz anadafha.",
   "src": "2026-10-09"
  },
  {
   "id": "esc-360-esta-comida-e-muito-salgada-ahmed-nao-a-vai-come",
   "pt": "Esta comida é muito salgada, Ahmed não a vai comer.",
   "ar": "الأكل ده مِمَلَح أوي، أحمَد مِش هَياكُلُه.",
   "arabizi": "Elakl da memala7 awi, Ahmed mesh haiaklo.",
   "src": "2026-10-09"
  },
  {
   "id": "esc-361-faz-um-ano-que-eu-estudo-arabe",
   "pt": "Faz um ano que eu estudo árabe.",
   "ar": "بَقالي سنة بَذاكِر عربي.",
   "arabizi": "Ba2aly sana bazaker 3arabi.",
   "src": "2026-10-09"
  },
  {
   "id": "esc-362-faz-um-ano-que-eu-estudo-arabe-verbo-antes-de",
   "pt": "Faz um ano que eu estudo árabe (verbo antes de بَقال).",
   "ar": "أنا بَذاكِر عربي بقالي سنة.",
   "arabizi": "Ana bazaker 3arabi ba2aly sana.",
   "src": "2026-10-09"
  },
  {
   "id": "esc-363-faz-11-anos-que-moro-nos-emirados",
   "pt": "Faz 11 anos que moro nos Emirados.",
   "ar": "بَقالي حِداشَر سنة ساكِن في الامارات.",
   "arabizi": "Ba2aly 11 sana saken fe elemarat.",
   "src": "2026-10-09"
  },
  {
   "id": "esc-364-faz-2-meses-que-ele-e-casado",
   "pt": "Faz 2 meses que ele é casado.",
   "ar": "بَقالُه شَهرين مِتجَوِز.",
   "arabizi": "Ba2alo shahrein metgawez.",
   "src": "2026-10-09"
  },
  {
   "id": "esc-365-faz-uma-hora-que-ele-esta-a-falar-ao-telemovel",
   "pt": "Faz uma hora que ele está a falar ao telemóvel.",
   "ar": "بَقاله ساعة بيتكلم في الموبايل.",
   "arabizi": "Ba2alo sa3a bietkalem fe elmobile.",
   "src": "2026-10-09"
  },
  {
   "id": "esc-366-faz-30-minutos-que-ela-esta-a-fazer-o-cabelo",
   "pt": "Faz 30 minutos que ela está a fazer o cabelo.",
   "ar": "بَقالها نُص ساعة بِتِعمِل شَعرَها.",
   "arabizi": "Ba2alha nos sa3a bete3mal sha3raha.",
   "src": "2026-10-09"
  },
  {
   "id": "esc-367-faz-11-meses-que-ela-vai-a-academia",
   "pt": "Faz 11 meses que ela vai à academia.",
   "ar": "بَقالها حِداشَر شَهر بِتروح الجيم.",
   "arabizi": "Ba2alha 11 shahr betru7 elgym.",
   "src": "2026-10-09"
  },
  {
   "id": "esc-368-faz-quase-um-ano-que-ela-vai-a-academia",
   "pt": "Faz quase um ano que ela vai à academia.",
   "ar": "بَقالها سنة تَقريباً بتروح الجيم.",
   "arabizi": "Ba2alha sana ta2riban betru7 elgym.",
   "src": "2026-10-09"
  },
  {
   "id": "esc-369-faz-15-minutos-que-voce-m-esta-a-passar-a-roupa",
   "pt": "Faz 15 minutos que você (m) está a passar a roupa!",
   "ar": "بَقالَك خَمستاشَر دقيقة (رُبع ساعة) بِتِكوي الهدوم!",
   "arabizi": "Ba2alak rob3 sa3a betekwi elhodum!",
   "src": "2026-10-09"
  },
  {
   "id": "esc-370-faz-15-minutos-que-voce-f-esta-a-passar-a-roupa",
   "pt": "Faz 15 minutos que você (f) está a passar a roupa!",
   "ar": "بَقالِك رُبع ساعة بتكوي الهدوم!",
   "arabizi": "Ba2alek rob3 sa3a betekwi elhodum!",
   "src": "2026-10-09"
  },
  {
   "id": "esc-371-faz-2-horas-que-voce-m-esta-a-lavar-a-louca",
   "pt": "Faz 2 horas que você (m) está a lavar a louça!",
   "ar": "بَقالَك ساعتين بِتِغسِل المواعين!",
   "arabizi": "Ba2alak sa3tein bete8sel elmaua3in!",
   "src": "2026-10-09"
  },
  {
   "id": "esc-372-faz-2-horas-que-voce-f-esta-a-lavar-a-louca",
   "pt": "Faz 2 horas que você (f) está a lavar a louça!",
   "ar": "بَقالِك ساعتين بتغسلي المواعين!",
   "arabizi": "Ba2alek sa3tein bete8sely elmaua3in!",
   "src": "2026-10-09"
  },
  {
   "id": "esc-373-faz-dois-anos-que-moramos-juntos",
   "pt": "Faz dois anos que moramos juntos.",
   "ar": "بَقالنا سَنتين ساكنين مَعَ بَعض.",
   "arabizi": "Ba2alna sanatein saknin ma3a ba3d.",
   "src": "2026-10-09"
  },
  {
   "id": "esc-374-faz-dois-meses-que-estamos-a-aprender-espanhol",
   "pt": "Faz dois meses que estamos a aprender espanhol.",
   "ar": "بَقالنا شَهرين بِنِتعَلِم أسباني.",
   "arabizi": "Ba2alna shahrein benet3alem asbany.",
   "src": "2026-10-09"
  },
  {
   "id": "esc-375-faz-um-dia-que-voces-trabalham",
   "pt": "Faz um dia que vocês trabalham.",
   "ar": "بَقالكوا يوم بِتِشتَغلوا.",
   "arabizi": "Ba2alku youm beteshta8alu.",
   "src": "2026-10-09"
  },
  {
   "id": "esc-376-faz-duas-horas-que-voces-estao-a-preparar-o-almo",
   "pt": "Faz duas horas que vocês estão a preparar o almoço.",
   "ar": "بَقالكوا ساعتين بتجهزوا الغَدا.",
   "arabizi": "Ba2alku sa3tein betgahezu el8ada.",
   "src": "2026-10-09"
  },
  {
   "id": "esc-377-o-jantar-esta-pronto-faz-muito-tempo-que-eles-o",
   "pt": "O jantar está pronto? Faz muito tempo que eles o estão a preparar.",
   "ar": "العَشا جاهِز؟ بقالهم كتير بيجَهِزوه.",
   "arabizi": "El3asha gahez? Ba2alhom ketir beigahezu.",
   "src": "2026-10-09"
  },
  {
   "id": "esc-378-faz-muito-tempo-que-elas-estao-doentes",
   "pt": "Faz muito tempo que elas estão doentes.",
   "ar": "بقالهم كتير تَعبانين.",
   "arabizi": "Ba2alhom ketir ta3banin.",
   "src": "2026-10-09"
  },
  {
   "id": "esc-379-faz-quanto-tempo-que-voce-m-trabalha-nesta-empre",
   "pt": "Faz quanto tempo que você (m) trabalha nesta empresa?",
   "ar": "بَقالَك قَد ايه بِتِشتَغَل في الشركة دي؟",
   "arabizi": "Ba2alak 2ad eh beteshta8al fe elsherka di?",
   "src": "2026-10-09"
  },
  {
   "id": "esc-380-faz-quanto-tempo-que-voce-f-trabalha-nesta-empre",
   "pt": "Faz quanto tempo que você (f) trabalha nesta empresa?",
   "ar": "بَقالِك قَد ايه بتشتغلي في الشركة دي؟",
   "arabizi": "Ba2alek 2ad eh beteshta8aly fe elsherka di?",
   "src": "2026-10-09"
  },
  {
   "id": "esc-381-faz-quanto-tempo-que-voces-moram-nesta-cidade",
   "pt": "Faz quanto tempo que vocês moram nesta cidade?",
   "ar": "بَقالكوا قَد ايه ساكنين في المَدينة دي؟",
   "arabizi": "Ba2alku 2ad eh saknin fe elmadina di?",
   "src": "2026-10-09"
  },
  {
   "id": "esc-382-faz-quanto-tempo-que-voce-m-esta-a-aprender-a-da",
   "pt": "Faz quanto tempo que você (m) está a aprender a dançar?",
   "ar": "بقالَك قَد ايه بِتتعَلِم تُرقُص؟",
   "arabizi": "Ba2alak 2ad eh betet3alem tor2os?",
   "src": "2026-10-09"
  },
  {
   "id": "esc-383-faz-quanto-tempo-que-voce-f-esta-a-aprender-a-da",
   "pt": "Faz quanto tempo que você (f) está a aprender a dançar?",
   "ar": "بقالك قد ايه بتتعلمي ترقصي؟",
   "arabizi": "Ba2alek 2ad eh betet3alemy tor2osy?",
   "src": "2026-10-09"
  },
  {
   "id": "esc-384-eu-quero-encontrar-a-minha-irma-na-sexta-feira",
   "pt": "Eu quero encontrar a minha irmã na sexta-feira.",
   "ar": "أنا عايز أقابِل أُختي يوم الجُمعة.",
   "arabizi": "Ana 3aeiz a2abel o5ty youm elgom3a.",
   "src": "2026-10-14"
  },
  {
   "id": "esc-385-eu-sempre-encontro-o-meu-irmao-na-casa-dos-pais",
   "pt": "Eu sempre encontro o meu irmão na casa dos pais.",
   "ar": "أنا دايماً بَقابِل أخويا في بيت ماما وبابا.",
   "arabizi": "Ana dayiman ba2abel a5oya fe beit mama we baba.",
   "src": "2026-10-14"
  },
  {
   "id": "esc-386-ahmed-tem-dor-de-cabeca-ele-nao-quer-encontrar-n",
   "pt": "Ahmed tem dor de cabeça, ele não quer encontrar ninguém hoje.",
   "ar": "أحمَد مِصدَع، مش عايز يقابِل حَد النهاردة.",
   "arabizi": "Ahmed mesada3, mesh 3aeiz ye2abel 7ad enaharda.",
   "src": "2026-10-14"
  },
  {
   "id": "esc-387-mona-quer-encontrar-me-amanha-depois-do-trabalho",
   "pt": "Mona quer encontrar-me amanhã depois do trabalho para irmos fazer compras.",
   "ar": "مُنى عايزة تقابلني بُكرة بعد الشُغل عشان نِروح نِعمِل شوبينج.",
   "arabizi": "Mona 3aeiza te2abelni bokra ba3d elsho8l 3ashan neru7 ne3mel shopping.",
   "src": "2026-10-14"
  },
  {
   "id": "esc-388-porque-voce-m-me-quer-encontrar-ta-tudo-bem",
   "pt": "Porque você (m) me quer encontrar? Tá tudo bem?",
   "ar": "انتَ عايز تقابلني ليه؟ انتَ كويس؟",
   "arabizi": "Enta 3aeiz te2abelni leh? Enta kowayes?",
   "src": "2026-10-14"
  },
  {
   "id": "esc-389-porque-voce-f-me-quer-encontrar-ta-tudo-bem",
   "pt": "Porque você (f) me quer encontrar? Tá tudo bem?",
   "ar": "انتي عايزة تقابليني ليه؟ انتي كويسة؟",
   "arabizi": "Enty 3aeiza te2abelini leh? Enty kowayessa?",
   "src": "2026-10-14"
  },
  {
   "id": "esc-390-nos-vamos-encontrar-vos-perto-do-supermercado",
   "pt": "Nós vamos encontrar-vos perto do supermercado.",
   "ar": "احنا هَنقابلكوا عَند السوبرماركت.",
   "arabizi": "E7na han2abelku 3and elsupermarket.",
   "src": "2026-10-14"
  },
  {
   "id": "esc-391-voces-vao-encontrar-o-gerente-onde",
   "pt": "Vocês vão encontrar o gerente onde?",
   "ar": "انتوا هَتقابلوا المُدير فين؟",
   "arabizi": "Entu hat2ablu elmodir fen?",
   "src": "2026-10-14"
  },
  {
   "id": "esc-392-nos-vamos-encontra-lo-neste-restaurante",
   "pt": "Nós vamos encontrá-lo neste restaurante.",
   "ar": "احنا هَنقابلُه في المَطعَم ده.",
   "arabizi": "E7na han2ablu fe elmat3am da.",
   "src": "2026-10-14"
  },
  {
   "id": "esc-393-eles-sempre-encontram-a-familia-toda-na-casa-dos",
   "pt": "Eles sempre encontram a família toda na casa dos avós.",
   "ar": "هُما دايماً بيقابلوا كُل العيلة في بيت تيتة وجدو.",
   "arabizi": "Homa dayiman bei2ablu kol el3eila fe beit teta we gedo.",
   "src": "2026-10-14"
  },
  {
   "id": "esc-394-eu-quero-encontrar-te-m-esta-semana-quando-voce",
   "pt": "Eu quero encontrar-te (m) esta semana! Quando você está livre?",
   "ar": "أنا عايِز أقابلَك الأسبوع ده! انت فاضي امتى؟",
   "arabizi": "Ana 3aeiz a2ablak elosbu3 da! Enta fady emta?",
   "src": "2026-10-14"
  },
  {
   "id": "esc-395-eu-quero-encontrar-te-f-esta-semana-quando-voce",
   "pt": "Eu quero encontrar-te (f) esta semana! Quando você está livre?",
   "ar": "أنا عايز أقابلِك الأسبوع ده! انتي فاضية امتى؟",
   "arabizi": "Ana 3aeiz a2ablek elosbu3 da! Enty fadya emta?",
   "src": "2026-10-14"
  },
  {
   "id": "esc-396-eu-e-o-hossam-estamos-a-fazer-dieta-por-isso-enc",
   "pt": "Eu e o Hossam estamos a fazer dieta, por isso encontro-o todos os dias no parque para correr um pouco e fazer exercício.",
   "ar": "أنا وحسام بِنِعمِل دايت (رجيم)، عشان كدة، بَقابلُه كُل يوم في الجنينة عشان نِجري شوية ونِعمَل (نِلعَب) رياضة.",
   "arabizi": "Ana we Hossam bene3mel diet, 3ashan keda ba2ablo kol youm fe elgenina 3ashan negry shewaya we ne3mel (nel3ab) reyada.",
   "src": "2026-10-16"
  },
  {
   "id": "esc-397-mohamed-trabalha-muito-durante-a-semana-apesar-d",
   "pt": "Mohamed trabalha muito durante a semana; apesar disso, ele sempre encontra a noiva dele e janta com ela na quinta-feira.",
   "ar": "محمد بيشتَغَل كتير في الأسبوع، رغم كدة دايماً بيقابِل خطيبتُه وبيتعَشى معاها يوم الخَميس.",
   "arabizi": "Mohamed bieshta8al ketir fe elosbu3, ra8m keda dayiman bei2abel 5atebto we biet3asha ma3aha youm el5amis.",
   "src": "2026-10-16"
  },
  {
   "id": "esc-398-juliana-esta-a-aprender-arabe-por-isso-quando-en",
   "pt": "Juliana está a aprender árabe, por isso, quando encontra os seus amigos egípcios, ela fala árabe com eles.",
   "ar": "جوليانا بِتتعلم عربي، عشان كدة لَمّا بِتقابِل أصحابها المصريين، بتتكلم عربي معاهُم.",
   "arabizi": "Juliana betet3alem 3arabi 3ashan keda lamma bet2abel as7abha elmasreiin betetkalem 3arabi ma3ahom.",
   "src": "2026-10-16"
  },
  {
   "id": "esc-399-eu-vou-ajudar-te-m",
   "pt": "Eu vou ajudar-te (m).",
   "ar": "أنا هَساعدَك.",
   "arabizi": "Ana hassa3dak.",
   "src": "2026-10-16"
  },
  {
   "id": "esc-400-eu-vou-ajudar-te-f",
   "pt": "Eu vou ajudar-te (f).",
   "ar": "أنا هَساعدِك.",
   "arabizi": "Ana hassa3dek.",
   "src": "2026-10-16"
  },
  {
   "id": "esc-401-ahmed-nunca-me-ajuda-apesar-disso-eu-vou-ajuda-l",
   "pt": "Ahmed nunca me ajuda; apesar disso, eu vou ajudá-lo amanhã no projeto.",
   "ar": "أحمَد مابيساعِدنيش أبداً، رَغم كدة، هَساعدُه بكرة في المشروع.",
   "arabizi": "Ahmed mabeisa3ednish abadan, ra8m keda, hasa3do bokra fe elmashru3.",
   "src": "2026-10-16"
  },
  {
   "id": "esc-402-maria-sempre-me-ajuda-quando-falo-com-ela-eu-gos",
   "pt": "Maria sempre me ajuda quando falo com ela, eu gosto muito dela!",
   "ar": "ماريا دايماً بتساعِدني لَما بَتكَلم مَعاها، بحبها أوي.",
   "arabizi": "Maria dayiman betsa3edny lama batkalem ma3aha, ba7ebaha awi.",
   "src": "2026-10-16"
  },
  {
   "id": "esc-403-voces-tem-que-ajudar-os-idosos-na-rua",
   "pt": "Vocês têm que ajudar os idosos na rua.",
   "ar": "انتوا لازِم تِساعدوا الناس الكبيرة في الشارِع.",
   "arabizi": "Entu lazem tesa3du elnas elkebira fe elshare3.",
   "src": "2026-10-16"
  },
  {
   "id": "esc-404-elas-ajudam-todo-o-mundo-sao-muito-gentis",
   "pt": "Elas ajudam todo o mundo, são muito gentis.",
   "ar": "هُما بيساعدوا كُل الناس، هُما لُطاف أوي.",
   "arabizi": "Homa beisa3du kol elnas, homa lotaf awi.",
   "src": "2026-10-16"
  },
  {
   "id": "esc-405-nos-nao-queremos-ajudar-o-karim-porque-ele-e-mui",
   "pt": "Nós não queremos ajudar o Karim, porque ele é muito chato e não gosta de ajudar ninguém!",
   "ar": "احنا مِش عايزين نِساعِد كريم، لأُنه رخم أوي ومابيحِبِش يِساعِد حَد.",
   "arabizi": "E7na mesh 3aeizin nessa3d Karim le2ano re5em awi we mabei7ebesh yessa3d 7ad.",
   "src": "2026-10-16"
  },
  {
   "id": "esc-406-faz-duas-horas-que-estou-a-tentar-mandar-uma-men",
   "pt": "Faz duas horas que estou a tentar mandar uma mensagem para a minha tia (irmã do pai), mas não há internet.",
   "ar": "بَقالي ساعتين بَحاوِل أبعَت ماسدج (رِسالة) لِعمتي، بس مافيش نِت.",
   "arabizi": "Ba2aly sa3ten ba7auel ab3at ressala le3amety bas mafish net.",
   "src": "2026-10-16"
  },
  {
   "id": "esc-407-nos-vamos-tentar-arrumar-a-casa-toda-porque-a-mi",
   "pt": "Nós vamos tentar arrumar a casa toda, porque a minha mãe vai me visitar no fim de semana.",
   "ar": "احنا هَنحاوِل نِرَوَق كل البيت (البيت كلُه)، عشان ماما هتزورني في الأجازة.",
   "arabizi": "E7na han7auel neraua2 kol elbeit (elbeit kolo) 3ashan mama hatzorni fe elagaza.",
   "src": "2026-10-16"
  },
  {
   "id": "esc-408-karim-esta-a-tentar-falar-com-a-noiva-dele-mas-e",
   "pt": "Karim está a tentar falar com a noiva dele, mas ela está chateada com ele.",
   "ar": "كريم بيحاوِل يتكلم مَعَ خطيبتُه، لَكنَها متضايقة مِنُه.",
   "arabizi": "Karim bei7auel yetkalem ma3a 5atebto, lakenaha metday2a meno.",
   "src": "2026-10-16"
  },
  {
   "id": "esc-409-eles-nao-querem-tentar-de-novo",
   "pt": "Eles não querem tentar de novo.",
   "ar": "هُما مِش عايزين يحاولوا تاني.",
   "arabizi": "Homa mesh 3aeizin ye7aulu tany.",
   "src": "2026-10-16"
  },
  {
   "id": "esc-410-voce-tem-que-tentar-encontrar-a-maha-e-ajuda-la",
   "pt": "Você tem que tentar encontrar a Maha e ajudá-la na tarefa (TPC).",
   "ar": "انتَ لازِم تِحاوِل تقابِل مها وتِساعِدها في الواجِب.",
   "arabizi": "Enta lazem te7auel te2abel Maha we tesa3edha fe elwageb.",
   "src": "2026-10-16"
  },
  {
   "id": "esc-411-eu-preciso-encontrar-o-meu-chefe-para-falar-com",
   "pt": "Eu preciso encontrar o meu chefe para falar com ele sobre o novo projeto.",
   "ar": "أنا مِحتاج أقابِل مُديري عشان أتكَلم مَعاه (نِتكَلِم) عَن المَشروع الجِديد.",
   "arabizi": "Ana mei7tag a2abel modiry 3ashan atakalem ma3ah (netkalem) 3an elmashru3 elgedid.",
   "src": "2026-10-21"
  },
  {
   "id": "esc-412-nos-vamos-a-casa-do-hesham-porque-o-queremos-aju",
   "pt": "Nós vamos à casa do Hesham porque o queremos ajudar na cozinha.",
   "ar": "احنا هَنروح بيت هِشام عشان عايزين نِساعدُه في المَطبَخ.",
   "arabizi": "E7na hanru7 beit Hesham 3ashan 3aeizin nesa3do fe elmatba5.",
   "src": "2026-10-21"
  },
  {
   "id": "esc-413-voce-m-tem-que-tentar-um-pouco-nada-e-facil",
   "pt": "Você (m) tem que tentar um pouco! Nada é fácil!",
   "ar": "انتَ لازِم تِحاوِل شوية! مافيش حاجة سهلة!",
   "arabizi": "Enta lazem te7auel shewaya! Mafish 7aga sahla!",
   "src": "2026-10-21"
  },
  {
   "id": "esc-414-voce-f-tem-que-tentar-um-pouco-nada-e-facil",
   "pt": "Você (f) tem que tentar um pouco! Nada é fácil!",
   "ar": "انتي لازِم تحاولي شوية! مافيش حاجة سَهلة!",
   "arabizi": "Enty lazem te7auly shewaya! Mafish 7aga sahla!",
   "src": "2026-10-21"
  },
  {
   "id": "esc-415-onde-voce-m-esta-faz-uma-hora-que-te-estou-a-tel",
   "pt": "Onde você (m) está?? Faz uma hora que te estou a telefonar!",
   "ar": "انتَ فين؟؟ بَقالي ساعة بَتِصِل بيك!",
   "arabizi": "Enta fen?? Ba2aly sa3a batessel bik!",
   "src": "2026-10-21"
  },
  {
   "id": "esc-416-onde-voce-f-esta-faz-uma-hora-que-te-estou-a-tel",
   "pt": "Onde você (f) está?? Faz uma hora que te estou a telefonar!",
   "ar": "انتي فين؟؟ بقالي ساعة بتصِل بيكي!",
   "arabizi": "Enty fen?? Ba2aly sa3a batessel biki!",
   "src": "2026-10-21"
  },
  {
   "id": "esc-417-ahmed-esta-a-ligar-para-o-gerente-porque-ha-um-p",
   "pt": "Ahmed está a ligar para o gerente, porque há um problema grande no trabalho.",
   "ar": "أحمَد بيتصِل بِالمُدير، عشان فيه مُشكِلة كبيرة في الشُغل.",
   "arabizi": "Ahmed bietessel belmodir 3ashan fi moshkela kebira fe elsho8l.",
   "src": "2026-10-21"
  },
  {
   "id": "esc-418-ela-quer-ligar-para-a-tia-materna-dela-mas-nao-t",
   "pt": "Ela quer ligar para a tia (materna) dela, mas não tem crédito.",
   "ar": "هي عايزة تتصِل بِخالِتها، بَس ماعندَهاش رَصيد.",
   "arabizi": "Heya 3aiza tetessel be5aletha bas ma3andahash rasid.",
   "src": "2026-10-21"
  },
  {
   "id": "esc-419-quando-voce-m-vai-telefonar-para-ela-hoje-e-o-an",
   "pt": "Quando você (m) vai telefonar para ela? Hoje é o aniversário dela.",
   "ar": "انتَ هتِتصِل بيها امتى؟ النهاردة عيد ميلادها.",
   "arabizi": "Enta hatetessel biha emta? Elnaharda 3id miladha.",
   "src": "2026-10-21"
  },
  {
   "id": "esc-420-quando-voce-f-vai-telefonar-para-ela-hoje-e-o-an",
   "pt": "Quando você (f) vai telefonar para ela? Hoje é o aniversário dela.",
   "ar": "انتي هتتصلي بيها امتى؟ النهاردة عيد ميلادها.",
   "arabizi": "Enty hatetesseli biha emta? Elnaharda 3id miladha.",
   "src": "2026-10-21"
  },
  {
   "id": "esc-421-eles-telefonam-me-varias-vezes-por-dia",
   "pt": "Eles telefonam-me várias vezes por dia.",
   "ar": "هُما بيتصلوا بيا كذا مرة في اليوم.",
   "arabizi": "Homa bietesselu beya kaza marra fe elyoum.",
   "src": "2026-10-21"
  },
  {
   "id": "esc-422-voces-podem-telefonar-me-nao-tenho-credito",
   "pt": "Vocês podem telefonar-me? Não tenho crédito.",
   "ar": "مُمكِن تتصلوا بيا؟ ماعنديش رَصيد.",
   "arabizi": "Momken teteselu beya? Ma3andish rasid.",
   "src": "2026-10-21"
  },
  {
   "id": "esc-423-tenho-muitas-saudades-tuas-m-quero-ver-te-em-bre",
   "pt": "Tenho muitas saudades tuas (m)! Quero ver-te em breve!",
   "ar": "وحشتني أوي! عايِز أشوفَك قريب!",
   "arabizi": "Wa7ashteni awi! 3ayez ashufak orayeb!",
   "src": "2026-10-21"
  },
  {
   "id": "esc-424-tenho-muitas-saudades-tuas-f-quero-ver-te-em-bre",
   "pt": "Tenho muitas saudades tuas (f)! Quero ver-te em breve!",
   "ar": "وحشتيني أوي! عايز أشوفِك قريب!",
   "arabizi": "Wa7ashtini awi! 3ayez ashufek orayeb!",
   "src": "2026-10-21"
  },
  {
   "id": "esc-425-mazen-gosta-de-ver-os-videos-desse-youtuber",
   "pt": "Mazen gosta de ver os vídeos desse youtuber.",
   "ar": "مازِن بيحِب يشوف فيديوهات اليوتيوبر ده.",
   "arabizi": "Mazen bei7eb yeshuf vediohat elyoutuber da.",
   "src": "2026-10-21"
  },
  {
   "id": "esc-426-sara-nao-gosta-de-ver-filmes-de-terror",
   "pt": "Sara não gosta de ver filmes de terror.",
   "ar": "سارة مابتحِبِش تشوف أفلام رَعب.",
   "arabizi": "Sara mabet7ebesh teshuf aflam ro3b.",
   "src": "2026-10-21"
  },
  {
   "id": "esc-427-voce-tem-que-buscar-o-seu-sobrinho-filho-do-irma",
   "pt": "Você tem que buscar o seu sobrinho (filho do irmão) na escola para vê-lo.",
   "ar": "لازِم تاخُد ابن أخوك مِن المَدرسة عشان تشوفه.",
   "arabizi": "Lazem ta5od ebn a5ok men elmadrassa 3ashan teshofu.",
   "src": "2026-10-21"
  },
  {
   "id": "esc-428-nos-nao-vemos-enxergamos-bem-sem-os-oculos",
   "pt": "Nós não vemos (enxergamos) bem sem os óculos.",
   "ar": "احنا مابنشوفش كويس مِن غير النضارة.",
   "arabizi": "E7na mabenshofsh kowayes men 8eir elnadara.",
   "src": "2026-10-21"
  },
  {
   "id": "esc-430-eu-sei-falar-portugues-mas-nao-sei-dizer-esta-palavr",
   "pt": "Eu sei falar português, mas eu não sei dizer esta palavra.",
   "ar": "أنا بَعرَف أتكلم برتغالي، بس أنا مابعرفش أقول الكلمة دي.",
   "arabizi": "Ana ba3raf atkalem borto8aly bas ana maba3rafsh a2ul elkelma di.",
   "src": "2026-10-23"
  },
  {
   "id": "esc-431-ele-diz-tudo-ao-seu-amigo-alaa",
   "pt": "Ele diz tudo ao seu amigo Alaa.",
   "ar": "هو بيقول كُل حاجة لِصاحبُه عَلاء.",
   "arabizi": "Howa bei2ul kol 7aga lesa7bo Alaa.",
   "src": "2026-10-23"
  },
  {
   "id": "esc-432-ela-tem-que-dizer-isto-ao-gerente",
   "pt": "Ela tem que dizer isto ao gerente.",
   "ar": "هي لازِم تقول ده/كدة لِلمُدير.",
   "arabizi": "Heya lazem te2ul da/keda lelmodir.",
   "src": "2026-10-23"
  },
  {
   "id": "esc-433-quando-voce-m-vai-dizer-a-verdade-aos-pais",
   "pt": "Quando você (m) vai dizer a verdade aos pais?",
   "ar": "انتَ هَتقول الحقيقة لِمامتَك وباباك امتى؟",
   "arabizi": "Enta hat2ul el7a2i2a lemamtak we babak emta?",
   "src": "2026-10-23"
  },
  {
   "id": "esc-434-quando-voce-f-vai-dizer-a-verdade-aos-pais",
   "pt": "Quando você (f) vai dizer a verdade aos pais?",
   "ar": "انتي هتقولي الحقيقة لِمامتِك وباباكي امتى؟",
   "arabizi": "Enty hat2uly el7a2i2a lemamtek we babaky emta?",
   "src": "2026-10-23"
  },
  {
   "id": "esc-435-nos-nao-vamos-dizer-nada-a-ninguem",
   "pt": "Nós não vamos dizer nada a ninguém.",
   "ar": "احنا مش هَنقول حاجة لِحَد.",
   "arabizi": "E7na mesh han2ul 7aga le7ad.",
   "src": "2026-10-23"
  },
  {
   "id": "esc-436-voces-precisam-falar-com-eles-para-dizer-lhes-a-verd",
   "pt": "Vocês precisam falar com eles para dizer-lhes a verdade.",
   "ar": "انتوا مِحتاجين تتكلموا معاهُم عشان تقولوا لهم الحقيقة.",
   "arabizi": "Entu mei7taguin tetkalemu ma3ahom 3ashan te2ulo lohom el7a2i2a.",
   "src": "2026-10-23"
  },
  {
   "id": "esc-437-elas-nao-querem-dizer-nada-a-mae",
   "pt": "Elas não querem dizer nada à mãe.",
   "ar": "هُما مش عايزين يقولوا حاجة لمامِتهُم.",
   "arabizi": "Homa mesh 3aeizin ye2ulu 7aga lemamethom.",
   "src": "2026-10-23"
  },
  {
   "id": "esc-438-hoje-precisamos-fazer-muitas-coisas-mas-nao-temos-mu",
   "pt": "Hoje nós precisamos fazer muitas coisas, mas não temos muito tempo, mas a gente vai tentar!",
   "ar": "النهاردة احنا محتاجين نِعمِل حاجات كتير بَس ماعندناش وقت كتير، بَس هَنحاوِل!",
   "arabizi": "Elnaharda e7na me7taguin ne3mel 7agat ketir bas ma3andenash wa2t ketir, bas han7auel!",
   "src": "2026-10-23"
  },
  {
   "id": "esc-439-de-manha-precisamos-sair-para-encontrar-ahmed-e-fati",
   "pt": "De manhã, precisamos sair para encontrar Ahmed e Fátima para conversar com eles sobre um problema no trabalho.",
   "ar": "الصُبح مِحتاجين نخرج عشان نِقابِل أحمد وفاطمة عشان نتكلم معاهم عَن مشكلة في الشُغل.",
   "arabizi": "Elsop7 me7taguin no5rog 3ashan ne2abel Ahmed we Fatima 3ashan netkalem ma3ahom 3an moshkela fe elsho8l.",
   "src": "2026-10-23"
  },
  {
   "id": "esc-440-eles-trabalham-conosco-na-empresa-e-sempre-nos-ajuda",
   "pt": "Eles trabalham conosco na empresa e sempre nos ajudam.",
   "ar": "هما بيشتغلوا معانا في الشركة ودايماً بيساعدونا.",
   "arabizi": "Homa bieshta8alu ma3ana fe elsherka we dayiman beisa3duna.",
   "src": "2026-10-23"
  },
  {
   "id": "esc-441-de-tarde-precisamos-visitar-nosso-primo-hassan",
   "pt": "De tarde, nós precisamos visitar o nosso primo (filho da tia materna) Hassan, ele está doente faz alguns dias.",
   "ar": "بعد الضُهر، محتاجين نزور ابن خالتنا حسن، هو تعبان بَقالُه كذا يوم.",
   "arabizi": "Ba3d eldohr, mei7taguin nezur ebn 5aletna Hassan, howa ta3ban ba2alo kaza youm.",
   "src": "2026-10-23"
  },
  {
   "id": "esc-442-ele-mora-noutra-cidade-um-pouco-longe",
   "pt": "Ele mora noutra cidade um pouco longe, e precisamos ir e voltar cedo, porque à noite temos de encontrar Amir.",
   "ar": "هو ساكن في مدينة تانية بعيدة شوية، ومحتاجين نروح ونِرَوَح بدري عشان بليل لازِم نقابِل أمير.",
   "arabizi": "Howa saken fe madina tanya be3ida shewaya we me7taguin neru7 we neraua7 badry 3ashan beleil lazem ne2abel Amir.",
   "src": "2026-10-23"
  },
  {
   "id": "esc-443-amir-e-engenheiro-e-esta-fazendo-um-projeto-novo",
   "pt": "Amir é engenheiro e ele está fazendo um projeto novo na empresa.",
   "ar": "أمير مُهَندِس وبيعمِل مشروع جديد في الشركة.",
   "arabizi": "Amir mohandes we bie3mel mashru3 gedid fe elsherka.",
   "src": "2026-10-23"
  },
  {
   "id": "esc-444-posso-sair-com-os-meus-amigos-hoje-a-noite",
   "pt": "Posso sair com os meus amigos hoje à noite?",
   "ar": "مُمكِن أخرُج مَعَ أصحابي النهاردة بِليل؟",
   "arabizi": "Momken a5rog ma3a as7aby elnaharda beleil?",
   "src": "2026-11-06"
  },
  {
   "id": "esc-445-posso-brincar-contigo-m-f",
   "pt": "Posso brincar contigo? (m / f)",
   "ar": "مُمكِن ألعَب مَعاك (معاكي)؟",
   "arabizi": "Momken al3ab ma3ak (ma3aki)?",
   "src": "2026-11-06"
  },
  {
   "id": "esc-446-voce-pode-telefonar-para-o-ali-m",
   "pt": "Você pode telefonar para o Ali? (m)",
   "ar": "مُمكِن تِتِصِل بِعلي؟",
   "arabizi": "Momken tetessel be Ali?",
   "src": "2026-11-06"
  },
  {
   "id": "esc-447-voce-pode-telefonar-para-o-ali-f",
   "pt": "Você pode telefonar para o Ali? (f)",
   "ar": "مُمكِن تتصلي بعلي؟",
   "arabizi": "Momken tetessely be Ali?",
   "src": "2026-11-06"
  },
  {
   "id": "esc-448-voces-podem-limpar-o-escritorio-por-favor",
   "pt": "Vocês podem limpar o escritório, por favor?",
   "ar": "مُمكِن تِنَضفوا المَكتَب، لو سمَحتوا؟",
   "arabizi": "Momken tenadafu elmaktab, lau sama7tu?",
   "src": "2026-11-06"
  },
  {
   "id": "esc-449-eu-talvez-telefone-para-voce-amanha-m-f",
   "pt": "Eu talvez telefone para você amanhã. (m / f)",
   "ar": "أنا مُمكِن أتِصِل بيك (بيكي) بُكرة.",
   "arabizi": "Ana momken atessel bik (biki) bokra.",
   "src": "2026-11-06"
  },
  {
   "id": "esc-450-ele-talvez-fale-com-o-gerente-sobre-o-novo-projeto",
   "pt": "Ele talvez fale com o gerente sobre o novo projeto na reunião.",
   "ar": "هو ممكن يتكلم مَعَ المُدير عَن المَشروع الجديد في الميتينج (الإجتِماع).",
   "arabizi": "Howa momken yetkalem ma3a elmodir 3an elmashru3 elgedid fe elmeeting (elegtema3).",
   "src": "2026-11-06"
  },
  {
   "id": "esc-451-a-sara-talvez-compre-um-carro-novo-no-fim-do-ano",
   "pt": "A Sara talvez compre um carro novo no fim do ano.",
   "ar": "سارة مُمكِن تِشتِري عربية جديدة آخِر السنة.",
   "arabizi": "Sara momken teshtery 3arabeya gedida a5er elsana.",
   "src": "2026-11-06"
  },
  {
   "id": "esc-452-voce-talvez-chegue-atrasado-a-escola-m",
   "pt": "Você talvez chegue atrasado à escola. (m)",
   "ar": "انت مُمكِن تِوصَل متأخر المدرسة.",
   "arabizi": "Enta momken teussal met2a5ar elmadrassa.",
   "src": "2026-11-06"
  },
  {
   "id": "esc-453-voce-talvez-chegue-atrasada-a-escola-f",
   "pt": "Você talvez chegue atrasada à escola. (f)",
   "ar": "انتي ممكن توصلي متأخر المدرسة.",
   "arabizi": "Enty momken teussaly met2a5ar elmadrassa.",
   "src": "2026-11-06"
  },
  {
   "id": "esc-454-nos-talvez-leiamos-uma-historia-para-as-criancas-h",
   "pt": "Nós talvez leiamos uma história para as crianças hoje à noite.",
   "ar": "احنا مُمكِن نِقرا قصة لِلأولاد النهاردة بليل.",
   "arabizi": "E7na momken ne2ra qessa lelaulad elnaharda beleil.",
   "src": "2026-11-06"
  },
  {
   "id": "esc-455-eles-talvez-nao-digam-a-verdade-para-o-pai-deles",
   "pt": "Eles talvez não digam a verdade para o pai deles.",
   "ar": "هُما مُمكِن مايقولوش الحقيقة لباباهُم.",
   "arabizi": "Homa momken may2olush el7a2i2a lebabahom.",
   "src": "2026-11-06"
  },
  {
   "id": "esc-456-voces-talvez-encontrem-o-youssef-no-barbeiro",
   "pt": "Vocês talvez encontrem o Youssef no barbeiro.",
   "ar": "انتوا مُمكِن تِقابلوا يوسف في الحَلاق.",
   "arabizi": "Entu momken te2ablu Youssef fe el7ala2.",
   "src": "2026-11-06"
  },
  {
   "id": "esc-457-eu-talvez-veja-o-filme-novo-no-cinema-com-o-meu-ma",
   "pt": "Eu talvez veja o filme novo no cinema com o meu marido.",
   "ar": "أنا يِمكِن أتفرج عَلى الفيلم الجديد في السينما مع جوزي.",
   "arabizi": "Ana yemken atfarag 3ala elfelm elgedid fe elcinema ma3a gozy.",
   "src": "2026-11-06"
  },
  {
   "id": "esc-458-ele-talvez-tente-de-novo",
   "pt": "Ele talvez tente de novo.",
   "ar": "هُوَ يِمكِن يحاوِل تاني.",
   "arabizi": "Howa yemken ye7auel tany.",
   "src": "2026-11-06"
  },
  {
   "id": "esc-459-ela-talvez-ajude-o-ali-nao-sei",
   "pt": "Ela talvez ajude o Ali, não sei.",
   "ar": "هي يِمكِن تِساعِد عَلي، ماعرفش (مش عارِف).",
   "arabizi": "Heya yemken tessa3ed Ali, ma3rafsh (mesh 3aref).",
   "src": "2026-11-06"
  },
  {
   "id": "esc-460-nos-talvez-passemos-a-roupa-antes-de-dormir",
   "pt": "Nós talvez passemos a roupa antes de dormir.",
   "ar": "احنا يِمكِن نكوي الهدوم قَبل ما نِنام.",
   "arabizi": "E7na yemken nekwi elhodum 2abl ma nenam.",
   "src": "2026-11-06"
  },
  {
   "id": "esc-461-voce-talvez-viaje-na-proxima-semana-m",
   "pt": "Você talvez viaje na próxima semana. (m)",
   "ar": "انتَ يِمكن تِسافِر الأسبوع الجاي.",
   "arabizi": "Enta yemken tessafer elosbu3 elgay.",
   "src": "2026-11-06"
  },
  {
   "id": "esc-462-voce-talvez-viaje-na-proxima-semana-f",
   "pt": "Você talvez viaje na próxima semana. (f)",
   "ar": "انتي يمكِن تسافري الأسبوع الجاي.",
   "arabizi": "Enty yemken tessafry elosbu3 elgay.",
   "src": "2026-11-06"
  },
  {
   "id": "esc-463-eles-talvez-voltem-para-o-brasil-em-2028",
   "pt": "Eles talvez voltem para o Brasil em 2028.",
   "ar": "هُما يِمكِن يرجعوا البرازيل في 2028.",
   "arabizi": "Homa yemken yerga3u elbarazil fe 2028.",
   "src": "2026-11-06"
  },
  {
   "id": "esc-464-eu-talvez-te-visite-no-fim-de-semana-m-f",
   "pt": "Eu talvez te visite no fim de semana. (m / f)",
   "ar": "أنا احتِمال أزورَك (أزورِك) في الأجازة.",
   "arabizi": "Ana e7temal azurak (azurek) fe elagaza.",
   "src": "2026-11-06"
  },
  {
   "id": "esc-465-ele-talvez-aprenda-portugues-no-ano-que-vem-para-f",
   "pt": "Ele talvez aprenda português no ano que vem para falar com a noiva dele.",
   "ar": "هو احتِمال يتعلم برتغالي السنة الجاية عشان يتكلم مَعَ خطيبتُه.",
   "arabizi": "Howa e7temal yet3alem borto8aly elsana elgaya 3ashan yetkalem ma3a 5atebto.",
   "src": "2026-11-06"
  },
  {
   "id": "esc-466-ela-talvez-aprenda-espanhol-no-ano-que-vem",
   "pt": "Ela talvez aprenda espanhol no ano que vem.",
   "ar": "هي احتمال تتعلم أسباني السنة الجاية.",
   "arabizi": "Heya e7temal tet3alem asbany elsana elgaya.",
   "src": "2026-11-06"
  },
  {
   "id": "esc-467-voce-talvez-ande-muito-na-arabia-saudita-m",
   "pt": "Você talvez ande muito na Arábia Saudita. (m)",
   "ar": "انت احتِمال تمشي كتير في السعودية.",
   "arabizi": "Enta e7temal temshy ketir fe elso3odeya.",
   "src": "2026-11-06"
  },
  {
   "id": "esc-468-voce-talvez-ande-muito-na-arabia-saudita-f",
   "pt": "Você talvez ande muito na Arábia Saudita. (f)",
   "ar": "انتي احتِمال تمشي كتير في السعودية.",
   "arabizi": "Enty e7temal temshy ketir fe elso3odeya.",
   "src": "2026-11-06"
  },
  {
   "id": "esc-469-nos-talvez-corramos-3-km-amanha",
   "pt": "Nós talvez corramos 3 km amanhã.",
   "ar": "احنا احتمال نجري تلاتة كيلو متر بكرة.",
   "arabizi": "E7na e7temal negry talata kilometr bokra.",
   "src": "2026-11-06"
  },
  {
   "id": "esc-470-voces-talvez-facam-a-tarefa-na-casa-da-avo",
   "pt": "Vocês talvez façam a tarefa na casa da avó.",
   "ar": "انتوا احتِمال تِعملوا الواجِب في بيت تيتة.",
   "arabizi": "Entu e7temal te3melu elwageb fe beit teta.",
   "src": "2026-11-06"
  },
  {
   "id": "esc-471-eles-talvez-nao-vao-a-festa-hoje",
   "pt": "Eles talvez não vão à festa hoje.",
   "ar": "هُما جايِز مايروحوش الحفلة النهاردة.",
   "arabizi": "Homa gayez mayro7ush el7afla elnaharda.",
   "src": "2026-11-06"
  },
  {
   "id": "esc-472-eu-talvez-compre-roupa-para-o-natal",
   "pt": "Eu talvez compre roupa para o Natal.",
   "ar": "أنا جايز أشتري هدوم لِلكريسماس.",
   "arabizi": "Ana gayez ashtery hodum lelkrismas.",
   "src": "2026-11-06"
  },
  {
   "id": "esc-473-eu-nao-gosto-de-comer-queijo",
   "pt": "Eu não gosto de comer queijo.",
   "ar": "أنا مابحبش آكل جِبنة.",
   "arabizi": "Ana maba7ebsh akol gebna.",
   "src": "Apostila 2 p.8"
  },
  {
   "id": "esc-474-eu-nao-jogo-muito-no-computador",
   "pt": "Eu não jogo muito no computador.",
   "ar": "أنا مابلعبش على الكمبيوتر كِتير.",
   "arabizi": "Ana mabal3absh 3ala el computer ktir.",
   "src": "Apostila 2 p.8"
  },
  {
   "id": "esc-475-ele-nao-dorme-cedo",
   "pt": "Ele não dorme cedo.",
   "ar": "هو مابينامش بدري.",
   "arabizi": "Howa mabeinamsh badry.",
   "src": "Apostila 2 p.8"
  },
  {
   "id": "esc-476-nos-nao-sabemos-falar-arabe",
   "pt": "Nós não sabemos falar árabe.",
   "ar": "إحنا مابنعرفش نتكلم عربي.",
   "arabizi": "E7na mabene3rafsh netkalem 3araby.",
   "src": "Apostila 2 p.8"
  },
  {
   "id": "esc-477-ela-esta-com-vontade-de-comer-shawerma",
   "pt": "Ela está com vontade de comer shawerma.",
   "ar": "هي نِفسها تاكل شاورما.",
   "arabizi": "Heya nefsaha takol shawerma.",
   "src": "Apostila 2 p.14"
  },
  {
   "id": "esc-478-eu-estou-com-vontade-de-pizza",
   "pt": "Eu estou com vontade de pizza.",
   "ar": "أنا نِفسي في بيتزا.",
   "arabizi": "Ana nefsi fi pizza.",
   "src": "Apostila 2 p.14"
  },
  {
   "id": "esc-479-ele-esta-com-vontade-de-cafe",
   "pt": "Ele está com vontade de café.",
   "ar": "هو نِفسه في قهوة.",
   "arabizi": "Howa nefso fi ahua.",
   "src": "Apostila 2 p.14"
  },
  {
   "id": "esc-480-faz-uma-hora-que-ele-esta-falando-no-telefone-com-",
   "pt": "Faz uma hora que ele está falando no telefone com Ali.",
   "ar": "بقاله ساعة بيتكلم في التليفون مع علي.",
   "arabizi": "Ba2alo sa3a bietkalem fe el telefon ma3a Ali.",
   "src": "Apostila 2 p.17"
  },
  {
   "id": "esc-481-faz-uma-semana-que-eu-nao-vejo-samir",
   "pt": "Faz uma semana que eu não vejo Samir.",
   "ar": "بقالي أسبوع مابشوفش سمير.",
   "arabizi": "Ba2aly asbu3 mabashofsh Samir.",
   "src": "Apostila 2 p.18"
  },
  {
   "id": "esc-482-faz-muito-tempo-que-eu-moro-aqui",
   "pt": "Faz muito tempo que eu moro aqui.",
   "ar": "بقالي كتير ساكِن هنا.",
   "arabizi": "Ba2aly ketir saken hena.",
   "src": "Apostila 2 p.18"
  },
  {
   "id": "esc-483-eu-tenho-de-acordar-cedo-amanha-porque-tenho-uma-r",
   "pt": "Eu tenho de acordar cedo amanhã porque tenho uma reunião muito importante.",
   "ar": "أنا لازِم أصحى بَدري بُكرة عشان عندي اجتِماع مُهِم أوي.",
   "arabizi": "Ana lazem as7a badry bokra 3ashan 3andy ektema3 mohem awi.",
   "src": "2026-11-11"
  },
  {
   "id": "esc-484-ele-tem-que-arrumar-o-quarto-dele-hoje-a-noite-por",
   "pt": "Ele tem que arrumar o quarto dele hoje à noite porque está muito bagunçado.",
   "ar": "هو لازِم يروق أوضتُه النهاردة بِليل لأنها مِفركشة أوي.",
   "arabizi": "Howa lazem yeraua2 odto enaharda beleil la2enaha mefarkesha awi.",
   "src": "2026-11-11"
  },
  {
   "id": "esc-485-voce-tem-que-escovar-os-dentes-depois-de-comer-m",
   "pt": "Você tem que escovar os dentes depois de comer. (m)",
   "ar": "انتَ لازِم تِغسِل سنانَك بعد ما تاكُل.",
   "arabizi": "Enta lazem te8sel senanak ba3d ma takol.",
   "src": "2026-11-11"
  },
  {
   "id": "esc-486-voce-tem-que-escovar-os-dentes-depois-de-comer-f",
   "pt": "Você tem que escovar os dentes depois de comer. (f)",
   "ar": "انتي لازِم تغسلي سنانِك بعد ما تاكلي.",
   "arabizi": "Enty lazem te8sely senanek ba3d ma takly.",
   "src": "2026-11-11"
  },
  {
   "id": "esc-487-ela-deve-pentear-o-cabelo-antes-de-sair-de-casa",
   "pt": "Ela deve pentear o cabelo antes de sair de casa.",
   "ar": "هي لازم تِسَرَح شَعرَها قَبل ما تُخرُج مِن البيت.",
   "arabizi": "Heya lazem tessara7 sha3raha 2abl ma to5rog men elbeit.",
   "src": "2026-11-11"
  },
  {
   "id": "esc-488-nos-temos-de-telefonar-para-eles-porque-e-o-aniver",
   "pt": "Nós temos de telefonar para eles porque é o aniversário do filho deles.",
   "ar": "احنا لازِم نِتِصل بِيهم عشان عيد ميلاد ابنُهم.",
   "arabizi": "E7na lazem netessel bihom 3ashan 3id milad ebnohom.",
   "src": "2026-11-11"
  },
  {
   "id": "esc-489-voces-tem-que-dizer-a-verdade-para-os-pais",
   "pt": "Vocês têm que dizer a verdade para os pais.",
   "ar": "انتوا لازِم تقولوا الحقيقة لِماما وبابا.",
   "arabizi": "Entu lazem te2ulu el7a2i2a le mama we baba.",
   "src": "2026-11-11"
  },
  {
   "id": "esc-490-e-necessario-que-eu-termine-o-trabalho-agora",
   "pt": "É necessário que eu termine o trabalho agora.",
   "ar": "أنا ضروري أخَلَص الشُغل دلوقتي.",
   "arabizi": "Ana darury a5alas elsho8l delua2ty.",
   "src": "2026-11-11"
  },
  {
   "id": "esc-491-e-necessario-que-ele-estude-para-a-prova",
   "pt": "É necessário que ele estude para a prova.",
   "ar": "هو ضروري يِذاكِر لِلإمتِحان.",
   "arabizi": "Howa darury yezaker lelemte7an.",
   "src": "2026-11-11"
  },
  {
   "id": "esc-492-e-necessario-que-ela-limpe-a-sala-antes-de-a-famil",
   "pt": "É necessário que ela limpe a sala antes de a família chegar.",
   "ar": "هي ضروري تِنَضَف الصالة قبل ما العيلة تِوصَل.",
   "arabizi": "Heya darury tenadaf elsala 2abl ma el3eila teussal.",
   "src": "2026-11-11"
  },
  {
   "id": "esc-493-e-necessario-que-voce-aprenda-arabe-m",
   "pt": "É necessário que você aprenda árabe. (m)",
   "ar": "انتَ ضروري تتعلم عربي.",
   "arabizi": "Enta darury tet3alem 3arabi.",
   "src": "2026-11-11"
  },
  {
   "id": "esc-494-e-necessario-que-nos-vejamos-voces-amanha",
   "pt": "É necessário que nós vejamos vocês amanhã.",
   "ar": "احنا ضروري نِشوفكوا بُكرة.",
   "arabizi": "E7na darury neshofku bokra.",
   "src": "2026-11-11"
  },
  {
   "id": "esc-495-voce-deveria-descansar-hoje",
   "pt": "Você deveria descansar hoje!",
   "ar": "انتَ المفروض تريح النهاردة!",
   "arabizi": "Enta elmafrud teraya7 elnaharda!",
   "src": "2026-11-11"
  },
  {
   "id": "esc-496-voces-deveriam-ajudar-a-irma-de-voces",
   "pt": "Vocês deveriam ajudar a irmã de vocês.",
   "ar": "انتوا المفروض تساعدوا أختُكوا.",
   "arabizi": "Entu elmafrud tessa3du o5toku.",
   "src": "2026-11-11"
  },
  {
   "id": "esc-497-voce-deveria-escutar-mais-e-falar-menos-m",
   "pt": "Você deveria escutar mais e falar menos. (m)",
   "ar": "انتَ المَفروض تِسمَع أكتَر وتتكلم أقَل.",
   "arabizi": "Enta elmafrud tesma3 aktar we tetkalem a2al.",
   "src": "2026-11-11"
  },
  {
   "id": "esc-498-voce-deveria-escutar-mais-e-falar-menos-f",
   "pt": "Você deveria escutar mais e falar menos. (f)",
   "ar": "انتي المفروض تسمعي أكتر وتتكلمي أقل.",
   "arabizi": "Enty elmafrud tesma3y aktar we tetkalemy a2al.",
   "src": "2026-11-11"
  },
  {
   "id": "esc-499-nos-falamos-mal-do-chefe-juntos",
   "pt": "Nós falamos mal do chefe juntos.",
   "ar": "بنتكلم مع بعض على المدير.",
   "arabizi": "Benetkalem ma3a ba3d 3ala elmodir.",
   "src": "2026-11-11"
  }
 ],
 "leitura": [
  {
   "id": "lei-0-leitura-voces-os-arabes-",
   "title": "Leitura — «Vocês, os árabes...» (Aula 70)",
   "items": [
    {
     "pt": "Vocês, os árabes, gostam de comer com as mãos.",
     "ar": "انتوا، العَرَب، بِتحِبوا تاكلوا بإيديكوا.",
     "arabizi": "Entu el-3arab bet7ebu taklu bêeideiku."
    },
    {
     "pt": "Vocês, os árabes, gostam de tomar café de manhã.",
     "ar": "انتوا، العرب، بِتحِبوا تِشرَبوا قَهوة الصُبح.",
     "arabizi": "Entu el-3arab bet7ebu teshrabu 2ahwa el-sob7."
    },
    {
     "pt": "Vocês, os árabes, gostam de dormir muito tarde, às 2 da manhã.",
     "ar": "انتوا، العَرَب، بِتحِبوا تِناموا مِتأخَر أوي الساعة اتنين بِليل.",
     "arabizi": "Entu el-3arab bet7ebu tenamu met2a5ar awi el-sa3a etnein beleil."
    },
    {
     "pt": "Vocês, os árabes, gostam de assistir futebol todo dia.",
     "ar": "انتوا، العرب، بِتحِبوا تتفرجوا عَلى كورة كُل يوم.",
     "arabizi": "Entu el-3arab bet7ebu tetfaragu 3ala kura kol youm."
    },
    {
     "pt": "Vocês, os árabes, não gostam de nadar no mar.",
     "ar": "انتوا، العَرب، مِش بِتحِبوا تِعوموا في البَحر.",
     "arabizi": "Entu el-3arab mesh bet7ebu te3umu fe el-ba7r."
    }
   ],
   "src": "2026-07-23"
  },
  {
   "id": "lei-1-leitura-o-jantar-na-casa",
   "title": "Leitura — o jantar na casa de Samir (Aula 71)",
   "items": [
    {
     "pt": "Vocês vão jantar amanhã na casa de Samir, né?",
     "ar": "انتوا هتتعَشوا بُكرة في بيت سَمير، صَح؟",
     "arabizi": "Entu hatet3ashu bokra fe beit Samir, sa7?"
    },
    {
     "pt": "Sim, ele vai viajar na semana que vem e quer fazer um jantar para a família toda.",
     "ar": "أيوة، هو هَيسافِر الأسبوع الجاي وعايِز يِعمِل عَشا لِكُل العيلة.",
     "arabizi": "Aywa, howa haissafer el-osbu3 el-gay we 3aeiz ye3mel 3asha lekol el-3ela."
    },
    {
     "pt": "A que horas vocês vão sair de casa? Eu quero ir com vocês!",
     "ar": "انتوا هَتُخرُجوا مِن البيت الساعة كام؟ أنا عايِز أروح معاكوا!",
     "arabizi": "Entu hato5rogu men el-beit el-sa3a kam? Ana 3aeiz aru7 ma3aku!"
    }
   ],
   "src": "2026-07-25"
  },
  {
   "id": "lei-2-leitura-perguntas-voces-",
   "title": "Leitura — perguntas «vocês» (Aula 69)",
   "items": [
    {
     "pt": "O que vocês estão fazendo agora?",
     "ar": "انتوا بِتعمِلوا ايه دِلوَقتي؟",
     "arabizi": "Entu bete3melu eh delua2ty?"
    },
    {
     "pt": "Para onde vocês vão na sexta-feira?",
     "ar": "انتوا بِتروحوا فين يوم الجُمعة؟",
     "arabizi": "Entu betru7u fein youm el-goma3a?"
    },
    {
     "pt": "Vocês falam árabe muito bem! Onde vocês estão aprendendo?",
     "ar": "انتوا بِتتكِلموا عربي كويس أوي! بِتِتعَلِموا فين؟",
     "arabizi": "Entu betetkalemu 3arabi kowayes awi! Betet3alemu fein?"
    },
    {
     "pt": "Vocês dançam samba muito bem! De onde vocês são?",
     "ar": "انتوا بِتُرقُصوا سامبا كويس أوي! انتوا مِنين؟",
     "arabizi": "Entu betor2osu samba kowayes awi! Entu menein?"
    }
   ],
   "src": "2026-07-26"
  },
  {
   "id": "lei-3-leitura-antes-da-viagem-",
   "title": "Leitura — antes da viagem (Aula 69)",
   "items": [
    {
     "pt": "Nós vamos viajar na semana que vem, mas precisamos fazer muitas coisas antes da viagem.",
     "ar": "اِحنا هَنسافِر الأسبوع اللي جاي، بَس مِحتاجين نِعمِل حاجات كِتير قَبل السَفَر.",
     "arabizi": "E7na hansafer el-osbu3 elly gay, bas mei7tagin ne3mel 7agat ketir 2abl el-safar."
    },
    {
     "pt": "Precisamos limpar a cozinha e o banheiro e arrumar os quartos e a sala.",
     "ar": "مِحتاجين نِنَضَف المَطبَخ والحَمام ونِرَوَق الأوَض والصالة.",
     "arabizi": "Mei7tagin nenadaf el-matba5 we el-7ammam we neraua2 el-oud we el-sala."
    },
    {
     "pt": "Estamos de férias. Temos tempo e vamos fazer tudo juntos para terminar rápido.",
     "ar": "احنا في أجازة. عَنِدنا وَقت وهَنِعمِل كُل حاجة مَعَ بَعض عَشان نِخَلَص بِسُرعة.",
     "arabizi": "E7na fe agaza. 3andena wa2t we hane3mel kol 7aga ma3a ba3d 3ashan ne5alas besor3a."
    }
   ],
   "src": "2026-07-27"
  },
  {
   "id": "lei-4-leitura-voces-assistem-m",
   "title": "Leitura — «vocês assistem muita TV» (Aula 70)",
   "items": [
    {
     "pt": "Vocês assistem muita TV. Vocês precisam fazer outras coisas!",
     "ar": "انتوا بتتفرجوا على التلفزيون كِتير. مِحتاجين تِعمِلوا حاجات تانية!",
     "arabizi": "Entu betetfaragu 3ala el-telefezyon ketir. Mei7tagin te3melu 7agat tanya!"
    },
    {
     "pt": "Vocês precisam praticar esporte, correr, nadar, sair e dançar.",
     "ar": "مِحتاجين تلعَبوا رِياضة وتِجروا وتِعوموا وتُخرُجوا وتُرقُصوا.",
     "arabizi": "Mei7tagin tel3abu reyada we tegru we te3umu we to5rogu we tor2osu."
    },
    {
     "pt": "Nós estamos muito cansados! Trabalhamos e estudamos muito durante a semana.",
     "ar": "احنا تَعبانين أوي! احنا بِنِشتَغَل وبِنذاكِر كِتير خِلال الأسبوع.",
     "arabizi": "E7na ta3banin awi! E7na beneshta8al we benzaker ketir 5elal el-osbu3."
    }
   ],
   "src": "2026-07-28"
  },
  {
   "id": "lei-5-leitura-o-jantar-e-a-via",
   "title": "Leitura — o jantar e a viagem (Aulas 69 & 71)",
   "items": [
    {
     "pt": "Nós vamos acordar cedo, porque precisamos arrumar a casa e lavar e passar a roupa.",
     "ar": "احنا هَنصحى بَدري عشان مِحتاجين نِرَوَق البيت ونِغسِل ونِكوي الهدوم.",
     "arabizi": "E7na hanes7a badry 3ashan mei7tagin neraua2 el-beit we ne8sel we nekwi el-hedum."
    },
    {
     "pt": "Mona também quer ir ao salão para fazer o cabelo.",
     "ar": "مُنى عايزة تِروح الكوافير كَمان عَشان تِعمِل شَعرَها.",
     "arabizi": "Mona 3aeiza teru7 el-koafeir kaman 3ashan te3mel sha3raha."
    },
    {
     "pt": "O jantar é às 19h. Podemos sair de casa mais ou menos às 18h15.",
     "ar": "العَشا الساعة سَبعة بِليل. مُمكِن نُخرُج مِن البيت حَوالي الساعة سِتة ورُبع.",
     "arabizi": "El-3asha el-sa3a saba3a beleil. Momken no5rog men el-beit 7awaly el-sa3a seta we rob3."
    }
   ],
   "src": "2026-07-30"
  },
  {
   "id": "lei-6-leitura-comida-caseira-a",
   "title": "Leitura — comida caseira (Aula 72)",
   "items": [
    {
     "pt": "Vocês preferem comer em casa ou comer fora?",
     "ar": "انتوا بِتفَضَلوا تاكلوا في البيت وَلا تاكلوا بَرة؟",
     "arabizi": "Entu betfadalu taklu fe el-beit wala taklu barra?"
    },
    {
     "pt": "Sinceramente, nós preferimos a comida caseira porque é mais saudável.",
     "ar": "بِصَراحة احنا بِنفَضَل الأكل البيتي عَشان صِحي أكتَر.",
     "arabizi": "Besara7a e7na benfadal el-akl el-beity 3ashan se7y aktar."
    },
    {
     "pt": "…e gostamos de praticar esporte e cuidar da nossa saúde.",
     "ar": "وبِنحِب نِلعَب رِياضة ونِخَلَي بالنا مِن صِحتنا.",
     "arabizi": "We ben7eb nel3ab reyada we ne5aly balna men se7etna."
    }
   ],
   "src": "2026-08-01"
  },
  {
   "id": "lei-7-leitura-por-que-voces-es",
   "title": "Leitura — por que vocês estão felizes? (Aula 72)",
   "items": [
    {
     "pt": "Eu estou muito feliz, porque a minha esposa e eu vamos ao Brasil no final deste mês.",
     "ar": "أنا مَبسوط أوي عَشان أنا ومِراتي هَنروح البرازيل في آخِر الشَهر ده.",
     "arabizi": "Ana mabsut awi 3ashan ana we meraty hanru7 el-barazil fe aa5er el-shahr da."
    },
    {
     "pt": "Por que vocês estão felizes?",
     "ar": "انتوا مَبسوطين ليه؟",
     "arabizi": "Entu mabsutin leh?"
    },
    {
     "pt": "Porque amanhã é feriado e não vamos trabalhar.",
     "ar": "عَشان بُكرة أجازة ومِش هَنِشتَغِل.",
     "arabizi": "3ashan bokra agaza we mesh haneshta8al."
    }
   ],
   "src": "2026-08-02"
  },
  {
   "id": "lei-8-leitura-planos-e-recusas",
   "title": "Leitura — planos e recusas (Aulas 70 & 72)",
   "items": [
    {
     "pt": "Eles não querem limpar a casa hoje, eles querem descansar.",
     "ar": "هُما مِش عايزين يِنَضَفوا البيت النهاردة، هُما عايزين يِرَيَحوا.",
     "arabizi": "Homa mesh 3aeizin yenadafu el-beit enaharda, homa 3aeizin yeraya7u."
    },
    {
     "pt": "Por que vocês não querem assistir ao filme novo connosco?",
     "ar": "انتوا مِش عايزين تِتفَرَجوا عَلى الفيلم الجِديد معانا ليه؟",
     "arabizi": "Entu mesh 3aeizin tetfaragu 3ala el-felm el-gedid ma3ana leh?"
    },
    {
     "pt": "Amanhã é feriado e não vamos trabalhar.",
     "ar": "بُكرة أجازة ومِش هَنِشتَغِل.",
     "arabizi": "Bokra agaza we mesh haneshta8al."
    }
   ],
   "src": "2026-08-03"
  },
  {
   "id": "lei-9-leitura-a-semana-de-trab",
   "title": "Leitura — a semana de trabalho (Aulas 71 & 72)",
   "items": [
    {
     "pt": "Eles trabalham de domingo a quinta.",
     "ar": "هُما بيشتَغَلوا مِن الحَد لِلخَميس.",
     "arabizi": "Homa bieshta8alu men el-7ad lel-5amis."
    },
    {
     "pt": "Mariam e Ali precisam terminar o trabalho cedo na terça-feira porque querem visitar a avó.",
     "ar": "مريم وعلي مِحتاجين يِخَلَصوا الشُغل بَدري يوم التلات عَشان عايزين يِزوروا تيتة.",
     "arabizi": "Mariam we 3Aly mei7tagin ye5alasu el-sho8l badry youm el-talat 3ashan 3aeizin yezuru teta."
    },
    {
     "pt": "Eles não cozinham na sexta-feira porque comem fora.",
     "ar": "هُما مِش بيطبُخوا يوم الجُمعة عَشان بياكلوا بَرة.",
     "arabizi": "Homa mesh beitbo5u youm el-gom3a 3ashan biaklu barra."
    }
   ],
   "src": "2026-08-04"
  },
  {
   "id": "lei-10-leitura-tres-cenas-da-au",
   "title": "Leitura — três cenas da Aula 72",
   "items": [
    {
     "pt": "Eles trabalham de domingo a quinta.",
     "ar": "هُما بيشتَغَلوا مِن الحَد لِلخَميس.",
     "arabizi": "Homa bieshta8alu men el-7ad lel-5amis."
    },
    {
     "pt": "Vocês preferem comer em casa ou comer fora?",
     "ar": "انتوا بِتفَضَلوا تاكلوا في البيت وَلا تاكلوا بَرة؟",
     "arabizi": "Entu betfadalu taklu fe el-beit wala taklu barra?"
    },
    {
     "pt": "Mariam e Ali precisam terminar o trabalho cedo na terça-feira porque querem visitar a avó.",
     "ar": "مريم وعلي مِحتاجين يِخَلَصوا الشُغل بَدري يوم التلات عَشان عايزين يِزوروا تيتة.",
     "arabizi": "Mariam we 3Aly mei7tagin ye5alasu el-sho8l badry youm el-talat 3ashan 3aeizin yezuru teta."
    }
   ],
   "src": "2026-08-06"
  },
  {
   "id": "lei-11-mini-leitura-a-familia-d",
   "title": "Mini-leitura · a família de Zeinab (Aula 76)",
   "items": [
    {
     "pt": "Meu nome é Zeinab, meu pai se chama Ahmed e a mamãe se chama Heba.",
     "ar": "اسمي زينَب وبابا اسمُه أحمَد وماما اسمها هبة.",
     "arabizi": "Esmy Zeinab we baba esmo Ahmed we mama esmaha Heba."
    },
    {
     "pt": "Eu trabalho com meu pai e com meus irmãos. Meu pai tem uma loja de roupa e nós trabalhamos juntos.",
     "ar": "أنا بشتغل مع بابا ومع إخواتي. بابا عَندُه مَحَل هِدوم واحنا بنشتغل مَعَ بَعض.",
     "arabizi": "Ana bashta8al ma3a baba we ma3a e5waty. Baba 3ando ma7al hodum we e7na benshta8al ma3a ba3d."
    },
    {
     "pt": "Nós somos uma família grande.",
     "ar": "احنا عيلة كبيرة.",
     "arabizi": "E7na 3eila kebira."
    },
    {
     "pt": "Meu avô se chama Ali e minha avó se chama Fatma.",
     "ar": "جدو اسمُه علي وتيتة اسمها فاطمة.",
     "arabizi": "Gedo esmo Ali we teita esmaha Fatma."
    },
    {
     "pt": "Eles moram na mesma casa com o meu tio (materno) Ahmed.",
     "ar": "هُما ساكنين في نَفس البيت مَعَ خالي أحمَد.",
     "arabizi": "Homa sakenin fe nafs elbeit ma3a 5aly Ahmed."
    }
   ],
   "src": "2026-08-15"
  },
  {
   "id": "lei-12-mini-leitura-a-atividade",
   "title": "Mini-leitura · a atividade da Aula 76",
   "items": [
    {
     "pt": "A minha mãe se chama Betel, ela é aposentada.",
     "ar": "أُمي اِسمها بيتيل، هي على المَعاش.",
     "arabizi": "Omy esmaha Betel, heya 3ala elma3ash."
    },
    {
     "pt": "A minha irmã se chama Paola, ela é engenheira.",
     "ar": "أُختي اسمَها باولا، هي مُهَندِسة.",
     "arabizi": "O5ty esmaha Paola, heya mohandessa."
    },
    {
     "pt": "O meu irmão se chama Allan, ele é engenheiro mas trabalha como programador.",
     "ar": "أَخي اسمُه ألان، هُو مُهَندس بَس بيشتغل مُبَرمِج.",
     "arabizi": "A5y esmo Allan, howa mohandes bas bieshta8al mobarmeg."
    },
    {
     "pt": "O filho do meu tio (materno) se chama Carly, ele é diretor numa empresa grande.",
     "ar": "ابن خالي اسمه كارلي، هو مدير في شركة كبيرة.",
     "arabizi": "Ebn 5aly esmo Carly, howa modir fe sherka kebira."
    }
   ],
   "src": "2026-08-17"
  },
  {
   "id": "lei-13-mini-leitura-soraya-e-am",
   "title": "Mini-leitura · Soraya e Amin viajam (Aula 74)",
   "items": [
    {
     "pt": "Soraya e Amin vão viajar na semana que vem.",
     "ar": "ثرية وأمين هيسافروا الأسبوع اللي جاي.",
     "arabizi": "Soraya we Amin haisafru elosbu3 elly gay."
    },
    {
     "pt": "Quando eles viajam, eles não levam muitas coisas nem muitas roupas.",
     "ar": "لَما بيسافروا، مِش بياخدوا حاجات كتير ولا هدوم كتير.",
     "arabizi": "Lama beisafru, mesh bia5du 7agat ketir wala hedum ketir."
    },
    {
     "pt": "Quando eles vão para um lugar novo, gostam de comer a comida típica e falar com as pessoas.",
     "ar": "لما بيروحوا مَكان جِديد، بيحِبوا ياكلوا الأكل التَقليدي ويتكلموا مَعَ الناس.",
     "arabizi": "Lama beiru7u makan gedid, bei7ebu yaklu elakl eltaklidy we yetkalemu ma3a elnas."
    },
    {
     "pt": "Por causa disso, eles sempre aprendem um pouco do idioma antes de viajar.",
     "ar": "عشان كِدة، هما دايماً بيتعلموا شوية لُغة قَبل السَفر (قَبل ما يِسافروا).",
     "arabizi": "3ashan keda, homa dayman biet3alemu shwaya men ello8a abl elsafar (abl ma yesafru)."
    },
    {
     "pt": "Eles não gostam de pegar táxi e Uber, preferem pegar o metrô e o transporte público.",
     "ar": "هُما مِش بيحِبوا ياخدوا تاكسي وأوبَر، هما بيفَضَلوا ياخدوا المترو والمواصلات العامة.",
     "arabizi": "Homa mesh bei7ebu ya5du taksy we Uber, beifadalu ya5du elmetro we elmouaslat el3ama."
    }
   ],
   "src": "2026-08-18"
  },
  {
   "id": "lei-14-mini-leitura-o-resto-da-",
   "title": "Mini-leitura · o resto da viagem (Aula 74)",
   "items": [
    {
     "pt": "Eles querem viajar o mundo inteiro juntos.",
     "ar": "هُما عايزين يِسافروا العالِم كُله مَع بَعض.",
     "arabizi": "Homa 3aeizin yesafru el3alam kollo ma3a ba3d."
    },
    {
     "pt": "Eles normalmente não compram muitas coisas quando viajam, mas gostam de comprar lembrancinhas simples para a família toda.",
     "ar": "هُما عادةً مِش بيشتِروا حاجات كِتير لَما بيسافروا، بَس بيحبوا يشتروا هدايا (سيفونيرز) بسيطة للعيلة كُلها.",
     "arabizi": "Homa 3adatan mesh bieshtaru 7agat ketir lama beisafru, bas bei7ebu yeshtaru hadaya basita lel3eila kolaha."
    },
    {
     "pt": "Eu não gosto de acordar tarde quando viajo.",
     "ar": "أنا مِش بَحِب أصحى مِتأخَر لَما بَسافِر.",
     "arabizi": "Ana mesh ba7eb as7a met2a5ar lamma basafer."
    },
    {
     "pt": "Eu sempre falo com a minha mãe quando chego em casa.",
     "ar": "أنا دايماً بتكلم مَعَ ماما لَما بَوصَل البيت.",
     "arabizi": "Ana dayiman batkalem ma3a mama lama baussal elbeit."
    }
   ],
   "src": "2026-08-20"
  },
  {
   "id": "lei-15-mini-leitura-negar-com-aula-77",
   "title": "Mini-leitura · negar com مِش (Aula 77)",
   "items": [
    {
     "pt": "Eu não sou brasileiro.",
     "ar": "أنا مِش برازيلي.",
     "arabizi": "Ana mesh brazily."
    },
    {
     "pt": "Eu não preciso de água.",
     "ar": "أنا مِش مِحتاج ماية.",
     "arabizi": "Ana mesh mei7tag maya."
    },
    {
     "pt": "Eu não quero sair amanhã.",
     "ar": "أنا مِش عايِز أخرُج بُكرة.",
     "arabizi": "Ana mesh 3aeiz a5rog bokra."
    },
    {
     "pt": "Eu não vou ao cinema amanhã com Mariam.",
     "ar": "أنا مِش هَروح السينما بكرة مع مريم.",
     "arabizi": "Ana mesh haru7 elcinema bokra ma3a Mariam."
    }
   ],
   "src": "2026-08-21"
  },
  {
   "id": "lei-16-mini-leitura-negar-com-aula-77",
   "title": "Mini-leitura · negar com ما...ـش (Aula 77)",
   "items": [
    {
     "pt": "Eu não durmo cedo todos os dias.",
     "ar": "أنا مابنامش بَدري كل يوم.",
     "arabizi": "Ana mabnamsh badry kol youm."
    },
    {
     "pt": "Eu não como carne.",
     "ar": "أنا ماباكُلش لَحمة.",
     "arabizi": "Ana mabakolsh la7ma."
    },
    {
     "pt": "Eu não fui ao supermercado ontem.",
     "ar": "أنا مارُحتش السوبرماركت امبارح.",
     "arabizi": "Ana maro7tesh elsupermarket embare7."
    },
    {
     "pt": "Eu não arrumo a casa, mas eu limpo o meu quarto.",
     "ar": "أنا مابَرَوقش البيت بس أنا بَنَضَف أوضتي.",
     "arabizi": "Ana mabaraua2sh elbeit bas ana banadaf odty."
    }
   ],
   "src": "2026-08-21"
  },
  {
   "id": "lei-17-mini-leitura-para-nao-e-porque",
   "title": "Mini-leitura · «para não…» e porquês (Aula 77)",
   "items": [
    {
     "pt": "Menna não vai sair conosco para não comer fora.",
     "ar": "منة مِش هَتُخرُج معانا عشان ماتاكُلش برة.",
     "arabizi": "Menna mesh hato5rog ma3ana 3ashan matakolsh barra."
    },
    {
     "pt": "Eu vou trabalhar na sexta-feira que vem para não ir ao escritório no domingo.",
     "ar": "أنا هَشتَغَل يوم الجمعة الجاية عشان ماروحش المَكتب يوم الحَد.",
     "arabizi": "Ana hashta8al youm elgom3a elgaya 3ashan maru7sh elmaktab youm el7ad."
    },
    {
     "pt": "Hossam não fala comigo e eu não sei por quê.",
     "ar": "حُسام مابيتكَلِمش معايا وأنا مِش عارِف ليه.",
     "arabizi": "Hossam mabeitkalemsh ma3aya we ana mesh 3aref leh."
    },
    {
     "pt": "Nadia não sabe falar português porque ela é egípcia.",
     "ar": "نادية مابتعرفش تتكلم برتغالي علشان هي مَصرية.",
     "arabizi": "Nadia mabte3rafsh tetkalem borto8aly 3alashan heya masreya."
    }
   ],
   "src": "2026-08-21"
  },
  {
   "id": "lei-18-mini-leitura-adham-se-apresent",
   "title": "Mini-leitura · Adham se apresenta (Aula 78)",
   "items": [
    {
     "pt": "Meu nome é Adham e hoje eu vou falar um pouco sobre mim.",
     "ar": "اسمي أدهَم والنهاردة هَتكَلِم شوية عَن نَفسي.",
     "arabizi": "Esmy Adham we elnaharda hatkalem showaya 3an nafsy."
    },
    {
     "pt": "Eu não gosto de acordar cedo, não tomo café da manhã todos os dias e não vou para a academia como muitas pessoas.",
     "ar": "أنا مابحبش أصحى بَدري، مابفطَرش كل يوم ومابَروحش الجيم زي ناس كِتير.",
     "arabizi": "Ana maba7ebesh as7a badry, mabaftarsh kol youm we mabaru7sh elgym zay nas ketir."
    },
    {
     "pt": "Eu gosto de assistir séries e de comer, mas não gosto de cozinhar!",
     "ar": "أنا بحب أتفرج على مُسَلسَلات وآكُل بَس مابَحِبش أطبُخ.",
     "arabizi": "Ana ba7eb atfarag 3ala mosalsalat we akol bas maba7ebesh atbo5."
    },
    {
     "pt": "Eu não preparo o café da manhã, nem o almoço, nem o jantar.",
     "ar": "أنا مابَجَهِزش الفِطار ولا الغَدا ولا العَشا.",
     "arabizi": "Ana mabagahezsh elfetar wala el8ada wala el3asha."
    },
    {
     "pt": "Eu compro comida pronta.",
     "ar": "أنا بَشتري أكل جاهِز.",
     "arabizi": "Ana bashtery akl gahez."
    }
   ],
   "src": "2026-08-22"
  },
  {
   "id": "lei-19-mini-leitura-adham-trabalho-e-",
   "title": "Mini-leitura · Adham · trabalho e rotina (Aula 78)",
   "items": [
    {
     "pt": "Eu não trabalho nem estudo, mas às vezes eu ajudo meu pai na loja.",
     "ar": "أنا مابشتغلش ولا بذاكِر، بَس ساعات بَساعِد بابا في المَحَل.",
     "arabizi": "Ana mabashta8alsh wala bazaker, bas sa3at basa3ed baba fe elma7al."
    },
    {
     "pt": "Ele tem uma loja pequena no bairro.",
     "ar": "هو عَنده مَحَل صُغَيَر في الحَي.",
     "arabizi": "Howa 3ando ma7al so8ayar fe el7ay."
    },
    {
     "pt": "Eu sempre durmo tarde. Talvez por causa disso, eu sempre acordo cansado!",
     "ar": "أنا دايماً بَنام مِتأخر. ممكِن عَشان كدة، دايماً بَصحى تَعبان.",
     "arabizi": "Ana dayman banam met2a5ar. Momken 3ashan keda, dayman bas7a ta3ban."
    }
   ],
   "src": "2026-08-22"
  },
  {
   "id": "lei-20-mini-leitura-3and-onde-eu-estou",
   "title": "Mini-leitura · «عَند» — onde eu estou (Aula 79)",
   "items": [
    {
     "pt": "Eu estou na estação.",
     "ar": "أنا عَند المَحَطة.",
     "arabizi": "Ana 3and elma7ata."
    },
    {
     "pt": "Eu estou no médico.",
     "ar": "أنا عَند الدكتور.",
     "arabizi": "Ana 3and eldoctor."
    },
    {
     "pt": "Eu estou no barbeiro.",
     "ar": "أنا عَند الحَلاق.",
     "arabizi": "Ana 3and el7ala2."
    },
    {
     "pt": "Eu estou na casa da Maria.",
     "ar": "أنا عَند ماريا.",
     "arabizi": "Ana 3and Maria."
    },
    {
     "pt": "Eu estou na casa da vovó e do vovô.",
     "ar": "أنا عَند تيتة وجدو.",
     "arabizi": "Ana 3and teta we gedo."
    }
   ],
   "src": "2026-08-26"
  },
  {
   "id": "lei-21-mini-leitura-colegas-e-amigos",
   "title": "Mini-leitura · colegas e amigos de todo lugar (Aula 79)",
   "items": [
    {
     "pt": "Eu tenho muitas colegas libanesas.",
     "ar": "أنا عَندي زَمايِل لبنانيات كتير.",
     "arabizi": "Ana 3andi zamayel lobnaneyat ketir."
    },
    {
     "pt": "Eu tenho muitos colegas argentinos.",
     "ar": "أنا عَندي زَمايِل أرجنتينيين كتير.",
     "arabizi": "Ana 3andi zamayel arjantineyiin ketir."
    },
    {
     "pt": "Eu tenho muitas amigas brasileiras.",
     "ar": "أنا عَندي أصحاب برازيليات كتير.",
     "arabizi": "Ana 3andi as7ab barasileyat ketir."
    },
    {
     "pt": "Eu tenho muitos amigos egípcios.",
     "ar": "أنا عندي أصحاب مصريين كتير.",
     "arabizi": "Ana 3andi as7ab masreyiin ketir."
    }
   ],
   "src": "2026-08-26"
  },
  {
   "id": "lei-22-mini-leitura-3and-ou-fi",
   "title": "Mini-leitura · «عَند» ou «في»? (Aula 79)",
   "items": [
    {
     "pt": "Eu estou no supermercado (dentro dele).",
     "ar": "أنا في السوبرماركِت.",
     "arabizi": "Ana fe elsupermarket."
    },
    {
     "pt": "Eu estou no supermercado (no local, junto dele).",
     "ar": "أنا عَند السوبرماركت.",
     "arabizi": "Ana 3and elsupermarket."
    },
    {
     "pt": "Eu tenho um supermercado.",
     "ar": "أنا عَندي سوبرماركت.",
     "arabizi": "Ana 3andi supermarket."
    },
    {
     "pt": "Eu estou em casa (dentro).",
     "ar": "أنا في البيت.",
     "arabizi": "Ana fe elbeit."
    },
    {
     "pt": "Eu estou lá em casa (no local).",
     "ar": "أنا عَند البيت.",
     "arabizi": "Ana 3and elbeit."
    }
   ],
   "src": "2026-08-26"
  },
  {
   "id": "lei-23-mini-leitura-3and-ou-fi-2",
   "title": "Mini-leitura · «عَند» ou «في» — escritório e casa de alguém (Aula 79)",
   "items": [
    {
     "pt": "Eu estou no escritório (dentro).",
     "ar": "أنا في المَكتب.",
     "arabizi": "Ana fe elmaktab."
    },
    {
     "pt": "Eu estou no escritório (no local).",
     "ar": "أنا عَند المَكتَب.",
     "arabizi": "Ana 3and elmaktab."
    },
    {
     "pt": "Eu estou na casa da Maria (dentro da casa dela).",
     "ar": "أنا في بيت ماريا.",
     "arabizi": "Ana fe beit Maria."
    },
    {
     "pt": "Eu estou na casa da vovó e do vovô (dentro).",
     "ar": "أنا في بيت تيتة وجِدو.",
     "arabizi": "Ana fe beit teta we gedo."
    },
    {
     "pt": "Eu estou lá na casa da vovó e do vovô (no local).",
     "ar": "أنا عند بيت تيتة وجدو.",
     "arabizi": "Ana 3and beit teta we gedo."
    }
   ],
   "src": "2026-08-26"
  },
  {
   "id": "lei-24-mini-leitura-sarah-se-apresenta-aulas",
   "title": "Mini-leitura · Sarah se apresenta (Aulas 79-80)",
   "items": [
    {
     "pt": "Hoje é sábado, 18 de setembro, e eu quero escrever e falar um pouco sobre mim.",
     "ar": "النهاردة السبت 18 سَبتمبر وعايزة أكتِب وأتكَلِم شوية عَن نَفسي.",
     "arabizi": "Enaharda youm el sabt tamantashar september, we ana 3aeiza akteb we atkalem showaya 3an nafsy."
    },
    {
     "pt": "Meu nome é Sarah e eu sou brasileira do Rio de Janeiro, mas eu moro agora na Europa, em Paris.",
     "ar": "اسمي سارة، وأنا برازيلية مِن ريو دي جانيرو بس أنا ساكنة في أوروبا في باريس دِلوَقتي.",
     "arabizi": "Esmy Sarah we ana barazileya men Rio de Janeiro, bas ana sakna delua2ty fe Oroba, fe Paris."
    },
    {
     "pt": "Eu tenho 23 anos. Eu tenho um cachorro que se chama Max e uma gata que se chama Bussy.",
     "ar": "أنا عَندي 23 (تلاتة وعِشرين) سنة. وعَندي كَلب اسمُه ماكس وقُطة اسمَها بوسي.",
     "arabizi": "Ana 3andy talata we 3eshrin sana. We 3andy kalb esmo Max we 2otta esmaha Bussy."
    },
    {
     "pt": "Eu moro com minha mãe e meu pai na mesma casa.",
     "ar": "أنا ساكنة مَعَ ماما وبابا في نَفس البيت.",
     "arabizi": "Ana sakna ma3a mama we baba fe nafs elbeit."
    },
    {
     "pt": "Eu não tenho nem carro nem moto, mas eu tenho uma bicicleta.",
     "ar": "أنا ماعنديش ولا عَربية وَلا موتوسيكل، بَس أنا عَندي عَجَلة.",
     "arabizi": "Ana ma3andish wala 3arabeya wala motosekl, bas ana 3andy 3agala."
    },
    {
     "pt": "Eu gosto de estudar e aprender idiomas e coisas novas todos os dias.",
     "ar": "أنا بَحِب أذاكِر وأتعَلِم لُغات وحاجات جِديدة كُل يوم.",
     "arabizi": "Ana ba7eb azaker we at3alem lo8at we 7agat gedida kol youm."
    },
    {
     "pt": "Eu também gosto de praticar esporte e correr; eu vou para a academia todos os dias de manhã.",
     "ar": "أنا كَمان بَحِب ألعَب رِياضة وأجري، وأنا بَروح الجيم كل يوم الصُبح.",
     "arabizi": "Ana kaman ba7eb al3ab reyada we agry, we ana baru7 el-gym kol youm elsob7."
    },
    {
     "pt": "Eu não trabalho agora, mas eu sou estudante numa universidade grande aqui.",
     "ar": "أنا مابشتغلش دِلوَقتي بَس أنا طالبة في جامعة كبيرة هِنا.",
     "arabizi": "Ana mabashta8alsh delua2ty, bas ana taleba fe gam3a kebira hena."
    }
   ],
   "src": "2026-09-02"
  },
  {
   "id": "lei-25-mini-leitura-o-que-voce-faz-nas-ferias",
   "title": "Mini-leitura · o que você faz nas férias (Aula 80)",
   "items": [
    {
     "pt": "O que você faz nas férias?",
     "ar": "انتَ بِتِعمِل ايه في الأجازة؟",
     "arabizi": "Enta bete3mel eh fe el-agaza?"
    },
    {
     "pt": "Eu jogo tênis na sexta-feira, e jogo videogame no meu VR novo.",
     "ar": "أنا بَلعَب تِنِس يوم الجُمعة، وبَلعَب فيديو جيمز عَلى الـ VR الجِديد بِتاعي.",
     "arabizi": "Ana bal3ab tenis youm elgom3a, we bal3ab video games 3ala el VR elgedid bita3y."
    },
    {
     "pt": "E assisto YouTube e o jogo do Flamengo.",
     "ar": "وبَتفَرَج عَلى اليوتيوب وماتش فلامِنجو.",
     "arabizi": "We batfarag 3ala elYouTube we match Flamengo."
    },
    {
     "pt": "Eu não faço nada, eu só descanso (e pronto).",
     "ar": "أنا مابَعمِلش حاجة، أنا بَرَيَح بَس (وِخَلاص).",
     "arabizi": "Ana maba3melsh 7aga, ana baraya7 bas (we 5alas)."
    }
   ],
   "src": "2026-09-02"
  },
  {
   "id": "lei-26-mini-leitura-o-que-voce-gosta-de",
   "title": "Mini-leitura · o que você gosta de fazer sozinho (Aula 82)",
   "items": [
    {
     "pt": "Quais são as coisas que você gosta de fazer sozinho?",
     "ar": "ايه الحاجات اللي بِتحِب تِعمِلها لِوَحدك؟",
     "arabizi": "Eh el7agat elly bet7eb te3melha leua7dak?"
    },
    {
     "pt": "Eu gosto de ler um livro sozinho.",
     "ar": "أنا بَحِب أقرا كِتاب لِوحدي.",
     "arabizi": "Ana ba7eb a2ra ketab leua7dy."
    },
    {
     "pt": "E eu jogo videogame sozinho.",
     "ar": "أنا بَلعَب فيديو جيمز لِوَحدي.",
     "arabizi": "Ana bal3ab video games leua7dy."
    },
    {
     "pt": "A minha esposa gosta de dançar sozinha.",
     "ar": "مِراتي بِتحِب تُرقُص لِوَحدَها.",
     "arabizi": "Meraty bet7eb tor2os leua7daha."
    },
    {
     "pt": "A minha esposa gosta de assistir séries de crime sozinha.",
     "ar": "مراتي بِتحِب تِتفَرَج عَلى مُسَلسَلات جَرايِم لِوَحدَها.",
     "arabizi": "Meraty bet7eb tetfarag 3ala mosalsalat garayem leua7daha."
    }
   ],
   "src": "2026-09-09"
  },
  {
   "id": "lei-27-mini-leitura-sozinho-ou-acompanh",
   "title": "Mini-leitura · sozinho ou acompanhado? (Aula 82)",
   "items": [
    {
     "pt": "Ela gosta de fazer compras no shopping comigo, e eu gosto de fazer compras no shopping com ela.",
     "ar": "هي بِتحِب تِعمِل شوبينج في المول معايا، وأنا بَحِب أعمِل شوبينج في المول معاها.",
     "arabizi": "Heya bet7eb te3mel shopping fe elmall ma3aya, we ana ba7eb a3mel shopping fe elmall ma3aha."
    },
    {
     "pt": "Você limpa a casa sozinho?",
     "ar": "انتَ بِتنَضَف البيت لِوَحدَك؟",
     "arabizi": "Enta betnadaf elbeit leua7dak?"
    },
    {
     "pt": "Não, às vezes eu limpo sozinho e às vezes limpo com ele.",
     "ar": "لا، أنا ساعات بَنَضَف لِوَحدي وساعات بَنَضَف مَعاه.",
     "arabizi": "La, ana sa3at banadaf leua7dy we sa3at banadaf ma3ah."
    },
    {
     "pt": "Você prefere trabalhar sozinho ou com Salma e Omar?",
     "ar": "انتَ بِتفَضَل تِشتَغَل لِوحَدَك ولا مَعَ سَلمى وعُمَر؟",
     "arabizi": "Enta betfadal teshta8al leua7dak walla ma3a Salma we Omar?"
    },
    {
     "pt": "Eu prefiro trabalhar com eles.",
     "ar": "أنا بَفَضَل أشتَغَل مَعَاهُم.",
     "arabizi": "Ana bafadal ashta8al ma3ahom."
    }
   ],
   "src": "2026-09-09"
  },
  {
   "id": "lei-28-mini-leitura-nefsy-o-que-da-vont",
   "title": "Mini-leitura · «nefsy» — o que dá vontade (Aula 82)",
   "items": [
    {
     "pt": "O que você está com vontade de fazer?",
     "ar": "انتَ نِفسَك تِعمِل ايه؟",
     "arabizi": "Enta nefsak te3mel eh?"
    },
    {
     "pt": "Estou com vontade de jogar bola à noite com eles.",
     "ar": "أنا نِفسي ألعَب كورة بِليل مَعَاهُم.",
     "arabizi": "Ana nefsy al3ab kora beleil ma3ahom."
    },
    {
     "pt": "Estou com vontade de almoçar.",
     "ar": "أنا نِفسي أتغَدى.",
     "arabizi": "Ana nefsy at8ada."
    },
    {
     "pt": "E estou com vontade de assistir vídeos no YouTube.",
     "ar": "أنا نفسي أتفرج عَلى فيديوهات على اليوتيوب.",
     "arabizi": "Ana nefsy atfarag 3ala vidiohat 3ala elyoutube."
    },
    {
     "pt": "Você está com vontade de tirar férias?",
     "ar": "انتَ نِفسَك تاخُد أجازة؟",
     "arabizi": "Enta nefsak ta5od agaza?"
    },
    {
     "pt": "Sim, estou com muita, muita vontade de tirar férias.",
     "ar": "ايوة، نِفسي أوي أوي آخُد أجازة.",
     "arabizi": "Aiwa, nefsy awi awi a5od agaza."
    }
   ],
   "src": "2026-09-09"
  },
  {
   "id": "lei-29-mini-leitura-com-quem-e-sem-quem",
   "title": "Mini-leitura · com quem e sem quem (Aula 81)",
   "items": [
    {
     "pt": "Ele não quer ir ao casamento sem mim.",
     "ar": "هُوَ مِش عايِز يِروح الفَرَح مِن غيري.",
     "arabizi": "Howa mesh 3aeiz yeru7 elfara7 men 8ery."
    },
    {
     "pt": "Nós queremos jogar esta partida sem eles.",
     "ar": "احنا عايزين نِلعَب الماتش ده مِن غيرهُم.",
     "arabizi": "E7na 3aeizin nel3ab elmatch da men 8erhom."
    },
    {
     "pt": "Eles querem visitar Ahmed sem vocês.",
     "ar": "هُما عايزين يِزوروا أحمَد مِن غيركوا.",
     "arabizi": "Homa 3aeizin yezuru Ahmed men 8erku."
    },
    {
     "pt": "Eles vão arrumar a casa conosco.",
     "ar": "هُما هَيرَوَقوا البيت معانا.",
     "arabizi": "Homa hairaua2u elbeit ma3ana."
    },
    {
     "pt": "Nós vamos ficar aqui com vocês.",
     "ar": "احنا هَنُقعُد هِنا معاكوا.",
     "arabizi": "E7na hano3od hena ma3aku."
    }
   ],
   "src": "2026-09-04"
  },
  {
   "id": "lei-30-dialogo-mona-esta-chateada",
   "title": "Diálogo · Mona está chateada (gabarito da atividade da Aula 82)",
   "items": [
    {
     "pt": "A: Mona, como você está?",
     "ar": "ازيك يامُنى؟",
     "arabizi": "Ezayek ya Mona?"
    },
    {
     "pt": "B: Estou bem, graças a Deus, e você?",
     "ar": "كويسة الحمدُ لله، انتي؟",
     "arabizi": "Kowayesa el 7amdlelah, enty?"
    },
    {
     "pt": "A: Estou bem, mas um pouco chateada!",
     "ar": "كويسة بَس زَهقانة شوية.",
     "arabizi": "Kowayesa bas zah2ana shwaya."
    },
    {
     "pt": "B: Está chateada por quê?",
     "ar": "زهقانة ليه؟",
     "arabizi": "Zah2ana leh?"
    },
    {
     "pt": "A: Meu marido sempre sai sozinho, ele não gosta de sair comigo! E eu não gosto de ficar em casa sozinha.",
     "ar": "جوزي دايماً بيُخرُج لِوَحدُه، هو مابيحِبِش يُخرُج معايا! أنا مابحبِش أقعُد في البيت لِوَحدي.",
     "arabizi": "Gozi dayman beio5rog leua7do, howa mabei7ebesh yo5rog ma3aya! Ana maba7ebsh a3od fe elbeit leua7dy."
    },
    {
     "pt": "B: Ele sai sozinho ou sai com alguém?",
     "ar": "هو بيُخرُج لِوَحدُه وَلّا مَعَ حَد؟",
     "arabizi": "Howa beio5rog leua7do walla ma3a 7ad?"
    },
    {
     "pt": "A: Às vezes ele sai sozinho e outras vezes sai com os amigos dele.",
     "ar": "هو ساعات بِيُخرُج لِوَحدُه وساعات بيخرُج مَعَ أصحابُه.",
     "arabizi": "Howa sa3at beio5rog leua7do we sa3at beio5rog ma3a as7abo."
    },
    {
     "pt": "B: Você precisa conversar com ele! (f)",
     "ar": "انتي لازِم (مِحتاجة) تِتكَلِمي مَعاه!",
     "arabizi": "Enty lazem (mei7taga) tetkalemy ma3ah!"
    }
   ],
   "src": "2026-09-11"
  },
  {
   "id": "lei-31-juntos-com-ela-sozinho-tarefas-de-casa",
   "title": "Juntos · com ela · sozinho(a) — tarefas de casa (Aula 84)",
   "src": "2026-09-18 (tabela da Aula 84)",
   "items": [
    {
     "pt": "Nós assistimos séries da Netflix juntos.",
     "ar": "احنا بِنِتفَرَج عَلى مسلسلات نتفليكس مَعَ بعض.",
     "arabizi": "E7na benetfarag 3ala mosalsalat Netflix ma3a ba3d."
    },
    {
     "pt": "Nós limpamos a casa juntos.",
     "ar": "احنا بِنَضَف البيت مَعَ بَعض.",
     "arabizi": "E7na bennadaf elbeit ma3a ba3d."
    },
    {
     "pt": "Nós preparamos o café da manhã e o jantar juntos.",
     "ar": "احنا بِنحَضَر الفِطار والعَشا مَعَ بَعض.",
     "arabizi": "E7na ben7adar elfetar wel3asha ma3a ba3d."
    },
    {
     "pt": "Eu cozinho o almoço com ela.",
     "ar": "أنا بَطبُخ الغَدا مَعاها.",
     "arabizi": "Ana batbo5 el8ada ma3aha."
    },
    {
     "pt": "Às vezes eu passeio com ele (o cachorro) e às vezes ela passeia com ele sozinha.",
     "ar": "ساعات أنا بَمشي معاه (الكَلب) وساعات هي بِتِمشي معاه لوحدها.",
     "arabizi": "Sa3at ana bamshy ma3ah (elkalb) we sa3at heya betmshy ma3ah leua7daha."
    },
    {
     "pt": "Eu lavo a roupa sozinho.",
     "ar": "أنا بَغسَل الهدوم لوحدي.",
     "arabizi": "Ana ba8sel elhdom leua7dy."
    },
    {
     "pt": "Eu arrumo o quarto sozinho.",
     "ar": "أنا بَرَوَق الأوضة لِوَحدي.",
     "arabizi": "Ana baraua2 eloda leua7dy."
    },
    {
     "pt": "Eu estudo árabe sozinho.",
     "ar": "أنا بَتعَلِم عربي لوحدي.",
     "arabizi": "Ana bat3alem 3araby leua7dy."
    },
    {
     "pt": "Ela lava a louça sozinha.",
     "ar": "هي بِتِغسِل المواعين لِوَحدَها.",
     "arabizi": "Heya bet8sel elmaua3in leua7daha."
    },
    {
     "pt": "Ela passa a roupa sozinha.",
     "ar": "هي بِتكوي الهدوم لِوَحدَها.",
     "arabizi": "Heya betkwy elhdom leua7daha."
    }
   ]
  },
  {
   "id": "lei-33-heba-nao-sai-de-casa-ha-muito-tempo",
   "title": "Heba não sai de casa há muito tempo — diálogo (Aula 87)",
   "src": "2026-10-09 (Aula 87)",
   "items": [
    {
     "pt": "A: Olá Heba, como você está agora?",
     "ar": "أهلاً ياهبه! ازيك دلوقتي؟",
     "arabizi": "Ahlan ya Heba! Ezayek delua2ty?"
    },
    {
     "pt": "B: Estou mais ou menos, não estou muito bem.",
     "ar": "نُص نُص، مِش كويسة أوي.",
     "arabizi": "Nos nos, mesh kowayessa awi."
    },
    {
     "pt": "B (alternativa): Não estou no meu melhor.",
     "ar": "مِش أحسَن حاجة.",
     "arabizi": "Mesh a7san 7aga."
    },
    {
     "pt": "A: Por quê? Faz quanto tempo que você não sai de casa?",
     "ar": "ليه ياهبه؟ بَقالِك قَد ايه مابتخرجيش مِن البيت؟",
     "arabizi": "Leh ya Heba? Ba2alek 2ad eh mabeto5roguish men elbeit?"
    },
    {
     "pt": "B: Faz muito tempo, e todos os dias eu faço a mesma coisa. Quero sair ou viajar, mas não quero sair sozinha.",
     "ar": "بقالي كتير أوي، وكُل يوم بَعمِل نَفس الحاجة، نِفسي أخرُج أو أسافِر بَس مِش عايزة أخرُج لِوَحدي.",
     "arabizi": "Ba2aly ketir awi, we kol youm ba3mel nafs el7aga, nefsy a5rog au assafer bas mesh 3aeiza a5rog leua7dy."
    },
    {
     "pt": "A: Eu posso sair com você!",
     "ar": "أنا مُمكِن أخرُج مَعاكي.",
     "arabizi": "Ana momken a5rog ma3aki."
    },
    {
     "pt": "B: Quero ir ao parque e comer ou beber alguma coisa. Você tem carro?",
     "ar": "أنا نِفسي أروح الجنينة وآكُل أو أشرَب حاجة. انتي عَندِك عربية؟",
     "arabizi": "Ana nefsy aru7 elgenina we akol au ashrab 7aga. Enty 3andek 3arabeya?"
    },
    {
     "pt": "A: Eu não tenho carro, tenho uma bicicleta, mas o meu irmão tem carro.",
     "ar": "أنا ماعنديش عربية، عَندي عجلة، بَس أخويا عَندُه عربية.",
     "arabizi": "Ana ma3andish 3arabeya, 3andy 3agala, bas a5oya 3ando 3arabeya."
    },
    {
     "pt": "B: Sem problemas! Podemos ir de metrô ou de ônibus.",
     "ar": "مافيش مشكلة! مُمكِن نروح بالمترو أو بالباص (بالأتوبيس).",
     "arabizi": "Mafish moshkela! Momken neru7 belmetro au belbas (belotobis)."
    },
    {
     "pt": "A: Não! Eu vou falar com o meu irmão e vamos de carro!",
     "ar": "لا لا لا لا! أنا هَتكَلِم مَعَ أخويا وهَنروح بالعربية!",
     "arabizi": "La la la la! Ana hatkalem ma3a a5oya we hanru7 bel3arabeya."
    }
   ]
  },
  {
   "id": "lei-34-faz-quanto-tempo-perguntas-e-respostas",
   "title": "Faz quanto tempo? — perguntas e respostas com بَقال (Aula 88)",
   "src": "2026-10-14 (Aula 88 · gabarito das perguntas da Aula 87)",
   "items": [
    {
     "pt": "Faz quanto tempo que você mora em Dubai?",
     "ar": "بَقالِك قَد ايه عايِش في دُبي؟",
     "arabizi": "Ba2alek 2ad eh 3ayesh fe Dubai?"
    },
    {
     "pt": "Faz dez anos que moro em Dubai.",
     "ar": "بقالي عَشَر سنين عايش في دبي.",
     "arabizi": "Ba2aly 3ashar senin 3ayesh fe Dubai."
    },
    {
     "pt": "Faz quanto tempo que você trabalha?",
     "ar": "بقالَك قَد ايه بتشتغل؟",
     "arabizi": "Ba2alak 2ad eh beteshta8al?"
    },
    {
     "pt": "Faz dois anos que trabalho nesta empresa, mas faz muito tempo que trabalho em geral.",
     "ar": "بقالي سَنَتين بَشتغل في الشركة دي بَس بقالي كتير بَشتَغَل عامةً.",
     "arabizi": "Ba2aly sanatein bashta8al fe elsherka di bas ba2aly ketir bashta8al 3amatan."
    },
    {
     "pt": "Faz quanto tempo que você aprende árabe?",
     "ar": "بقالَك قد ايه بتتعلم عربي؟",
     "arabizi": "Ba2alak 2ad eh betet3alem 3arabi?"
    },
    {
     "pt": "Faz um ano que aprendo árabe.",
     "ar": "بقالي سنة بتعلم عربي.",
     "arabizi": "Ba2aly sana bat3alem 3arabi."
    },
    {
     "pt": "Faz quanto tempo que você conhece a sua esposa?",
     "ar": "بقالَك قد ايه تعرف مِراتَك؟",
     "arabizi": "Ba2alak 2ad eh te3raf meratak?"
    },
    {
     "pt": "Faz doze anos que conheço a minha esposa.",
     "ar": "بقالي اتناشَر سنة أعرَف مِراتي.",
     "arabizi": "Ba2aly etnashar sana a3raf meraty."
    },
    {
     "pt": "Faz quanto tempo que a sua mãe e o seu pai são casados?",
     "ar": "مامتَك وباباك بَقالهُم قد ايه مِتجوزين؟",
     "arabizi": "Mamtak we babak ba2alhom 2ad eh metgawzin?"
    },
    {
     "pt": "A mamãe e o papai são casados faz quarenta anos.",
     "ar": "ماما وبابا متجوزين بَقالهُم أربعين سنة.",
     "arabizi": "Mama we baba metgawzin ba2alhom arbe3in sana."
    }
   ]
  },
  {
   "id": "lei-35-conversa-falar-e-dizer-aula-91",
   "title": "Conversa — falar, dizer e o dia a dia (Aula 91)",
   "src": "2026-10-23 (Aula 91)",
   "items": [
    {
     "pt": "Quantas línguas você fala?",
     "ar": "انت بتتكلم كام لغة؟",
     "arabizi": "Enta betetkalem kam lo8a?"
    },
    {
     "pt": "Eu falo duas línguas: português e inglês, e atualmente estou aprendendo árabe.",
     "ar": "أنا بتكلم لغتين: برتغالي وانجليزي وحالياً بتعَلِم عربي.",
     "arabizi": "Ana batkalem lo8atein: borto8aly we engelizy we 7aleyan bat3alem 3arabi."
    },
    {
     "pt": "Com quem você gosta de falar quando está triste?",
     "ar": "انت بتحب تتكلم مع مين وانت زعلان؟",
     "arabizi": "Enta bet7eb tetkalem ma3a min we enta za3lan?"
    },
    {
     "pt": "Eu gosto de falar com a minha esposa quando estou triste.",
     "ar": "أنا بَحِب اتكَلِم مع مراتي وأنا زَعلان.",
     "arabizi": "Ana ba7eb atkalem ma3a meraty we ana za3lan."
    },
    {
     "pt": "Você prefere falar ao telefone ou no WhatsApp?",
     "ar": "انت بتفَضَل تتكلم في التليفون ولا تتكلم على واتساب؟",
     "arabizi": "Enta betfadal tetkalem fe eltelefon walla tetkalem 3ala WhatsApp?"
    },
    {
     "pt": "Eu prefiro falar no WhatsApp.",
     "ar": "أنا بَفَضَل أتَكلم عَلى الواتساب.",
     "arabizi": "Ana bafadal atkalem 3ala elWhatsApp."
    },
    {
     "pt": "Por quê?",
     "ar": "ليه؟",
     "arabizi": "Leh?"
    },
    {
     "pt": "Não gosto de falar ao telefone.",
     "ar": "مابحبش أتكَلم في التليفون.",
     "arabizi": "Maba7ebesh atkalem fe eltelefon."
    },
    {
     "pt": "Você está vendo (assistindo) alguma coisa agora?",
     "ar": "انتَ بتشوف (بتتفرج عَلى) حاجة دلوقتي؟",
     "arabizi": "Enta betshuf (betetfarag 3ala) 7aga delwa2ty?"
    },
    {
     "pt": "Sim, estou vendo Trap na Netflix, uma série inglesa mais ou menos.",
     "ar": "ايوة، أنا بشوف تراب عَلى نتفليكس، مسلسل انجليزي نص نص.",
     "arabizi": "Aywa, ana bashuf Trap 3ala Netflix, mosalsal engelizy nos nos."
    },
    {
     "pt": "Amanhã você vai encontrar alguém?",
     "ar": "بكرة هتقابِل حد؟",
     "arabizi": "Bokra hat2abel 7ad?"
    },
    {
     "pt": "Não, não vou encontrar ninguém. Vou descansar em casa na folga e não vou fazer nada.",
     "ar": "لا، أنا مِش هَقابِل حَد. أنا هَرَيَح في البيت في الأجازة ومِش هَعمِل حاجة.",
     "arabizi": "La2, ana mesh ha2abel 7ad. Ana haraya7 fe elbeit fe elagaza we mesh ha3mel 7aga."
    },
    {
     "pt": "Você ajuda os seus colegas no trabalho? Como?",
     "ar": "انتَ بِتساعِد زَمايلك في الشُغل؟ ازاي؟",
     "arabizi": "Enta betsa3ed zamaylak fe elsho8l? Ezay?"
    },
    {
     "pt": "Sim, eu ajudo muito os meus colegas em tudo, por exemplo mando e-mails, falo com o gerente e faço reuniões e tarefas.",
     "ar": "ايوة، أنا بَساعِد زَمايلي كتير في كل حاجة، مثلاً ببعت ايميلات وبتكلم مع المدير وبَعمِل ميتينجز (اجتماعات) وتاسكات.",
     "arabizi": "Aywa, ana basa3ed zamayly ketir fe kol 7aga, masalan bab3at emailat we batkalem ma3a elmodir we ba3mel meetings (egtema3at) we tasks."
    },
    {
     "pt": "O que você está tentando fazer atualmente?",
     "ar": "انت بتحاول تعمل ايه حالياً؟",
     "arabizi": "Enta bet7awel te3mel eh 7aleyan?"
    },
    {
     "pt": "Estou tentando fazer dieta para emagrecer, tento comer comida caseira e saudável e tento dormir cedo.",
     "ar": "أنا بحاوِل أعمِل دايت عشان أخِس، بحاوِل آكُل أكل بيتي وصحي وبَحاوِل أنام بَدري.",
     "arabizi": "Ana ba7awel a3mel diet 3ashan a5es, ba7awel akol akl beity we se7y we ba7awel anam badry."
    }
   ]
  },
  {
   "id": "lei-36-dialogo-o-fim-de-semana-aula-93",
   "title": "Diálogo · o fim de semana — talvez… (Aula 93)",
   "src": "2026-11-06 (Aula 93)",
   "items": [
    {
     "pt": "O que você vai fazer no fim de semana (nas folgas)?",
     "ar": "هتعمل ايه في الويك أند (الأجازة)؟",
     "arabizi": "Hate3mel eh fe elweekend (elagaza)?"
    },
    {
     "pt": "Eu talvez vá à praia amanhã com a minha esposa e a minha mãe.",
     "ar": "أنا احتمال أروح البَحر بُكرة مَعَ مراتي وماما.",
     "arabizi": "Ana e7temal aru7 elba7r bokra ma3a meraty we mama."
    },
    {
     "pt": "Você não vai à academia? Por quê?",
     "ar": "مش هتروح الجيم؟ ليه؟",
     "arabizi": "Mesh hatru7 elgym? Leh?"
    },
    {
     "pt": "Eu não vou à academia nas folgas, prefiro descansar na piscina.",
     "ar": "أنا مابروحش الجيم في الأجازة، أنا بَفَضَل أريح في البسين.",
     "arabizi": "Ana mabaru7sh elgym fe elagaza, ana bafadal araya7 fe elbesin."
    },
    {
     "pt": "Você não vai ver os seus amigos? — Talvez… depende.",
     "ar": "مش هتشوف أصحابَك؟ — يِمكِن / ممكن / احتِمال… عَلى حَسَب.",
     "arabizi": "Mesh hatshuf as7abak? — Yemken / momken / e7temal… 3ala 7asab."
    }
   ]
  },
  {
   "id": "lei-37-perguntas-apresente-se-aula-92",
   "title": "Perguntas · apresente-se (Aula 92)",
   "src": "2026-10-28 (Aula 92)",
   "items": [
    {
     "pt": "Apresente-se: qual é o seu nome? De onde você é? Onde mora agora? O que faz? Quantos anos tem? É casado? Tem animais?",
     "ar": "عَرَف نَفسَك: اسمَك ايه؟ انت منين؟ ساكِن فين دلوقتي؟ بتشتغل ايه؟ عندك كام سنة؟ متجوز؟ عندك حيوانات؟",
     "arabizi": "3aref nafsak: esmak eh? Enta menein? Saken fein delwa2ty? Beteshta8al eh? 3andak kam sana? Metgawez? 3andak 7ayawanat?"
    },
    {
     "pt": "O que você faz no seu dia?",
     "ar": "انت بِتعمِل ايه في يومَك؟",
     "arabizi": "Enta bete3mel eh fe yomak?"
    },
    {
     "pt": "Quantas línguas você sabe falar?",
     "ar": "بِتِعرَف تِتكَلم كام لغة؟",
     "arabizi": "Bete3raf tetkalem kam lo8a?"
    },
    {
     "pt": "Você pratica esporte? Qual?",
     "ar": "بِتِلعَب رياضة؟ ايه؟",
     "arabizi": "Betel3ab reyada? Eh?"
    },
    {
     "pt": "Você gosta de ler? Sobre o quê?",
     "ar": "بِتحِب تِقرا؟ عَن ايه؟",
     "arabizi": "Bet7eb te2ra? 3an eh?"
    },
    {
     "pt": "O que você faz quando está triste?",
     "ar": "بِتعمل ايه لَما تِكون زَعلان؟",
     "arabizi": "Bete3mel eh lama tekun za3lan?"
    },
    {
     "pt": "O que você vai fazer nas férias de Natal?",
     "ar": "هَتِعمِل ايه في أجازة الكريسماس؟",
     "arabizi": "Hate3mel eh fe agazet elkrismas?"
    },
    {
     "pt": "O que você vai fazer nas férias de Carnaval?",
     "ar": "هَتعمل ايه في أجازة الكرنفال؟",
     "arabizi": "Hate3mel eh fe agazet elkarnaval?"
    },
    {
     "pt": "O que você vai fazer no seu aniversário?",
     "ar": "هَتعمِل ايه في عيد ميلادَك؟",
     "arabizi": "Hate3mel eh fe 3id miladak?"
    },
    {
     "pt": "Quem é o seu melhor amigo (amigo mais próximo)? Por quê?",
     "ar": "مين أقرب صاحِب ليك؟ ليه؟",
     "arabizi": "Min a2rab sa7eb lik? Leh?"
    },
    {
     "pt": "Faz quanto tempo que você trabalha? Gosta do seu trabalho? Por quê?",
     "ar": "بقالَك قد ايه بتشتغل؟ بتحب شُغلَك؟ ليه؟",
     "arabizi": "Ba2alak 2ad eh beteshta8al? Bet7eb sho8lak? Leh?"
    }
   ]
  },
  {
   "id": "lei-38-ehab-apresenta-a-familia-apostila2",
   "title": "Leitura · Ehab apresenta a família (Apostila 2 p.7)",
   "src": "Apostila 2 p.7",
   "items": [
    {
     "pt": "Hoje eu quero mostrar a vocês a minha família.",
     "ar": "النهاردة أنا عايز أوريكوا أُسرتي.",
     "arabizi": "Enaharda ana 3aeiz auariku osrety."
    },
    {
     "pt": "A minha família é pequena, e nós vivemos juntos na mesma casa.",
     "ar": "أُسرتي صُغَيَّرة، وإحنا عايشين مع بعض في نفس البيت.",
     "arabizi": "Osrety so8ayara, e7na 3ayshin ma3a ba3d fi nafs el beit."
    },
    {
     "pt": "Meu nome é Ehab e eu tenho uma irmã mais velha que se chama Manal e outra irmã pequena que se chama Ebtessam.",
     "ar": "أنا اسمي إيهاب وعندي أخت كبيرة اسمها منال وأخت تانية صُغَيَّرة اسمها ابتسام.",
     "arabizi": "Ana esmy Ehab we 3andy o5t kebira esmaha Manal we o5t tanya so8ayara esmaha Ebtessam."
    },
    {
     "pt": "Meu pai se chama Samy e minha mãe se chama Radwa.",
     "ar": "بابايا اسمه سامي ومامتي اسمها رَضوى.",
     "arabizi": "Babaya esmo Samy we mamty esmaha Radua."
    },
    {
     "pt": "Meu pai é contador e minha mãe é professora.",
     "ar": "بابايا مُحاسِب ومامتي مُدَرِسة.",
     "arabizi": "Babaya mo7asseb we mamty modaressa."
    },
    {
     "pt": "Na nossa família há muitos professores, porque a minha tia Salwa também trabalha como professora e o meu tio Amir também é professor.",
     "ar": "عيلتنا فيها مُدَرِسين كتير، لأن عمتي سلوى كمان بتشتغل مُدَرِسة وخالي أمير برضه مُدَرِس.",
     "arabizi": "3eletna fiha modaressin ktir, la2en 3amety Salua kaman beteshta8al modaressa we 5aly Amir bardo modares."
    },
    {
     "pt": "A minha mãe é professora de biologia, a minha tia é professora de geografia e o meu tio é professor de história.",
     "ar": "مامتي مُدَرِسة أحياء وعمتي مُدَرِسة جُغرافيا وخالي مُدَرِس تاريخ.",
     "arabizi": "Mamty modaresset a7ya2 we 3amety modaresset go8rafia we 5aly modares tari5."
    },
    {
     "pt": "Eu e as minhas irmãs ainda somos estudantes na escola.",
     "ar": "أنا وإخواتي البنات لِسا طُلاب في المدرسة.",
     "arabizi": "Ana we e5uaty el banat lessa tolab fe el madrassa."
    },
    {
     "pt": "Nós vamos para a mesma escola com os filhos do meu tio.",
     "ar": "إحنا بنروح نفس المدرسة مع أولاد عمي.",
     "arabizi": "E7na benru7 nafs el madrassa ma3a aulad 3amy."
    },
    {
     "pt": "Porque a escola é perto da nossa casa e da casa deles.",
     "ar": "لأن المدرسة قريبة من بيتنا ومن بيتهم.",
     "arabizi": "La2en el madrassa orayeba men beitna we beithom."
    },
    {
     "pt": "Nós e eles moramos no mesmo bairro.",
     "ar": "إحنا وهما ساكنين في نفس الحي.",
     "arabizi": "E7na we homa saknin fi nafs el 7ay."
    }
   ]
  },
  {
   "id": "lei-39-ramy-quer-aprender-a-dirigir-apostila2",
   "title": "Leitura · Ramy quer aprender a dirigir (Apostila 2 p.11)",
   "src": "Apostila 2 p.11",
   "items": [
    {
     "pt": "Ramy tem uma reunião importante no trabalho hoje e precisa chegar cedo à empresa.",
     "ar": "رامي عنده إجتِماع مُهِم في الشغل النهاردة ولازم يوصل الشركة بدري.",
     "arabizi": "Ramy 3ando ektema3 mohem fe el sho8l enaharda we lazem yaussal el sherka badry."
    },
    {
     "pt": "Normalmente Ramy pega o ônibus para ir ao trabalho, mas hoje ele está com pressa, então decidiu pegar um táxi.",
     "ar": "رامي عادةً بياخد الأتوبيس عشان يروح الشغل، بس النهاردة هو مِستعجِل فقرر ياخد تاكسي.",
     "arabizi": "Ramy 3adatan bia5od el otobis 3ashan yeru7 el sho8l, bas enaharda howa mesta3gel fa karar ya5od taxi."
    },
    {
     "pt": "Ramy não tem carro porque não sabe dirigir.",
     "ar": "رامي ماعندوش عربية لأنه مِش بيعرف يسوق.",
     "arabizi": "Ramy ma3andush 3arabeya la2no mesh bei3raf yessu2."
    },
    {
     "pt": "Ele quer aprender a dirigir, mas não tem muito tempo livre, porque trabalha todos os dias das 8h da manhã às 5h da tarde e volta para casa por volta das 7h da noite.",
     "ar": "هو عايز يتعلم السواقة بس هو ماعندوش وقت فاضي كتير، وده لأنه بيشتغل كل يوم من الساعة 8 الصبح للساعة 5 بعد الضهر وبيرجع البيت على الساعة 7 بالليل.",
     "arabizi": "Howa 3aeiz yet3alem el seua2a, bas howa ma3andush wa2t fady ktir we da la2eno beishta8al men el sa3a 8 el sop7 lel sa3a 5 ba3d el dohr kol youm we beirga3 el beit 3ala el sa3a 7 beilel."
    },
    {
     "pt": "Ele vai tirar férias em julho que vem e está pensando em aproveitar a oportunidade para ir a uma autoescola aprender, porque vai ter muito tempo livre nas férias.",
     "ar": "هو هياخد أجازة في شهر يوليو الجاي وبيفكر يستغِل الفُرصة ويروح مدرسة سواقة عشان يتعلم، لأنه هيكون عنده وقت فاضي كتير في الأجازة.",
     "arabizi": "Howa haya5od agaza fi shahr yolyo el gai we beifakar yesta8el el forsa we yeru7 madraset seua2a 3ashan yet3alem, la2eno haykun 3ando wa2t fady ktir fe el agaza."
    },
    {
     "pt": "Ele está muito animado e quer comprar um carro assim que terminar as aulas e tirar a carteira.",
     "ar": "هو مُتحَمِس اوي وعايز يشتري عربية أول ما يخلص الحِصَص وياخد الرُخصة.",
     "arabizi": "Howa mota7ames awi we 3aeiz yeshtery 3arabeya awel ma ye5ales el 7essas we ya5od el ro5sa."
    }
   ]
  },
  {
   "id": "lei-40-amir-e-samy-viagem-hurghada-apostila2",
   "title": "Diálogo · Amir e Samy vão para Hurghada (Apostila 2 pp.15-16)",
   "src": "Apostila 2 p.15-16",
   "items": [
    {
     "pt": "Amir: Olá, Samy, tudo bem? Como você está?",
     "ar": "أمير: أهلاً يا سامي، عامل إيه؟ إزيك؟",
     "arabizi": "Amir: Ahlan ya Samy, 3amel eh? Ezayak?"
    },
    {
     "pt": "Samy: Tudo bem, graças a Deus. E você, quais as novidades?",
     "ar": "سامي: تمام الحمد لله، وانت إيه الأخبار؟",
     "arabizi": "Samy: Tmam el 7amdlelah, we enta eh el a5bar?"
    },
    {
     "pt": "Amir: Tudo certo. Só estou um pouco chateado.",
     "ar": "أمير: كله تمام. بس زهقان شوية.",
     "arabizi": "Amir: Kolo tmam, bas zah2an shewia."
    },
    {
     "pt": "Samy: Mas por quê?",
     "ar": "سامي: ليه بس؟",
     "arabizi": "Samy: Leh bas?"
    },
    {
     "pt": "Amir: Alguns problemas no trabalho, como sempre.",
     "ar": "أمير: شوية مشاكِل في الشغل كالعادة.",
     "arabizi": "Amir: Shewayet mashakel fe el sho8l kal 3ada."
    },
    {
     "pt": "Samy: Eu vou para Hurghada com Samir e Fahmy na quinta-feira; vamos ficar lá de quinta a sábado. Quer vir com a gente?",
     "ar": "سامي: أنا هروح الغردقة مع سمير وفهمي يوم الخميس، هنقعد هناك من الخميس للسبت. تحب تيجي معانا؟",
     "arabizi": "Samy: Ana haru7 el gharda2a ma3a Samir we Fahmy youm el 5amis, hano3od henak men el 5amis lel sapt. Te7eb tegy ma3ana?"
    },
    {
     "pt": "Amir: Sim, claro. Adoraria ir com vocês. Você sabe que eu não gosto de viajar para lugar nenhum sozinho.",
     "ar": "أمير: آه، طبعاً. أحب أجي معاكوا. انت عارف مابحبش أسافر حِتة لوحدي.",
     "arabizi": "Amir: Ah, tab3an. A7eb agy ma3aku. Enta 3aref maba7ebsh assafer 7eta leua7dy."
    },
    {
     "pt": "Samy: Ótimo. Prepara as malas, e eu te ligo depois para te contar os detalhes.",
     "ar": "سامي: تمام اوي. جَهِز الشُنَط وهتِصِل بيك بعدين عشان أقولك التفاصيل.",
     "arabizi": "Samy: Tmam awi. Gahez el shonat we hatessel bik ba3dein 3ashan a2ulak el tafassil."
    }
   ]
  },
  {
   "id": "lei-41-amira-e-zeinab-ir-ao-medico-apostila2",
   "title": "Diálogo · Amira e Zeinab vão ao médico (Apostila 2 pp.19-20)",
   "src": "Apostila 2 p.19-20",
   "items": [
    {
     "pt": "Amira: Como você está, Zeinab? Tudo bem? Faz muito tempo que você não vai à faculdade, você está bem?",
     "ar": "أميرة: إزيك يا زينب؟ عاملة إيه؟ بقالِك كتير مِش بتروحي الكلية، انتي كويسة؟",
     "arabizi": "Amira: Ezayek ya Zeinab? 3amla eh? Ba2alek ktir mesh betru7y el koleya, enty kouayessa?"
    },
    {
     "pt": "Zeinab: Estou um pouco doente há alguns dias e preciso ir ao médico.",
     "ar": "زينب: أنا تعبانة شوية بقالي كام يوم ومِحتاجة أروح الدكتور.",
     "arabizi": "Zeinab: Ana ta3bana shewia ba2aly kam youm we mei7taga aru7 el doctor."
    },
    {
     "pt": "Amira: Se não tiver ninguém para ir com você, eu posso ir com você.",
     "ar": "أميرة: لو مافيش حد يروح معاكي، أنا مُمكِن أروح معاكي.",
     "arabizi": "Amira: Lau mafish 7ad yeru7 ma3aky, ana momken aru7 ma3aky."
    },
    {
     "pt": "Zeinab: Muito obrigada, Amira. Você está sempre ao meu lado e me ajuda em muitas coisas.",
     "ar": "زينب: مِتشكرة اوي يا أميرة. انتي دايماً جنبي وبتساعديني في حاجات كتير.",
     "arabizi": "Zeinab: Motashakera awi ya Amira. Enty dayman gamby we betsa3dini fi 7agat ktir."
    },
    {
     "pt": "Amira: Quer que a gente vá ao médico hoje? Eu conheço um médico muito bom e a clínica é perto daqui.",
     "ar": "أميرة: تحبي نروح الدكتور النهاردة؟ أنا أعرف دكتور شاطِر اوي والعيادة قريبة من هنا.",
     "arabizi": "Amira: Te7eby neru7 el doctor enaharda? Ana a3raf doctor shater awi we el 3eyada orayeba men hena."
    },
    {
     "pt": "Zeinab: Combinado, hoje ao meio-dia está bom.",
     "ar": "زينب: تمام، النهاردة الضهر كويس.",
     "arabizi": "Zeinab: Tmam, enaharda el dohr kouayes."
    },
    {
     "pt": "Amira: Combinado, tchau. Até daqui a pouco.",
     "ar": "أميرة: مِتفِقين، سلام. أشوفِك كمان شوية.",
     "arabizi": "Amira: Metef2in, salam. Ashufek kaman shewia."
    }
   ]
  },
  {
   "id": "lei-42-ali-liga-para-ramy-apostila2",
   "title": "Diálogo · Ali liga para Ramy (Apostila 2 p.24)",
   "src": "Apostila 2 p.24",
   "items": [
    {
     "pt": "Ali: Alô! Como vai, Ramy? Quais as novidades?",
     "ar": "علي: ألو! إزيك يا رامي؟ إيه الأخبار؟",
     "arabizi": "Ali: Alô! Ezayak ya Ramy? Eh el a5bar?"
    },
    {
     "pt": "Ramy: Estou bem, graças a Deus.",
     "ar": "رامي: أنا تمام، الحمد لله.",
     "arabizi": "Ramy: Ana tmam, el 7amdlelah."
    },
    {
     "pt": "Ali: Você pode me ajudar? Você tem o número do Amir?",
     "ar": "علي: مُمكِن تساعدني؟ معاك رقم أمير؟",
     "arabizi": "Ali: Momken tesa3edny? Ma3ak rakam Amir?"
    },
    {
     "pt": "Ramy: Sim, tenho.",
     "ar": "رامي: آه، معايا.",
     "arabizi": "Ramy: Ah, ma3aya."
    },
    {
     "pt": "Ali: Você pode me mandar o número? Preciso ligar para ele e não estou achando o número dele!",
     "ar": "علي: مُمكِن تبعتلي الرقم؟ أنا مِحتاج أتِصِل بيه ومِش لاقي رقمه!",
     "arabizi": "Ali: Momken teb3atly el rakam? Ana mei7tag atessel bih we mesh la2y rakamo!"
    },
    {
     "pt": "Ramy: Claro, um segundo, vou ver no celular.",
     "ar": "رامي: أكيد، ثانية واحدة، هشوف على الموبايل.",
     "arabizi": "Ramy: Akid, sanya wa7da, hashuf 3ala el mobile."
    },
    {
     "pt": "Ali: Ok, muito obrigado.",
     "ar": "علي: تمام، شكراً اوي.",
     "arabizi": "Ali: Tmam, shukran awi."
    },
    {
     "pt": "Ramy: Posso te ajudar em mais alguma coisa?",
     "ar": "رامي: أساعدك في حاجة تانية؟",
     "arabizi": "Ramy: Assa3dak fi 7aga tanya?"
    },
    {
     "pt": "Ali: Você também pode me dizer qual é o endereço da casa nova do Amir?",
     "ar": "علي: مُمكِن كمان تقولي عِنوان بيت أمير الجديد إيه؟",
     "arabizi": "Ali: Momken kaman te2uly 3enuan beit Amir el gedid?"
    },
    {
     "pt": "Ramy: Rua Al-Salam, 15, Heliópolis (Masr El Gedida).",
     "ar": "رامي: 15 شارع السلام، مصر الجديدة.",
     "arabizi": "Ramy: 15 share3 el salam, masr el gedida."
    }
   ]
  },
  {
   "id": "lei-43-o-gerente-e-o-secretario-apostila2",
   "title": "Diálogo · o gerente e o secretário — لازِم / ضروري / المفروض (Apostila 2 pp.27-28)",
   "src": "Apostila 2 p.27-28",
   "items": [
    {
     "pt": "O gerente: Hassan, você precisa ligar para o Sr. Samir e saber o horário da reunião com ele.",
     "ar": "المُدير: يا حَسَن، انت لازِم تِتِصل بأستاذ سَمير وتِعرف ميعاد الإجتماع مَعاه.",
     "arabizi": "El modir: Ya Hassan, enta lazem tetessel bi ostaz Samir we te3raf ma3ad el ektema3 ma3ah."
    },
    {
     "pt": "O secretário: Claro, senhor.",
     "ar": "السكرتير: أكيد يا فندم.",
     "arabizi": "El sekerter: Akid ya fandam."
    },
    {
     "pt": "O gerente: E você precisa encontrar o cliente novo na terça-feira de manhã.",
     "ar": "المُدير: ولازِم تِقابِل العَميل الجديد يوم التلات الصُبح.",
     "arabizi": "El modir: We lazem te2abel el 3amil el gedid youm el talat el sop7."
    },
    {
     "pt": "O secretário: Certo, senhor. Mais alguma coisa?",
     "ar": "السكرتير: تَمام يا فندم، حاجة تانية؟",
     "arabizi": "El sekerter: Tmam ya fandam, 7aga tanya?"
    },
    {
     "pt": "O gerente: É necessário enviar os e-mails para os funcionários hoje.",
     "ar": "المُدير: ضَروري تِبعَت الإيميلات للموظفين النهاردة.",
     "arabizi": "El modir: Darury teb3at el e-mailat lel mouazafin enaharda."
    },
    {
     "pt": "O secretário: Certo, senhor, vou enviá-los agora.",
     "ar": "السكرتير: تَمام يا فندم، هَبعَتهُم دلوقتي.",
     "arabizi": "El sekerter: Tmam ya fandam, hab3athom delua2ty."
    },
    {
     "pt": "O gerente: E você deveria ver o trabalho no outro escritório e me dizer se há algum problema.",
     "ar": "المُدير: والمَفروض تشوف الشغل في المكتب التاني وتقولي لو فيه مُشكِلة.",
     "arabizi": "El modir: We el mafrud teshuf el sho8l fe el maktab el tany we te2uly lau fih moshkela."
    },
    {
     "pt": "O secretário: Claro, senhor, vou tentar fazer tudo isso!",
     "ar": "السكرتير: أكيد يا فندم، هَحاوِل أعمل كل ده!",
     "arabizi": "El sekerter: Akid ya fandam, ha7awel a3mel kol da!"
    }
   ]
  },
  {
   "id": "lei-44-respostas-sobre-mim-aula-94",
   "title": "Conversa · respostas sobre mim — leitura, aniversário, amigos, trabalho (Aula 94)",
   "src": "2026-11-11 (Aula 94 · arabizi e tradução escritos pelo Claude)",
   "items": [
    {
     "pt": "Você gosta de ler? Sobre o quê?",
     "ar": "بِتحِب تِقرا؟ عَن ايه؟",
     "arabizi": "Bet7eb te2ra? 3an eh?"
    },
    {
     "pt": "Sim, eu gosto de ler livros sobre negócios, crime e filosofia.",
     "ar": "ايوة، أنا بحب أقرا كُتُب عن البيزنس والجريمة والفَلسَفة.",
     "arabizi": "Aywa, ana ba7eb a2ra kotob 3an el business we elgarima we elfalsafa."
    },
    {
     "pt": "Quem é o seu escritor favorito?",
     "ar": "مين الكاتب المُفَضَل؟",
     "arabizi": "Min elkateb elmofadal?"
    },
    {
     "pt": "Eu não tenho escritor favorito, eu leio qualquer livro.",
     "ar": "أنا ماعنديش كاتب مفضل، أنا بقرا أي كُتُب.",
     "arabizi": "Ana ma3andish kateb mofadal, ana ba2ra ay kotob."
    },
    {
     "pt": "Quais são os seus livros favoritos?",
     "ar": "ايه كتبك المفضلة؟",
     "arabizi": "Eh kotobak elmofadala?"
    },
    {
     "pt": "Naguib Mahfouz.",
     "ar": "نجيب محفوظ.",
     "arabizi": "Naguib Mahfouz."
    },
    {
     "pt": "Quando você lê?",
     "ar": "انت بتقرا امتى؟",
     "arabizi": "Enta bete2ra emta?"
    },
    {
     "pt": "Antes de dormir ou de manhã, depois do café da manhã.",
     "ar": "قَبل ما أنام أو الصُبح بعد الفِطار.",
     "arabizi": "2abl ma anam aw elsop7 ba3d elfetar."
    },
    {
     "pt": "O que você vai fazer no seu aniversário?",
     "ar": "هَتعمِل ايه في عيد ميلادَك؟",
     "arabizi": "Hate3mel eh fe 3id miladak?"
    },
    {
     "pt": "Vou jantar com a minha esposa e vou a uma festa com os meus amigos.",
     "ar": "هَتعَشى مَعَ مراتي وهَروح حَفلة مَعَ أصحابي.",
     "arabizi": "Hat3asha ma3a merati we haru7 7afla ma3a as7aby."
    },
    {
     "pt": "Não vou fazer nada diferente. Normal.",
     "ar": "أنا مِش هَعمِل حاجة مُختلفة. عادي.",
     "arabizi": "Ana mesh ha3mel 7aga mo5talefa. 3ady."
    },
    {
     "pt": "Quando é o seu aniversário?",
     "ar": "عيد ميلادَك امتى؟",
     "arabizi": "3id miladak emta?"
    },
    {
     "pt": "O meu aniversário é no dia 4 de janeiro (quatro do um).",
     "ar": "عيد ميلادي يوم 4 يناير. (أربعة واحِد)",
     "arabizi": "3id miladi yom 4 yanayer. (arba3a wa7ed)"
    },
    {
     "pt": "Quem é o seu amigo mais próximo? Por quê?",
     "ar": "مين أقرب صاحِب ليك؟ ليه؟",
     "arabizi": "Min a2rab sa7eb lik? Leh?"
    },
    {
     "pt": "Depois dos quarenta anos, eu já não tenho um amigo próximo. Porque é difícil.",
     "ar": "بعد سن (أربعين سنة) ماعنديش صاحب قُريب خَلاص. عشان صَعب.",
     "arabizi": "Ba3d sen (arb3in sana) ma3andish sa7eb orayeb 5alas. 3ashan sa3b."
    },
    {
     "pt": "Há quanto tempo você trabalha? Gosta do seu trabalho? Por quê?",
     "ar": "بقالَك قد ايه بتشتغل؟ بتحب شُغلَك؟ ليه؟",
     "arabizi": "Ba2alak 2ad eh beteshta8al? Bet7eb sho8lak? Leh?"
    },
    {
     "pt": "Faz muito tempo que eu trabalho.",
     "ar": "بَقالي كتير بشتغل.",
     "arabizi": "Ba2aly ketir bashta8al."
    },
    {
     "pt": "Faz uns vinte anos que eu trabalho.",
     "ar": "بقالي حوالي عشرين سنة بشتغل.",
     "arabizi": "Ba2aly 7awaly 3eshrin sana bashta8al."
    },
    {
     "pt": "Sim, eu gosto do meu trabalho, graças a Deus, porque trabalho de casa todos os dias e aprendo coisas novas em marketing digital.",
     "ar": "ايوة أنا بحب شغلي الحمد لله عشان بشتغل مِن البيت كل يوم وبتعلم حاجات جديدة في الديجيتال ماركتينج.",
     "arabizi": "Aywa, ana ba7eb sho8ly el 7amdlelah 3ashan bashta8al men elbeit kol yom we bat3alem 7agat gedida fe eldigital marketing."
    },
    {
     "pt": "Você gosta dos seus colegas?",
     "ar": "بتحِب زَمايلَك؟",
     "arabizi": "Bet7eb zamaylak?"
    },
    {
     "pt": "Sim, eu tenho uma colega próxima de mim que se chama Seresh; ela é do Paquistão, mas mora em Londres.",
     "ar": "ايوة، أنا عَندي واحدة زميلتي قريبة مني اسمها سيريش، هي مِن باكستان بس هي ساكنة في لَندَن.",
     "arabizi": "Aywa, ana 3andy wa7da zamilty orayeba meny esmaha Seresh, heya men Pakistan bas heya sakna fe London."
    }
   ]
  }
 ],
 "quotes": [
  "Shukran por aparecer ontem. Hoje de novo? 🔥",
  "A professora sabe quando você não estuda. 👀",
  "10 minutinhos. Menos que uma scrollada no LinkedIn. 📱",
  "556 dias de Duolingo e você não desiste. Aqui é que o árabe de verdade mora. 💪",
  "Ma3lesh se ontem foi corrido — mas hoje o treino te espera. 🧆",
  "Seu streak está com saudade. Aywa, ele sente. 🥺",
  "Quarta e sexta tem aula. Chegar afiado é outra vibe. ⚡",
  "Um treino por dia e o Egito inteiro vai te entender. 🐪",
  "Quem treina hoje, brilha na aula. Quem não treina... ma3lesh. 😅",
  "O árabe não vai se aprender sozinho, sa7by. 📖",
  "Falta pouco pro próximo marco. Não pare agora! 🏆",
  "Kolo tamam? Só depois do treino. ✅",
  "Sua streak vale mais que a do Duolingo — essa aqui te faz FALAR. 🗣️",
  "5 minutos de fim de semana. Só isso. Depois pode voltar pro sofá. 🛋️",
  "Bokra você agradece o treino de hoje. 🙏",
  "Treinou hoje? Se não: agora. Se sim: mabsut! 😎",
  "O camelo anda um passo de cada vez. Vá fazer o seu. 🐫",
  "Imagina falar árabe com o pessoal do Egito nas férias. Começa hoje. ✈️",
  "Saba7 el-5er! O treino de hoje está pronto. ☕",
  "Masaa el-5er! Ainda dá tempo de manter a chama. 🔥",
  "Sua professora egípcia ia ficar orgulhosa. Ou vai. Depende de você. 🇪🇬",
  "El-sa3a kam? Hora do árabe. ⏰",
  "Não quebra a corrente. Você sabe como dói recomeçar do zero. ⛓️",
  "Feliz é quem treina: mabsut. Você hoje: ? 🤔",
  "مِش ou ما...ـش? Hoje você escolhe certo. 💪",
  "Mesh 3aref? Depois do treino você fica 3aref. 🧠"
 ]
};
