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
    backgroundColor: theme => theme.pick ("colors", ["FFF", "F7F"]),
    textColor: theme => theme.pick ("colors", ["CBD", "A0A", "2D3"]),
    borderColor: theme => theme.pick ("colors", ["E2E", "CBD"]),
    width: theme => theme.pick ("sizes", ["100%", "320", "640"]),
    maxWidth: theme => theme.pick ("sizes", ["800"]),
  },
  variants: {
    textColor: [], backgroundColor: [], borderColor: [],
    width: ["responsive"], maxWidth: ["responsive"],
    flexWrap: [],
  },
  corePlugins: [
    "textColor", "backgroundColor", "borderColor",
    "width", "maxWidth",
    "flexWrap",
  ],
  plugins: [],
};
