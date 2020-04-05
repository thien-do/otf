import React from "react";
import { Tw } from "styles";

interface Option { value: string; label: string; }

interface Props {
  value: string;
  setValue: (value: string) => void;
  options: Option[];
}

const Arrow = () => (
  <span className={Tw().whitespaceNoWrap().$()}>
    <span className={Tw().inlineBlock().$()} style={{ transform: "scale(0.5)" }}>▼</span>
  </span>
);

const Dropdown: React.FC<Props> = ({ value, options }) => {
  const option = options.find(o => o.value === value);
  if (option === undefined) { return <span>invalid value</span>; }
  return (
    <span className={Tw().fontSemibold().$()}>
      {option.label}<Arrow />
    </span>
  );
};

export default Dropdown;
