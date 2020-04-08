import React from "react";
import { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { Feature, featureArr } from "features";
import { getState, getSetState } from "state";
import Code from "components/code";

interface CustomHeadProps { ft: Feature; }

const CustomHead: React.FC<CustomHeadProps> = ({ ft }) => {
  const fullName = `${ft.name} (${ft.code})`;
  return (
    <Head>
      <title>{fullName} - otf.show</title>
      <meta name="description" content={`${fullName} ${ft.description} - otf.show`} />
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
export const getStaticProps: GetStaticProps<{}> = async () => ({ props: {}})

export default Page;
