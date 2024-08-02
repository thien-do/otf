import { useCodeSearchServer } from "components/code/search/server";
import { Feature } from "features";
import { ReactElement } from "react";
import { CodeDescTextsBase } from "./base";

export const CodeDescTextsServer = (props: {
  feature: Feature;
}): ReactElement => {
  const { feature } = props;

  return (
    <CodeDescTextsBase
      texts={feature.texts}
      getHref={useCodeSearchServer({ feature })}
    />
  );
};
