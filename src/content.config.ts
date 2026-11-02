// Coleções de conteúdo do site (Astro 6 + Zod 4).
// Cada arquivo .md em src/content/artigos/ vira um artigo em /artigos/<nome-do-arquivo>.
// Se faltar um campo obrigatório ou um valor estiver no formato errado, o build falha e avisa.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const artigos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artigos' }),
  schema: z.object({
    titulo: z.string(),
    resumo: z.string().max(200),
    data: z.coerce.date(),
    // Post original no LinkedIn
    linkedin: z.url(),
    // Artigo comentado no post (opcional)
    fonte: z
      .object({
        titulo: z.string(),
        autor: z.string(),
        url: z.url(),
        idioma: z.string().default('en'),
      })
      .optional(),
    tags: z.array(z.string()).default([]),
    rascunho: z.boolean().default(false),
  }),
});

export const collections = { artigos };
