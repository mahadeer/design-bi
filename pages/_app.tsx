import App from 'next/app';
import { Provider } from 'react-redux';
import Head from 'next/head';
import store from '../store';
import '../styles/globals.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <>
          <Head>
            <title>design-bi - Create Report quickly</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </Head>
          <Component {...pageProps} />
        </>
      </Provider>
    );
  }
}

export default MyApp;
