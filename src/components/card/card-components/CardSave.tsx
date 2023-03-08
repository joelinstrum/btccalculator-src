import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FormRow, Button } from "../../forms";
import { saveRoiCards } from "state/features/cardSlice";

interface CardSaveProps {
  index: number;
  card: IRoiCard;
}

const CardSave: React.FC<CardSaveProps> = ({ index, card }) => {
  const [saveDisabled, setSaveDisabled] = useState(true);
  const [currentCard, setCurrentCard] = useState<IRoiCard | null>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentCard) {
      setCurrentCard(card);
      return;
    }
    const oldCard = JSON.stringify(card);
    const curCard = JSON.stringify(currentCard);
    if (oldCard !== curCard) {
      setSaveDisabled(false);
    }
  }, [
    card,
    currentCard,
    card.purchasePrice,
    card.sellPrice,
    card.ticker,
    card.title,
    card.useCurrentPricePurchase,
    card.useCurrentPriceSell,
    card.purchasePriceWhen,
    card.sellPriceWhen,
  ]);

  const saveHandler = () => {
    setCurrentCard(card);
    setSaveDisabled(true);
    dispatch(saveRoiCards());
  };

  /* TO-DO: add revertHandler logic */
  // const revertHandler = () => {
  //   setSaveDisabled(true);
  //   setTimeout(() => {
  //     dispatch(revertRoiCards());
  //   }, 1000);
  // };

  return (
    <FormRow label="" align="right" sx={{ paddingRight: "10px" }}>
      <Button
        variation="primary"
        size="medium"
        disabled={saveDisabled}
        onClick={saveHandler}
      >
        Save Card
      </Button>
      <span>&nbsp;</span>
      {/* <Button
        variation="secondary"
        size="medium"
        disabled={saveDisabled}
        onClick={revertHandler}
      >
        Revert
      </Button> */}
    </FormRow>
  );
};

export default CardSave;
