import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import features, { Feature } from "features";

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
  if (ft === undefined) { return null; }

  return (
    <div>
      <CustomHead ft={ft} />
      <p>home ahihi</p>
    </div>
  );
};

export default Page;
