import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import GenerateArticle from '../components/GenerateArticle';

const openGraphData = {
  locale: 'en_GB',
  title: 'Inclusive Scenario Generator - Inviqa',
  description: 'The Inviqa team explores an inclusive scenario generator tool',
  ogUrl: 'https://inviqa.com/',
  ogType: 'article',
  ogHandle: '@inviqa',
  ogAuthor: 'Inviqa',
  ogImageFacebook:
    'https://inclusive-scenario-generator.vercel.app//inclusive-scenario-generator.jpg',
  ogImageTwitter:
    'https://inclusive-scenario-generator.vercel.app//inclusive-scenario-generator.jpg',
  ogImageType: 'image/png',
  ogImageAlt: 'Inclusive Scenario Generator App',
  ogImageHeight: '630',
  ogImageWidth: '1200'
};

export default function Home() {
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
    </>
  );
}
