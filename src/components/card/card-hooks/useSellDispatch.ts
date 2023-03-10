import { useDispatch } from "react-redux";
import { updateCardProperties } from "state/features/cardSlice";

const useSellDispatch = () => {
  const dispatch = useDispatch();

  const setCustomPrice = (value: string, index: number) => {
    dispatch(
      updateCardProperties([
        {
          property: "useCustomSell",
          value: "true",
          index,
        },
        {
          property: "sellPrice",
          value,
          index,
        },
        {
          property: "useCurrentPriceSell",
          value: "false",
          index,
        },
      ])
    );
  };

  const setSellPriceFromADate = (value: string, index: number) => {
    dispatch(
      updateCardProperties([
        {
          property: "useCustomSell",
          value: "false",
          index,
        },
        {
          property: "sellPriceWhen",
          value,
          index,
        },
        {
          property: "useCurrentPriceSell",
          value: "false",
          index,
        },
      ])
    );
  };

  const setSellPriceAsCurrent = (index: number, currentPrice: string) => {
    dispatch(
      updateCardProperties([
        {
          property: "useCustomSell",
          value: "false",
          index,
        },
        {
          property: "sellPriceWhen",
          value: "01/01/2000",
          index,
        },
        {
          property: "useCurrentPriceSell",
          value: "true",
          index,
        },
        {
          property: "sellPrice",
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
          property: "sellPrice",
          value: price,
          index,
        },
        {
          property: "sellPriceWhen",
          value: fromDate,
          index,
        },
      ])
    );
  };

  return {
    setCustomPrice,
    setSellPriceFromADate,
    updatePriceFromData,
    setSellPriceAsCurrent,
  };
};

export default useSellDispatch;
