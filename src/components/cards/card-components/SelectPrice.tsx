import { useState } from "react";
import { InputText } from "../../forms";

export default function SelectPrice() {
  const [investmentPrice, setInvestmentPrice] = useState("");

  const changeHandler = () => {};

  return (
    <div>
      <InputText
        size="medium"
        ariaLabel="sell price"
        updatetextvalue={changeHandler}
        options={{
          current: "Current Price",
          oneMonth: "1 month ago",
          threeMonths: "3 months ago",
        }}
      />
    </div>
  );
}
