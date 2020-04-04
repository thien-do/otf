import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import features, { Feature } from "features";
import { Tw } from "styles";
import Main from "components/main";
import Side from "components/side";

interface CustomHeadProps { ft: Feature; }

const CustomHead: React.FC<CustomHeadProps> = ({ ft }) => (
  <Head>
    <title>{ft.name} ({ft.code}) - otf.show</title>
    <meta name="description" content={`$()$()$(info.description)`} />
  </Head>
);

const Page: NextPage = () => {
  const { code } = useRouter().query;
  if (typeof code != "string") { return null; }

  const ft = features[code];
  // @TODO: add proper "not found/contributing" page
  if (ft === undefined) { return <p>not found</p>; }

  return (
    <div>
      <CustomHead ft={ft} />
      <div className={Tw().flex().flexWrap().$()}>
        <Main />
        <Side />
      </div>
    </div>
  );
};

export default Page;
