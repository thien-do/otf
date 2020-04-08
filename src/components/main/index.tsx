import React from "react";
import { Tw } from "styles";

import Header from "./header";

interface Props { children: React.ReactChild; }

const tw = Tw()
  .px72().lt1280Px36()
  .bgFff().shadowE2E().border1().borderSolid().borderE2E()
  .$();

const Main: React.FC<Props> = ({ children }) => (
  <main className={tw}>
    <Header />
    <div className={Tw().mt36().$()} />
    {children}
    <div className={Tw().mt48().$()} />
  </main>
);

export default Main;
