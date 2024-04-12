module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        floralwhite: "#fff9ec",
        white: "#fff",
        goldenrod: "#e8c14a",
        darkslategray: {
          100: "#292c2d",
          200: "rgba(41, 44, 45, 0.8)",
        },
        gray: {
          100: "#7d7d7d",
          200: "rgba(255, 255, 255, 0.82)",
          300: "rgba(125, 125, 125, 0.8)",
          400: "rgba(255, 255, 255, 0.8)",
        },
        dimgray: {
          100: "#5c5e61",
          200: "rgba(92, 94, 97, 0.09)",
        },
        darkgoldenrod: "#b58f17",
        black: "#000",
        whitesmoke: "#f1f1f1",
        red: "#ff1200",
      },
      spacing: {},
      fontFamily: {
        "title-16px-medium": "Poppins",
      },
      borderRadius: {
        "10xs": "3px",
        "191xl": "210px",
        "11xs-4": "1.4px",
        "8xl": "27px",
      },
      white: "#fff",
      goldenrod: "#e8c14a",
      darkslategray: {
        100: "#292c2d",
        200: "rgba(41, 44, 45, 0.5)",
      },
      darkgoldenrod: "#b58f17",
      gray: {
        100: "#fafafa",
        200: "#7d7d7d",
        300: "rgba(255, 255, 255, 0.82)",
        400: "rgba(0, 0, 0, 0.5)",
      },
      limegreen: "rgba(0, 203, 69, 0.6)",
      whitesmoke: "#f1f1f1",
      red: "#ff1200",
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      sm: "14px",
      lgi: "19px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
};
