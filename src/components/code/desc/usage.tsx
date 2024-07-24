import { marked } from "marked";
import { ReactElement } from "react";

import { Feature } from "features";

const getName = (feature: Feature) => {
  const { family_code, family_name, name, code } = feature;

  return family_code && family_name
    ? `${family_name} (${family_code})`
    : `${name} (${code})`;
};

export const CodeDescUsage = (props: { feature: Feature }): ReactElement => {
  const { feature } = props;

  const raw = `**${getName(feature)}** ${feature.description}`;
  const html = { __html: marked(raw) };
  return <div className="marked" dangerouslySetInnerHTML={html} />;
};
