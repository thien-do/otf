import React from "react";

import { featureArr, featureGroups } from "features";
import FeatureList from "./feature-list";

const Side: React.FC = () => (
  <aside className="py-18 px-36 lt1280:px-0">
    {featureGroups.map(({ type, label }, index) => (
      <div key={type} className={index === 0 ? "" : "mt-18"}>
        <p className="py-18 px-36 text-24 leading-36 text-718">{label}</p>
        <FeatureList features={featureArr.filter(f => f.type === type)} />
      </div>
    ))}
  </aside>
);

export default Side;
