import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "state/store";
import { styled } from "@mui/system";
import Card from "../card/Card";
import { updateCardTotals } from "state/features/cardTotalsSlice";
import { CardsFooter, ReportCard } from "components";

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
          <Card card={card} index={index} key={index} />
        ))}
      <ReportCard />
      <CardsFooter />
    </CardsContainerStyled>
  );
};

export default CardsContainer;
