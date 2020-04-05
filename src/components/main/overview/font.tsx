import React from "react";
import fonts from "fonts";
import { State } from "state";
import Dropdown from "./dropdown";

const options = fonts.map(font => ({ value: font, label: font }));

interface Props { state: State; }

const Font: React.FC<Props> = ({ state }) => (
  <Dropdown value={state.font} setValue={() => { }} options={options} />
);

export default Font;
