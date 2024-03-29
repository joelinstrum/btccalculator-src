import { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppContext from "pages/app/AppContext";
import { RootState } from "state/store";
import { Link } from "@mui/material";
import { CryptoDisplayPrice, Modal, CryptoList } from "../";
import CryptoPriceRowStyled from "./CryptoPriceRowStyled";
import { useGetTickersQuery } from "../../state/features/apiSlice";
import { constants } from "../../utils/constants";
import { filterApiData } from "./cryptoPriceRowUtils";
import { openModal } from "../../state/features/modalSlice";
import { IContext } from "pages/app/AppContext";
import { KeyValuePair } from "components/forms/interfaces";

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
    { pollingInterval: 10000 }
  );

  const { setTickers } = useContext(AppContext) as IContext;
  const [dataFiltered, setDataFiltered] = useState<ICryptoList>();

  useEffect(() => {
    if (isSuccess) {
      const _dataFiltered = filterApiData(cryptoList);
      setDataFiltered(_dataFiltered);
      setTickers(_dataFiltered as unknown as KeyValuePair<ICrypto>);
    }
    /* eslint-disable-next-line */
  }, [isSuccess, cryptoList]);

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
