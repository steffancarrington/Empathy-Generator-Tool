import Document, { Html, Head, Main, NextScript } from 'next/document';

const openGraphData = {
  locale: 'en_GB',
  title: 'Inclusive Scenario Generator - Inviqa',
  description: 'The Inviqa team explores an inclusive scenario generator tool',
  ogUrl: 'https://inviqa.com/',
  ogType: 'article',
  ogHandle: '@inviqa',
  ogAuthor: 'Inviqa',
  ogImageFacebook:
    'https://inclusive-scenario-generator.vercel.app/inclusive-scenario-generator.jpg',
  ogImageTwitter:
    'https://inclusive-scenario-generator.vercel.app/inclusive-scenario-generator.jpg',
  ogImageType: 'image/png',
  ogImageAlt: 'Inclusive Scenario Generator App',
  ogImageHeight: '630',
  ogImageWidth: '1200'
};

export default class extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en-gb" dir="ltr">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `
            }}
          />

          <meta name="description" content={openGraphData.description} />
          <meta name="application-name" content={openGraphData.title} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content={openGraphData.title} />
          <meta name="description" content={openGraphData.description} />
          <meta name="mobile-web-app-capable" content="yes" />

          <link rel="icon" href="/favicon/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-192x192.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-512x512.png" />
          <link rel="manifest" href="favicon/site.webmanifest" />
          <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#000000" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" content="#ffffff" />

          {/* Facebook Open Graph Data - Image Size (1200 x 630) */}
          <meta property="og:locale" content={openGraphData.locale} />
          <meta property="og:url" content={openGraphData.ogUrl} />
          <meta property="og:type" content={openGraphData.ogType} />
          <meta property="og:title" content={openGraphData.title} />
          <meta property="og:description" content={openGraphData.description} />
          <meta property="og:image" content={openGraphData.ogImageFacebook} />
          <meta property="og:image:type" content={openGraphData.ogImageType} />
          <meta property="og:image:height" content={openGraphData.ogImageHeight} />
          <meta property="og:image:width" content={openGraphData.ogImageWidth} />
          <meta property="og:image:alt" content={openGraphData.ogImageAlt} />

          {/* Twitter Card Data - Large Summary Image (560 x 300) */}
          <meta name="twiter:card" content="summary_large_image" />
          <meta name="twitter:site" content={openGraphData.ogHandle} />
          <meta name="twitter:creator" content={openGraphData.ogAuthor} />
          <meta name="twitter:image" content={openGraphData.ogImageTwitter} />
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`
            }}></noscript>
          {/* End Google Tag Manager (noscript) */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
