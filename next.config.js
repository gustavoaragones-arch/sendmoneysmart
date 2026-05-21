/** @type {import('next').NextConfig} */
const nextConfig = {
  // CRITICAL: enforce trailing slash on ALL URLs
  trailingSlash: true,

  async redirects() {
    return [
      // 1. non-www → www (must be first)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'sendmoneysmart.com' }],
        destination: 'https://www.sendmoneysmart.com/:path*',
        permanent: true,
      },
      // 2. /compare/* → /* — one rule for both slash variants
      {
        source: '/compare/:slug*',
        destination: '/:slug*/',
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
