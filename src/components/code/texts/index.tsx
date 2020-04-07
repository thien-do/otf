import React, { useState, useEffect } from "react";

import { Tw } from "styles";
import { State, SetState } from "state";

import Input from "./input";
import Label from "./label";

interface Props { state: State; setState: SetState; }

const Texts: React.FC<Props> = ({ state, setState }) => {
  // Unlike "font" and "code", we can't use state.text as the source for
  // our input tags because setState.text is async and would cause the caret
  // jump bug.
  const [text, setText] = useState(state.text);
  useEffect(() => { if (text !== state.text) { setState.text(text); } }, [text]);
  useEffect(() => { if (text !== state.text) { setText(state.text); } }, [state.text]);

  const f = state.feature;
  return (
    <div className={Tw().fontSemibold().$()}>
      <div className={Tw().textCbd().$()}>
        <Label id="text-off">👎{"\u2000"}typeface default:</Label>
        <Input id="text-off" state={state} text={text} setText={setText} />
      </div>
      <div className={Tw().text2D3().mt36().$()}>
        <Label id="text-on">
          <span>👍{"\u2000"}with “{f.name}” </span>
          <span>{f.default ? "disabled" : "enabled"}:</span>
        </Label>
        <div style={{ fontFeatureSettings: `"${f.code}" ${f.default ? "0" : "1"}` }}>
          <Input id="text-on" state={state} text={text} setText={setText} />
        </div>
      </div>
    </div>
  );
};

export default Texts;
