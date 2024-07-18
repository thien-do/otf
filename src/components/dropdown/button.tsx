import React from "react";
import { UseSelectReturnValue } from "downshift";

const Arrow = () => (
  <span className="whitespace-nowrap">
    <span className="inline-block" style={{ transform: "scale(0.5)" }}>▼</span>
  </span>
);

interface Props {
  s: UseSelectReturnValue<string>;
  value: string;
  itemToString: (item: string) => string;
}

const Button: React.FC<Props> = ({ s, value, itemToString }) => (
  <button
    {...s.getToggleButtonProps()}
    className="cursor-pointer"
  >
    {itemToString(value)}
    <Arrow />
  </button>
);

export default Button;
