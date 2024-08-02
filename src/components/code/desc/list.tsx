import { ReactElement, ReactNode } from "react";

const addSep: (prev: ReactNode[], link: ReactElement) => ReactNode[] = (
  prev,
  link
) => [...prev, link, ", "];

export const CodeDescList = (props: {
  items: ReactElement[];
}): ReactElement => {
  const { items } = props;

  switch (items.length) {
    case 0:
      throw new Error("Length must be > 0");
    case 1:
      return items[0];
    default: {
      const init = items.slice(0, items.length - 1).reduce(addSep, []);
      init.pop(); // remove last ","
      const last = items[items.length - 1];
      return (
        <span>
          {init} and {last}
        </span>
      );
    }
  }
};
