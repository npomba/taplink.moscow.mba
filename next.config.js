const { createSecureHeaders } = require('next-secure-headers')

module.exports = {
  poweredByHeader: false,
  i18n: {
    locales: ['ru', 'en-US'],
    defaultLocale: 'ru',
    localeDetection: false
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: createSecureHeaders({
          forceHTTPSRedirect: [
            true,
            { maxAge: 60 * 60 * 24 * 30 * 12 * 2, includeSubDomains: true }
          ],
          frameGuard: 'deny',
          noopen: 'noopen',
          nosniff: 'nosniff',
          xssProtection: 'sanitize',
          // contentSecurityPolicy: {
          //   directives: {
          //     connectSrc: [
          //       "'self'",
          //       'https://ipo-cp.ru',
          //       'vitals.vercel-insights.com',
          //     ],
          //     defaultSrc: ["'self'", 'https://ipo-cp.ru'],
          //     scriptSrc: ["'self'"],
          //     styleSrc: 'unsafe-inline',
          //   },
          // },
          referrerPolicy: 'no-referrer'
        })
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/programs',
        destination: '/programs/mini/online',
        permanent: true
      },
      {
        source: '/programs/mini',
        destination: '/programs/mini/online',
        permanent: true
      },
      {
        source: '/programs/professional',
        destination: '/programs/professional/online',
        permanent: true
      },
      {
        source: '/programs/industry',
        destination: '/programs/industry/online',
        permanent: true
      }
    ]
  }
  // async headers() {
  //   return [
  //     {
  //       source: '/',
  //       headers: [
  //         {
  //           key: 'X-XSS-Protection',
  //           value: '1',
  //         },
  //         {
  //           key: 'Content-Security-Policy',
  //           value: "default-src 'self' ipo-cp.ru *.ipo-cp.ru",
  //         },
  //         {
  //           key: 'X-Frame-Options',
  //           value: 'DENY',
  //         },
  //         {
  //           key: 'X-Content-Type-Options',
  //           value: 'nosniff',
  //         },
  //       ],
  //     },
  //   ]
  // },
}
