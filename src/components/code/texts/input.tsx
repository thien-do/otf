import React from "react";
import { Tw } from "styles";
import { State } from "state";

interface Props {
  id: string; state: State,
  text: string; setText: (text: string) => void;
}

const Input: React.FC<Props> = ({ state, text, setText, id }) => (
  <input
    type="text" style={{ fontFamily: state.font }}
    className={Tw().text72().leading96().wFull().$()}
    value={text} onChange={e => setText(e.target.value)} id={id}
  />
);

export default Input;
