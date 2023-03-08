import { useDispatch, useSelector } from "react-redux";
import { RootState } from "state/store";
import { updateCardProperties } from "state/features/cardSlice";
import { cryptoCurrencies } from "models/cryptos";

const useSelectCrypto = (index: number) => {
  const dispatch = useDispatch();

  const selectedCryptoChange = (key: string, value: string | number) => {
    dispatch(
      updateCardProperties([
        {
          property: "ticker",
          value: key,
          index,
        },
        {
          property: "fullName",
          value: value.toString(),
          index,
        },
      ])
    );
  };

  const { selectedCryptos } = useSelector(
    (store: RootState) => store.cryptoReducer
  );

  const selectedCryptosList = selectedCryptos.reduce(
    (acc: Object, item: string) => {
      return {
        ...acc,
        [item]: cryptoCurrencies[item].fullName,
      };
    },
    {}
  );

  return {
    selectedCryptoChange,
    selectedCryptosList,
  };
};

export default useSelectCrypto;
