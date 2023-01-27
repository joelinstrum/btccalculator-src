import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { CryptoImage } from "../";

const CryptoItemStyled = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyItems: "center",
  paddingBottom: theme.spacing(1),
  "&:hover": {
    background: theme.palette.modal.backgroundHover,
  },
  "& div": {
    paddingRight: theme.spacing(0.5),
    cursor: "pointer",
  },
}));

interface CryptoItemProps {
  cryptoItem: ICrypto;
  selectedCryptos: String[];
  checkClickHandler: () => void;
  disabled: boolean;
}

const CryptoItem: React.FC<CryptoItemProps> = ({
  cryptoItem,
  selectedCryptos,
  checkClickHandler,
  disabled,
}) => {
  const isChecked = selectedCryptos.includes(cryptoItem.ticker.toUpperCase());
  return (
    <CryptoItemStyled>
      <div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={checkClickHandler}
          disabled={disabled && !isChecked}
        ></input>
      </div>
      <div>
        <CryptoImage size="icon" crypto={cryptoItem} />
      </div>
      <div>
        <Typography>{cryptoItem.fullName}</Typography>
      </div>
    </CryptoItemStyled>
  );
};

export default CryptoItem;
