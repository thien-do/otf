import React from "react";
import { Tw } from "styles";
import { featureArr } from "features";
import { State } from "state";
import Feature from "./feature";

interface Props { state: State; }

const FeatureList: React.FC<Props> = ({ state }) => (
  <div className={Tw().flex().flexWrap().$()}>
    {featureArr.map(feature => (
      <Feature key={feature.code} feature={feature} state={state} />
    ))}
  </div>
);

export default FeatureList;
