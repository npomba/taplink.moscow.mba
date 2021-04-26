const { createSecureHeaders } = require('next-secure-headers')

module.exports = {
	i18n: {
		locales: ['ru', 'en-US'],
		defaultLocale: 'ru',
		localeDetection: false,
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: createSecureHeaders({
					forceHTTPSRedirect: [
						true,
						{ maxAge: 60 * 60 * 24 * 30 * 12 * 2, includeSubDomains: true },
					],
					frameGuard: 'deny',
					noopen: 'noopen',
					nosniff: 'nosniff',
					xssProtection: 'sanitize',
					contentSecurityPolicy: {
						directives: {
							connectSrc: ["'self'", 'https://ipo-cp.ru'],
							defaultSrc: ["'self'", 'https://ipo-cp.ru'],
							scriptSrc: ["'self'"],
							styleSrc: ["'self'"],
						},
					},
					expectCT: 'true',
					referrerPolicy: 'no-referrer',
				}),
			},
		]
	},
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
