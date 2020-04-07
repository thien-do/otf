import React from "react";
import { featureArr, Feature, featureGroups } from "features";
import Dropdown, { Option } from "components/dropdown";
import { State, SetState } from "state";

const toOption = (ft: Feature): Option =>
  ({ value: ft.code, label: `${ft.name} (${ft.code})` });

interface Props { state: State; setState: SetState; }

const Code: React.FC<Props> = ({ state, setState }) => {
  const options: Option[] = [];
  featureGroups.forEach(({ label, type }) => {
    options.push({ label, value: label, isHeading: true });
    options.push(...featureArr.filter(f => f.type === type).map(toOption));
  });
  return (
    <Dropdown
      value={state.feature.code} setValue={setState.feature}
      options={options}
    />
  );
};

export default Code;
