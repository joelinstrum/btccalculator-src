import { FormRow, InputText } from "components/forms";
import { constants } from "utils/constants";
import { usePrice } from "../card-hooks";
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
        options={constants.DATE_FROM}
        align="right"
        disabled={priceLoading || false}
      />
    </FormRow>
  );
};

export default CardPurchasePrice;
