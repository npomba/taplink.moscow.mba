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
import { apiProgramsReqUrl, server } from '@/config/index'
import { motion, AnimatePresence } from 'framer-motion'
import { withSecureHeaders } from 'next-secure-headers'
import { dev, gtmId } from '@/config/index'

import NProgress from 'nprogress'
import Router from 'next/router'
import 'nprogress/nprogress.css'
function MyApp({ Component, pageProps, router }) {
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

  if (!dev) {
    console.log = function () {}
  }
  let programs
  if (pageProps) {
    programs = pageProps.programs
  }

  return (
    <>
      <DefaultSeo {...SEO} />
      <PageWrapper>
        <Header programs={programs} />
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

export default withSecureHeaders()(MyApp)
