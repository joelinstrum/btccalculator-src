import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Logo from "../logo";

const StyledHeader = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: "flex",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    marginLeft: "-10px",
  },
  flexDirection: "row",
  width: "100%",
  maxWidth: "880px",
  justifyContent: "space-between",
  alignItems: "center",
  "& div: nth-of-type(2)": {
    textAlign: "right",
    "& div:nth-of-type(1)": {
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    "& div:nth-of-type(2)": {
      "& .MuiTypography-root": {
        fontSize: "13px",
        textAlign: "center",
      },
    },
  },
}));

const Header = () => (
  <StyledHeader>
    <Logo />
    <div>
      <div>
        <Typography>bitcoinprojection.com</Typography>
      </div>
      <div>
        <Typography>Calculate roi for crypto investments</Typography>
      </div>
    </div>
  </StyledHeader>
);

export default Header;
