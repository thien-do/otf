import React from "react";
import Header from "./header";

interface Props { children: React.ReactChild; }

const Main: React.FC<Props> = ({ children }) => (
  <main className={[
    "px-72 lt1280:px-36",
    "bg-FFF shadow-E2E border border-solid border-E2E"
  ].join(" ")}>
    <Header />
    <div className="mt-36" />
    {children}
    <div className="mt-48" />
  </main>
);

export default Main;
