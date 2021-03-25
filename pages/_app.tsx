import App from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageWrapper from '../components/PageWrapper'
import '../styles/hugeStyles.sass'
import '../styles/hugeStyles.scss'
import { server } from '../config'

function MyApp({ Component, pageProps, appProps }) {
  // console.log(appProps)
  return (
    <>
      <PageWrapper>
        <Header programs={appProps} />
        <div className='main-content'>
          <Component {...pageProps} />
        </div>
        <Footer />
      </PageWrapper>
      {/* <script src='/js/jquery-3.5.1.min.js'></script>
      <script src='/js/slick.min.js'></script>
      <script src='/js/lazysizes.min.js'></script>
      <script src='/js/circle-progress.min.js'></script>
      <script src='/js/jquery.magnific-popup.min.js'></script>
      <script src='/js/myjs.js'></script> */}
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
  }
}
