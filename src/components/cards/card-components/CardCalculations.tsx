import { useEffect, useState } from "react";
import { CardCalculationsStyled } from "./CardStyled";
import {
  getAmountDollarsInvested,
  getCoins,
  getTotalReturn,
  getNetReturn,
  parseNumber,
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

  const [netReturn, setNetReturn] = useState(
    getNetReturn(amountDollarsInvested, totalReturn)
  );

  useEffect(() => {
    let numberOfCoins = getCoins(card.investment, card.purchasePrice);
    let totalReturn = getTotalReturn(numberOfCoins, card.sellPrice);
    let amountInvested = getAmountDollarsInvested(
      card.investment,
      card.purchasePrice
    );
    let netReturn = getNetReturn(amountInvested, totalReturn);
    setAmountDollarsInvested(amountInvested);
    setNumberOfCoins(numberOfCoins);
    setTotalReturn(totalReturn);
    setNetReturn(netReturn);
  }, [card.investment, card.purchasePrice, card.sellPrice]);

  return (
    <CardCalculationsStyled>
      <div>
        <div>$ Invested</div>
        <div>{amountDollarsInvested}</div>
      </div>
      <div>
        <div># coins</div>
        <div>{numberOfCoins}</div>
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
      <div>
        <div>Total</div>
        <div>{totalReturn}</div>
      </div>
      <div>
        <div>Net</div>
        <div>{netReturn}</div>
      </div>
    </CardCalculationsStyled>
  );
};

export default CardCalculations;
