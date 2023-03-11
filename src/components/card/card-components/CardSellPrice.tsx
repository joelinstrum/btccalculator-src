import { FormRow, InputText } from "components/forms";
import { constants } from "utils/constants";
import { useSellPrice, useFromDateOptions } from "../card-hooks";
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
  const { priceLoading, setPriceLoading, onUpdateFromDate, onUpdateCustom } =
    useSellPrice({
      card,
      currentPrice,
      index,
    });

  const fromDateOptions = useFromDateOptions(card.ticker);

  const optionsChangeHandler = (key: any, value: any) => {
    setPriceLoading(true);
    onUpdateFromDate(getDateFrom(key));
  };

  return (
    <FormRow label="Sell Price" align="right">
      <InputText
        size="medium"
        ariaLabel="Sell Price"
        value={priceLoading ? "...updating" : card.sellPrice.toString()}
        onBlur={onUpdateCustom}
        optionsChangeHandler={optionsChangeHandler}
        options={fromDateOptions}
        align="right"
        disabled={priceLoading || false}
      />
    </FormRow>
  );
};

export default CardSellPrice;
