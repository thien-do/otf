import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Feature } from "features";

interface CodeProps { code: string; }

const Code: React.FC<CodeProps> = ({ code }) => {
  if (code.length !== 4) { throw new Error("code length must be 4"); }
  return (
    <span className="block font-mono">
      <span className="block">{code.slice(0, 2)}</span>
      <span className="block">{code.slice(2, 4)}</span>
    </span>
  );
};

interface NameProps { feature: Feature; }

const Name: React.FC<NameProps> = ({ feature }) => (
  <span className="block">
    <span className="block text-18">
      {feature.name}
    </span>
    <span className="block text-15 truncate text-A0A">
      {feature.fonts.join(", ")}
    </span>
  </span>
);

interface Props { feature: Feature; }

const FeatureComponent: React.FC<Props> = ({ feature }) => {
  const { code } = useRouter().query;
  return (
    <Link
      href="/[code]"
      as={`/${feature.code}`}
      className={[
        "flex px-36 py-18 w-320 leading-24",
        feature.code === code ? "bg-EDF" : ""
      ].join(" ")}
    >
      <span className="flex-none">
        <Code code={feature.code} />
      </span>
      <span className="ml-18 flex-1 overflow-hidden">
        <Name feature={feature} />
      </span>
    </Link>
  );
};

export default FeatureComponent;
