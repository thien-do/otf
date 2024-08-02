import { ReactElement } from "react";
import { DropdownArrow } from "./arrow";

export const DropdownServer = (props: { text: string }): ReactElement => {
  const { text } = props;

  return (
    <span className="cursor-pointer font-semibold">
      {text}
      <DropdownArrow />
    </span>
  );
};
