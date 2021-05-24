import App from 'next/app'
import { useEffect, useState } from 'react'
import TagManager from 'react-gtm-module'
import { DefaultSeo } from 'next-seo'
import SEO from '../seo.config'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageWrapper from '@/components/PageWrapper'
import '@/styles/hugeStyles.sass'
import '@/styles/hugeStyles.scss'
import { server } from '@/config/index'
import { motion, AnimatePresence } from 'framer-motion'
import { withSecureHeaders } from 'next-secure-headers'
import { dev, gtmId } from '@/config/index'

import NProgress from 'nprogress'
import Router from 'next/router'
import 'nprogress/nprogress.css'
function MyApp({ Component, pageProps, router }) {
  if (!dev) {
    console.log = function () {}
  }

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    TagManager.initialize({ gtmId, dataLayerName: 'dataLayer' })

    // NProgress.configure({
    //   // minimum: 0.3,
    //   // easing: 'ease',
    //   // speed: 800,
    //   // showSpinner: false
    // })

    const start = () => {
      NProgress.start()
      setLoading(true)
    }
    const end = () => {
      NProgress.done()
      setLoading(false)
    }
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])

  return (
    <>
      {console.log(pageProps)}
      <DefaultSeo {...SEO} />
      <PageWrapper>
        <Header programs={pageProps} />
        <AnimatePresence>
          <motion.div
            key={router.route}
            initial='initial'
            animate='animate'
            transition={{ ease: 'easeInOut', duration: 0.4 }}
            exit='exit'
            variants={{
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              exit: {
                opacity: 0
              }
            }}>
            <div className='main-content'>
              <Component {...pageProps} />
            </div>
          </motion.div>
        </AnimatePresence>
        <Footer />
      </PageWrapper>
    </>
  )
}

MyApp.getInitialProps = async () => {
  const res = await fetch(
    `${server}/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses`
  )
  const programs = await res.json()

  return {
    pageProps: {
      programs
    }
  }
}

export default withSecureHeaders()(MyApp)
