import React from "react";
import HeaderLink from "./link";

const links = [
  { href: "/", text: "otf.thien.do" },
  { href: "/about", text: "what's this" },
  { href: "https://github.com/thien-do/otf", text: "github" },
];

const Header: React.FC = () => (
  <header className="py-36 border-b border-solid border-CBD">
    <ul className="flex flex-wrap gap-y-18 gap-x-36 text-18 leading-24 font-semibold">
      {links.map((link) => (
        <li key={link.text}>
          <HeaderLink href={link.href}>{link.text}</HeaderLink>
        </li>
      ))}
    </ul>
  </header>
);

export default Header;
