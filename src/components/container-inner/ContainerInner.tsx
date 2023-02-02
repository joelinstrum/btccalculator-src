import { FC } from "react";
import { styled } from "@mui/system";

const ContainerInnerStyled = styled("div")(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("md")]: {
    maxWidth: "900px",
    margin: "0 auto",
  },
}));

const ContainerOuter: FC<{ children?: React.ReactNode }> = ({ children }) => (
  <ContainerInnerStyled>{children}</ContainerInnerStyled>
);

export default ContainerOuter;
