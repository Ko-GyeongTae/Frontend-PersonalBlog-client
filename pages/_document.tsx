import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang='ko'>
        <Head>
          <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
          <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
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