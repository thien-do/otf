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
  /*
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
  */
  tnum: {
    "code": "tnum",
    "name": "Tabular Figures",
    "description": "replaces numeral glyphs set on uniform (tabular) widths with corresponding glyphs set on glyph-specific (proportional) widths.",
    "fonts": ["Inter", "Rasa"],
    "texts": ["11,150,110", "11110000"],
    "related": ["pnum", "onum", "lnum"]
  },
  pnum : {
    "code": "pnum",
    "name": "Proportional Figures",
    "description": "replaces figure glyphs set on uniform (tabular) widths with corresponding glyphs set on glyph-specific (proportional) widths.",
    "fonts": ["Lato", "Source Sans Pro", "Roboto", "Open Sans"],
    "texts": ["11,150,110", "11110000"],
    "related": ["tnum", "onum", "lnum"]
  },
  onum : {
    "code": "onum",
    "name": "Oldstyle Figures",
    "description": "changes numeral glyphs from default or lining figures to oldstyle figures.",
    "fonts": ["Lato", "Source Sans Pro", "Roboto", "Open Sans"],
    "texts": ["10Broad36", "123456789"],
    "related": ["lnum", "tnum", "pnum"]
  },
  lnum : {
    "code": "lnum",
    "name": "Lining Figures",
    "description": "changes numeral glyphs from default or oldstyle figures to lining figures.",
    "fonts": ["Merriweather", "Raleway"],
    "texts": ["10Broad36", "123456789"],
    "related": ["onum", "tnum", "pnum"]
  },
};

// https://codereview.stackexchange.com/a/138289
export const featureArr: Feature[] = Object.values(featureMap)
  .filter(a => a !== undefined) as Feature[];
