# Estudo diário de Árabe Egípcio

Sistema de estudo diário 10–20 min, mobile-friendly, totalmente em PT-BR + Árabe Egípcio + Arabizi.
Sem inglês.

## O que tem aqui

- **`index.html`** — página inicial. Mostra a aula de hoje, links para os 3 cartões de referência e a semana inteira com indicador de "✓ feito".
- **`card-alfabeto.html`** — 28 letras + números 0–100 + dias da semana + meses do ano. Toque em qualquer cartão para esconder o português.
- **`card-verbos.html`** — todos os verbos do livro com a tabela de 5 colunas (Você-f, Você-m, Ela, Ele, Eu). Cada verbo expande/recolhe.
- **`card-vocabulario.html`** — vocabulário por categoria: saudações, família, comida, lugares, transporte, sentimentos, etc.
- **`YYYY-MM-DD.html`** — uma aula por dia. Lições completas (~15 min) em dias normais; revisões curtas (~10 min) nos dias de aula (qua e sex).
- **`styles.css`** — estilo compartilhado.

## Como usar no iPhone (sincronização via iCloud Drive)

A pasta já está dentro de `~/Documents/Claude/Projects/rudy-life-os/01-life-areas/personal-development/arabic-course/daily-study/`.

Para abrir no iPhone:

1. Mova ou crie um link simbólico desta pasta para o iCloud Drive:
   ```bash
   ln -s "$HOME/Documents/Claude/Projects/rudy-life-os/01-life-areas/personal-development/arabic-course/daily-study" \
         "$HOME/Library/Mobile Documents/com~apple~CloudDocs/EstudoArabe"
   ```
2. No iPhone, abra o app **Arquivos** → **iCloud Drive** → pasta **EstudoArabe** → toque em `index.html`. O Safari abre.
3. Toque em **Compartilhar → Adicionar à Tela de Início**. Você terá um ícone de "Estudo Árabe" na tela inicial do iPhone, abrindo direto.

### Alternativa: Google Drive
1. Mova a pasta `daily-study/` para qualquer subpasta do Google Drive sincronizada no Mac.
2. No iPhone instale o app Google Drive → abra a pasta → toque em `index.html` → "Abrir em Safari".

## Lógica do conteúdo (70/30)

- **70% do conteúdo** vem das aulas mais recentes (Aula-50, 52, 53 + verbo atual da Apostila pg 88+).
- **30% do conteúdo** é "memória de longo prazo" — uma seção rotativa em cada lição que recicla material da fundação: alfabeto, números, família, saudações, dias da semana, meses do ano.

## Lógica dos dias

- **Domingo, segunda, terça, quinta, sábado** — lição completa (~15 min): tabela do verbo + leitura + escrita + 5 traduções + preposições + memória.
- **Quarta (16h Dubai) e sexta (14h Dubai)** — dia de aula com a professora. Lição reduzida (~10 min): revisão da última aula docx adicionada à pasta `arabic-course/`.

## Como regenerar a próxima semana

Toda semana (idealmente após a aula de sexta), peça ao Claude:

> Regenere as lições diárias de Árabe da próxima semana. Use a aula mais recente em `arabic-course/aula-XX.docx` como base. Mantenha o sistema 70/30 com memória de longo prazo rotativa.

O Claude vai:
1. Ler o arquivo `aula-XX.docx` mais novo na pasta.
2. Extrair os verbos, vocabulário e estruturas novas.
3. Regenerar 7 arquivos `YYYY-MM-DD.html` para a próxima semana.
4. Rodar o Python `generate_lessons.py` no fundo.

## Tabela de pronúncia Arabizi

| Símbolo | Árabe | Som |
|---|---|---|
| 2 | ء / أ / ق (eg.) | hamza (parada glotal) |
| 3 | ع | gutural característico |
| 5 ou kh | خ | j espanhol / rr forte |
| 7 | ح | h gutural forte |
| 8 ou gh | غ | r francês |
| S | ص | s enfático |
| D | ض | d enfático |
| T | ط | t enfático |
| Z | ظ | z enfático |

## Arquitetura

```
daily-study/
├── index.html           # hub homepage
├── styles.css           # estilo compartilhado
├── README.md            # este arquivo
│
├── card-alfabeto.html   # 28 letras + números + dias + meses
├── card-verbos.html     # todos verbos com conjugação 5-pessoa
├── card-vocabulario.html # vocab por categoria
│
└── 2026-05-08.html      # uma aula por dia (gerada)
    2026-05-09.html
    ...
```

Notion habit page: <https://www.notion.so/3596e9c085ab815488aec1e796d8d682>
