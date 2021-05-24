const dev = process.env.NODE_ENV !== 'production'

const server = dev ? 'http://localhost:5000' : 'https://ipo-cp.ru'

const thisServer = dev ? 'http://localhost:3000' : 'https://moscow.mba'

const gtmId = 'GTM-M4JLQXM'

const apiProgramsReqUrl = '/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses'

export { dev, server, thisServer, gtmId, apiProgramsReqUrl }
