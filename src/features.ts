export interface Feature {
  code: string,
  name: string,
  family_code: string[],
  family_name: string,
  description: string,
  fonts: string[],
  texts: string[],
  related: string[],
};

const features: { [code: string]: Feature | undefined } = {
  ss02: {
    "code": "ss02",
    "name": "Stylistic Set 2",
    "family_code": ["ss01", "ss20"],
    "family_name": "Stylistic Set 1 – 20",
    "description": "replaces character with one from a font-specific set of stylistic alternatives.",
    "fonts": ["Inter"],
    "texts": ["Illustration", "Ellipsis"],
    "related": ["salt", "cv01"]
  }
};

export default features;
