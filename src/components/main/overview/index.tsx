import React from "react";
import { Tw } from "styles";
import { State } from "state";
import Code from "./code";
import Font from "./font";

interface Props { state: State; }

const Overview: React.FC<Props> = ({ state }) => (
  <div className={Tw()
    .flex().flexWrap()
    .whitespacePreWrap().text24().leading36().$()
  }>
    <span>This is how </span>
    <span><Code state={state} /> </span>
    <span>make a difference in </span>
    <span><Font state={state} /> </span>
  </div>
);

export default Overview;
