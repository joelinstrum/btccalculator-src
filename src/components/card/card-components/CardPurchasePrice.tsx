import { useState } from "react";
import { FormRow, InputText } from "components/forms";
import {
  usePrice,
  usePurchaseDispatch,
  useFromDateOptions,
} from "../card-hooks";
import { getDateFrom } from "utils/date";

interface CardPurchasePriceProps {
  card: IRoiCard;
  index: number;
  currentPrice: string;
}

const CardPurchasePrice: React.FC<CardPurchasePriceProps> = ({
  card,
  index,
  currentPrice,
}) => {
  const [disabled, setDisabled] = useState(false);
  const fromDateOptions = useFromDateOptions(card.ticker);
  const { price, priceLoading, setPriceLoading, setPriceFromDate } = usePrice({
    card,
    currentPrice,
    index,
  });
  const dispatch = usePurchaseDispatch();

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
    <FormRow label="Purchase Price" align="right">
      <InputText
        size="medium"
        ariaLabel="Purchase Price"
        value={priceLoading ? "...loading" : price}
        onBlur={onBlur}
        optionsChangeHandler={optionsChangeHandler}
        options={fromDateOptions}
        align="right"
        disabled={disabled}
      />
    </FormRow>
  );
};

export default CardPurchasePrice;
