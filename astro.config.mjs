// Configuração do Astro.
// O site é 100% estático: o Astro gera HTML no build e o Vercel só serve arquivos.
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Endereço oficial: usado no sitemap e nas URLs canônicas.
  site: 'https://www.ferreira.pro.br',
  output: 'static',
  // Toda URL de página termina com barra (/artigos/). Precisa bater com a canônica,
  // o sitemap e o "trailingSlash": true do vercel.json, senão o Google vê duas versões da mesma página.
  trailingSlash: 'always',
  integrations: [sitemap()],
  // O CSS (pequeno) vai embutido no HTML: elimina uma requisição que bloqueava a renderização.
  build: { inlineStylesheets: 'always' },
});
