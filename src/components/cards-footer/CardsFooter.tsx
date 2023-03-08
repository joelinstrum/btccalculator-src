import { useDispatch } from "react-redux";
import { styled } from "@mui/system";
import { Button } from "components/forms";
import { addCard } from "state/features/cardSlice";

const CardsFooterStyled = styled("div")(({ theme }) => ({
  marginLeft: "4px",
  maxWidth: "870px",
  [theme.breakpoints.up("md")]: {
    marginLeft: "15px",
  },
}));

const CardsFooter = () => {
  const dispatch = useDispatch();

  const addClickHandler = () => {
    dispatch(addCard());
  };

  return (
    <CardsFooterStyled>
      <Button variation="success" size="small" onClick={addClickHandler}>
        + Add
      </Button>
    </CardsFooterStyled>
  );
};

export default CardsFooter;
