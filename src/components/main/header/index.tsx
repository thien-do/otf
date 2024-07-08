import React from "react";
import HeaderLink from "./link";

const links = [
  { href: "/", text: "otf.show" },
  { href: "/about", text: "what's this" },
  { href: "https://github.com/thien-do/otf", text: "github" },
];

const Header: React.FC = () => (
  <header className="py-36 border-b border-solid border-CBD">
    <ul className="flex text-18 leading-24 font-semibold">
      {links.map((link, index) => (
        <li key={link.text} className={index !== 0 ? "ml-36" : ""}>
          <HeaderLink href={link.href}>{link.text}</HeaderLink>
        </li>
      ))}
    </ul>
  </header>
);

export default Header;
