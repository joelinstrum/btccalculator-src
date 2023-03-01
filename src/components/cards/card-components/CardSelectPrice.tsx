import { useState, useEffect } from "react";
import { FormRow, InputText } from "components";
import { constants } from "../../../utils/constants";
import { usePrice } from "../card-hooks";
import { getDateFrom, getTimestamp } from "utils/date";
import { useDispatch } from "react-redux";
import { updateCardProperties } from "state/features/cardSlice";

interface CardSelectPriceProps {
  card: IRoiCard;
  priceOnblur: (value?: string) => void;
  index: number;
  currentPrice?: any;
  ticker: string;
  revertedDate: number | undefined;
}

const CardSelectPrice: React.FC<CardSelectPriceProps> = ({
  card,
  priceOnblur,
  index,
  ticker,
  revertedDate,
}) => {
  const [originalPurchaseDate] = useState(card.purchasePriceWhen);
  const [originalPrice] = useState(card.purchasePrice);

  const dispatch = useDispatch();
  const { price, setCustomPrice } = usePrice({
    ticker,
    fromTimestamp: getTimestamp(card.purchasePriceWhen as string),
    useCurrent: card.useCurrentPricePurchase === "true",
    useCustomPrice: card.useCustomPrice === "true",
    revertedDate,
    cardPrice: card.purchasePrice,
  });
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    console.log(`Price update: ${price}`);
  }, [price]);

  useEffect(() => {
    setCustomPrice(card.purchasePrice);
    /* eslint-disable-next-line */
  }, [card.useCustomPrice]);

  useEffect(() => {
    setDisabled(false);
    if (
      card.purchasePriceWhen !== originalPurchaseDate &&
      price !== originalPrice
    ) {
      priceOnblur();
      dispatch(
        updateCardProperties([
          { property: "purchasePrice", value: price, index },
        ])
      );
    }
    /* eslint-disable-next-line */
  }, [card.purchasePriceWhen, originalPurchaseDate, originalPrice, price]);

  const optionsChangeHandler = (key: string, value?: string) => {
    setDisabled(true);
    setTimeout(() => {
      let current = value === "Current Price" ? "true" : "false";
      const dateFromDaysAgo = getDateFrom(key);
      dispatch(
        updateCardProperties([
          { property: "useCurrentPricePurchase", value: current, index },
          { property: "useCustomPrice", value: "false", index },
          {
            property: "purchasePriceWhen",
            value: dateFromDaysAgo,
            index,
          },
        ])
      );
    }, 200);
  };

  const onBlur = (value: string) => {
    dispatch(
      updateCardProperties([
        { property: "useCurrentPricePurchase", value: "false", index },
        { property: "useCustomPrice", value: "true", index },
        {
          property: "purchasePrice",
          value,
          index,
        },
      ])
    );
    priceOnblur();
  };

  // const dateFrom = useOptionsChangeHandler();

  return (
    <FormRow label="Purchase Price" align="right">
      <InputText
        size="medium"
        ariaLabel="Purchase Price"
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

export default CardSelectPrice;
