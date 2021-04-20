const dev = process.env.NODE_ENV !== 'production'

const server = dev ? 'http://localhost:5000' : 'https://ipo-cp.ru'

const thisServer = dev ? 'http://localhost:3000' : 'https://moscow.mba'

export {server, thisServer}