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
          <meta charSet='UTF-8' />
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
