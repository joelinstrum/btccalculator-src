import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../state/store";
import {
  BoxStyled,
  CardContainerStyled,
  CardCalculationsContainer,
} from "./CardStyled";
import CardSelectPrice from "./CardSelectPrice";
import { cryptoCurrencies } from "../../../models/cryptos";
import CardInvestment from "./CardInvestment";
import CardSelectedCrypto from "./CardSelectedCrypto";
import CardSellPrice from "./CardSellPrice";
import CardSave from "./CardSave";
import CardCalculations from "./CardCalculations";
import CardHeader from "./CardHeader";
import { saveRoiCards } from "../../../state/features/cardSlice";
import {
  updateCardProperty,
  updateCardProperties,
} from "../../../state/features/cardSlice";

interface CardProps {
  card: IRoiCard;
  index: number;
}

const Card: React.FC<CardProps> = ({ card, index }) => {
  const [cryptoTextValue, setCryptoTextValue] = useState(card.fullName);
  const [investmentAmount, setInvestmentAmount] = useState(
    card.investment as string
  );
  const [purchasePrice, setPurchasePrice] = useState(
    card.purchasePrice as string
  );
  const [sellPrice, setSellPrice] = useState(card.sellPrice as string);
  const [saveDisabled, setSaveDisabled] = useState(true);
  const [ticker, setTicker] = useState(card.ticker.toUpperCase());
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (firstUpdate.current) {
  //     firstUpdate.current = false;
  //   }
  //   // eslint-disable-next-line
  //   updateSaveDisabled();
  //   // eslint-disable-next-line
  // }, [card]);

  const selectedCryptoChange = (key: string, value: string | number) => {
    dispatch(
      updateCardProperties([
        {
          property: "ticker",
          value: key,
          index,
        },
        {
          property: "fullName",
          value: value.toString(),
          index,
        },
      ])
    );
    setCryptoTextValue(value.toString());
    updateSaveDisabled();
    setTicker(key);
  };

  const investmentOnBlur = (value: string) => {
    if (value !== investmentAmount) {
      setInvestmentAmount(value);
      updateSaveDisabled();
      dispatch(
        updateCardProperty({
          property: "investment",
          value,
          index,
        })
      );
    }
  };
  const purchasePriceOnBlur = (value?: string) => {
    if (value && value !== purchasePrice) {
      setPurchasePrice(value);
      updateSaveDisabled();
    } else {
      updateSaveDisabled();
    }
  };
  const sellPriceOnBlur = (value?: string) => {
    if (value && value !== sellPrice) {
      setSellPrice(value);
      updateSaveDisabled();
    } else {
      updateSaveDisabled();
    }
  };

  useEffect(() => {
    if (!saveDisabled) {
      dispatch(
        updateCardProperty({
          property: "purchasePrice",
          value: purchasePrice,
          index,
        })
      );
    }
    //eslint-disable-next-line
  }, [purchasePrice]);

  useEffect(() => {
    if (!saveDisabled) {
      dispatch(
        updateCardProperty({
          property: "sellPrice",
          value: sellPrice,
          index,
        })
      );
    }
    //eslint-disable-next-line
  }, [sellPrice]);

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

  const saveHandler = () => {
    setSaveDisabled(true);
    dispatch(saveRoiCards());
  };

  const updateSaveDisabled = () => {
    if (saveDisabled) {
      setSaveDisabled(false);
    }
  };

  const onTitleChange = () => {
    if (saveDisabled) {
      setSaveDisabled(false);
    }
  };

  return (
    <BoxStyled>
      <CardHeader
        title={card.title}
        index={index}
        onTitleChange={onTitleChange}
      />
      <CardContainerStyled>
        <div>
          <CardInvestment
            investmentOnBlur={investmentOnBlur}
            investmentAmount={investmentAmount}
          />
          <CardSelectedCrypto
            selectedCryptoChange={selectedCryptoChange}
            selectedCryptosList={selectedCryptosList}
            cryptoTextValue={cryptoTextValue}
          />
          <CardSelectPrice
            purchasePriceOnBlur={purchasePriceOnBlur}
            purchasePrice={purchasePrice}
            purchasePriceWhen={card.purchasePriceWhen}
            ticker={ticker}
            index={index}
          />
          <CardSellPrice
            sellPriceOnBlur={sellPriceOnBlur}
            sellPrice={sellPrice}
            sellPriceWhen={card.sellPriceWhen}
            ticker={ticker}
            index={index}
          />
          <CardSave saveDisabled={saveDisabled} saveHandler={saveHandler} />
        </div>
        <CardCalculationsContainer>
          <CardCalculations card={card} />
        </CardCalculationsContainer>
      </CardContainerStyled>
    </BoxStyled>
  );
};

export default Card;
