export const dark = {
  palette: {
    background: {
      default: "#1a2639",
      modalOuter: "rgba(0, 0, 0, .25)",
      modalInner:
        "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(175,179,201,1) 100%);",
    },
    primary: {
      main: "#54C1F7",
    },
    secondary: {
      main: "#fff",
    },
    tertiary: {
      main: "#1baef7",
    },
    text: {
      primary: "#ffffff",
      secondary: "#cecece",
      modalPrimary: "#333",
      label: "#bbb",
    },
    modal: {
      text: "#eee",
      backgroundHover: "#eee",
    },
    card: {
      border: "1px solid rgba(0, 0, 0, .5)",
      background: "rgba(0, 0, 0, .25)",
    },
    dropDown: {
      background: "rgba(255, 255, 255, .9)",
      color: "#333",
      hoverBackground: "#d1e1e8",
    },
    primaryButton: {
      background: "#d66711",
      color: "#fff",
      "&:disabled": {
        background: "#8c7868",
        color: "rgba(255, 255, 255, .5)",
      },
    },
    investments: {
      profit: {
        color: "#46db6e",
      },
      loss: {
        color: "#eb5b5b",
      },
      neutral: {
        color: "#fcc930",
      },
    },
    alertButton: {
      background: "#db3b3b",
      color: "#fff",
      "&:hover": {
        background: "#a31d1d",
      },
      "&:disabled": {
        background: "#c96f6f",
        color: "rgba(255, 255, 255, .5)",
      },
    },
    successButton: {
      background: "#0da858",
      color: "#fff",
      "&:hover": {
        background: "#046332",
      },
    },
  },
  typography: {
    fontFamily: [
      "tex",
      "Segoe UI",
      "Tahoma",
      "Geneva",
      "Verdana",
      "sans-serif",
    ].join(","),
  },
};
