import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import GenerateArticle from '../components/GenerateArticle';
import Footer from '../components/Footer';

const openGraphData = {
  locale: 'en_GB',
  title: 'Empathy Generator - Inviqa',
  description: 'The Inviqa team explores empathy generator tool',
  ogUrl: 'https://inviqa.com/',
  ogType: 'article',
  ogHandle: '@inviqa',
  ogAuthor: 'Inviqa',
  ogImageFacebook: '/images/social/gift-giving-facebook.png',
  ogImageTwitter: '/images/social/gift-giving-twitter.png',
  ogImageType: 'image/png',
  ogImageAlt: 'Inviqas Gift Giving Survey Results',
  ogImageHeight: '630',
  ogImageWidth: '1200'
};

export default function Home() {
  const [bgColour, setBgColor] = useState('purple');

  let bgColours = ['red', 'purple', '#E84751', 'blue', 'orange', '#323643'];
  
  // Change Background Colour
  const bgColourChange = bgColours => newbgColour = bgColours[Math.floor(Math.random() * bgColours.length)];

  return (
    <>
      <Head>
        {/* Disable Search Engine Indexing and Crawling */}
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
 
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{openGraphData.title}</title>
        <meta name="description" content={openGraphData.description} />

        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer', '${process.env.gtmId}');`,
        }}>
        </script>
        {/* End Google Tag Manager */}

        {/* Favicons */}
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#ffffff"></meta>

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

      <Header />

      <main>
        <GenerateArticle />
      </main>

      <Footer />
    </>
  )
}
