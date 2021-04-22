import React, { useState, useEffect } from 'react';
import { useRandomiser } from '../hooks/useRandomiser';
import { useFirebaseData } from '../hooks/useFirebaseData';
import Head from 'next/head';
import Header from '../components/Header';
import GenerateArticle from '../components/GenerateArticle';
import EditableSentence from '../components/EditableSentence';

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

export default function Home({ inclusiveData }) {
  const { age, objectivesAll } = inclusiveData;
  const [storedHeading, setStoredHeading] = useState();

  useEffect(() => {
    setStoredHeading(useRandomiser(objectivesAll));
  }, [age]);

  // const [storedHeading, setStoredHeading] = useState(useRandomiser(objectivesAll));

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
        <GenerateArticle inclusiveData={inclusiveData} />

        <EditableSentence text={storedHeading} onSetText={(text) => setStoredHeading(text)} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  try {
    // Get Data from Firebase
    const names = await useFirebaseData('names');
    const colours = await useFirebaseData('colours');
    const objectives = await useFirebaseData('objective');
    const ages = await useFirebaseData('age');
    const biologicals = await useFirebaseData('biological');
    const organisationals = await useFirebaseData('organisational');
    const culturals = await useFirebaseData('personal-cultural');

    // Structure inclusiveData props
    const inclusiveData = {
      colours: colours[0].colours,
      names: names[0].names,
      objectivesAll: objectives[0]['all'],
      objectives13: objectives[0]['13-plus'],
      ages: ages[0].age,
      biologicals: biologicals[0].biological,
      organisationalAll: organisationals[0]['all'],
      organisational13: organisationals[0]['13-plus'],
      culturalAll: culturals[0]['all'],
      cultural13: culturals[0]['13-plus']
    };

    return {
      props: {
        inclusiveData
      }
    };
  } catch (error) {
    console.error(error);
  }
}
