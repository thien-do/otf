import React from "react";
import fonts from "fonts";
import { State, SetState } from "state";
import Dropdown, { Option } from "components/dropdown";

interface Props { state: State; setState: SetState; }

const toOption = (font: string): Option => ({ value: font, label: font });

const Font: React.FC<Props> = ({ state, setState }) => {
  const supported = state.feature.fonts;
  const options: Option[] = [
    { label: "supported typefaces", value: "0", isHeading: true },
    ...supported.map (toOption),
    { label: "other typefaces", value: "1", isHeading: true },
    ...fonts.filter(f => !supported.includes(f)).map(toOption),
  ];
  return <Dropdown value={state.font} setValue={setState.font} options={options} />;
};

export default Font;
