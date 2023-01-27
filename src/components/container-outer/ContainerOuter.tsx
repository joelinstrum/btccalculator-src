import { FC } from "react";
import { styled } from "@mui/system";

const ContainerOuterStyled = styled("div")({
  width: "100%",
});

const ContainerOuter: FC<{ children?: React.ReactNode }> = ({ children }) => (
  <ContainerOuterStyled>{children}</ContainerOuterStyled>
);

export default ContainerOuter;
