import React from "react";
import { featureArr } from "features";
import Dropdown from "components/dropdown";
import { State, SetState } from "state";

const options = featureArr.map(ft => ({
  value: ft.code,
  label: `${ft.name} (${ft.code})`
}));

interface Props { state: State; setState: SetState; }

const Code: React.FC<Props> = ({ state, setState }) => (
  <Dropdown
    value={state.feature.code}
    setValue={setState.feature}
    options={options}
  />
);

export default Code;
