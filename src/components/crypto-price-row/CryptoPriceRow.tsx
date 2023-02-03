import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { Link } from "@mui/material";
import { CryptoDisplayPrice, Modal, CryptoList } from "../";
import CryptoPriceRowStyled from "./CryptoPriceRowStyled";
import { useGetTickersQuery } from "../../state/features/apiSlice";
import { constants } from "../../utils/constants";
import { filterApiData } from "./cryptoPriceRowUtils";
import { openModal } from "../../state/features/modalSlice";

const CryptoPriceRow = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store: RootState) => store.modal);
  const { selectedCryptos } = useSelector(
    (store: RootState) => store.cryptoReducer
  );
  const {
    data: cryptoList,
    isSuccess,
    error,
  } = useGetTickersQuery(
    {
      fsyms: selectedCryptos.join(","),
      tsyms: "USD",
      extraParams: constants.API_PARAM_NAME,
    },
    { pollingInterval: 30000 }
  );

  const [dataFiltered, setDataFiltered] = useState<ICryptoList>();

  useEffect(() => {
    if (isSuccess) {
      setDataFiltered(filterApiData(cryptoList));
    } else {
      console.log("ERROR: ", error);
    }
  }, [isSuccess, cryptoList, error, setDataFiltered]);

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
          Select
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
