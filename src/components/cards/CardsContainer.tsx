import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "state/store";
import { styled } from "@mui/system";
import Card from "components/card/Card";
import CardsFooter from "components/cards-footer";
import { ReportCard, NoCards, CardsShare } from "../";
import { updateCardTotals } from "state/features/cardTotalsSlice";

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
      {Array.isArray(roiCards) && roiCards.length > 0 ? (
        <>
          {roiCards.map((card: IRoiCard, index: number) => (
            <Card card={card} index={index} key={index} />
          ))}
          <CardsFooter />
          <ReportCard />
          <CardsShare roiCards={roiCards} />
        </>
      ) : (
        <NoCards />
      )}
    </CardsContainerStyled>
  );
};

export default CardsContainer;
