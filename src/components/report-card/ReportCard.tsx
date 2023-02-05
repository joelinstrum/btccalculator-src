import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import ReportCardStyled from "./ReportCardStyled";
import CalculatedResults from "../cards/card-components/CalculatedResults";

const ReportCard = () => {
  const { totalReturns, totalInvestments } = useSelector(
    (state: RootState) => state.cardTotalsSlice
  );
  const [stateTotalReturns, setTotalReturnOfAllCards] = useState(0);
  const [stateTotalInvestments, setTotalInvestments] = useState(0);

  useEffect(() => {
    setTotalReturnOfAllCards(totalReturns);
    setTotalInvestments(totalInvestments);
  }, [totalReturns, totalInvestments]);

  return (
    <ReportCardStyled>
      <CalculatedResults
        totalInvestment={stateTotalInvestments}
        totalReturn={stateTotalReturns}
      />
    </ReportCardStyled>
  );
};

export default ReportCard;
