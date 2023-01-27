import { styled } from "@mui/system";

const CryptoPriceRowStyled = styled("div")(({ theme }) => ({
  "& .MuiTypography-root": {
    fontSize: 14,
    "& span:nth-of-type(3)": {
      paddingLeft: "2px",
      color: theme.palette.tertiary.main,
    },
  },
  margin: theme.spacing(2),
  "& div:nth-of-type(1)": {
    display: "flex",
    "& > div": {
      marginRight: theme.spacing(2),
      minWidth: "120px",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

export default CryptoPriceRowStyled;
