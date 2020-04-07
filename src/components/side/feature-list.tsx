import React from "react";

import { Tw } from "styles";
import { Feature } from "features";

import FeatureComponent from "./feature";

interface Props { features: Feature[]; }

const FeatureList: React.FC<Props> = ({ features }) => (
  <div className={Tw().flex().flexWrap().$()}>
    {features.map(feature => (
      <FeatureComponent key={feature.code} feature={feature} />
    ))}
  </div>
);

export default FeatureList;
