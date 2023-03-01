import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store";
import { styled } from "@mui/system";
import Card from "./card-components/Card";
import CardFooter from "./card-components/CardFooter";
import { ReportCard } from "../";
import { updateCardTotals } from "../../state/features/cardTotalsSlice";

const CardsContainerStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
}));

const CardsContainer = () => {
  const { roiCards } = useSelector((state: RootState) => state.roiCardsSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    if (roiCards && Array.isArray(roiCards)) {
      dispatch(updateCardTotals(roiCards as any));
    }
    // eslint-disable-next-line
  }, [roiCards]);

  return (
    <CardsContainerStyled>
      {Array.isArray(roiCards) &&
        roiCards.map((card: IRoiCard, index: number) => (
          <Card
            card={card}
            index={index}
            key={index}
            revertedDate={card.revertedDate || undefined}
          />
        ))}
      <CardFooter />
      <ReportCard />
    </CardsContainerStyled>
  );
};

export default CardsContainer;
