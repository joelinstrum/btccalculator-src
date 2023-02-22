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
import { date, isToday } from "../../../utils/utilities";

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
  const [getHistoricalPrice, { data }] = useLazyGetHistoricalPriceQuery();

  const optionsChangeHandler = (key: string, value?: string) => {
    setDisabled(true);
    let _fromDate;
    if (value === "Current Price") {
      dispatch(
        updateCardProperty({
          property: "useCurrentPricePurchase",
          value: "true",
          index: index,
        })
      );
      _fromDate = date();
    } else {
      _fromDate = getDateFrom(key).toString();
    }
    if (typeof _fromDate !== "undefined" && _fromDate) {
      setFromTimestamp(getTimestamp(_fromDate));
    }
    sellPriceOnBlur && sellPriceOnBlur();
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
    let doSet = fromTimestamp !== prevFromTimestamp || isToday(fromTimestamp);
    if (doSet) {
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
  }, [data]);

  return (
    <FormRow label="Sell price" align="right">
      <InputText
        size="medium"
        ariaLabel="sell price"
        value={sellPriceDisplay}
        onBlur={sellPriceOnBlur}
        optionsChangeHandler={optionsChangeHandler}
        options={constants.DATE_FROM}
        align="right"
      />
    </FormRow>
  );
};

export default CardSellPrice;
