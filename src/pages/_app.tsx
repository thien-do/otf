import { NextPage } from "next";
import React from "react";

import Main from "components/main";
import Side from "components/side";

import "styles/index.css";

interface Props { Component: NextPage, pageProps: object };

const CustomApp: React.FC<Props> = ({ Component, pageProps }) => (
  <div className="flex-wrap">
    <Main><Component {...pageProps} /></Main>
    <Side />
  </div >
);

export default CustomApp;
