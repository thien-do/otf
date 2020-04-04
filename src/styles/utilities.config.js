module.exports = {
  important: false,
  separator: "___",
  theme: {
    sizes: {
      "full": "100%",
      "18": "18px", "36": "36px", "72": "72px",
      "320": "320px", "640": "640px", "800": "800px",
    },
    screens: {
      "lt960": { "max": "959px" },
      "fr960to1280": { "min": "960px", "max": "1279px" },
      "gt1280": { "min": "1280px" },
    },
    colors: {
      transparent: "transparent",
      // gray
      "000": "#000", "FFF": "#FFF",
      "F7F": "#F7FAFC", "EDF": "#EDF2F7", "E2E": "#E2E8F0",
      "CBD": "#CBD5E0", "A0A": "#A0AEC0", "718": "#718096",
      "4A5": "#4A5568", "2D3": "#2D3748", "1A2": "#1A202C"
    },
    // hack for https://github.com/dvkndn/typed.tw/issues/17
    hack: theme => {
      theme.pick = (x, ks) => ks.reduce((o, k) => (o[k] = theme(x)[k], o), {});
      return {};
    },
    // color
    backgroundColor: theme => theme.pick("colors", ["FFF", "F7F"]),
    textColor: theme => theme.pick("colors", ["CBD", "A0A", "2D3"]),
    boxShadow: theme => ({
      8: `0px 0px 8px ${theme("colors.E2E")}`,
    }),
    // layout
    width: theme => theme.pick("sizes", ["full", "320", "640"]),
    maxWidth: theme => theme.pick("sizes", ["800"]),
    padding: theme => theme.pick("sizes", ["18", "36", "72"]),
    margin: theme => theme.pick("sizes", ["18", "24", "36", "48"]),
    // border
    borderColor: theme => theme.pick("colors", ["E2E", "CBD"]),
    borderWidth: { 1: "1px" },
    // typography
    fontSize: { 18: "18px", 24: "24px", 72: "72px" },
    lineHeight: { none: 1, 18: "18px", 24: "24px", 30: "30px", 36: "36px" },
    fontWeight: { semibold: 600, normal: 400 },
    // transition
    /*
    transitionProperty: {
      colors: "background-color, border-color, color, fill, stroke",
    },
    */
  },
  variants: {
    textColor: ["hover"], backgroundColor: [], boxShadow: [],
    borderStyle: [], borderColor: [], borderWidth: [],
    width: ["responsive"], maxWidth: ["responsive"], padding: [], margin: [],
    flex: ["responsive"], flexWrap: [], justifyContent: [], alignItems: [],
    fontSize: [], lineHeight: [], fontWeight: [],
    // transitionProperty: [],
  },
  corePlugins: [
    "textColor", "backgroundColor", "boxShadow",
    "borderStyle", "borderColor", "borderWidth",
    "width", "maxWidth", "padding", "margin",
    "flex", "flexWrap", "justifyContent", "alignItems",
    "fontSize", "lineHeight", "fontWeight",
    // https://github.com/dvkndn/typed.tw/issues/19
    // "transitionProperty",
  ],
  plugins: [],
};
