import React from "react";
import { styled } from "@mui/system";

type size = "icon" | "small" | "medium" | "large";

interface CryptoImageProps {
  crypto: ICrypto;
  size: size;
}

const CryptoImageStyled = styled("span", {
  shouldForwardProp: (prop) => prop !== "size",
})<{ size: String }>(({ theme, size }) => ({
  position: "relative",
  minWidth: `${size}`,
  minHeight: `${size}`,
  display: "inline-flex",

  "& img": {
    maxHeight: size,
    position: "absolute",
    top: "2px",
    left: 0,
  },
}));

const CryptoImage: React.FC<CryptoImageProps> = ({ crypto, size }) => {
  let width;
  switch (size) {
    case "icon":
      width = "16px";
      break;

    default:
      width = "32px";
      break;
  }
  return (
    <CryptoImageStyled size={width}>
      <img
        src={`${
          process.env.PUBLIC_URL
        }/images/crypto-icons/${crypto?.ticker.toLowerCase()}.png`}
        alt={crypto?.fullName || "ticker image"}
        className="crypto__image"
      />
    </CryptoImageStyled>
  );
};

export default CryptoImage;
