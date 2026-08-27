// ─────────────────────────────────────────────────────────────────────
// bank.js — banco de questões do Treino Diário (v2)
// Gerado a partir de fontes atestadas: card-verbos, card-vocabulario,
// card-pessoas, card-alfabeto + leituras/frases das lições verificadas.
// NUNCA inventar árabe: toda entrada nova deve vir de aula/apostila.
// Atualizado pelo skill /arabic-class-update.
// ─────────────────────────────────────────────────────────────────────
const BANK = {
 "version": "2026-08-27",
 "baseadoEm": "Aulas até 79 (2026-08-26) · Apostila nível básico · cards do site",
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
   "id": "prof-",
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
