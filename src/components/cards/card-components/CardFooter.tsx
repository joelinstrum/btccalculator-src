import { useDispatch } from "react-redux";
import { styled } from "@mui/system";
import { Button } from "../../forms";
import { addCard } from "../../../state/features/cardSlice";

const CardFooterStyled = styled("div")(() => ({
  marginLeft: "4px",
}));

const CardFooter = () => {
  const dispatch = useDispatch();

  const addClickHandler = () => {
    dispatch(addCard());
  };

  return (
    <CardFooterStyled>
      <Button variation="success" size="small" onClick={addClickHandler}>
        + Add
      </Button>
    </CardFooterStyled>
  );
};

export default CardFooter;
