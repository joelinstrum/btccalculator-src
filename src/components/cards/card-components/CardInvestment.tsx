import { useState } from "react";
import { FormRow, InputText } from "../../forms";

interface CardInvestmentProps {
  investmentOnBlur?: (value: string) => void;
  investmentAmount?: string;
}

const CardInvestment: React.FC<CardInvestmentProps> = ({
  investmentOnBlur,
  investmentAmount,
}) => {
  const [stateInvestmentAmount, setStateInvestmentAmount] =
    useState(investmentAmount);
  const onChange = (value: string) => {
    setStateInvestmentAmount(value);
  };

  return (
    <FormRow label="Investment Amount" align="right">
      <InputText
        size="medium"
        ariaLabel="investment amount"
        onChange={onChange}
        placeHolder="# of coins or $"
        align="right"
        onBlur={() =>
          investmentOnBlur
            ? investmentOnBlur(stateInvestmentAmount || "")
            : null
        }
        value={investmentAmount}
      />
    </FormRow>
  );
};

export default CardInvestment;
