import { useDispatch } from "react-redux";
import { updateCardProperties } from "state/features/cardSlice";
import { isToday } from "utils/date";

const useCardDispatch = () => {
  const dispatchPrice = useDispatch();
  const dispatch = (
    price: string,
    dateFrom: string,
    index: number,
    useCustom: boolean
  ) => {
    if (useCustom) {
      dispatchPrice(
        updateCardProperties([
          {
            property: "useCurrentPricePurchase",
            value: isToday(dateFrom).toString(),
            index,
          },
          { property: "useCustomPrice", value: "true", index },
          { property: "useCurrentPricePurchase", value: "false", index },
          { property: "purchasePrice", value: price, index },
          {
            property: "purchasePriceWhen",
            value: dateFrom,
            index,
          },
        ])
      );
    } else {
      dispatchPrice(
        updateCardProperties([
          { property: "purchasePrice", value: price, index },
          {
            property: "useCurrentPricePurchase",
            value: isToday(dateFrom).toString(),
            index,
          },
          { property: "useCustomPrice", value: "false", index },
          {
            property: "purchasePriceWhen",
            value: dateFrom,
            index,
          },
        ])
      );
    }
  };

  return dispatch;
};

export default useCardDispatch;
