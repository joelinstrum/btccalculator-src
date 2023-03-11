import { FormRow, InputText } from "components/forms";
import { usePrice, useFromDateOptions } from "../card-hooks";
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
  const { priceLoading, setPriceLoading, onUpdateFromDate, onUpdateCustom } =
    usePrice({
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
    <FormRow label="Purchase Price" align="right">
      <InputText
        size="medium"
        ariaLabel="Purchase Price"
        value={priceLoading ? "...updating" : card.purchasePrice.toString()}
        onBlur={onUpdateCustom}
        optionsChangeHandler={optionsChangeHandler}
        options={fromDateOptions}
        align="right"
        disabled={priceLoading || false}
      />
    </FormRow>
  );
};

export default CardPurchasePrice;
