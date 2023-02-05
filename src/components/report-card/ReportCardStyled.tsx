import { styled } from "@mui/system";

const ReportCardStyled = styled("div")(({ theme }) => ({
  marginTop: "2%",
  marginLeft: "5px",
  marginRight: "5px",
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
      minWidth: "150px",
      color: theme.palette.text.label,
    },
    "& > div:nth-of-type(2)": {
      // border: "1px solid green",
    },
  },
}));

export default ReportCardStyled;
