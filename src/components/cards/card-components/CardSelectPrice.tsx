import { useState, useEffect, useMemo } from "react";
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
import { useLazyGetHistoricalPriceQuery } from "../../../state/features/apiSlice";
import {
  updateCardProperties,
  updateCardProperty,
} from "../../../state/features/cardSlice";
import { cryptos } from "../../../models";

interface CardSelectPriceProps {
  purchasePriceOnBlur?: (selectPrice?: string) => void;
  purchasePrice?: string;
  purchasePriceWhen?: any;
  ticker: string;
  index: number | string;
}

const CardSelectPrice: React.FC<CardSelectPriceProps> = ({
  purchasePrice,
  purchasePriceWhen,
  purchasePriceOnBlur,
  ticker,
  index,
}) => {
  const dispatch = useDispatch();
  const [investmentPrice, setInvestmentPrice] = useState(purchasePrice);
  const [disabled, setDisabled] = useState(false);
  const [fromTimestamp, setFromTimestamp] = useState(
    getTimestamp(purchasePriceWhen || "")
  );

  const [prevTicker, setPrevTicker] = useState(ticker);
  const [prevFromTimestamp, setPrevFromTimestamp] = useState(fromTimestamp);
  const [fromDateOptions, setFromDateOptions] = useState<{
    [key: string]: string;
    //eslint-disable-next-line
  }>({ ["0"]: "Current" });

  const [getHistoricalPrice, { data }] = useLazyGetHistoricalPriceQuery();

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

  useEffect(() => {
    if (ticker !== prevTicker) {
      updatePrice();
      setPrevTicker(ticker);
      setDisabled(true);
    }
    /* eslint-disable-next-line */
  }, [ticker, prevTicker]);

  useEffect(() => {
    if (fromTimestamp !== prevFromTimestamp) {
      setDisabled(true);
      updatePrice();
      setPrevFromTimestamp(fromTimestamp);
    }
    /* eslint-disable-next-line */
  }, [fromTimestamp, prevFromTimestamp]);

  const updatePrice = () => {
    getHistoricalPrice(
      {
        fsym: ticker,
        tsyms: "USD",
        extraParams: constants.API_PARAM_NAME,
        ts: fromTimestamp,
      },
      true
    );
  };

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
        purchasePriceOnBlur && purchasePriceOnBlur();
      }, 250);
    }
    /* eslint-disable-next-line */
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
