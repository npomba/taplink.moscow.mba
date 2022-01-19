const dev = process.env.NODE_ENV !== 'production'

const backendUrl = dev ? 'http://localhost:5000' : 'https://ipo-cp.ru'

const frontendUrl = dev ? 'http://localhost:3000' : 'https://promo.moscow.mba'

const gtmId = 'GTM-M4JLQXM'

const apiProgramsReqUrl = '/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses'

const base64pixel =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='

const routesBack = {
  root: dev ? 'http://localhost:1337' : 'https://api-moscow-mba.herokuapp.com',
  home: '/',
  programs: '/products',
  programsGetStaticProps: '/products/getStaticProps',
  programsGetStaticPropsProfession: '/products/getStaticProps/profession',
  programsGetStaticPropsCourse: '/products/getStaticProps/course',
  programsGetStaticPropsPromo: '/products/getStaticProps/promo',
  // programsProgramTypeSlug: '/products/program/:type.slug',
  programsProgram: '/products/program',
  // programsProgramTypeSlug: '/products/paths/:type',
  programsPaths: '/products/paths',
  categories: '/categories',
  auth: '/auth',
  authLocal: '/auth/local',
  leads: '/leads'
}

export {
  dev,
  backendUrl,
  frontendUrl,
  gtmId,
  apiProgramsReqUrl,
  base64pixel,
  routesBack
}
