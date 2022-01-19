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
          contentSecurityPolicy: {
            directives: {
              defaultSrc: [
                "'self'",
                'data:',
                'https://ssl.gstatic.com',
                'https://www.gstatic.com',
                'https://fonts.gstatic.com',
                'https://www.google-analytics.com',
                'https://googleads.g.doubleclick.net',
                'https://www.google.com',
                'https://bid.g.doubleclick.net',
                'https://mc.yandex.ru',
                'https://promo.moscow.mba',
                'https://www.googleadservices.com',
                'https://www.google.ru',
                'https://www.googletagmanager.com',
                "'sha256-yD2YThwDBB7lr1RbtQ3odfhOChA2l5RZg8iqCFjRIhY='",
                'https://connect.facebook.net/en_US/fbevents.js',
                'https://connect.facebook.net/signals/config/1845052109010998',
                'https://www.facebook.com/tr/',
                "'sha256-Uz0yn00PqpvyPuK+MptaAirzRCPwuCU4Vhj/iAbfJxk='"
              ],
              scriptSrc: [
                "'self'",
                `${dev ? "'unsafe-eval'" : ''}`,
                'https://www.googletagmanager.com',
                "'sha256-dR9r2B/SmDDIQ6AkSRP1HcZOn6lncQaF7JWgTTTLGTY='",
                "'sha256-kxlLwzh8f+NZ3uNSXSPKI+KoxSBTS4AxdH+dXubYARw='",
                "'sha256-6g/y+M3Jov37nPvp0FF1vktpRuyTb8EoU5XYgBiqpQY='",
                'http://www.googletagmanager.com',
                'https://mc.yandex.ru',
                'data:',
                'https://tagmanager.google.com',
                'https://www.google-analytics.com',
                'https://ssl.google-analytics.com',
                'https://www.googleadservices.com',
                'https://www.google.com',
                'https://googleads.g.doubleclick.net',
                'https://promo.moscow.mba',
                'http://www.googleadservices.com',
                "'sha256-yD2YThwDBB7lr1RbtQ3odfhOChA2l5RZg8iqCFjRIhY='",
                'https://connect.facebook.net/en_US/fbevents.js',
                'https://connect.facebook.net/signals/config/1845052109010998',
                "'sha256-Uz0yn00PqpvyPuK+MptaAirzRCPwuCU4Vhj/iAbfJxk='"
              ],
              // scriptSrcElem: [
              //   "'self'",
              //   "'sha256-dR9r2B/SmDDIQ6AkSRP1HcZOn6lncQaF7JWgTTTLGTY='",
              //   "'sha256-kxlLwzh8f+NZ3uNSXSPKI+KoxSBTS4AxdH+dXubYARw='",
              //   'https://www.googletagmanager.com'
              // ],
              styleSrc: [
                "'self'",
                "'unsafe-inline'",
                'https://tagmanager.google.com',
                'https://fonts.googleapis.com'
              ]
            }
          },
          referrerPolicy: 'no-referrer-when-downgrade'
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
