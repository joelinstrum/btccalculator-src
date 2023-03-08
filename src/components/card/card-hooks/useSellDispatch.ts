import { useDispatch } from "react-redux";
import { updateCardProperties } from "state/features/cardSlice";
import { isToday } from "utils/date";

const useSellDispatch = () => {
  const dispatchPrice = useDispatch();
  const sellDispatch = (
    price: string,
    dateFrom: string,
    index: number,
    useCustom: boolean
  ) => {
    if (useCustom) {
      dispatchPrice(
        updateCardProperties([
          {
            property: "useCurrentPriceSell",
            value: isToday(dateFrom).toString(),
            index,
          },
          { property: "useCustomSell", value: "true", index },
          { property: "useCurrentPriceSell", value: "false", index },
          { property: "sellPrice", value: price, index },
          {
            property: "sellPriceWhen",
            value: dateFrom,
            index,
          },
        ])
      );
    } else {
      dispatchPrice(
        updateCardProperties([
          { property: "sellPrice", value: price, index },
          {
            property: "useCurrentPriceSell",
            value: isToday(dateFrom).toString(),
            index,
          },
          { property: "useCustomSell", value: "false", index },
          {
            property: "sellPriceWhen",
            value: dateFrom,
            index,
          },
        ])
      );
    }
  };

  return sellDispatch;
};

export default useSellDispatch;
