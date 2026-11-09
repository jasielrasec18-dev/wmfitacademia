# WM Fit Academia

Landing page institucional da **WM Fit Academia**, academia de Petrolina/PE com musculação e aulas coletivas (Step, Jump, FitDance, Muay Thai e Funcional). O site apresenta modalidades, grade de horários, oferta promocional, equipe, localização e FAQ, e leva o visitante direto ao WhatsApp para agendar uma aula experimental.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Vitest](https://img.shields.io/badge/Testes-Vitest-6E9F18?logo=vitest&logoColor=white)

> **Projeto em fase de proposta.** Endereço, telefone, e-mail, links de redes sociais e as fotos dos professores são **fictícios** (as fotos foram geradas por IA). Todos esses dados ficam centralizados em um único arquivo e devem ser trocados quando o cliente fechar o projeto. Veja [Personalização](#personalização).

## Sumário

- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Como executar](#como-executar)
- [Scripts disponíveis](#scripts-disponíveis)
- [Personalização](#personalização)
- [Testes](#testes)
- [Build e deploy](#build-e-deploy)

## Funcionalidades

- **Hero** com destaque da academia e indicadores (horário de funcionamento, comunidade no Instagram).
- **Modalidades** com descrição e ícone de cada atividade.
- **Grade de horários** por período (manhã, noite e sábado), com professor responsável.
- **Oferta promocional** com contagem regressiva configurável e botão para o WhatsApp.
- **Aula experimental**: formulário que monta uma mensagem pronta e abre o WhatsApp da academia.
- **Equipe** com foto, nome e modalidade de cada professor (com ícone de reserva quando não há foto).
- **Comunidade e depoimentos** com carrossel automático.
- **Unidades**: endereço, telefone, e-mail, link "Como chegar", mapa incorporado e filial.
- **FAQ** em acordeão, rodapé completo e botão flutuante de WhatsApp.
- **SEO**: metadados Open Graph, `lang` em português e dados estruturados `schema.org` (`HealthClub`) com endereço e horários.

## Tecnologias

| Camada | Ferramentas |
| --- | --- |
| Framework | [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router) |
| UI | React 19, [Tailwind CSS 4](https://tailwindcss.com), componentes [shadcn/ui](https://ui.shadcn.com) (Radix UI), [Lucide](https://lucide.dev) |
| Linguagem | TypeScript |
| Build | Vite 8, Nitro |
| Qualidade | ESLint, Prettier |
| Testes | Vitest, Testing Library, jsdom |

## Estrutura do projeto

```text
.
├── public/                  # Arquivos estáticos (favicon, ícones)
└── src/
    ├── assets/              # Imagens do site (hero, galeria, professores)
    └── app/
        ├── components/
        │   ├── site/        # Seções da landing page (Hero, Team, Location...)
        │   └── ui/          # Componentes base (shadcn/ui)
        ├── config/
        │   └── siteConfig.ts  # Fonte única de dados do site
        ├── routes/          # Rotas (TanStack Router)
        ├── lib/             # Utilitários e tratamento de erros
        ├── hooks/           # Hooks compartilhados
        ├── test/            # Testes automatizados
        └── styles.css       # Tema e estilos globais
```

## Como executar

**Pré-requisitos:** [Node.js](https://nodejs.org) (versão LTS recente) e npm.

```bash
# 1. Instale as dependências
npm install

# 2. Inicie o servidor de desenvolvimento
npm run dev
```

O site ficará disponível no endereço exibido no terminal.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento com HMR |
| `npm run build` | Gera o build de produção em `.output/` |
| `npm run build:dev` | Gera o build em modo de desenvolvimento |
| `npm run preview` | Serve localmente o build gerado |
| `npm run lint` | Executa o ESLint |
| `npm run format` | Formata o código com Prettier |
| `npm test` | Executa os testes uma vez |
| `npm run test:watch` | Executa os testes em modo observação |

## Personalização

Quase todo o conteúdo do site vem de [`src/app/config/siteConfig.ts`](src/app/config/siteConfig.ts):

| O que alterar | Onde |
| --- | --- |
| Endereço, CEP, telefone, e-mail, CREF | `siteConfig.address`, `phone`, `phoneHref`, `email`, `cref` |
| Instagram da matriz e da filial | `siteConfig.instagram`, `siteConfig.branch` |
| Número do WhatsApp (formato `55` + DDD + número) | `siteConfig.whatsappNumber` |
| Links de mapa e "Como chegar" | `siteConfig.mapsDirections`, `siteConfig.mapsEmbed` |
| Horários de funcionamento | `siteConfig.openingHours` |
| Modalidades e grade de aulas | `modalities`, `schedule` |
| Oferta e contagem regressiva | `offer` (inclui `enabled` e `endsAt`) |
| Perguntas frequentes e depoimentos | `faqs`, `testimonials` |
| Equipe | `team` |

**Fotos dos professores:** substitua os arquivos `src/assets/team-*.jpg` mantendo os nomes (proporção recomendada 4:5, por exemplo 768×960). Para adicionar um novo professor, inclua um item em `team` com o campo opcional `photo`; sem foto, o site exibe um ícone no lugar.

## Testes

```bash
npm test
```

Há um teste de roteamento que garante que a rota `/` renderiza a página inicial em vez de cair em "não encontrado".

## Build e deploy

```bash
npm run build
```

O build é gerado em `.output/` (servidor Nitro + arquivos estáticos). O projeto inclui a configuração necessária para publicação em **Cloudflare Workers** via Wrangler, e também pode ser servido por qualquer ambiente compatível com o build do TanStack Start.

## Licença

Projeto proprietário. Todos os direitos reservados © WM Fit Academia.
