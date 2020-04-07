import React from "react";
import { Tw } from "styles";

import Header from "../header";

const layout = Tw()
  .px72().flex1().maxW800().pb72()
  .lt960Px36().lt960FlexNone().lt960WFull().lt960MaxWNone().$()

const color = Tw()
  .bgFff().shadowE2E()
  .border1().borderSolid().borderE2E()
  .$();

const links = [
  { href: "/", text: "otf.show" },
  { href: "/about", text: "what's this" },
  { href: "https://github.com/dvkndn/otf.show", text: "github" },
];

interface Props { children: React.ReactChild; }

const Main: React.FC<Props> = ({ children }) => (
  <main className={`${layout} ${color}`}>
    <div><Header links={links} /></div>
    <div className={Tw().mt36().$()}>{children}</div>
  </main>
);

export default Main;
