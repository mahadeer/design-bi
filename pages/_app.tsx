import React from 'react';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>design-bi - Create Report quickly</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
