import React from "react";
import { Tw } from "styles";

import Header from "./header";

const layout = Tw()
  .w640().lt1280W320().lt960WFull()
  .flexNone().px36().$();

const Side = () => (
  <aside className={`${layout}`}>
    <Header links={[{
      href: "https://github.com/dvkndn/otf.show/issues/1",
      text: "edit & contribute"
    }]} />
    <div>side</div>
  </aside>
);

export default Side;
