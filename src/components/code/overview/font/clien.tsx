"use client";

import { useCodeSearchClient } from "components/code/search/client";
import { Feature } from "features";
import { useSearchParams } from "next/navigation";
import { ReactElement } from "react";
import { CodeOverviewFontBase } from "./base";

export const CodeOverviewFontClient = (props: {
  feature: Feature;
}): ReactElement => {
  const { feature } = props;

  return (
    <CodeOverviewFontBase
      feature={feature}
      fontParams={useSearchParams().get("font")}
      getHref={useCodeSearchClient()}
    />
  );
};
