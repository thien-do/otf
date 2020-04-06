import React, { ReactNode, ReactElement } from "react";

interface Props { links: ReactElement[]; }

const addSep: (prev: ReactNode[], link: ReactElement) => ReactNode[] =
  (prev, link) => [...prev, link, ", "];

const LinkList: React.FC<Props> = ({ links }) => {
  switch (links.length) {
    case 0: throw new Error("Links length must not be > 0");
    case 1: return links[0];
    default: {
      const init = links.slice(0, links.length - 1).reduce(addSep, []);
      init.pop(); // remove last ","
      const last = links[links.length - 1];
      return <span>{init} and {last}</span>
    }
  }
};

export default LinkList;
