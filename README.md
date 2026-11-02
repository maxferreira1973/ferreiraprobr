# ferreira.pro.br

Site pessoal (currículo e portfólio de web analytics) feito com [Astro](https://astro.build)
e publicado no Vercel (plano Hobby, uso pessoal e não comercial).

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Conteúdo do currículo | `src/data/curriculo.md` |
| Título, descrição e ID do GTM | `src/config.ts` |
| Visual e layout do PDF (`@media print`) | `src/styles/global.css` |
| Eventos de analytics | `docs/data-layer.md` |

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera o site estático em dist/
```

## Deploy

Cada commit na `main` é publicado automaticamente pelo Vercel.
Configuração do projeto no Vercel: Framework **Astro**, Root Directory **vazio (raiz do repositório)**,
Build Command `npm run build`, Output Directory `dist`.
