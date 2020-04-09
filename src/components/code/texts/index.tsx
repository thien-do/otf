import React, { useState, useEffect } from "react";

import { Tw } from "styles";
import { State, SetState } from "state";

import Input from "./input";
import Label from "./label";
import { Feature } from "features";

interface Props { state: State; setState: SetState; }

const getFFS = (f: Feature) => {
  const arr = [];
  arr.push(`"${f.patchedCode ?? f.code}"`);
  arr.push(f.default ? "0" : "1"); // enabled or disabled
  if (f.required) { arr.push(`, ${f.required}`); }
  return arr.join(" ");
};

const Texts: React.FC<Props> = ({ state, setState }) => {
  // Unlike "font" and "code", we can't use state.text as the source for
  // our input tags because setState.text is async and would cause the caret
  // jump bug.
  const [text, setText] = useState(state.text);
  useEffect(() => { if (text !== state.text) { setState.text(text); } }, [text]);
  useEffect(() => { if (text !== state.text) { setText(state.text); } }, [state.text]);

  const f = state.feature;
  return (
    <div className={Tw().fontSemibold().text2D3().$()}>
      <div className={`${f.default ? Tw().textCbd().$() : ""}  ${""}`}>
        <Label id="text-on">
          <span>with “{f.name}” </span>
          <span>{f.default ? "disabled" : "enabled"}:</span>
        </Label>
        <div style={{ fontFeatureSettings: getFFS(f) }}>
          <Input id="text-on" state={state} text={text} setText={setText} />
        </div>
      </div>
      <div className={`${f.default ? "" : Tw().textCbd().$()}  ${Tw().mt36().$()}`}>
        <Label id="text-off">typeface default:</Label>
        <div style={{ fontFeatureSettings: f.required }}>
          <Input id="text-off" state={state} text={text} setText={setText} />
        </div>
      </div>
    </div>
  );
};

export default Texts;
