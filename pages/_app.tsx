import App from 'next/app'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageWrapper from '@/components/PageWrapper'
import '../styles/hugeStyles.sass'
import '../styles/hugeStyles.scss'
import { server } from '@/config/index'
import { motion, AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, appProps, router }) {
  // console.log(appProps)
  return (
    <>
      <PageWrapper>
        <Header programs={appProps} />
        {/* <AnimatePresence> */}
        <motion.div
          key={router.route}
          initial='pageInitial'
          animate='pageAnimate'
          // exit='pageExit'
          variants={{
            pageInitial: {
              scale: 0.96,
              opacity: 0.4,
            },
            pageAnimate: {
              scale: 1,
              opacity: 1,
            },
            // pageExit: {
            //   opacity: 0,
            // },
          }}
        >
          <div className='main-content'>
            <Component {...pageProps} />
          </div>
        </motion.div>
        {/* </AnimatePresence> */}
        <Footer />
      </PageWrapper>
    </>
  )
}

export default MyApp

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
