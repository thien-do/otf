import React from "react";

import { Tw } from "styles";
import { Feature } from "features";

const getName = (ft: Feature) => {
  return ft.family_code && ft.family_name
    ? `${ft.family_name} (${ft.family_code})`
    : `${ft.name} (${ft.code})`;
};

interface Props { feature: Feature; }

const bold = Tw().fontSemibold().$();

const Usage: React.FC<Props> = ({ feature }) => {
  const texts = feature.description.split("\n\n");
  return (
    <div>
      <p><span className={bold}>{getName(feature)}</span> {texts[0]}</p>
      {texts.slice(1).map((text, index) => (
        <p className={Tw().mt24().$()} key={index}>{text}</p>
      ))}
    </div>
  );
};

export default Usage;
