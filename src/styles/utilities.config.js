module.exports = {
  important: false,
  separator: "___",
  theme: {
    sizes: {
      "full": "100%", "none": "none",
      "9": "9px", "18": "18px", "24": "24px",
      "36": "36px", "48": "48px", "72": "72px",
      "320": "320px", "640": "640px", "800": "800px",
    },
    screens: {
      "lt1280": { "max": "1279px" },
      "lt960": { "max": "959px" },
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
    backgroundColor: theme => theme.pick("colors", ["FFF", "F7F", "EDF", "718", "4A5", "2D3"]),
    textColor: theme => theme.pick("colors", ["CBD", "A0A", "2D3", "718", "FFF"]),
    boxShadow: theme => ({
      "E2E": `0px 0px 8px ${theme("colors.E2E")}`,
      "A0A": `0px 2px 8px ${theme("colors.A0A")}`, // sorry
    }),
    // layout
    width: theme => theme.pick("sizes", ["full", "320", "640"]),
    maxWidth: theme => theme.pick("sizes", ["none", "800"]),
    padding: theme => theme.pick("sizes", ["9", "18", "36", "72"]),
    margin: theme => theme.pick("sizes", ["18", "24", "36", "48"]),
    // border
    borderColor: theme => theme.pick("colors", ["E2E", "CBD"]),
    borderWidth: { 1: "1px" },
    // typography
    fontSize: { 15: "15px", 18: "18px", 24: "24px", 72: "72px" },
    fontWeight: { semibold: 600, normal: 400 },
    fontFamily: { "mono": ["Roboto Mono", "monospace"] },
    lineHeight: {
      18: "18px", 24: "24px", 30: "30px",
      36: "36px", 96: "96px", none: 1,
    },
    // position
    inset: { 0: "0px" },
    zIndex: { "-1": "-1", "0": "0", "1": "1" },
    // transition
    /*
    transitionProperty: {
      colors: "background-color, border-color, color, fill, stroke",
    },
    */
  },
  variants: {
    textColor: [], backgroundColor: [], boxShadow: [],
    borderStyle: [], borderColor: [], borderWidth: [],
    display: [], width: ["responsive"], maxWidth: ["responsive"],
    padding: ["responsive"], margin: [],
    flex: ["responsive"], flexWrap: [], justifyContent: [], alignItems: [],
    fontFamily: [], fontSize: [], fontWeight: [],
    lineHeight: [], whitespace: [], textDecoration: [],
    position: [], inset: [], zIndex: [],
    cursor: [], userSelect: [],
    // transitionProperty: [],
  },
  corePlugins: [
    "textColor", "backgroundColor", "boxShadow",
    "borderStyle", "borderColor", "borderWidth",
    "display", "width", "maxWidth", "padding", "margin",
    "flex", "flexWrap", "justifyContent", "alignItems",
    "fontFamily", "fontSize", "fontWeight",
    "lineHeight", "whitespace", "textDecoration",
    "position", "inset", "zIndex",
    "cursor", "userSelect",
    // https://github.com/dvkndn/typed.tw/issues/19
    // "transitionProperty",
  ],
  plugins: [],
};
