import App from 'next/app'
import { useEffect } from 'react'
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

function MyApp({ Component, pageProps, appProps, router }) {
  // if (!dev) {
  //   console.log = function () {}
  // }

  useEffect(() => {
    TagManager.initialize({ gtmId })
  }, [])

  return (
    <>
      <DefaultSeo {...SEO} />
      <PageWrapper>
        <Header programs={appProps} />
        <AnimatePresence>
          <motion.div
            key={router.route}
            initial='pageInitial'
            animate='pageAnimate'
            exit='pageExit'
            variants={{
              pageInitial: {
                opacity: 0.4,
              },
              pageAnimate: {
                opacity: 1,
              },
              pageExit: {
                scale: 0.98,
                opacity: 0,
              },
            }}
          >
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

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)

  const res = await fetch(
    `${server}/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses`
  )
  const programs = await res.json()

  return {
    appProps: {
      programs,
    },
    pageProps: {
      programs,
    },
  }
}
