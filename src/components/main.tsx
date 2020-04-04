import React from "react";
import { Tw } from "styles";

const layout = Tw()
  .px72()
  .lt960FlexNone().lt960WFull()
  .fr960To1280Flex1().fr960To1280MaxW800()
  .gt1280Flex1().gt1280MaxW800().$();

const color = Tw()
  .bgFff().shadow8()
  .border1().borderSolid().borderE2E()
  .$();

/*
background: #FFFFFF;
border: 1px solid #E2E8F0;
box-shadow: 0px 0px 8px #E2E8F0;
*/

const Main = () => (
  <div className={`${layout} ${color}`}>Main</div>
);

export default Main;