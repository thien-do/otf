import React from "react";
import { SetState, State } from "state";

import Description from "./description";
import Overview from "./overview";
import Texts from "./texts";

interface Props { state: State; setState: SetState; }

const column = "flex-1 lt960:w-full lt960:flex-none";
const desc = "pl-72 lt1280:pl-36 lt960:pl-0 lt960:pt-36";

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
