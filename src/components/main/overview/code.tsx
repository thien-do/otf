import React from "react";
import features from "features";
import Dropdown from "components/dropdown";
import { State, SetState } from "state";

const options = Object.keys(features).map(key => {
  const ft = features[key];
  if (ft === undefined) { throw new Error("programming error code.tsx"); }
  return { value: ft.code, label: `${ft.name} (${ft.code})` };
});

interface Props { state: State; setState: SetState; }

const Code: React.FC<Props> = ({ state, setState }) => (
  <Dropdown
    value={state.feature.code}
    setValue={setState.feature}
    options={options}
  />
);

export default Code;
