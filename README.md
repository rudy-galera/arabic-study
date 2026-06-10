# Estudo diário de Árabe Egípcio

Sistema de estudo diário 10–20 min, mobile-friendly, totalmente em PT-BR + Árabe Egípcio + Arabizi.
Sem inglês.

## O que tem aqui

- **`index.html`** — página inicial. Mostra a aula de hoje, links para os 4 cartões de referência e a semana inteira com indicador de "✓ feito".
- **`card-alfabeto.html`** — 28 letras + números 0–100 + dias da semana + meses do ano. Toque em qualquer cartão para esconder o português.
- **`card-verbos.html`** — todos os verbos do livro com a tabela de 5 colunas (Você-f, Você-m, Ela, Ele, Eu). Cada verbo expande/recolhe.
- **`card-vocabulario.html`** — vocabulário por categoria: saudações, família, comida, lugares, transporte, sentimentos, etc.
- **`card-pessoas.html`** — países e nacionalidades (m/f) por região + profissões com forma masculina e feminina.
- **`YYYY-MM-DD.html`** — uma aula por dia. Lições completas (~15 min) em dias normais; revisões curtas (~10 min) nos dias de aula (qua e sex).
- **`styles.css`** — estilo compartilhado.
- **`apple-touch-icon.png` / `icon-192.png` / `icon-512.png` / `manifest.json`** — ícone de app para a tela de início do iPhone (e Android via PWA manifest).

## Como usar no iPhone (GitHub Pages)

Esta pasta é hospedada como site público no GitHub Pages. O iPhone abre direto pelo Safari, sem app de Arquivos.

### Setup inicial (uma vez só)

Veja o passo-a-passo completo em `../HOSTING-iPHONE.md`. Resumo:

1. Criar um repo público no GitHub chamado `arabic-study`.
2. Inicializar git nesta pasta e fazer push:
   ```bash
   cd ~/Documents/Claude/Projects/rudy-life-os/01-life-areas/personal-development/arabic-course/daily-study
   git init && git add . && git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<USER>/arabic-study.git
   git push -u origin main
   ```
3. Em **Settings → Pages** do repo: escolher branch `main`, pasta `/ (root)`. Salvar.
4. Aguardar ~1 min. O site fica disponível em `https://<USER>.github.io/arabic-study/`.
5. No iPhone (Safari): abrir a URL → **Compartilhar → Adicionar à Tela de Início**. Pronto, ícone de app.

### Atualizando o site (depois de cada aula)

Sempre que mexer em qualquer arquivo desta pasta (nova lição, vocabulário, verbos), faça push:

```bash
cd ~/Documents/Claude/Projects/rudy-life-os/01-life-areas/personal-development/arabic-course/daily-study
git add .
git commit -m "Aula XX · YYYY-MM-DD"
git push
```

Em ~30 segundos o GitHub Pages reconstrói. No iPhone, basta dar refresh.

**Atalho:** o slash command `/arabic-class-update` faz isso automaticamente — extrai o conteúdo do docx mais recente, regenera as próximas lições, atualiza os cartões e faz push, tudo em uma chamada.

## Lógica do conteúdo (70/30)

- **70% do conteúdo** vem das aulas mais recentes (Aula-50, 52, 53 + verbo atual da Apostila pg 88+).
- **30% do conteúdo** é "memória de longo prazo" — uma seção rotativa em cada lição que recicla material da fundação: alfabeto, números, família, saudações, dias da semana, meses do ano.

## Lógica dos dias

- **Domingo, segunda, terça, quinta, sábado** — lição completa (~15 min): tabela do verbo + leitura + escrita + 5 traduções + preposições + memória.
- **Quarta (16h Dubai) e sexta (14h Dubai)** — dia de aula com a professora. Lição reduzida (~10 min): revisão da última aula docx adicionada à pasta `arabic-course/`.

## Como regenerar depois de cada aula

A professora compartilha o docx das aulas (quartas e sextas). Depois de salvar o novo `aula-XX-YYYY-MM-DD-Exercicios.docx` em `../` (a pasta `arabic-course/`), use:

```
/arabic-class-update
```

O comando faz tudo de uma vez:
1. Encontra o docx mais recente em `arabic-course/`.
2. Extrai verbos, vocabulário e estruturas novas.
3. Atualiza `card-verbos.html` e `card-vocabulario.html` (e `card-pessoas.html` se houver nacionalidade/profissão nova).
4. Regenera as próximas 7 lições `YYYY-MM-DD.html` com a regra 70/30 (70% novo, 30% memória de longo prazo).
5. Faz `git add/commit/push` na pasta `daily-study/` para deployar no GitHub Pages.
6. Confirma a URL e o tempo estimado para o site atualizar.

Alternativa manual (se quiser controlar cada passo): peça em linguagem natural — "aula nova adicionada, regenera os próximos dias", "atualiza só o vocabulário", etc.

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
