import React from "react";
import { useSelect, UseSelectState } from "downshift";
import Button from "./button";
import Menu from "./menu";

export interface Option {
  value: string;
  label: string;
  isHeading?: boolean;
}

type SetValue = (value: string) => void;

interface Props {
  value: string;
  setValue: SetValue;
  options: Option[];
}

const makeItemToString = (options: Option[]) => (value: string | null): string => {
  if (value === null) { return ""; }
  const option = options.find(o => o.value === value);
  if (option === undefined) { return ""; }
  return option.label;
};

type Changes = Partial<UseSelectState<string>>;

const makeOnSelectedItemChange = (setValue: SetValue) => (changes: Changes) => {
  if (changes.selectedItem === undefined) {
    throw new Error("dropdown: selected item must be defined");
  }
  setValue(changes.selectedItem ?? "");
};

const makeIsItemDisable = (options: Option[]) => (_item: string, index: number) => {
  return options[index].isHeading ?? false;
};

const Dropdown: React.FC<Props> = ({ value, setValue, options }) => {
  const itemToString = makeItemToString(options);
  const onSelectedItemChange = makeOnSelectedItemChange(setValue);
  const isItemDisabled = makeIsItemDisable(options);
  const s = useSelect({
    items: options.map((o) => o.value),
    selectedItem: value,
    itemToString,
    onSelectedItemChange,
    isItemDisabled,
  });
  return (
    <span className="relative font-semibold">
      <Button s={s} value={value} itemToString={itemToString} />
      <Menu s={s} options={options} />
    </span>
  );
};

export default Dropdown;
