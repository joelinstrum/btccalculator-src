import { useMemo, useState } from "react";
import { cryptoFromDateOptions } from "utils/utilities";
import { cryptos } from "models";

const useFromDateOptions = (ticker: string) => {
  const [fromDateOptions, setFromDateOptions] = useState<{
    [key: string]: string;
    //eslint-disable-next-line
  }>({ ["0"]: "Current" });

  useMemo(() => {
    setFromDateOptions(
      cryptoFromDateOptions(
        cryptos[ticker ?? "BTC"]?.startYear || new Date().getFullYear()
      )
    );
  }, [ticker]);

  return fromDateOptions;
};

export default useFromDateOptions;
