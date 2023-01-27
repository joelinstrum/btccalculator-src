import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { Box } from "@mui/material";
import CardStyled from "./CardStyled";
import SelectPrice from "./SelectPrice";
import { FormRow } from "../../forms";
import { InputText } from "../../forms";
import { cryptoCurrencies } from "../../../models/cryptos";

interface CardProps {
  card: IRoiCard;
  index: number;
}

const Card: React.FC<CardProps> = ({ card, index }) => {
  const investmentOnchange = () => {};
  const selectedCryptoChange = () => {};
  const { selectedCryptos } = useSelector(
    (store: RootState) => store.cryptoReducer
  );

  const selectedCryptosList = selectedCryptos.reduce(
    (acc: Object, item: string) => {
      return {
        ...acc,
        [item]: cryptoCurrencies[item].fullName,
      };
    },
    {}
  );

  return (
    <CardStyled>
      {card.title}
      <Box>
        <form>
          <FormRow label="Investment Amount" width="33%" align="right">
            <InputText
              size="medium"
              ariaLabel="investment amount"
              updatetextvalue={investmentOnchange}
            />
          </FormRow>
          <FormRow label="Crypto" width="33%" align="right">
            <InputText
              size="medium"
              ariaLabel="crypto"
              updatetextvalue={selectedCryptoChange}
              options={selectedCryptosList}
            />
          </FormRow>
          <FormRow label="Purchase price" width="33%" align="right">
            <SelectPrice />
          </FormRow>
          <FormRow label="Sell price" width="33%" align="right">
            <InputText
              size="medium"
              ariaLabel="sell price"
              updatetextvalue={investmentOnchange}
            />
          </FormRow>
        </form>
      </Box>
    </CardStyled>
  );
};

export default Card;
