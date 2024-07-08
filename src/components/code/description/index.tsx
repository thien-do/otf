import React from "react";
import { State } from "state";

import Fonts from "./fonts";
import Texts from "./texts";
import Related from "./related";
import Usage from "./usage";

interface Props { state: State; }

const Description: React.FC<Props> = ({ state }) => (
  <div className="text-18 leading-30">
    <Usage feature={state.feature} />
    <p className="mt-24">
      <Fonts fonts={state.feature.fonts} /><span> </span>
      <Texts texts={state.feature.texts} />
    </p>
    {state.feature.related.length > 0 &&
      <p className="mt-24"><Related codes={state.feature.related} /></p>}
  </div >
);

export default Description;
