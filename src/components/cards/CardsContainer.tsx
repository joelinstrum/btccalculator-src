import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import Card from "./card-components/Card";

const CardsContainer = () => {
  const { roiCards } = useSelector((state: RootState) => state.roiCardsReducer);

  return (
    <div>
      {roiCards.map((card: IRoiCard, index: number) => (
        <Card card={card} index={index} key={index} />
      ))}
    </div>
  );
};

export default CardsContainer;
