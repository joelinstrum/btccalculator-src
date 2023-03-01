import { useState, useEffect } from "react";
import { FormRow, InputText } from "components";
import { constants } from "../../../utils/constants";
import { usePrice } from "../card-hooks";
import { getDateFrom, getTimestamp } from "utils/date";
import { useDispatch } from "react-redux";
import { updateCardProperties } from "state/features/cardSlice";

interface CardSellPriceProps {
  card: IRoiCard;
  priceOnblur: (value?: string) => void;
  index: number;
  currentPrice?: any;
  ticker: string;
  revertedDate: number | undefined;
}

const CardSellPrice: React.FC<CardSellPriceProps> = ({
  card,
  priceOnblur,
  index,
  ticker,
  revertedDate,
  currentPrice,
}) => {
  const [originalSellDate] = useState(card.sellPriceWhen);
  const [originalPrice] = useState(card.sellPrice);

  const dispatch = useDispatch();
  const { price, setCustomPrice } = usePrice({
    ticker,
    fromTimestamp: getTimestamp(card.sellPriceWhen as string),
    useCurrent: card.useCurrentPriceSell === "true",
    useCustomPrice: card.useCustomPrice === "true",
    revertedDate,
    cardPrice: card.sellPrice,
  });
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setCustomPrice(card.sellPrice);
    /* eslint-disable-next-line */
  }, [card.useCustomPrice]);

  useEffect(() => {
    if (card.sellPriceWhen !== originalSellDate && price !== originalPrice) {
      setDisabled(false);
      priceOnblur();
      dispatch(
        updateCardProperties([{ property: "sellPrice", value: price, index }])
      );
    }
    /* eslint-disable-next-line */
  }, [card.sellPriceWhen, originalSellDate, originalPrice, price]);

  const optionsChangeHandler = (key: string, value?: string) => {
    let current = value === "Current Price" ? "true" : "false";
    setDisabled(true);
    const dateFromDaysAgo = getDateFrom(key);
    dispatch(
      updateCardProperties([
        { property: "useCurrentPriceSell", value: current, index },
        { property: "useCustomPrice", value: "false", index },
        {
          property: "sellPriceWhen",
          value: dateFromDaysAgo,
          index,
        },
      ])
    );
  };

  const onBlur = (value: string) => {
    dispatch(
      updateCardProperties([
        { property: "useCurrentPriceSell", value: "false", index },
        { property: "useCustomPrice", value: "true", index },
        {
          property: "sellPrice",
          value,
          index,
        },
      ])
    );
    priceOnblur();
  };

  // const dateFrom = useOptionsChangeHandler();

  return (
    <FormRow label="Sell Price" align="right">
      <InputText
        size="medium"
        ariaLabel="Sell Price"
        value={price}
        onBlur={onBlur}
        optionsChangeHandler={optionsChangeHandler}
        options={constants.DATE_FROM}
        align="right"
        disabled={disabled}
      />
    </FormRow>
  );
};

export default CardSellPrice;
