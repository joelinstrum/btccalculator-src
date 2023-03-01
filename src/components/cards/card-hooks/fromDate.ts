import { useState, useMemo } from "react";
import { cryptos } from "models";
import { cryptoFromDateOptions } from "utils/date";
import { KeyValuePair } from "components/forms/interfaces";

const useFromDateOptions = (ticker: string): KeyValuePair<string> => {
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
