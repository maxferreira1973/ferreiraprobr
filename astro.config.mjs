// Configuração do Astro.
// O site é 100% estático: o Astro gera HTML no build e o Vercel só serve arquivos.
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Endereço oficial: usado no sitemap e nas URLs canônicas.
  site: 'https://www.ferreira.pro.br',
  output: 'static',
  integrations: [sitemap()],
});
