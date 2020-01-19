import React from "react";
import "styles/index.css";
import Head from "next/head";

interface Props {
  Component: React.FC<any>,
  pageProps: object,
};

const TITLE = "OTF Show";
const DESCRIPTION = "An interactive showcase of OpenType's typographic features";

const MyApp: React.FC<Props> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;