import { styled } from "@mui/system";
import { InputTextProps } from "./interfaces";

const InputTextStyled = styled("div", {
  shouldForwardProp: (prop) => prop !== "updatetextvalue",
})<InputTextProps>(({ theme, size, options, align }) => ({
  fontSize: 13,
  position: "relative",
  "& span:nth-of-type(1)": {
    visibility: options ? "visible" : "hidden",
    cursor: options ? "pointer" : "default",
  },
  "& div:nth-of-type(1)": {
    position: "absolute",
    top: "22px",
    left: "6px",
    padding: "2px",
    zIndex: 500,
    minWidth: "200px",
    background: theme.palette.dropDown.background,
    color: theme.palette.dropDown.color,
    "& ul": {
      listStyleType: "none",
      padding: 0,
      margin: 0,
      "& li": {
        cursor: "pointer",
        "&:hover": {
          background: theme.palette.dropDown.hoverBackground,
        },
      },
    },
  },
  "& input": {
    marginLeft: "6px",
    textAlign: align || "left",
    "&:focus": {
      outline: "none",
    },
    maxWidth: (function (): string {
      switch (size) {
        case "x-small":
          return "20px";
        case "small":
          return "50px";
        case "medium":
          return "100px";
        case "large":
          return "200px";
        default:
          return "80px";
      }
    })(),
  },
}));

export default InputTextStyled;
