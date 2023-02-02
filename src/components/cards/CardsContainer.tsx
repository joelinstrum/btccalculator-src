import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { styled } from "@mui/system";
import Card from "./card-components/Card";
import CardFooter from "./card-components/CardFooter";

const CardsContainerStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
}));

const CardsContainer = () => {
  const { roiCards } = useSelector((state: RootState) => state.roiCardsSlice);

  return (
    <CardsContainerStyled>
      {Array.isArray(roiCards) &&
        roiCards.map((card: IRoiCard, index: number) => (
          <Card card={card} index={index} key={index} />
        ))}
      <CardFooter />
    </CardsContainerStyled>
  );
};

export default CardsContainer;
