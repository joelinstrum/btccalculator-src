import { styled, Box } from "@mui/system";

interface CardStyledProps {
  children?: React.ReactNode;
}

const BoxStyled = styled(Box)(({ theme }) => ({
  border: theme.palette.card.border,
  background: theme.palette.card.background,
  borderRadius: 2,
  padding: theme.spacing(0.5),
  fontSize: 13,
}));

const CardStyled: React.FC<CardStyledProps> = ({ children }) => (
  <BoxStyled mt={2}>{children}</BoxStyled>
);

export default CardStyled;
