import Header from '../components/Header'
import Footer from '../components/Footer'
import PageWrapper from '../components/PageWrapper'
import '../styles/hugeStyles.sass'
import '../styles/hugeStyles.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PageWrapper>
        <Header />
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
