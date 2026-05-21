/** @type {import('next').NextConfig} */
const nextConfig = {
  // CRITICAL: enforce trailing slash on ALL URLs
  trailingSlash: true,

  async redirects() {
    return [
      // 1. non-www HTTP → www HTTPS (catch all variants)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'sendmoneysmart.com' }],
        destination: 'https://www.sendmoneysmart.com/:path*',
        permanent: true,
      },
      // 2. Fix /compare/wise-vs-remitly — both slash variants (after trailingSlash)
      {
        source: '/compare/wise-vs-remitly',
        destination: '/wise-vs-remitly/',
        permanent: true,
      },
      {
        source: '/compare/wise-vs-remitly/',
        destination: '/wise-vs-remitly/',
        permanent: true,
      },
      // 3. Catch other /compare/* paths crawled with wrong prefix
      {
        source: '/compare/:slug',
        destination: '/:slug/',
        permanent: true,
      },
      {
        source: '/compare/:slug/',
        destination: '/:slug/',
        permanent: true,
      },
      // 4. Fix /how-money-transfers-work → canonical slug
      {
        source: '/how-money-transfers-work',
        destination: '/how-money-transfers-work/',
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Robots-Tag', value: 'index, follow' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
