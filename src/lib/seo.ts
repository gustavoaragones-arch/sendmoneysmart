import { Corridor } from './calculator';

const BASE_URL = 'https://sendmoneysmart.com';

export function generateCorridorSchema(corridor: Corridor) {
  const pageUrl = `${BASE_URL}/send-money/${corridor.slug}`;

  const faqSchema = corridor.faq
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: corridor.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      }
    : null;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Send Money', item: `${BASE_URL}/send-money/` },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${corridor.from_country} to ${corridor.to_country}`,
        item: pageUrl,
      },
    ],
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: corridor.meta_title ?? `Send Money ${corridor.from_country} to ${corridor.to_country}`,
    description: corridor.meta_description,
    url: pageUrl,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.direct-answer-block', '.winner-card-summary'],
    },
    publisher: {
      '@type': 'Organization',
      name: 'Albor Digital LLC',
      url: 'https://albor.digital',
    },
  };

  return { faqSchema, breadcrumbSchema, webPageSchema };
}

export function generateHomeSchema() {
  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SendMoneySmart',
    url: BASE_URL,
    publisher: {
      '@type': 'Organization',
      name: 'Albor Digital LLC',
      url: 'https://albor.digital',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'contact@albor.digital',
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Albor Digital LLC',
    url: 'https://albor.digital',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@albor.digital',
      contactType: 'customer support',
    },
    sameAs: ['https://sendmoneysmart.com'],
  };

  return { webSiteSchema, organizationSchema };
}
