import Document, {
  Html, Head, Main, NextScript,
  DocumentContext
} from 'next/document';
import { Tw } from 'styles';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body className={Tw().bgGray100().textGray800().$()}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
