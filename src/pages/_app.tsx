import React from "react";
import { NextPage } from "next";

import { Tw } from "styles";
import Main from "components/main";
import Side from "components/side";

import "styles/index.css";
import "focus-visible";

interface Props { Component: NextPage, pageProps: object };

const CustomApp: React.FC<Props> = ({ Component, pageProps }) => (
  <div className={Tw().flexWrap().$()}>
    <Main><Component {...pageProps} /></Main>
    <Side />
  </div >
);

export default CustomApp;
