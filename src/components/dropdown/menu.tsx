import React from "react";
import { UseSelectReturnValue } from "downshift";
import { Option } from "./index";

interface Props {
  s: UseSelectReturnValue<string>;
  options: Option[];
}

const Menu: React.FC<Props> = ({ s, options }) => (
  <ul
    {...s.getMenuProps()}
    className={[
      "bg-2D3 text-FFF shadow-A0A text-18 leading-36",
      "absolute left-0 top-0 z-1 w-320 py-9",
      !s.isOpen ? "hidden" : ""
    ].join(" ")}
  >
    {options.map((o, index) => {
      const isSelected = s.selectedItem === o.value
      const isHighlighted = s.highlightedIndex === index
      return (
        <li
          key={`${o.value}${index}`}
          className={[
            "px-18 select-none",
            o.isHeading ? "text-15 text-A0A uppercase" : "",
            o.isHeading && index !== 0 ? "mt-18" : "",
            isSelected ? "bg-718" : "",
            isHighlighted && !isSelected ? "bg-4A5" : ""
          ].join(" ")}
          {...s.getItemProps({ item: o.value, index })}
        >
          {o.label}
        </li>
      )
    })}
  </ul>
);

export default Menu;
