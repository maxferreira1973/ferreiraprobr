// Funções de apoio da seção /artigos.
import { getCollection, type CollectionEntry } from 'astro:content';

export type Artigo = CollectionEntry<'artigos'>;

// Artigos publicados (sem rascunhos), do mais novo para o mais antigo.
export async function artigosPublicados(): Promise<Artigo[]> {
  const todos = await getCollection('artigos', ({ data }) => !data.rascunho);
  return todos.sort((a, b) => b.data.data.getTime() - a.data.data.getTime());
}

// Data no formato "26 de outubro de 2026".
export function formatarData(data: Date): string {
  return data.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

// Tempo de leitura estimado (200 palavras por minuto).
export function tempoDeLeitura(texto = ''): number {
  const palavras = texto.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(palavras / 200));
}
