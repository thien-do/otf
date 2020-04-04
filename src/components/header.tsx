import React from "react";
import { Tw } from "styles";
import HeaderLink from "./header-link";

interface Link { href: string; text: string; }

interface Props { links: Link[]; }

const Header: React.FC<Props> = ({ links }) => (
  <header className={Tw().py36().borderB1().borderSolid().borderCbd().$()}>
    <ul className={Tw().flex().text18().leading24().fontSemibold().$()}>
      {links.map((link, index) => (
        <li key={link.text} className={index !== 0 ? Tw().ml36().$() : ""}>
          <HeaderLink href={link.href}>{link.text}</HeaderLink>
        </li>
      ))}
    </ul>
  </header>
);

export default Header;
