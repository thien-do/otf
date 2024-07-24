"use client";

import { useCodeSearchClient } from "components/code/search/client";
import { Feature } from "features";
import { ReactElement } from "react";
import { CodeDescTextsBase } from "./base";

export const CodeDescTextsClient = (props: {
  // Same API with CodeDescTextsServer
  feature: Feature;
}): ReactElement => {
  const { feature } = props;

  return (
    <CodeDescTextsBase texts={feature.texts} getHref={useCodeSearchClient()} />
  );
};
