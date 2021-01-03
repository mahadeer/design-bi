import React from 'react';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>design-bi - Create Report quickly</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
