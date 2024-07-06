import { NextPage } from "next";
import React from "react";

import Main from "components/main";
import Side from "components/side";
import { Tw } from "styles";

import "styles/index.css";

interface Props { Component: NextPage, pageProps: object };

const CustomApp: React.FC<Props> = ({ Component, pageProps }) => (
  <div className={Tw().flexWrap().$()}>
    <Main><Component {...pageProps} /></Main>
    <Side />
  </div >
);

export default CustomApp;
