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

          <link
            rel='preload'
            href='/assets/fonts/MazzardH-Regular.woff2'
            as='font'
            crossOrigin="'self'"
          />
          <link
            rel='preload'
            href='/assets/fonts/MazzardM-Bold.woff2'
            as='font'
            crossOrigin="'self'"
          />
          <link
            rel='preload'
            href='/assets/fonts/StyreneAWeb-Bold.woff2'
            as='font'
            crossOrigin="'self'"
          />
          <link
            rel='preload'
            href='/assets/fonts/StyreneAWeb-Light.woff2'
            as='font'
            crossOrigin="'self'"
          />
          <link
            rel='preload'
            href='/assets/fonts/StyreneAWeb-Medium.woff2'
            as='font'
            crossOrigin="'self'"
          />
          <link
            rel='preload'
            href='/assets/fonts/StyreneAWeb-Regular.woff2'
            as='font'
            crossOrigin="'self'"
          />
          <link
            rel='preload'
            href='/assets/fonts/VisueltPro-Bold.woff2'
            as='font'
            crossOrigin="'self'"
          />
          <link
            rel='preload'
            href='/assets/fonts/VisueltPro-Medium.woff2'
            as='font'
            crossOrigin="'self'"
          />
          <script
            type='text/javascript'
            src='/assets/js/vendors/jquery-3.6.0.min.js'></script>
          <script
            type='text/javascript'
            src='/assets/js/vendors/lazysizes.min.js'></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script type='text/javascript' src='/assets/js/myjs.js'></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
