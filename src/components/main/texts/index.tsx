import React from "react";
import { Tw } from "styles";
import { State } from "state";

interface Props { state: State; }

const Texts: React.FC<Props> = ({ state }) => (
  <div
    className={Tw().text72().leading96().fontSemibold().$()}
    style={{ fontFamily: state.font }}
  >
    <div className={Tw().textCbd().$()}>
      <input
        type="text" className={Tw().wFull().$()}
        defaultValue={state.text}
      />
    </div>
    <div
      className={Tw().text2D3().$()}
      style={{ fontFeatureSettings: `'${state.feature.code}'` }}
    >
      <input
        type="text" className={Tw().wFull().$()}
        defaultValue={state.text}
      />
    </div>
  </div>
);

export default Texts;
