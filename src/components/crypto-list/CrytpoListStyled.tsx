import { styled } from "@mui/system";

const CryptoListStyled = styled("div")(({ theme }) => ({
  color: theme.palette.text.modalPrimary,
  fontSize: 13,
  margin: "5px",
  "& .MuiTypography-h4": {
    marginBottom: "8px",
  },
}));

export default CryptoListStyled;
