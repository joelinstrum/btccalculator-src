import { FormRow, InputText } from "../../forms";

interface CardSelectedCryptoProps {
  selectedCryptosList: { [key: string]: string };
  selectedCryptoChange: (key: string, value: string | number) => void;
  cryptoTextValue?: string;
}

const CardSelectedCrypto: React.FC<CardSelectedCryptoProps> = ({
  selectedCryptoChange,
  selectedCryptosList,
  cryptoTextValue,
}) => (
  <FormRow label="Crypto" align="right">
    <InputText
      size="medium"
      ariaLabel="crypto"
      options={selectedCryptosList}
      optionsChangeHandler={selectedCryptoChange}
      value={cryptoTextValue}
      align="right"
    />
  </FormRow>
);

export default CardSelectedCrypto;
