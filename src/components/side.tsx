import React from "react";
import { Tw } from "styles";

const layout = Tw()
  .lt960WFull().fr960To1280W320().gt1280W640()
  .flexNone().$();

const Side = () => (
  <div className={`${layout}`}>Side</div>
);

export default Side;
