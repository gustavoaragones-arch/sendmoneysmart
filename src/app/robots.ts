import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://www.sendmoneysmart.com/sitemap.xml',
    host: 'https://www.sendmoneysmart.com',
  };
}
