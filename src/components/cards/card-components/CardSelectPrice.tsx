import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { FormRow, InputText } from "../../forms";
import {
  getDateFrom,
  getTimestamp,
  extractPriceFromData,
  dateFromTimestamp,
} from "../../../utils/utilities";
import { constants } from "../../../utils/constants";
import { useGetHistoricalPriceQuery } from "../../../state/features/apiSlice";
import { updateCardProperties } from "../../../state/features/cardSlice";

interface CardSelectPriceProps {
  purchasePriceOnBlur?: (selectPrice: string) => void;
  purchasePrice?: string;
  ticker?: string;
  index: number | string;
}

const CardSelectPrice: React.FC<CardSelectPriceProps> = ({
  purchasePrice,
  purchasePriceOnBlur,
  ticker,
  index,
}) => {
  const dispatch = useDispatch();
  const [investmentPrice, setInvestmentPrice] = useState(purchasePrice);
  const [disabled, setDisabled] = useState(false);
  const [fromTimestamp, setFromTimestamp] = useState(getTimestamp());
  const [skip, setSkip] = useState(true);
  const firstUpdate = useRef(true);

  const { data, refetch } = useGetHistoricalPriceQuery(
    {
      fsym: ticker,
      tsyms: "USD",
      extraParams: constants.API_PARAM_NAME,
      ts: fromTimestamp,
    },
    { skip }
  );

  const optionsChangeHandler = (key: string, value?: string) => {
    const _fromDate = getDateFrom(value).toString() || null;
    setInvestmentPrice(`fetching ${ticker} from ${fromTimestamp}`);
    if (typeof _fromDate !== "undefined" && _fromDate) {
      setFromTimestamp(getTimestamp(_fromDate));
    }

    setDisabled(true);
  };

  // refetch the data
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    setSkip(false);
  }, [fromTimestamp, refetch]);

  useEffect(() => {
    if (disabled && typeof fromTimestamp === "number") {
      const price = extractPriceFromData(data);
      setInvestmentPrice(extractPriceFromData(data));
      dispatch(
        updateCardProperties([
          {
            property: "purchasePrice",
            value: price,
            index: index,
          },
          {
            property: "purchasePriceWhen",
            value: dateFromTimestamp(fromTimestamp),
            index: index,
          },
        ])
      );
      setTimeout(() => {
        setDisabled(false);
      }, 250);
    }
  }, [
    data,
    disabled,
    setInvestmentPrice,
    setDisabled,
    dispatch,
    index,
    fromTimestamp,
  ]);

  return (
    <FormRow label="Purchase price" align="right">
      <InputText
        size="medium"
        ariaLabel="sell price"
        value={investmentPrice}
        onBlur={purchasePriceOnBlur}
        optionsChangeHandler={optionsChangeHandler}
        disabled={disabled}
        options={constants.DATE_FROM}
      />
    </FormRow>
  );
};

export default CardSelectPrice;
