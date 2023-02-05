import { useState, useEffect, useRef, useMemo } from "react";
import { useDispatch } from "react-redux";
import { FormRow, InputText } from "../../forms";
import {
  getDateFrom,
  getTimestamp,
  extractPriceFromData,
  dateFromTimestamp,
  cryptoFromDateOptions,
} from "../../../utils/utilities";
import { constants } from "../../../utils/constants";
import { useGetHistoricalPriceQuery } from "../../../state/features/apiSlice";
import {
  updateCardProperties,
  updateCardProperty,
} from "../../../state/features/cardSlice";
import { cryptos } from "../../../models";

interface CardSelectPriceProps {
  purchasePriceOnBlur?: (selectPrice: string) => void;
  purchasePrice?: string;
  ticker: string;
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
  const [fromDateOptions, setFromDateOptions] = useState<{
    [key: string]: string;
    //eslint-disable-next-line
  }>({ ["0"]: "Current" });

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
    if (value === "Current Price") {
      dispatch(
        updateCardProperty({
          property: "useCurrentPricePurchase",
          value: "true",
          index: index,
        })
      );
    }

    const _fromDate = getDateFrom(key).toString() || null;
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

  useMemo(() => {
    setFromDateOptions(
      cryptoFromDateOptions(
        cryptos[ticker ?? "BTC"]?.startYear || new Date().getFullYear()
      )
    );
  }, [ticker]);

  return (
    <FormRow label="Purchase price" align="right">
      <InputText
        size="medium"
        ariaLabel="sell price"
        value={investmentPrice}
        onBlur={purchasePriceOnBlur}
        optionsChangeHandler={optionsChangeHandler}
        disabled={disabled}
        options={fromDateOptions}
      />
    </FormRow>
  );
};

export default CardSelectPrice;
