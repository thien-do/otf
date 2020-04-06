export interface Feature {
  code: string,
  name: string,
  family_code?: string,
  family_name?: string,
  description: string,
  fonts: string[],
  texts: string[],
  related: string[],
  references: string[],
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
    "description": "displays numbers with the same width, like in monospace fonts. Thus, the number 1 would have the same width as every other numbers.\n\nTabular figures are useful in vertically aligned columns, like in tables or price lists, as they allow users to easily compare values.",
    "fonts": ["Inter", "Rasa"],
    "texts": ["11,150,110", "11110000"],
    "related": ["pnum", "onum", "lnum"],
    "references": [
      "https://www.fonts.com/content/learning/fontology/level-3/numbers/proportional-vs-tabular-figures",
      "https://practicaltypography.com/alternate-figures.html#tabular-and-proportional-figures"
    ],
  },
  pnum: {
    "code": "pnum",
    "name": "Proportional Figures",
    "description": "displays numbers with varying widths, similar to letters. For example, the number 1 would have a smaller width than the number 0.\n\nProportional figures look good as part of a text, like in an address, as they maintains the balance of the rest of the alphabet.",
    "fonts": ["Lato", "Source Sans Pro", "Roboto", "Open Sans"],
    "texts": ["11,150,110", "11110000"],
    "related": ["tnum", "onum", "lnum"],
    "references": [
      "https://www.fonts.com/content/learning/fontology/level-3/numbers/proportional-vs-tabular-figures",
      "https://practicaltypography.com/alternate-figures.html#tabular-and-proportional-figures"
    ],
  },
  onum: {
    "code": "onum",
    "name": "Oldstyle Figures",
    "description": "displays numbers in varying heights and alignments. These numbers blend in with lowercase leters, as they share the same x-height, and also have ascenders (usually 6 and 8) and descenders (3, 4, 5, 7 and 9).\n\nOldstyle figures are often considered more pleasing and less intrusive than lining figures. They are preferred in running text and also pair nicely with small caps.",
    "fonts": ["Lato", "Source Sans Pro", "Roboto", "Open Sans"],
    "texts": ["10Broad36", "123456789"],
    "related": ["lnum", "tnum", "pnum"],
    "references": [
      "https://en.wikipedia.org/wiki/Text_figures",
      "https://www.fonts.com/content/learning/fontology/level-3/numbers/oldstyle-figures",
      "https://practicaltypography.com/alternate-figures.html#oldstyle-figures"
    ],
  },
  lnum: {
    "code": "lnum",
    "name": "Lining Figures",
    "description": "displays numbers in a uniform height, which usually aligned with uppercase letters (baseline and cap height).\n\nLining figures is the default style in most fonts. In all-cap settings, they are almost always preferred over oldstyle ones.",
    "fonts": ["Merriweather", "Raleway"],
    "texts": ["10Broad36", "123456789"],
    "related": ["onum", "tnum", "pnum"],
    "references": [
      "https://www.fonts.com/content/learning/fontology/level-3/numbers/lining-figures",
      "https://practicaltypography.com/alternate-figures.html#lining-figures"
    ],
  },
  ordn: {
    "code": "ordn",
    "name": "Ordinals",
    "description": "set the letters following a number superscripted, to denote that number is an ordinal one (represent position in a sequential order), like 1st or 2nd.",
    "fonts": ["Source Sans Pro", "Lato"],
    "texts": ["1st  2nd  3rd", "1o 1a"],
    "related": ["subs", "sups"],
    "references": [
      "https://en.wikipedia.org/wiki/Ordinal_indicator",
      "https://practicaltypography.com/ordinals.html",
    ],
  },
};

// https://codereview.stackexchange.com/a/138289
export const featureArr: Feature[] = Object.values(featureMap)
  .filter(a => a !== undefined) as Feature[];
