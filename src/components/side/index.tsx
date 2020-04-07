import React from "react";
import { Tw } from "styles";

import FeatureList from "./feature-list";
import { featureArr, featureGroups } from "features";

const layout = Tw()
  .px36().$();

const titleTw = Tw().px36().mt36().text24().leading36().text718().$();

const Side: React.FC = () => (
  <aside className={`${layout}`}>
    {featureGroups.map(({ type, label }) => (
      <div key={type}>
        <p className={titleTw}>{label}</p>
        <div className={Tw().mt24().$()}>
          <FeatureList features={featureArr.filter(f => f.type === type)} />
        </div>
      </div>
    ))}
  </aside>
);

export default Side;
