import { useEffect, useState } from "react";
import { CardCalculationsStyled } from "../CardStyled";
import CalculatedResults from "./CalculatedResults";
import {
  getAmountDollarsInvested,
  getCoins,
  getTotalReturn,
  parseNumber,
  formatCurrency,
} from "../../../utils/utilities";

interface CardCalculationsProps {
  card: IRoiCard;
}

const CardCalculations: React.FC<CardCalculationsProps> = ({ card }) => {
  const [amountDollarsInvested, setAmountDollarsInvested] = useState(
    getAmountDollarsInvested(card.investment, card.purchasePrice)
  );

  const [numberOfCoins, setNumberOfCoins] = useState(
    getCoins(card.investment, card.purchasePrice)
  );

  const [totalReturn, setTotalReturn] = useState(
    getTotalReturn(numberOfCoins, card.sellPrice)
  );

  useEffect(() => {
    let numberOfCoins = getCoins(card.investment, card.purchasePrice);
    let totalReturn = getTotalReturn(numberOfCoins, card.sellPrice);
    let amountInvested = getAmountDollarsInvested(
      card.investment,
      card.purchasePrice
    );
    setAmountDollarsInvested(amountInvested);
    setNumberOfCoins(numberOfCoins);
    setTotalReturn(totalReturn);
  }, [card.investment, card.purchasePrice, card.sellPrice]);

  return (
    <CardCalculationsStyled>
      <div>
        <div># coins</div>
        <div>
          {numberOfCoins} @{formatCurrency(parseNumber(card.purchasePrice))}
        </div>
      </div>
      <div>
        <div>Purchased date</div>
        <div>{card.purchasePriceWhen}</div>
      </div>
      <div>
        <div>Sell date</div>
        <div>{card.sellPriceWhen}</div>
      </div>
      <div>{"\u00A0"}</div>
      <CalculatedResults
        totalInvestment={parseNumber(amountDollarsInvested)}
        totalReturn={parseNumber(totalReturn)}
      />
    </CardCalculationsStyled>
  );
};

export default CardCalculations;
