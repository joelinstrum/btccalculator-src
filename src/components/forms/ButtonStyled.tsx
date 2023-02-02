import { styled } from "@mui/system";
import { ButtonProps } from "./interfaces";

// const getVariant = (variant: string) => {};

const ButtonStyled = styled("button", {
  shouldForwardProp: (prop) => true,
})<ButtonProps>(({ theme, size, variation }) => ({
  fontSize: 13,
  position: "relative",
  marginLeft: "0px",
  textAlign: "center",
  padding: theme.spacing(0.5),
  border: "none",
  borderRadius: "2px",
  marginTop: "5px",
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
  ...{
    ...theme.palette[`${variation}Button`],
  },
}));

export default ButtonStyled;
