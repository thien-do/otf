import { UseSelectReturnValue } from "downshift";
import { ReactElement } from "react";
import { DropdownOption } from "./box";

const Option = (props: {
  select: UseSelectReturnValue<string>;
  option: DropdownOption;
  index: number;
}): ReactElement => {
  const { select, option, index } = props;

  const isSelected = select.selectedItem === option.value;
  const isHighlighted = select.highlightedIndex === index;

  return (
    <li
      className={[
        "px-18 select-none",
        option.isHeading ? "text-15 text-A0A uppercase" : "",
        option.isHeading && index !== 0 ? "mt-18" : "",
        isSelected ? "bg-718" : "",
        isHighlighted && !isSelected ? "bg-4A5" : "",
      ].join(" ")}
      {...select.getItemProps({ item: option.value, index })}
    >
      {option.label}
    </li>
  );
};

export const DropdownMenu = (props: {
  select: UseSelectReturnValue<string>;
  options: DropdownOption[];
}): ReactElement => {
  const { select, options } = props;

  return (
    <ul
      {...select.getMenuProps()}
      className={[
        "bg-2D3 text-FFF shadow-A0A text-18 leading-36",
        "absolute left-0 top-0 z-1 w-320 py-9",
        !select.isOpen ? "hidden" : "",
      ].join(" ")}
    >
      {options.map((option, index) => (
        <Option
          key={`${option.value}${index}`}
          select={select}
          option={option}
          index={index}
        />
      ))}
    </ul>
  );
};
