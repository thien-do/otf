import React from "react";
import { featureArr, Feature } from "features";
import Dropdown, { Option } from "components/dropdown";
import { State, SetState } from "state";

const toOption = (ft: Feature): Option =>
  ({ value: ft.code, label: `${ft.name} (${ft.code})` });

interface Props { state: State; setState: SetState; }

const Code: React.FC<Props> = ({ state, setState }) => {
  const options: Option[] = [
    { label: "Letters", value: "0", isHeading: true },
    ...featureArr.filter(f => f.type === "letter").map(toOption),
    { label: "Digits", value: "1", isHeading: true },
    ...featureArr.filter(f => f.type === "digit").map(toOption),
  ];
  return (
    <Dropdown
      value={state.feature.code} setValue={setState.feature}
      options={options}
    />
  );
};

export default Code;
