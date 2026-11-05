// Configurações globais do site.
// Troque aqui o ID do contêiner do GTM; nenhum outro arquivo precisa mudar.
export const SITE = {
  nome: 'Maximiliano Ferreira',
  titulo: 'Maximiliano Ferreira | Web Analytics Sênior (GA4, GTM)',
  descricao:
    'Senior Web Analytics & Marketing Intelligence: GA4, GTM, Consent Mode, BI de mídia e capacitação de equipes.',
  url: 'https://www.ferreira.pro.br',
  // Imagem da prévia de link (LinkedIn, WhatsApp etc.), 1200x630, em public/
  ogImagem: '/og-imagem.png',
  linkedin: 'https://www.linkedin.com/in/maximilianoferreira',
};

// Dados da pessoa para o JSON-LD (schema.org/Person), usados no currículo e como autor dos artigos.
// Sem e-mail nem telefone: os dados estruturados ficam públicos no HTML.
export const PESSOA = {
  '@type': 'Person',
  '@id': `${SITE.url}/#pessoa`,
  name: 'Maximiliano de Jesus Ferreira',
  alternateName: SITE.nome,
  url: `${SITE.url}/`,
  image: `${SITE.url}${SITE.ogImagem}`,
  jobTitle: 'Web Analytics Sênior',
  sameAs: [SITE.linkedin],
  address: { '@type': 'PostalAddress', addressLocality: 'São Paulo', addressRegion: 'SP', addressCountry: 'BR' },
  knowsAbout: [
    'Digital Analytics',
    'Google Analytics 4',
    'Google Tag Manager',
    'Consent Mode',
    'Power BI',
    'Looker Studio',
    'BigQuery',
    'Martech',
    'Data Strategy',
  ],
  knowsLanguage: ['pt-BR', 'en'],
};

export const GTM_ID = 'GTM-PDLTH6B4';
