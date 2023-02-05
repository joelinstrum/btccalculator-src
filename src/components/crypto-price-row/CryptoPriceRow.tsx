import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { Link } from "@mui/material";
import { CryptoDisplayPrice, Modal, CryptoList } from "../";
import CryptoPriceRowStyled from "./CryptoPriceRowStyled";
import { useGetTickersQuery } from "../../state/features/apiSlice";
import { constants } from "../../utils/constants";
import { filterApiData, setTickerPrices } from "./cryptoPriceRowUtils";
import { openModal } from "../../state/features/modalSlice";
import { tickerPrices, TickerPrices } from "../../state/features/tickerSlice";

const CryptoPriceRow = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store: RootState) => store.modal);
  const { selectedCryptos } = useSelector(
    (store: RootState) => store.cryptoReducer
  );
  const { data: cryptoList, isSuccess } = useGetTickersQuery(
    {
      fsyms: selectedCryptos.join(","),
      tsyms: "USD",
      extraParams: constants.API_PARAM_NAME,
    },
    { pollingInterval: 300000 }
  );

  const [dataFiltered, setDataFiltered] = useState<ICryptoList>();

  useEffect(() => {
    if (isSuccess) {
      setDataFiltered(filterApiData(cryptoList));
    }
  }, [isSuccess, cryptoList]);

  useMemo(() => {
    const tickersObject: TickerPrices = setTickerPrices(dataFiltered);
    dispatch(tickerPrices({ value: tickersObject }));
    /* eslint-disable-next-line */
  }, [dataFiltered]);

  const selectClick = () => {
    dispatch(openModal(""));
  };

  return (
    <>
      {isOpen && (
        <Modal>
          <CryptoList />
        </Modal>
      )}
      <CryptoPriceRowStyled>
        <Link onClick={selectClick} underline="hover">
          Choose cryptos
        </Link>
        <div>
          {isSuccess &&
            dataFiltered &&
            Object.keys(dataFiltered).map((key: string) => (
              <CryptoDisplayPrice cryptoObject={dataFiltered[key]} key={key} />
            ))}
        </div>
      </CryptoPriceRowStyled>
    </>
  );
};

export default CryptoPriceRow;
