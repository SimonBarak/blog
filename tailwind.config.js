module.exports = {
  purge: ["./_includes/*.html", "./_layouts/*.html"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    typography: {
      md: {
        css: {
          p: {
            textAlign: "justify",
            fontSize: "1.2rem",
          },
        },
      },
      default: {
        css: {
          h1: {
            fontFamily: ["Roboto", "sans-serif"],
            fontWeight: 100,
            fontSize: "3rem",
          },
          h2: {
            fontFamily: ["Roboto", "sans-serif"],
            fontWeight: 400,
            fontSize: "1.5rem",
          },
          h3: {
            fontFamily: ["Roboto", "sans-serif"],
            fontWeight: 400,
            fontSize: "1rem",
          },
          p: {
            textAlign: "left",
          },
        },
      },
    },
    fontThin: 100,
    fontFamily: {
      basic: ["Roboto", "sans-serif"],
      body: ["Times", "serif"],
    },
    container: {
      center: true,
      padding: "0.7rem",
    },
  },
};
