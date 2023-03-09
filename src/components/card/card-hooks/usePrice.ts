import { useState, useEffect } from "react";
import { useLazyGetHistoricalPriceQuery } from "state/features/apiSlice";
import { isToday, getTimestamp } from "utils/date";
import { constants } from "utils/constants";
import { usePurchaseDispatch } from "./";
import { date } from "utils/date";

interface PriceProps {
  card: IRoiCard;
  currentPrice: string;
  index: number;
}

const usePrice: FT<PriceProps> = ({ card, currentPrice, index }) => {
  const [statePurchasePrice, setStatePurchasePrice] = useState(
    card.purchasePrice
  );
  const [stateFromDate, setStateFromDate] = useState(card.purchasePriceWhen);
  const [priceLoading, setPriceLoading] = useState(false);
  const [getHistoricalPrice, { data }] = useLazyGetHistoricalPriceQuery();
  const [currentTicker, setCurrentTicker] = useState(card.ticker);
  const dispatch = usePurchaseDispatch();

  /* set the price based on current price */
  useEffect(() => {
    if (card.useCurrentPricePurchase === "true") {
      setStatePurchasePrice(currentPrice);
      dispatch(currentPrice, date() as string, index, false);
    }
  }, [card, currentPrice, card.revertedDate]);

  /* set the price based on a date */
  const setPriceFromDate = (fromDate: string) => {
    if (fromDate && isToday(fromDate)) {
      setStatePurchasePrice(currentPrice);
      setPriceLoading(false);
      dispatch(currentPrice, fromDate, index, false);
    } else {
      setStateFromDate(fromDate);
      dispatch("", fromDate, index, false);
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
      setStatePurchasePrice(data[card.ticker].USD);
      dispatch(data[card.ticker].USD, stateFromDate as string, index, false);
      setPriceLoading(false);
    } else if (data && data[card.ticker]) {
      setStatePurchasePrice("N/A");
      dispatch("0", stateFromDate as string, index, false);
      setPriceLoading(false);
    } else if (card.ticker !== currentTicker) {
      setCurrentTicker(card.ticker);
      if (card.useCustomPrice === "true") {
        return;
      } else if (card.useCurrentPricePurchase === "true") {
        setStatePurchasePrice(currentPrice);
      } else if (card.purchasePrice) {
        setPriceLoading(true);
        setPriceFromDate(card.purchasePriceWhen as string);
      }
    }
    // eslint-disable-next-line
  }, [data, card.ticker, card]);

  return {
    price: statePurchasePrice,
    setPriceLoading,
    setPrice: setStatePurchasePrice,
    priceLoading,
    setPriceFromDate,
  };
};

export default usePrice;
