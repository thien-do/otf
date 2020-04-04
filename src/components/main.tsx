import React from "react";
import { Tw } from "styles";

import Header from "./header";

const layout = Tw()
  .px72()
  .lt960FlexNone().lt960WFull()
  .fr960To1280Flex1().fr960To1280MaxW800()
  .gt1280Flex1().gt1280MaxW800().$();

const color = Tw()
  .bgFff().shadow8()
  .border1().borderSolid().borderE2E()
  .$();

const Main = () => (
  <div className={`${layout} ${color}`}>
    <Header />
    <div>main</div>
  </div>
);

export default Main;