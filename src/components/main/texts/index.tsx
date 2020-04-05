import React from "react";
import { Tw } from "styles";
import { State, SetState } from "state";

interface Props { state: State; setState: SetState; }

const Texts: React.FC<Props> = ({ state, setState }) => (
  <div
    className={Tw().text72().leading96().fontSemibold().$()}
    style={{ fontFamily: state.font }}
  >
    <div className={Tw().textCbd().$()}>
      <input
        type="text" className={Tw().wFull().$()}
        value={state.text} onChange={e => setState.text(e.target.value)}
      />
    </div>
    <div
      className={Tw().text2D3().$()}
      style={{ fontFeatureSettings: `'${state.feature.code}'` }}
    >
      <input
        type="text" className={Tw().wFull().$()}
        value={state.text} onChange={e => setState.text(e.target.value)}
      />
    </div>
  </div>
);

export default Texts;
