import React from "react";

import { Tw } from "styles";
import { featureArr } from "features";

import Feature from "./feature";

const FeatureList: React.FC = () => (
  <div className={Tw().flex().flexWrap().$()}>
    {featureArr.map(feature => (
      <Feature key={feature.code} feature={feature} />
    ))}
  </div>
);

export default FeatureList;
