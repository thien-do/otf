import React from "react";
import Header from "./header";

interface Props { children: React.ReactChild; }

const Main: React.FC<Props> = ({ children }) => (
  <main className={[
    "px-36 lt960:px-72",
    "bg-FFF shadow-E2E border border-solid border-E2E"
  ].join(" ")}>
    <Header />
    <div className="mt-36" />
    {children}
    <div className="mt-48" />
  </main>
);

export default Main;
