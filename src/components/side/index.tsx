import React from "react";
import { Tw } from "styles";
import { State, SetState } from "state";

import Header from "../header";
import FeatureList from "./feature-list";

const layout = Tw()
  .w640().lt1280W320().lt960WFull()
  .flexNone().$();

interface Props { state: State; }

const Side: React.FC<Props> = ({ state }) => (
  <aside className={`${layout}`}>
    <div className={Tw().px36().$()}>
      <Header links={[{
        href: "https://github.com/dvkndn/otf.show/issues/1",
        text: "edit & contribute"
      }]} />
    </div>
    <p className={Tw().px36().mt36().text24().leading36().text718().$()}>
      Explore more:
    </p>
    <div className={Tw().mt24().$()}>
      <FeatureList state={state} />
    </div>
  </aside>
);

export default Side;
