import { ReactElement } from "react";
import Input from "./input";
import Label from "./label";
import { Feature } from "features";

const getFFS = (f: Feature) => {
  const arr = [];
  arr.push(`"${f.patchedCode ?? f.code}"`);
  arr.push(f.default ? "0" : "1"); // enabled or disabled
  if (f.required) { arr.push(`, ${f.required}`); }
  return arr.join(" ");
};

export default function Texts(props: { feature: Feature }): ReactElement {
  const { feature } = props

  return (
    <div className="font-semibold text-2D3">
      <div className={`${feature.default ? "text-CBD" : ""}  ${""}`}>
        <Label id="text-on">
          <span>with “{feature.name}” </span>
          <span>{feature.default ? "disabled" : "enabled"}:</span>
        </Label>
        <div style={{ fontFeatureSettings: getFFS(feature) }}>
          <Input id="text-on" feature={feature} />
        </div>
      </div>
      <div className={`${feature.default ? "" : "text-CBD"} mt-36`}>
        <Label id="text-off">typeface default:</Label>
        <div style={{ fontFeatureSettings: feature.required }}>
          <Input id="text-off" feature={feature} />
        </div>
      </div>
    </div>
  );
}
