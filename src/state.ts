import { NextRouter } from "next/router";
import features, { Feature } from "features";

export interface State {
  feature: Feature;
  text: string;
  font: string;
}

export interface Query {
  [key: string]: string | string[] | undefined;
  code?: string;
}

const setFeature = (router: NextRouter) => (value: string) => {
  router.push("/[code]", `/${value}`, { shallow: true });
};

const setQuery = (router: NextRouter, key: string) => (value: string) => {
  const query: Query = { ...router.query, [key]: value };
  delete query.code;
  const url = { pathname: "/[code]", query };
  const as = { pathname: `/${router.query.code}`, query };
  router.push(url, as, { shallow: true });
};

export interface SetState {
  feature: (code: string) => void;
  text: (text: string) => void;
  font: (name: string) => void;
}

export const getSetState = (router: NextRouter): SetState => ({
  feature: setFeature(router),
  text: setQuery(router, "text"),
  font: setQuery(router, "font"),
});

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
