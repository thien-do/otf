import React from "react";
import { Tw } from "styles";
import HeaderLink from "./header-link";

const GITHUB_HREF = "https://github.com/dvkndn/otf.show";

const Header: React.FC = () => (
  <header className={Tw().py36().borderB1().borderSolid().borderCbd().$()}>
    <ul className={Tw().flex().text18().leading24().fontSemibold().$()}>
      <li className={Tw().mr36().$()}>
        <HeaderLink href="/">otf.show</HeaderLink>
      </li>
      <li className={Tw().mr36().$()}>
        <HeaderLink href="/about">about</HeaderLink>
      </li>
      <li>
        <HeaderLink href={GITHUB_HREF}>github</HeaderLink>
      </li>
    </ul>
  </header>
);

export default Header;
