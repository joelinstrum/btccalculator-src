import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Logo from "../logo";

const StyledHeader = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
}));

const Header = () => (
  <StyledHeader>
    <Logo />
    <Typography>bitcoinprojection.com</Typography>
  </StyledHeader>
);

export default Header;
