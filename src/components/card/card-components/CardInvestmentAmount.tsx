import { useState } from "react";
import { FormRow, InputText } from "components/forms";
import { useInvestmentUpdate } from "../card-hooks";

interface CardInvestmentProps {
  investmentOnBlur?: (value: string) => void;
  investmentAmount?: string | number | null | undefined;
  index: number;
}

const CardInvestment: React.FC<CardInvestmentProps> = ({
  investmentOnBlur,
  investmentAmount,
  index,
}) => {
  const [stateInvestmentAmount, setStateInvestmentAmount] = useState(
    investmentAmount as string
  );
  const onChange = (value: string) => {
    setStateInvestmentAmount(value);
  };

  const update = useInvestmentUpdate(index);

  const onBlur = () => {
    update(stateInvestmentAmount as string);
    if (investmentOnBlur) {
      investmentOnBlur(stateInvestmentAmount);
    }
  };

  return (
    <FormRow label="Investment Amount" align="right">
      <InputText
        size="medium"
        ariaLabel="investment amount"
        onChange={onChange}
        placeHolder="# of coins or $"
        align="right"
        onBlur={onBlur}
        value={stateInvestmentAmount}
      />
    </FormRow>
  );
};

export default CardInvestment;
