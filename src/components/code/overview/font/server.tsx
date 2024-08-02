"use client";

import { useCodeSearchServer } from "components/code/search/server";
import { Feature } from "features";
import { ReactElement } from "react";
import { CodeOverviewFontBase } from "./base";

export const CodeOverviewFontServer = (props: {
  feature: Feature;
}): ReactElement => {
  const { feature } = props;

  return (
    <CodeOverviewFontBase
      feature={feature}
      fontParams={null}
      getHref={useCodeSearchServer({ feature })}
    />
  );
};
