import { useSelect, UseSelectState } from "downshift";
import { ReactElement } from "react";
import { DropdownButton } from "./button";
import { DropdownMenu } from "./menu";

export interface DropdownOption {
  value: string;
  label: string;
  isHeading?: boolean;
}

type SetValue = (value: string) => void;

const makeItemToString =
  (options: DropdownOption[]) =>
  (value: string | null): string => {
    if (value === null) {
      return "";
    }
    const option = options.find((o) => o.value === value);
    if (option === undefined) {
      return "";
    }
    return option.label;
  };

type Changes = Partial<UseSelectState<string>>;

const makeOnSelectedItemChange = (setValue: SetValue) => (changes: Changes) => {
  if (changes.selectedItem === undefined) {
    throw new Error("dropdown: selected item must be defined");
  }
  setValue(changes.selectedItem ?? "");
};

const makeIsItemDisable =
  (options: DropdownOption[]) => (_item: string, index: number) => {
    return options[index].isHeading ?? false;
  };

export const DropdownBox = (props: {
  value: string;
  setValue: SetValue;
  options: DropdownOption[];
}): ReactElement => {
  const { value, setValue, options } = props;

  const itemToString = makeItemToString(options);
  const onSelectedItemChange = makeOnSelectedItemChange(setValue);
  const isItemDisabled = makeIsItemDisable(options);
  const select = useSelect({
    items: options.map((o) => o.value),
    selectedItem: value,
    itemToString,
    onSelectedItemChange,
    isItemDisabled,
  });

  return (
    <span className="relative font-semibold">
      <DropdownButton
        select={select}
        value={value}
        itemToString={itemToString}
      />
      <DropdownMenu select={select} options={options} />
    </span>
  );
};
