import React from 'react';
import { useFirebaseData } from '../hooks/useFirebaseData';
import Head from 'next/head';
import Header from '../components/Header';
import Loading from '../components/Loading';
import GenerateArticle from '../components/GenerateArticle';

export default function Home({ inclusiveData }) {
  return (
    <>
      <Head>
        {/* Disable Search Engine Indexing and Crawling */}
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main aria-busy={inclusiveData ? 'false' : 'true'}>
        {inclusiveData ? <GenerateArticle inclusiveData={inclusiveData} /> : <Loading />}
      </main>
    </>
  );
}

export async function getStaticProps() {
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
