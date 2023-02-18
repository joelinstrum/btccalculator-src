import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getDateFrom,
  getTimestamp,
  extractPriceFromData,
  dateFromTimestamp,
} from "../../../utils/utilities";
import { FormRow, InputText } from "../../forms";
import { constants } from "../../../utils/constants";
import { useLazyGetHistoricalPriceQuery } from "../../../state/features/apiSlice";
import {
  updateCardProperties,
  updateCardProperty,
} from "../../../state/features/cardSlice";

interface CardSellPriceProps {
  sellPrice?: string;
  sellPriceOnBlur?: (key?: string) => void;
  sellPriceWhen?: any;
  ticker: string;
  index: string | number;
}

const CardSellPrice: React.FC<CardSellPriceProps> = ({
  sellPrice,
  sellPriceOnBlur,
  sellPriceWhen,
  ticker,
  index,
}) => {
  const [sellPriceDisplay, setSellPriceDisplay] = useState(sellPrice);
  const [disabled, setDisabled] = useState(false);
  const [fromTimestamp, setFromTimestamp] = useState<number>(
    getTimestamp(sellPriceWhen || "")
  );
  const dispatch = useDispatch();
  const [prevTicker, setPrevTicker] = useState(ticker);
  const [prevFromTimestamp, setPrevFromTimestamp] = useState(fromTimestamp);

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
    const _fromDate = getDateFrom(key).toString();
    setSellPriceDisplay(`fetching ${ticker} from ${getTimestamp(_fromDate)}`);
    if (typeof _fromDate !== "undefined" && _fromDate) {
      setFromTimestamp(getTimestamp(_fromDate));
    }
    setDisabled(true);
    sellPriceOnBlur && sellPriceOnBlur();
  };

  const [getHistoricalPrice, { data }] = useLazyGetHistoricalPriceQuery();

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
    console.log("UPDATE PRICE!");
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
    if (disabled && fromTimestamp) {
      const price = extractPriceFromData(data);
      setSellPriceDisplay(price);
      dispatch(
        updateCardProperties([
          {
            property: "sellPrice",
            value: price,
            index: index,
          },
          {
            property: "sellPriceWhen",
            value: dateFromTimestamp(fromTimestamp),
            index: index,
          },
        ])
      );
      setTimeout(() => {
        setDisabled(false);
      }, 250);
    }
    // eslint-disable-next-line
  }, [data, disabled, setSellPriceDisplay, setDisabled]);

  return (
    <FormRow label="Sell price" align="right">
      <InputText
        size="medium"
        ariaLabel="sell price"
        value={sellPriceDisplay}
        onBlur={sellPriceOnBlur}
        optionsChangeHandler={optionsChangeHandler}
        options={constants.DATE_FROM}
      />
    </FormRow>
  );
};

export default CardSellPrice;
