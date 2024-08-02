import { Feature } from "features";
import { ReactElement } from "react";
import { CodeTextBoxBase } from "./box-base";

export function CodeTextBoxServer(props: { feature: Feature }): ReactElement {
  const { feature } = props;

  return (
    <CodeTextBoxBase
      feature={feature}
      font={feature.fonts[0]}
      setText={null}
      text={feature.texts[0]}
    />
  );
}
