import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-GB">
        <Head />
        <body>
          {/* Google Tag Manager (noscript) */}   
          <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }} />
          {/* End Google Tag Manager (noscript) */}

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
