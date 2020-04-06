import { NextRouter } from "next/router";

export interface Feature {
  code: string,
  name: string,
  family_code?: string,
  family_name?: string,
  description: string,
  fonts: string[],
  texts: string[],
  related: string[],
};

export const featureMap: { [code: string]: Feature | undefined } = {
  ss02: {
    "code": "ss02",
    "name": "Stylistic Set 2",
    "family_code": "ss01 - ss20",
    "family_name": "Stylistic Set 1 – 20",
    "description": "replaces character with one from a font-specific set of stylistic alternatives.",
    "fonts": ["Inter", "Source Sans Pro"],
    "texts": ["Illustration", "Ellipsis"],
    "related": ["salt", "cv01"]
  },
  salt: {
    "code": "salt",
    "name": "Stylistic Alternative",
    "description": "replaces the default forms with the stylistic alternates.",
    "fonts": ["Inter", "Source Sans Pro"],
    "texts": ["Illustrating", "Illegal"],
    "related": ["ss01", "ss02"]
  },
  tnum: {
    "code": "tnum",
    "name": "Tabular Figures",
    "description": "replaces figure glyphs set on proportional widths with corresponding glyphs set on uniform (tabular) widths. Tabular widths will generally be the default, but this cannot be safely assumed. Of course this feature would not be present in monospaced designs.",
    "fonts": ["Inter"],
    "texts": ["11110000"],
    "related": []
  }
};

// https://codereview.stackexchange.com/a/138289
export const featureArr: Feature[] = Object.values(featureMap)
  .filter(a => a !== undefined) as Feature[];
