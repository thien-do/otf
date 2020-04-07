import React from "react";
import { Tw } from "styles";
import { UseSelectReturnValue } from "downshift";
import { Option } from "./index";

interface Props {
  s: UseSelectReturnValue<string>;
  options: Option[];
}

const ulStyles = Tw()
  .bg2D3().textFff().shadowA0A().text18().leading36()
  .absolute().left0().top0().z1().w320().py9()
  .$();

const getLiStyles = (s: UseSelectReturnValue<string>, o: Option, index: number) => {
  const base = Tw().px18().selectNone().$();
  const fs = o.isHeading ? Tw().text15().textA0A().uppercase().$() : "";
  const mr = o.isHeading && index !== 0 ? Tw().mt18().$() : "";
  const se = s.selectedItem === o.value ? Tw().bg718().$() : "";
  const hi = s.highlightedIndex === index && se === "" ? Tw().bg4A5().$() : "";
  return `${base} ${mr} ${fs} ${hi} ${se}`;
};

const Menu: React.FC<Props> = ({ s, options }) => (
  <ul {...s.getMenuProps()} className={ulStyles}>
    {options.map((o, index) => (
      <li
        key={`${o.value}${index}`}
        className={getLiStyles(s, o, index)}
        {...s.getItemProps({ item: o.value, index, disabled: o.isHeading })}
      >
        {o.label}
      </li>
    ))}
  </ul >
);

export default Menu;
