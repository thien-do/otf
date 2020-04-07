import React from "react";
import { Tw } from "styles";
import { State, SetState } from "state";
import Code from "./code";
import Font from "./font";

interface Props { state: State; setState: SetState; }

const Overview: React.FC<Props> = ({ state, setState }) => (
  <div className={Tw()
    .whitespacePreWrap().text24().leading36().$()
  }>
    <span>This is how </span>
    <span><Code state={state} setState={setState} /> </span>
    <span>in </span>
    <span><Font state={state} setState={setState} /> </span>
    <span>brings better typography:</span>
  </div>
);

export default Overview;
