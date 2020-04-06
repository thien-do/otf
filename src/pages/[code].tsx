import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { Feature } from "features";
import { Tw } from "styles";
import Main from "components/main";
import Side from "components/side";
import { getState, getSetState } from "state";

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
  if (typeof router.query.code != "string") {
    return <span>Invalid code</span>;
  }
  const state = getState(router);
  const setState = getSetState(router);

  return (
    <div>
      <CustomHead ft={state.feature} />
      <div className={Tw().flex().flexWrap().$()}>
        <Main state={state} setState={setState} />
        <Side state={state} />
      </div>
    </div>
  );
};

export default Page;
