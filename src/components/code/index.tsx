import React from "react";
import { State, SetState } from "state";

import Overview from "./overview";
import Texts from "./texts";
import Description from "./description";

interface Props { state: State; setState: SetState; }

const column = "flex-none w-full lt960:flex-1";
const desc = "pl-0 pt-36 lt960:pl-36 lt960:pt-0 ";

const Code: React.FC<Props> = ({ state, setState }) => (
  <div className="flex flex-wrap">
    <div className={column}>
      <Overview state={state} setState={setState} />
      <div className="mt-36" />
      <Texts state={state} setState={setState} />
    </div>
    <div className={`${column} ${desc}`}>
      <Description state={state} />
    </div>
  </div>
);

export default Code;
