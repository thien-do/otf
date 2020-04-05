import React from "react";
import { State } from "state";

interface Props { state: State; }

const Description: React.FC<Props> = ({ state }) => (
  <div>{state.feature.description}</div>
);

export default Description;
