import { styled } from "@mui/system";

export const BoxStyled = styled("div")(({ theme }) => ({
  // border: theme.palette.card.border,
  background: theme.palette.card.background,
  borderRadius: 2,
  padding: theme.spacing(0.5),
  display: "flex",
  flexDirection: "column",
  maxWidth: "900px",
  justifyContent: "center",
  fontSize: 13,
  marginLeft: "3%",
  marginRight: "3%",
  marginBottom: theme.spacing(1),
  [theme.breakpoints.up("md")]: {
    marginLeft: "0",
  },
}));

export const CardContainerStyled = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  "& > div:nth-of-type(1)": {
    alignSelf: "center",
  },
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    "& > div:nth-of-type(1)": {
      width: "40%",
    },
    "& > div:nth-of-type(2)": {
      width: "60%",
    },
  },
  [theme.breakpoints.up("lg")]: {
    "& > div:nth-of-type(1)": {
      marginRight: "2%",
    },
  },
}));

export const CardCalculationsContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
  },
}));

export const CardCalculationsStyled = styled("div")(({ theme }) => ({
  fontSize: "13px",
  "& .MuiTypography-root": {
    fontSize: "13px",
  },
  "& > div": {
    display: "flex",
    "& > div:nth-of-type(1)": {
      marginRight: "5px",
      alignSelf: "right",
      textAlign: "right",
      minWidth: "100px",
      color: theme.palette.text.label,
    },
    "& > div:nth-of-type(2)": {
      // border: "1px solid green",
    },
  },
}));

export const CalculatedResultsStyled = styled("section", {
  shouldForwardProp: (prop) => prop !== "netReturn",
})<{ netReturn: number }>(({ theme, netReturn }) => ({
  fontSize: "13px",
  "& .MuiTypography-root": {
    fontSize: "13px",
  },
  "& > div": {
    display: "flex",
    "& > div:nth-of-type(1)": {
      marginRight: "5px",
      alignSelf: "right",
      textAlign: "right",
      minWidth: "100px",
      color: theme.palette.text.label,
    },
  },
  "& > div:nth-of-type(2)": {
    "& > div:nth-of-type(2)": {
      "& .MuiTypography-root": {
        color: theme.palette.investments.neutral.color,
        fontWeight: "700",
        borderBottom: "1px solid rgba(255, 255, 255, .25)",
        marginBottom: "3px",
      },
    },
  },
  "& > div:nth-of-type(3)": {
    "& > div:nth-of-type(2)": {
      "& .MuiTypography-root": {
        color:
          netReturn >= 0
            ? theme.palette.investments.profit.color
            : theme.palette.investments.loss.color,
      },
    },
  },
}));
