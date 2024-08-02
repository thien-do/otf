"use client";

import { useCodeSearchClient } from "components/code/search/client";
import { Feature } from "features";
import { ReactElement } from "react";
import { CodeDescFontsBase } from "./base";

export const CodeDescFontsClient = (props: {
  // Same API with CodeDescFontsServer
  feature: Feature;
}): ReactElement => {
  const { feature } = props;

  return (
    <CodeDescFontsBase fonts={feature.fonts} getHref={useCodeSearchClient()} />
  );
};
