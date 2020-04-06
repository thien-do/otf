import React from "react";

import { Tw } from "styles";
import { State, SetState } from "state";

import Overview from "./overview";
import Texts from "./texts";
import Description from "./description";

interface Props { state: State; setState: SetState; }

const Code: React.FC<Props> = ({ state, setState }) => (
  <div>
    <div>
      <Overview state={state} setState={setState} />
    </div>
    <div className={Tw().mt24().$()}>
      <Texts state={state} setState={setState} />
    </div>
    <div className={Tw().mt36().$()}>
      <Description state={state} />
    </div>
  </div>
);

export default Code;
