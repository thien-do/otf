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

const getLiStyles = (s: UseSelectReturnValue<string>, option: Option, index: number) => {
  const base = Tw().px18().selectNone().$();
  const se = s.selectedItem === option.value ? Tw().bg718().$() : "";
  const hi = s.highlightedIndex === index && se === "" ? Tw().bg4A5().$() : "";
  return `${base} ${hi} ${se}`;
};

const Menu: React.FC<Props> = ({ s, options }) => (
  <ul {...s.getMenuProps()} className={ulStyles}>
    {options.map((option, index) => (
      <li
        className={getLiStyles(s, option, index)}
        key={`${option.value}${index}`}
        {...s.getItemProps({ item: option.value, index })}
      >
        {option.label}
      </li>
    ))}
  </ul>
);

export default Menu;
