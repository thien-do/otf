import React from "react";

import { Tw } from "styles";
import { State, SetState } from "state";

import Overview from "./overview";
import Texts from "./texts";
import Description from "./description";

interface Props { state: State; setState: SetState; }

const column = Tw().flex1().lt960FlexNone().lt960WFull().$();

const Code: React.FC<Props> = ({ state, setState }) => (
  <div className={Tw().flex().flexWrap().$()}>
    <div className={column}>
      <Overview state={state} setState={setState} />
      <div className={Tw().mt36().$()} />
      <Texts state={state} setState={setState} />
    </div>
    <div className={column + " " + Tw().pl72().lt1280Pl36().lt960Pl0().$()}>
      <Description state={state} />
    </div>
  </div>
);

export default Code;
