import { useState } from "react";
import { FormRow, InputText } from "components/forms";
import { constants } from "utils/constants";
import { useSellPrice, useSellDispatch } from "../card-hooks";
import { getDateFrom } from "utils/date";

interface CardSellPriceProps {
  card: IRoiCard;
  index: number;
  currentPrice: string;
}

const CardSellPrice: React.FC<CardSellPriceProps> = ({
  card,
  index,
  currentPrice,
}) => {
  const [disabled, setDisabled] = useState(false);
  const { price, priceLoading, setPriceLoading, setPriceFromDate } =
    useSellPrice({
      card,
      currentPrice,
      index,
    });
  const dispatch = useSellDispatch();

  const optionsChangeHandler = (key: any, value: any) => {
    setDisabled(true);
    setPriceLoading(true);
    setPriceFromDate(getDateFrom(key));
    setDisabled(false);
  };

  const onBlur = (value: string) => {
    if (value !== price) {
      dispatch(value, "1/1/2000", index, true);
    }
  };

  return (
    <FormRow label="Sell Price" align="right">
      <InputText
        size="medium"
        ariaLabel="Sell Price"
        value={priceLoading ? "...loading" : price}
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
