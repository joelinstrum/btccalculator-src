import { useState, useEffect } from "react";
import { useLazyGetHistoricalPriceQuery } from "state/features/apiSlice";
import { constants } from "../../../utils/constants";

interface UsePriceProps {
  ticker: string;
  useCurrent: boolean;
  priceOnblur?: (value?: string) => void;
  currentPrice?: string | number;
  fromTimestamp?: number | null;
  onComplete?: () => void;
  useCustomPrice: boolean;
  revertedDate: number | undefined;
  cardPrice: number | string;
}

interface Props {
  (args: UsePriceProps): any;
}

const usePrice: Props = ({
  fromTimestamp,
  ticker,
  useCurrent,
  onComplete,
  useCustomPrice,
  revertedDate,
  cardPrice,
  currentPrice,
}) => {
  const [disabled] = useState(false);
  const [getHistoricalPrice, { data }] = useLazyGetHistoricalPriceQuery();
  const [price, setPrice] = useState<string | number | null | undefined>(null);
  const [unRevertedDate, setUnRevertedDate] = useState(revertedDate);

  useEffect(() => {
    if (revertedDate !== unRevertedDate) {
      setUnRevertedDate(revertedDate);
      setPrice(cardPrice);
    } else if (useCurrent) {
      setPrice(currentPrice);
      onComplete && onComplete();
    } else if (fromTimestamp && !useCustomPrice) {
      updatePrice(fromTimestamp as number);
    }
    // eslint-disable-next-line
  }, [fromTimestamp, useCurrent, revertedDate]);

  useEffect(() => {
    if (data && data[ticker] && data[ticker].USD) {
      setPrice(data[ticker].USD);
      onComplete && onComplete();
    }
    // eslint-disable-next-line
  }, [data]);

  useEffect(() => {
    console.log(`Price updated: ${price}`);
  }, [price]);

  const updatePrice = (from: number) => {
    getHistoricalPrice(
      {
        fsym: ticker,
        tsyms: "USD",
        extraParams: constants.API_PARAM_NAME,
        ts: from,
      },
      true
    );
  };

  const setCustomPrice = (customPrice: string) => {
    setPrice(customPrice);
  };

  return {
    disabled,
    price,
    setCustomPrice,
  };
};

export default usePrice;
