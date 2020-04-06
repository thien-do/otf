import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Tw } from "styles";
import { Feature } from "features";

interface CodeProps { code: string; }

const Code: React.FC<CodeProps> = ({ code }) => {
  if (code.length !== 4) { throw new Error("code length must be 4"); }
  return (
    <span className={Tw().block().fontMono().$()}>
      <span className={Tw().block().$()}>{code.slice(0, 2)}</span>
      <span className={Tw().block().$()}>{code.slice(2, 4)}</span>
    </span>
  );
};

interface NameProps { feature: Feature; }

const Name: React.FC<NameProps> = ({ feature }) => (
  <span className={Tw().block().$()}>
    <span className={Tw().block().text18().$()}>
      {feature.name}
    </span>
    <span className={Tw().block().text15().truncate().textA0A().$()}>
      {feature.fonts.join(", ")}
    </span>
  </span>
);

interface Props { feature: Feature; }

const getAStyles = (feature: Feature, code?: string | string[]) => {
  const base = Tw().flex().px36().py18().w320().leading24().$();
  const bg = feature.code === code ? Tw().bgEdf().$() : "";
  return `${base} ${bg}`;
};

const FeatureComponent: React.FC<Props> = ({ feature }) => {
  const { code } = useRouter().query;
  return (
    <Link href="/[code]" as={`/${feature.code}`}>
      <a className={getAStyles(feature, code)}>
        <span className={Tw().flexNone().$()}>
          <Code code={feature.code} />
        </span>
        <span className={Tw().ml18().flex1().overflowHidden().$()}>
          <Name feature={feature} />
        </span>
      </a>
    </Link>
  );
};

export default FeatureComponent;
