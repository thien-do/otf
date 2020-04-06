import React from "react";
import { Tw } from "styles";
import { UseSelectReturnValue } from "downshift";

const Arrow = () => (
  <span className={Tw().whitespaceNoWrap().$()}>
    <span className={Tw().inlineBlock().$()} style={{ transform: "scale(0.5)" }}>▼</span>
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
    className={Tw().cursorPointer().$()}
  >
    {itemToString(value)}
    <Arrow />
  </button>
);

export default Button;
