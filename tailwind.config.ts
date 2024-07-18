import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    textColor: {
      "718": "#718096",
      CBD: "#CBD5E0",
      A0A: "#A0AEC0",
      "2D3": "#2D3748",
      FFF: "#FFF",
    },
    backgroundColor: {
      "718": "#718096",
      FFF: "#FFF",
      F7F: "#F7FAFC",
      EDF: "#EDF2F7",
      "4A5": "#4A5568",
      "2D3": "#2D3748",
    },
    boxShadow: {
      E2E: "0px 0px 8px #E2E8F0",
      A0A: "0px 2px 8px #A0AEC0",
    },
    borderColor: {
      E2E: "#E2E8F0",
      CBD: "#CBD5E0",
    },
    width: {
      320: "320px",
      640: "640px",
      full: "100%",
    },
    maxWidth: {
      640: "640px",
      none: "none",
    },
    padding: {
      0: "0",
      9: "9px",
      18: "18px",
      24: "24px",
      36: "36px",
      72: "72px",
    },
    gap: {
      0: "0",
      9: "9px",
      18: "18px",
      24: "24px",
      36: "36px",
      72: "72px",
    },
    margin: {
      18: "18px",
      24: "24px",
      36: "36px",
      48: "48px",
    },
    fontFamily: {
      mono: "Roboto Mono, monospace",
    },
    fontSize: {
      15: "15px",
      18: "18px",
      24: "24px",
      72: "72px",
    },
    fontWeight: {
      semibold: "600",
      normal: "400",
    },
    lineHeight: {
      18: "18px",
      24: "24px",
      30: "30px",
      36: "36px",
      96: "96px",
      none: "1",
    },
    zIndex: {
      0: "0",
      1: "1",
    },
    screens: {
      "lt1280": { "max": "1279px" },
      "lt960": { "max": "959px" },
    },
  },
};

export default config;
