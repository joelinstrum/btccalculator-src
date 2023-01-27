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
  const [propPrice, setPropPrice] = useState(cryptoObject?.currentPrice);
  const [price, setPrice] = useState<string | number | null>();
  useEffect(() => {
    console.log("Setting the new price: ", propPrice);
    setPrice(propPrice);
  }, [propPrice, setPrice]);

  useEffect(() => {
    console.log("Item initialized");
  }, []);
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
