import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

import Code from "components/code";
import { Feature, featureArr } from "features";
import { getSetState, getState } from "state";

interface CustomHeadProps { ft: Feature; }

const CustomHead: React.FC<CustomHeadProps> = ({ ft }) => {
  const fullName = `${ft.name} (${ft.code})`;
  const description = ft.description.split("\n\n")[0];
  return (
    <Head>
      <title>{fullName} - otf</title>
      <meta name="description" content={`${fullName} ${description} - otf`} />
    </Head>
  );
};

const Page: NextPage = () => {
  const router = useRouter();
  // when pre-rendered there is no query code
  if (typeof router.query.code != "string") { return null; }
  const state = getState(router);
  const setState = getSetState(router);
  return (
    <div>
      <CustomHead ft={state.feature} />
      <Code state={state} setState={setState} />
    </div>
  );
};

export const getStaticPaths = async () => ({
  paths: featureArr.map(feature => ({
    params: { code: feature.code },
  })),
  fallback: false,
});

// we don't need to fetch external data, just trick Next JS to get
// getStaticPaths working
export const getStaticProps: GetStaticProps<{}> = async () => ({ props: {} })

export default Page;
