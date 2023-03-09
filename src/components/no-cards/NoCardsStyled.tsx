import { styled } from "@mui/system";
import { alpha } from "@mui/material";

const NoCardsStyled = styled("div")(({ theme }) => ({
  marginLeft: "16px",
  marginTop: "20px",
  "& .MuiTypography-h3": {
    fontSize: "16px",
    color: alpha(theme.palette.text.secondary, 0.85),
  },
  "& ul": {
    borderRadius: "5px",
    border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
    paddingTop: "5px",
    paddingBottom: "5px",
    cursor: "pointer",
    ":hover": {
      border: `1px solid ${alpha(theme.palette.primary.main, 1)}`,
    },
    "& li": {
      listStyle: "none",
      fontSize: "14px",
    },
  },
}));

export default NoCardsStyled;
