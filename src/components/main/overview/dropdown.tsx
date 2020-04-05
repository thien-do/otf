import React from "react";
import { Tw } from "styles";

interface Option { value: string; label: string; }

interface Props {
  value: string;
  setValue: (value: string) => void;
  options: Option[];
}

const Dropdown: React.FC<Props> = ({ value, options }) => {
  const option = options.find(o => o.value === value);
  if (option === undefined) { return <span>invalid value</span>; }
  return (
    <span className={Tw().fontSemibold().$()}>
      {option.label} ↓
    </span>
  );
};

export default Dropdown;
