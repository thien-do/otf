import { Feature } from "features";
import { ReactElement } from "react";
import { CodeTextInput } from "./input";
import { CodeTextLabel } from "./label";

const getSetting = (feature: Feature): string => {
  const arr = [];
  arr.push(`"${feature.patchedCode ?? feature.code}"`);
  arr.push(feature.default ? "0" : "1"); // enabled or disabled
  if (feature.required) {
    arr.push(`, ${feature.required}`);
  }
  return arr.join(" ");
};

export function CodeTextBoxBase(props: {
  text: string;
  setText: null | ((next: string) => void);
  //
  feature: Feature;
  font: string;
}): ReactElement {
  const { feature, font, text, setText } = props;

  const input = { font, text, setText, feature };

  return (
    <div className="font-semibold text-2D3">
      <div className={`${feature.default ? "text-718" : ""}  ${""}`}>
        <CodeTextLabel id="text-on">
          <span>with “{feature.name}” </span>
          <span>{feature.default ? "disabled" : "enabled"}:</span>
        </CodeTextLabel>
        <div style={{ fontFeatureSettings: getSetting(feature) }}>
          <CodeTextInput id="text-on" {...input} />
        </div>
      </div>
      <div className={`${feature.default ? "" : "text-718"} mt-36`}>
        <CodeTextLabel id="text-off">typeface default:</CodeTextLabel>
        <div style={{ fontFeatureSettings: feature.required }}>
          <CodeTextInput id="text-off" {...input} />
        </div>
      </div>
    </div>
  );
}
