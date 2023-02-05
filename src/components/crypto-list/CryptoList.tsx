import { Typography } from "@mui/material";
import cryptoCurrencies from "../../models/cryptos";
import CryptoListStyled from "./CrytpoListStyled";
import CryptoItem from "./CryptoItem";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store";
import { setSelectedCryptos } from "../../state/features/selectedCryptosSlice";
import { constants } from "../../utils/constants";

const CryptoList = () => {
  const dispatch = useDispatch();
  const { selectedCryptos } = useSelector(
    (store: RootState) => store.cryptoReducer
  );

  const checkClickHandler = (key: string) => {
    let newKeys: string[] = [];
    console.log(selectedCryptos.includes(key.toUpperCase()));
    if (selectedCryptos.includes(key.toUpperCase())) {
      newKeys = selectedCryptos.filter((ticker: string) => ticker !== key);
      console.log(newKeys);
    } else {
      newKeys = [...selectedCryptos, ...[key]];
    }
    dispatch(setSelectedCryptos(newKeys));
  };

  return (
    <CryptoListStyled>
      <div>
        <Typography variant="h4">
          Choose up to ${constants.MAX_CRYPTOS} crypto currencies to follow
        </Typography>
        {Object.keys(cryptoCurrencies).map((key) => {
          return (
            <CryptoItem
              cryptoItem={cryptoCurrencies[key]}
              selectedCryptos={selectedCryptos}
              checkClickHandler={() => checkClickHandler(key)}
              disabled={selectedCryptos.length >= constants.MAX_CRYPTOS}
              key={key}
            />
          );
        })}
      </div>
    </CryptoListStyled>
  );
};

export default CryptoList;
