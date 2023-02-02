import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { CryptoImage } from "../";
import { formatPrice } from "../../utils/utilities";

interface CryptoDisplayPriceProps {
  cryptoObject: ICrypto;
}

const CryptoDisplayPrice: React.FC<CryptoDisplayPriceProps> = ({
  cryptoObject,
}) => {
  const [propPrice] = useState(cryptoObject?.currentPrice);
  const [, setPrice] = useState<string | number | null>();
  useEffect(() => {
    setPrice(propPrice);
  }, [propPrice, setPrice]);

  return (
    <div key={cryptoObject?.ticker}>
      <Typography>
        <span>{cryptoObject.ticker}</span>
        <span>
          {" "}
          <CryptoImage crypto={cryptoObject} size="icon" />
        </span>
        <span>{formatPrice(cryptoObject?.currentPrice || "...")}</span>
      </Typography>
    </div>
  );
};

export default CryptoDisplayPrice;
