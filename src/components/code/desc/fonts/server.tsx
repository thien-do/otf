import { useCodeSearchServer } from "components/code/search/server";
import { Feature } from "features";
import { ReactElement } from "react";
import { CodeDescFontsBase } from "./base";

export const CodeDescFontsServer = (props: {
  feature: Feature;
}): ReactElement => {
  const { feature } = props;

  return (
    <CodeDescFontsBase
      fonts={feature.fonts}
      getHref={useCodeSearchServer({ feature })}
    />
  );
};
