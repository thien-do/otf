import React from "react";
import marked from "marked";

import { Feature } from "features";

const getName = (ft: Feature) => {
  return ft.family_code && ft.family_name
    ? `${ft.family_name} (${ft.family_code})`
    : `${ft.name} (${ft.code})`;
};

interface Props { feature: Feature; }

const Usage: React.FC<Props> = ({ feature }) => {
  const raw = `**${getName(feature)}** ${feature.description}`;
  const html = { __html: marked(raw) };
  return <div className="marked" dangerouslySetInnerHTML={html} />;
};

export default Usage;
