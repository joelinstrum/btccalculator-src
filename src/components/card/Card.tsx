import { useState, useMemo } from "react";
import * as Styled from "./CardStyled";
import * as CardComponent from "./card-components/";
import { useCurrentPrice, useSelectCrypto } from "./card-hooks";

interface CardProps {
  card: IRoiCard;
  index: number;
}

const Card: React.FC<CardProps> = ({ card, index }) => {
  const { selectedCryptoChange, selectedCryptosList } = useSelectCrypto(index);
  const currentPrice = useCurrentPrice(card.ticker);
  const [currentCard, setCurrentCard] = useState<IRoiCard>(card);

  useMemo(() => {
    const oldCard = JSON.stringify(card);
    const newCard = JSON.stringify(currentCard);
    if (oldCard !== newCard) {
      setCurrentCard(card);
    }
  }, [card, currentCard]);

  return (
    <Styled.CardStyled>
      <CardComponent.CardHeader
        title={currentCard.title}
        index={index}
        onTitleChange={() => {}}
      />
      <Styled.CardContainerStyled>
        <Styled.CardLeft>
          <CardComponent.CardInvestmentAmount
            investmentAmount={currentCard.investment}
            index={index}
          />
          <CardComponent.CardSelectedCrypto
            selectedCryptoChange={selectedCryptoChange}
            selectedCryptosList={selectedCryptosList}
            cryptoTextValue={currentCard.fullName}
          />
          <CardComponent.CardPurchasePrice
            card={currentCard}
            index={index}
            currentPrice={currentPrice}
          />
          <CardComponent.CardSellPrice
            card={currentCard}
            index={index}
            currentPrice={currentPrice}
          />
          <CardComponent.CardSave index={index} card={currentCard} />
        </Styled.CardLeft>
        <Styled.CardRight>
          <Styled.CardCalculationsContainer>
            <CardComponent.CardCalculations card={currentCard} />
          </Styled.CardCalculationsContainer>
        </Styled.CardRight>
      </Styled.CardContainerStyled>
    </Styled.CardStyled>
  );
};

export default Card;
