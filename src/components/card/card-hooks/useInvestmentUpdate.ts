import { useDispatch } from "react-redux";
import { updateCardProperty } from "state/features/cardSlice";

const useInvestmentUpdate = (index: number) => {
  const dispatch = useDispatch();

  const update = (investmentAmount: string) => {
    if (!investmentAmount) {
      return;
    }
    dispatch(
      updateCardProperty({
        property: "investment",
        value: investmentAmount,
        index,
      })
    );
  };

  return update;
};

export default useInvestmentUpdate;
