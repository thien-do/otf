import { UseSelectReturnValue } from "downshift";
import { ReactElement } from "react";
import { DropdownArrow } from "./arrow";

export const DropdownButton = (props: {
  select: UseSelectReturnValue<string>;
  value: string;
  itemToString: (item: string) => string;
}): ReactElement => {
  const { select, value, itemToString } = props;

  return (
    <button {...select.getToggleButtonProps()} className="cursor-pointer">
      {itemToString(value)}
      <DropdownArrow />
    </button>
  );
};
