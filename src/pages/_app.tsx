import React from "react";
import { NextPage } from "next";

import "styles/index.css";
import "focus-visible";

interface Props { Component: NextPage, pageProps: object };

const CustomApp: React.FC<Props> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default CustomApp;
