import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { Tw } from "styles";

const CustomHead: React.FC = () => (
  <Head>
    <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
  </Head>
);

const CustomBody: React.FC = () => (
  <body className={Tw().bgF7F().text2D3().$()}>
    <Main />
    <NextScript />
  </body>
);

class MyDocument extends Document {
  render() {
    return <Html><CustomHead /> <CustomBody /></Html>;
  }
}

export default MyDocument;
