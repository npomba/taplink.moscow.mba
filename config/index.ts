const dev = process.env.NODE_ENV !== 'production'

const server = dev ? 'http://10.0.0.151:5000' : 'https://ipo-cp.ru'

const thisServer = dev ? 'http://localhost:3000' : 'https://moscow.mba'

export { dev, server, thisServer }
