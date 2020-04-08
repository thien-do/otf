import React from "react";
import { State } from "state";
import { Tw } from "styles";
import { Feature } from "features";

import Fonts from "./fonts";
import Texts from "./texts";
import Related from "./related";
import Usage from "./usage";

interface Props { state: State; }

const Description: React.FC<Props> = ({ state }) => (
  <div className={Tw().text18().leading30().$()}>
    <Usage feature={state.feature} />
    <p className={Tw().mt24().$()}>
      <Fonts fonts={state.feature.fonts} /><span> </span>
      <Texts texts={state.feature.texts} />
    </p>
    {state.feature.related.length > 0 &&
      <p className={Tw().mt24().$()}><Related codes={state.feature.related} /></p>}
  </div >
);

export default Description;
