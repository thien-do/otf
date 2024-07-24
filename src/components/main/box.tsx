import { ReactElement, ReactNode } from "react";
import { MainHeaderBox } from "./header/box";

export function MainBox(props: { children: ReactNode }): ReactElement {
  const { children } = props;

  return (
    <main
      className={[
        "px-72 lt1280:px-36",
        "bg-FFF shadow-E2E border border-solid border-E2E",
      ].join(" ")}
    >
      <MainHeaderBox />
      <div className="mt-36" />
      {children}
      <div className="mt-48" />
    </main>
  );
}
