import React from "react";
import fonts from "fonts";
import { State, SetState } from "state";
import Dropdown from "components/dropdown";

const options = fonts.map(font => ({ value: font, label: font }));

interface Props { state: State; setState: SetState; }

const Font: React.FC<Props> = ({ state, setState }) => (
  <Dropdown value={state.font} setValue={setState.font} options={options} />
);

export default Font;
