import React from "react";
import { Tw } from "styles";

import FeatureList from "./feature-list";
import { featureArr, featureGroups } from "features";

const twTitle = Tw().py18().px36().text24().leading36().text718().$();

const Side: React.FC = () => (
  <aside className={Tw().py18().px36().lt1280Px0().$()}>
    {featureGroups.map(({ type, label }, index) => (
      <div className={index === 0 ? "" : Tw().mt18().$()}>
        <p className={twTitle}>{label}</p>
        <FeatureList features={featureArr.filter(f => f.type === type)} />
      </div>
    ))}
  </aside>
);

export default Side;
