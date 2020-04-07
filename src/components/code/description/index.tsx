import React from "react";
import { State } from "state";
import { Tw } from "styles";
import { Feature } from "features";

import Fonts from "./fonts";
import Texts from "./texts";
import Related from "./related";

const getName = (ft: Feature) => {
  return ft.family_code && ft.family_name
    ? `${ft.family_name} (${ft.family_code})`
    : `${ft.name} (${ft.code})`;
};

interface Props { state: State; }

const Description: React.FC<Props> = ({ state }) => (
  <div className={Tw().text18().leading30().$()}>
    <p className={Tw().whitespacePreLine().$()}>
      <span className={Tw().fontSemibold().$()}>{getName(state.feature)}</span>
      <span> {state.feature.description}</span>
    </p>
    <p className={Tw().mt18().$()}>
      <Fonts fonts={state.feature.fonts} /><span> </span>
      <Texts texts={state.feature.texts} />
    </p>
    {state.feature.related.length > 0 &&
      <p className={Tw().mt18().$()}><Related codes={state.feature.related} /></p>}
  </div >
);

export default Description;
