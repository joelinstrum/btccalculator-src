import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { CalculatedResultsStyled } from "./CardStyled";
import { formatCurrency } from "../../../utils/utilities";

interface CalculatedResultsProps {
  totalInvestment: number;
  totalReturn: number;
}

const CalculatedResults: React.FC<CalculatedResultsProps> = ({
  totalInvestment,
  totalReturn,
}) => {
  const [netReturn, setNetReturn] = useState(totalReturn - totalInvestment);

  useEffect(() => {
    setNetReturn(totalReturn - totalInvestment);
  }, [totalInvestment, totalReturn]);

  return (
    <CalculatedResultsStyled netReturn={netReturn}>
      <div>
        <div>Total Investment</div>
        <div>
          <Typography>{formatCurrency(totalInvestment)}</Typography>
        </div>
      </div>
      <div>
        <div>Total Return</div>
        <div>
          <Typography>{formatCurrency(totalReturn)}</Typography>
        </div>
      </div>
      <div>
        <div>Net</div>
        <div>
          <Typography>{formatCurrency(netReturn)}</Typography>
        </div>
      </div>
    </CalculatedResultsStyled>
  );
};

export default CalculatedResults;
