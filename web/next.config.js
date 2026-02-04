const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // SEO: Redirecciones 301 permanentes para URLs antiguas
  // Esto transfiere el SEO de las URLs sin prefijo a las nuevas con /es/
  // Documentado en: docs/SEO-INDEXACION-STATUS.md
  async redirects() {
    return [
      // Paginas principales (sin prefijo -> /es/)
      {
        source: '/servicios',
        destination: '/es/servicios',
        permanent: true,
      },
      {
        source: '/precios',
        destination: '/es/precios',
        permanent: true,
      },
      {
        source: '/auditoria',
        destination: '/es/auditoria',
        permanent: true,
      },
      {
        source: '/recursos',
        destination: '/es/recursos',
        permanent: true,
      },
      {
        source: '/sobre-moduloria',
        destination: '/es/sobre-moduloria',
        permanent: true,
      },
      {
        source: '/privacidad',
        destination: '/es/privacidad',
        permanent: true,
      },
      {
        source: '/terminos',
        destination: '/es/terminos',
        permanent: true,
      },
      // Blog
      {
        source: '/blog',
        destination: '/es/blog',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: '/es/blog/:slug',
        permanent: true,
      },
      // Newsletter
      {
        source: '/newsletter',
        destination: '/es/newsletter',
        permanent: true,
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
