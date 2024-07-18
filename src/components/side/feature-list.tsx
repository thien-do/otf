import React from "react";

import { Feature } from "features";

import FeatureComponent from "./feature";

interface Props { features: Feature[]; }

const FeatureList: React.FC<Props> = ({ features }) => (
  <div className="flex flex-wrap">
    {features.map(feature => (
      <FeatureComponent key={feature.code} feature={feature} />
    ))}
  </div>
);

export default FeatureList;
