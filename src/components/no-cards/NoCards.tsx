import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addSampleCards } from "state/features/cardSlice";
import NoCardsStyled from "./NoCardsStyled";

const NoCards = () => {
  const dispatch = useDispatch();

  const addClickHandler = () => {
    dispatch(addSampleCards());
  };

  return (
    <NoCardsStyled>
      <Typography variant="h3">
        Generate a new crypto calcuation card
      </Typography>
      <ul onClick={addClickHandler}>
        <li>
          Click here to generate a card with a $10,000 bitcoin purchase from
          October of 2020 to now
        </li>
        <li>
          Compared with a $10,000 ethereum purchase from October of 2020 to now
        </li>
      </ul>
    </NoCardsStyled>
  );
};

export default NoCards;
