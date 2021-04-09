import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    return (
      <Html>
        <Head>
          <meta name='theme-color' content='#ff3535' />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            type='text/javascript'
            src='/assets/js/jquery-3.5.1.min.js'
          ></script>
          <script type='text/javascript' src='/assets/js/slick.min.js'></script>
          <script
            type='text/javascript'
            src='/assets/js/lazysizes.min.js'
          ></script>
          <script
            type='text/javascript'
            src='/assets/js/circle-progress.min.js'
          ></script>
          <script
            type='text/javascript'
            src='/assets/js/jquery.magnific-popup.min.js'
          ></script>
          <script type='text/javascript' src='/assets/js/myjs.js'></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
