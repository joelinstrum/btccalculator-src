import { useState, useEffect } from "react";
import { useLazyGetHistoricalPriceQuery } from "state/features/apiSellSlice";
import { isToday, getTimestamp } from "utils/date";
import { constants } from "utils/constants";
import { useSellDispatch } from "./";
import { date } from "utils/date";

interface PriceProps {
  card: IRoiCard;
  currentPrice: string;
  index: number;
}

const useSellPrice: FT<PriceProps> = ({ card, currentPrice, index }) => {
  const [stateSellPrice, setStateSellPrice] = useState(card.sellPrice);
  const [stateFromDate, setStateFromDate] = useState(card.sellPriceWhen);
  const [priceLoading, setPriceLoading] = useState(false);
  const [getHistoricalPrice, { data }] = useLazyGetHistoricalPriceQuery();
  const [currentTicker, setCurrentTicker] = useState(card.ticker);
  const sellDispatch = useSellDispatch();

  /* set the price based on current price */
  useEffect(() => {
    if (card.useCurrentPriceSell === "true") {
      setStateSellPrice(currentPrice);
      sellDispatch(currentPrice, date() as string, index, false);
    }
    /* eslint-disable-next-line */
  }, [card, currentPrice]);

  /* set the price based on a date */
  const setPriceFromDate = (fromDate: string) => {
    if (fromDate && isToday(fromDate)) {
      setStateSellPrice(currentPrice);
      setPriceLoading(false);
      setStateFromDate(fromDate);
      sellDispatch(currentPrice, fromDate, index, false);
    } else {
      setStateFromDate(fromDate);
      sellDispatch("", fromDate, index, false);
      setPriceLoading(true);
      setPriceFromHistoricalDate(fromDate);
    }
  };

  const setPriceFromHistoricalDate = (fromDate: string) => {
    getHistoricalPrice(
      {
        fsym: card.ticker,
        tsyms: "USD",
        extraParams: constants.API_PARAM_NAME,
        ts: getTimestamp(fromDate),
      },
      true
    );
  };

  useEffect(() => {
    if (data && data[card.ticker] && data[card.ticker].USD) {
      setStateSellPrice(data[card.ticker].USD);
      sellDispatch(
        data[card.ticker].USD,
        stateFromDate as string,
        index,
        false
      );
      setPriceLoading(false);
    } else if (data && data[card.ticker]) {
      setStateSellPrice("N/A");
      sellDispatch("0", stateFromDate as string, index, false);
      setPriceLoading(false);
    } else if (card.ticker !== currentTicker) {
      setCurrentTicker(card.ticker);
      if (card.useCustomPrice === "true") {
        return;
      } else if (card.useCurrentPriceSell === "true") {
        setStateSellPrice(currentPrice);
      } else if (card.sellPrice) {
        setPriceLoading(true);
        setPriceFromDate(card.sellPriceWhen as string);
      }
    }
    // eslint-disable-next-line
  }, [data, card.ticker, card]);

  return {
    price: stateSellPrice,
    setPriceLoading,
    setPrice: setStateSellPrice,
    priceLoading,
    setPriceFromDate,
  };
};

export default useSellPrice;
