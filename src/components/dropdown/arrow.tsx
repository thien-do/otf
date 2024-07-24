import { ReactElement } from "react";

export const DropdownArrow = (): ReactElement => {
  return (
    <span className="whitespace-nowrap">
      <span className="inline-block" style={{ transform: "scale(0.5)" }}>
        ▼
      </span>
    </span>
  );
};
