import { styled } from "@mui/system";

const ModalStyledOuter = styled("div")(({ theme }) => ({
  position: "fixed",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  zIndex: 1000,
  background: theme.palette.background.modalOuter,
}));

interface ModalStyledProps {
  children?: React.ReactNode;
}

const ModalStyledInner = styled("div")(({ theme }) => ({
  top: "25%",
  left: "50%",
  right: "auto",
  bottom: "auto",
  marginRight: "-50%",
  transform: "translate(-50%, -25%)",
  position: "fixed",
  background: theme.palette.background.modalInner,
}));

const ModalStyled: React.FC<ModalStyledProps> = ({ children }) => (
  <ModalStyledOuter>
    <ModalStyledInner>{children}</ModalStyledInner>
  </ModalStyledOuter>
);

export const ModalContentStyled = styled("div")(({ theme }) => ({
  minWidth: "200px",
  "& .MuiTypography-root": {
    fontSize: 14,
    color: theme.palette.text.modalPrimary,
    fontWeight: "bold",
  },
}));

export const ModalStyledFooter = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default ModalStyled;
