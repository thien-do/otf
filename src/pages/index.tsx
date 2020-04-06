import { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

import { featureArr } from "features";

const Index: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    // redirect to random feature
    const feature = featureArr[Math.floor(Math.random() * featureArr.length)];
    router.replace("/[code]", `/${feature.code}`);
  }, []);
  return (
    <div>
      <Head>
        <title>otf.show</title>
        <meta name="description" content="An interactive showcase of OpenType features" />
      </Head>
    </div>
  );
};

export default Index;
