import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import TableMessage from '../components/TableMessage';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <div className="h-screen laptop:hidden block">
            <TableMessage />
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
