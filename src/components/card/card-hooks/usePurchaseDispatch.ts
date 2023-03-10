import { useDispatch } from "react-redux";
import { updateCardProperties } from "state/features/cardSlice";

const usePurchaseDispatch = () => {
  const dispatch = useDispatch();

  const setCustomPrice = (value: string, index: number) => {
    dispatch(
      updateCardProperties([
        {
          property: "useCustomPrice",
          value: "true",
          index,
        },
        {
          property: "purchasePrice",
          value,
          index,
        },
        {
          property: "useCurrentPricePurchase",
          value: "false",
          index,
        },
      ])
    );
  };

  const setPurchasePriceFromADate = (value: string, index: number) => {
    dispatch(
      updateCardProperties([
        {
          property: "useCustomPrice",
          value: "false",
          index,
        },
        {
          property: "purchasePriceWhen",
          value,
          index,
        },
        {
          property: "useCurrentPricePurchase",
          value: "false",
          index,
        },
      ])
    );
  };

  const setPurchasePriceAsCurrent = (index: number, currentPrice: string) => {
    dispatch(
      updateCardProperties([
        {
          property: "useCustomPrice",
          value: "false",
          index,
        },
        {
          property: "purchasePriceWhen",
          value: "01/01/2000",
          index,
        },
        {
          property: "useCurrentPricePurchase",
          value: "true",
          index,
        },
        {
          property: "purchasePrice",
          value: currentPrice,
          index,
        },
      ])
    );
  };

  const updatePriceFromData = (
    price: string,
    fromDate: string,
    index: number
  ) => {
    dispatch(
      updateCardProperties([
        {
          property: "purchasePrice",
          value: price,
          index,
        },
        {
          property: "purchasePriceWhen",
          value: fromDate,
          index,
        },
      ])
    );
  };

  return {
    setCustomPrice,
    setPurchasePriceFromADate,
    updatePriceFromData,
    setPurchasePriceAsCurrent,
  };
};

export default usePurchaseDispatch;
