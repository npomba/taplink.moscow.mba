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

          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-M4JLQXM');`,
            }}
          />

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
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M4JLQXM" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`,
            }}
          />
          <Main />
          <NextScript />
          <script
            type='text/javascript'
            src='/assets/js/vendors/jquery-3.6.0.min.js'
          ></script>
          <script
            type='text/javascript'
            src='/assets/js/vendors/slick.min.js'
          ></script>
          <script
            type='text/javascript'
            src='/assets/js/vendors/lazysizes.min.js'
          ></script>
          <script
            type='text/javascript'
            src='/assets/js/vendors/circle-progress.min.js'
          ></script>
          <script type='text/javascript' src='/assets/js/myjs.js'></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
