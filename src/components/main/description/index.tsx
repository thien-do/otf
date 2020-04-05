import React from "react";
import { State } from "state";
import { Tw } from "styles";
import features, { Feature } from "features";

const getList = (strs: string[]): string => {
  if (strs.length < 2) { throw new Error("getList is for length >= 2"); }
  const last = strs.length - 1;
  return `${strs.slice(0, last).join(", ")} and ${strs[last]}`;
};

const getName = (ft: Feature) => {
  return ft.family_code && ft.family_name
    ? `${ft.family_name} (${ft.family_code})`
    : `${ft.name} (${ft.code})`;
};

const getFont = (fonts: string[]) => {
  switch (fonts.length) {
    case 0: throw new Error("fonts length must be more than 0");
    case 1: return `A font that have this feature is ${fonts[0]}.`;
    default: return `Fonts that have this feature includes ${getList(fonts)}.`;
  }
}

const getText = (_texts: string[]) => {
  const texts = _texts.map(t => `“${t}”`);
  switch (texts.length) {
    case 0: throw new Error("texts length must be more than 0");
    case 1: return `A text that highlights this feature is ${texts[0]}.`;
    default: return `Texts that highlight this feature includes ${getList(texts)}.`;
  }
}

interface Props { state: State; }

const Description: React.FC<Props> = ({ state }) => (
  <div className={Tw().text18().leading30().$()}>
    <p>
      <span className={Tw().fontSemibold().$()}>{getName(state.feature)}</span>
      <span> {state.feature.description}</span>
    </p>
    <p className={Tw().mt18().$()}>{getFont(state.feature.fonts)}</p>
    <p className={Tw().mt18().$()}>{getText(state.feature.texts)}</p>
  </div >
);

export default Description;
