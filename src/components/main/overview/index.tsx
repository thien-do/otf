import React from "react";
import { Tw } from "styles";
import { State } from "state";
import Code from "./code";
import Font from "./font";

const className = Tw()
  .whitespacePre().text24().leading36()
  .flex().flexWrap().$();

interface Props { state: State; }

const Overview: React.FC<Props> = ({ state }) => (
  <div className={className}>
    <span className={Tw().flexNone().$()}>This is how </span>
    <Code state={state} />
    <span className={Tw().flexNone().$()}>make a difference in </span>
    <Font state={state} />
  </div>
);

export default Overview;
