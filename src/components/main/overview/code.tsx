import React from "react";
import features from "features";
import Dropdown from "./dropdown";
import { State } from "state";

const options = Object.keys(features).map(key => {
  const ft = features[key];
  if (ft === undefined) { throw new Error("programming error code.tsx"); }
  return { value: ft.code, label: `${ft.name} (${ft.code})` };
});

interface Props { state: State; }

const Code: React.FC<Props> = ({ state }) => (
  <Dropdown
    value={state.feature.code}
    setValue={() => { }}
    options={options}
  />
);

export default Code;
