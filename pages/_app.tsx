import React from "react";
import "./_app.css";

interface Props {
  Component: React.FC<any>,
  pageProps: object
};

const MyApp: React.FC<Props> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;