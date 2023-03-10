import { useState, useEffect } from "react";
import { useLazyGetHistoricalPriceQuery } from "state/features/apiSellSlice";
import { isToday, getTimestamp } from "utils/date";
import { constants } from "utils/constants";
import { useSellDispatch } from "./";
import { toBool } from "utils/utilities";

interface PriceProps {
  card: IRoiCard;
  currentPrice: string;
  index: number;
}

const useSellPrice: FT<PriceProps> = ({ card, currentPrice, index }) => {
  const [priceLoading, setPriceLoading] = useState(false);
  const [price, setPrice] = useState("");
  const {
    setCustomPrice,
    setSellPriceFromADate,
    updatePriceFromData,
    setSellPriceAsCurrent,
  } = useSellDispatch();
  const [getHistoricalPrice, { data }] = useLazyGetHistoricalPriceQuery();
  let stateFromDate = card.sellPriceWhen || "01/01/2000";

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
      setSellPriceAsCurrent(index, currentPrice);
    }, 250);
  };

  const onUpdateFromDate = (value: string) => {
    setPriceLoading(true);
    stateFromDate = value;
    if (isToday(value)) {
      onUpdateUseCurrent();
    } else {
      setSellPriceFromADate(value, index);
      activateHistoricalSellPrice(value);
    }
  };

  /* ticker has changed, we need to update our price */
  useEffect(() => {
    if (toBool(card.useCustomSell) || toBool(card.useCurrentPriceSell)) {
      return;
    } else if (card.sellPriceWhen) {
      activateHistoricalSellPrice(card.sellPriceWhen.toString());
    }
    /* eslint-disable-next-line */
  }, [card.ticker]);

  const activateHistoricalSellPrice = (fromDate: string) => {
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
    if (toBool(card.useCustomSell)) {
      return;
    } else if (toBool(card.useCurrentPriceSell)) {
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

export default useSellPrice;
