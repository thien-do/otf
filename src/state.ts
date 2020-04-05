import { NextRouter } from "next/router";
import features, { Feature } from "features";

export interface State {
  feature: Feature;
  text: string;
  font: string;
}

export const getState = (router: NextRouter): State => {
  // feature
  const { code } = router.query;
  if (typeof code != "string") { throw new Error("invalid code from query"); }
  const feature = features[code];
  if (feature === undefined) { throw new Error("not found code"); }

  // font
  const queryFont = router.query.font;
  if (Array.isArray(queryFont)) { throw new Error("invalid font from query (array)"); }
  const font = queryFont ?? feature.fonts[0];
  if (font === undefined) { throw new Error("missing font from feature"); }

  // text
  const queryText = router.query.text;
  if (Array.isArray(queryText)) { throw new Error("invalid text from query (array)"); }
  const text = queryText ?? feature.texts[0];
  if (text === undefined) { throw new Error("missing text from feature"); }

  return { feature, text, font };
};
