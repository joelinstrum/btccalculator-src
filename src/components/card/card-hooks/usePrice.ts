import { useState, useEffect } from "react";
import { useLazyGetHistoricalPriceQuery } from "state/features/apiSlice";
import { isToday, getTimestamp } from "utils/date";
import { constants } from "utils/constants";
import { usePurchaseDispatch } from "./";
import { toBool } from "utils/utilities";

interface PriceProps {
  card: IRoiCard;
  currentPrice: string;
  index: number;
}

const usePurchasePrice: FT<PriceProps> = ({ card, currentPrice, index }) => {
  const [priceLoading, setPriceLoading] = useState(false);
  const [price, setPrice] = useState("");
  const {
    setCustomPrice,
    setPurchasePriceFromADate,
    updatePriceFromData,
    setPurchasePriceAsCurrent,
  } = usePurchaseDispatch();
  const [getHistoricalPrice, { data }] = useLazyGetHistoricalPriceQuery();
  let stateFromDate = card.purchasePriceWhen || "01/01/2000";

  const onUpdateCustom = (value: string) => {
    if (value !== price) {
      setPriceLoading(true);
      setTimeout(() => {
        setCustomPrice(value, index);
        setPriceLoading(false);
      }, 250);
    }
  };

  const onUpdateUseCurrent = () => {
    setTimeout(() => {
      setPriceLoading(false);
      setPurchasePriceAsCurrent(index, currentPrice);
    }, 250);
  };

  const onUpdateFromDate = (value: string) => {
    setPriceLoading(true);
    stateFromDate = value;
    if (isToday(value)) {
      onUpdateUseCurrent();
    } else {
      setPurchasePriceFromADate(value, index);
      activateHistoricalPurchasePrice(value);
    }
  };

  /* ticker has changed, we need to update our price */
  useEffect(() => {
    if (toBool(card.useCustomPrice)) {
      return;
    } else if (card.purchasePriceWhen) {
      activateHistoricalPurchasePrice(card.purchasePriceWhen.toString());
    }
    /* eslint-disable-next-line */
  }, [card.ticker]);

  const activateHistoricalPurchasePrice = (fromDate: string) => {
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
    if (toBool(card.useCustomPrice)) {
      return;
    } else if (toBool(card.useCurrentPricePurchase)) {
      updatePriceFromData(currentPrice, stateFromDate.toString(), index);
    } else if (data && data.hasOwnProperty(card.ticker)) {
      setPriceLoading(false);
      updatePriceFromData(
        data[card.ticker].USD,
        stateFromDate.toString(),
        index
      );
    }
    /* eslint-disable-next-line */
  }, [data, currentPrice]);

  return {
    onUpdateUseCurrent,
    setPriceLoading,
    setPrice,
    priceLoading,
    onUpdateFromDate,
    onUpdateCustom,
  };
};

export default usePurchasePrice;
