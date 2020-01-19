module.exports = {
  important: false,
  separator: "___",
  theme: {
    colors: {
      transparent: "transparent", black: "#000", white: "#fff",
      gray: {
        100: "#f7fafc", 200: "#edf2f7", 300: "#e2e8f0",
        400: "#cbd5e0", 500: "#a0aec0", 600: "#718096",
        700: "#4a5568", 800: "#2d3748", 900: "#1a202c"
      }
    }
  },
  variants: {
    textColor: [],
    backgroundColor: [],
  },
  corePlugins: [
    "textColor", "backgroundColor"
  ],
  plugins: [],
};
