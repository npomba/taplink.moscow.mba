const { createSecureHeaders } = require('next-secure-headers')
const dev = process.env.NODE_ENV !== 'production'

module.exports = {
  poweredByHeader: false,
  i18n: {
    locales: ['ru'],
    defaultLocale: 'ru',
    localeDetection: false
  },
  async headers() {
    return [
      {
        source: '/:path*',
        // headers: createSecureHeaders()
        headers: createSecureHeaders({
          referrerPolicy: 'no-referrer-when-downgrade',
          frameGuard: false
        })
        // headers: createSecureHeaders({
        //   forceHTTPSRedirect: [
        //     true,
        //     { maxAge: 60 * 60 * 24 * 30 * 12 * 2, includeSubDomains: true }
        //   ],
        //   frameGuard: 'deny',
        //   noopen: 'noopen',
        //   nosniff: 'nosniff',
        //   xssProtection: 'sanitize',
        //   contentSecurityPolicy: {
        //     directives: {
        //       connectSrc: [
        //         "'self'",
        //         'https://ipo-cp.ru',
        //         'vitals.vercel-insights.com'
        //       ],
        //       defaultSrc: ["'self'", 'https://ipo-cp.ru', 'data:'],
        //       // scriptSrc: "'unsafe-inline'",
        //       styleSrc: "'unsafe-inline'"
        //     }
        //   },
        //   referrerPolicy: 'no-referrer'
        // })
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
