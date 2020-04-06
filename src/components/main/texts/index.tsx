import React, { useState, useEffect } from "react";
import { Tw } from "styles";
import { State, SetState } from "state";

interface Props { state: State; setState: SetState; }

const Texts: React.FC<Props> = ({ state, setState }) => {

  // Unlike "font" and "code", we can't use state.text as the source for
  // our input tags because setState.text is async and would cause the caret
  // jump bug.
  const [text, setText] = useState(state.text);
  useEffect(() => {
    if (text !== state.text) { setState.text(text); }
  }, [text]);
  useEffect(() => {
    if (text !== state.text) { setText(state.text); }
  }, [state.text]);

  const input = (
    <input
      type="text" className={Tw().wFull().$()}
      value={text} onChange={e => setText(e.target.value)}
    />
  );

  const ffsstyle = { fontFeatureSettings: `'${state.feature.code}'` };

  return (
    <div
      className={Tw().text72().leading96().fontSemibold().$()}
      style={{ fontFamily: state.font }}
    >
      <div className={Tw().textCbd().$()}>{input}</div>
      <div className={Tw().text2D3().$()} style={ffsstyle}>{input}</div>
    </div>
  );
};

export default Texts;
