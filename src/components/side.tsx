import React from "react";
import { Tw } from "styles";

import Header from "./header";

const layout = Tw()
  .lt960WFull().fr960To1280W320().gt1280W640()
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
