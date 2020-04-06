import React from "react";
import { Tw } from "styles";
import { Feature } from "features";
import { State } from "state";
import Link from "next/link";

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
    <span className={Tw().block().text15().textA0A().$()}>
      {feature.fonts.join(", ")}
    </span>
  </span>
);

interface Props { feature: Feature; state: State; }

const getAStyles = (feature: Feature, state: State) => {
  const base = Tw().flex().px36().py18().w320().leading24().$();
  const bg = feature.code === state.feature.code ? Tw().bgEdf().$() : "";
  return `${base} ${bg}`;
};

const FeatureComponent: React.FC<Props> = ({ feature, state }) => {
  return (
    <Link href="/[code]" as={`/${feature.code}`}>
      <a className={getAStyles(feature, state)}>
        <span className={Tw().flexNone().$()}>
          <Code code={feature.code} />
        </span>
        <span className={Tw().ml18().flex1().$()}>
          <Name feature={feature} />
        </span>
      </a>
    </Link>
  );
};

export default FeatureComponent;
