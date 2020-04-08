import React from "react";
import { Tw } from "styles";
import HeaderLink from "./link";

const tw = Tw().py36().borderB1().borderSolid().borderCbd().$();

const links = [
  { href: "/", text: "otf.show" },
  { href: "/about", text: "what's this" },
  { href: "https://github.com/dvkndn/otf.show", text: "github" },
];

const Header: React.FC = () => (
  <header className={tw}>
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
