import React from "react";
import { State } from "state";

interface Props {
  id: string; state: State,
  text: string; setText: (text: string) => void;
}

const Input: React.FC<Props> = ({ state, text, setText, id }) => (
  <input
    type="text" style={{ fontFamily: state.font }}
    className="text-72 leading-96 w-full overflow-hidden"
    value={text} onChange={e => setText(e.target.value)} id={id}
  />
);

export default Input;
