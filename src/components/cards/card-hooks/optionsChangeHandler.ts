// import { useDispatch } from "react-redux";
// import { updateCardProperty, updateCardProperties } from "state/features/cardSlice";
import { date, getDateFrom, getTimestamp } from "utils/date";

// interface OptionsChangeHandlerProps {
//   key: string;
//   value?: string;
//   onChange: (doUpdate: boolean) => void;
//   index: number;
// }

// const useOptionsChangeHandler = ({
//   key,
//   onChange,
//   value,
//   index,
// }: OptionsChangeHandlerProps) => {
//   const dispatch = useDispatch();

//   onChange(true);
//   let _fromDate;
//   if (value === "Current Price") {
//     dispatch(
//       updateCardProperty({
//         property: "useCurrentPricePurchase",
//         value: "true",
//         index: index,
//       })
//     );
//     _fromDate = date();
//   } else {
//     _fromDate = getDateFrom(key).toString();
//     dispatch(
//       updateCardProperties([{
//         property: "useCurrentPricePurchase",
//         value: "false",
//         index: index,
//       }])
//     );
//   }
//   if (typeof _fromDate !== "undefined" && _fromDate) {
//     return getTimestamp(_fromDate);
//   }
// };

// export default useOptionsChangeHandler;

interface OptionsChangeHandlerProps {
  key?: string;
  value?: string;
}

const useOptionsChangeHandler = ({ key, value }: OptionsChangeHandlerProps) => {
  return getDateFrom(value);
};

export default useOptionsChangeHandler;
