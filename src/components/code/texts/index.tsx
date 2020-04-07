import React, { useState, useEffect } from "react";
import { Tw } from "styles";
import { State, SetState } from "state";

interface InputProps {
  id: string; state: State,
  text: string; setText: (text: string) => void;
}

const Input: React.FC<InputProps> = ({ state, text, setText, id }) => (
  <input
    type="text" style={{ fontFamily: state.font }}
    className={Tw().text72().leading96().wFull().$()}
    value={text} onChange={e => setText(e.target.value)} id={id}
  />
);

interface LabelProps { id: string; children: string | string[]; }

const Label: React.FC<LabelProps> = ({ id, children }) => (
  <label
    className={Tw().text15().leadingNone().uppercase().block().$()}
    style={{ fontFeatureSettings: "'cpsp'" }} htmlFor={id}
  >{children}</label>
);

interface Props { state: State; setState: SetState; }

const Texts: React.FC<Props> = ({ state, setState }) => {
  // Unlike "font" and "code", we can't use state.text as the source for
  // our input tags because setState.text is async and would cause the caret
  // jump bug.
  const [text, setText] = useState(state.text);
  useEffect(() => { if (text !== state.text) { setState.text(text); } }, [text]);
  useEffect(() => { if (text !== state.text) { setText(state.text); } }, [state.text]);

  return (
    <div className={Tw().fontSemibold().$()}>
      <div className={Tw().textCbd().$()}>
        <Label id="text-off">👎{"\u2000"}typeface default:</Label>
        <Input id="text-off" state={state} text={text} setText={setText} />
      </div>
      <div className={Tw().text2D3().mt24().$()}>
        <Label id="text-on">👍{"\u2000"}with “{state.feature.name}” applied:</Label>
        <div style={{ fontFeatureSettings: `'${state.feature.code}'` }}>
          <Input id="text-on" state={state} text={text} setText={setText} />
        </div>
      </div>
    </div>
  );
};

export default Texts;
