import { createContext } from "react";
import { KeyValuePair } from "components/forms/interfaces";

export interface IContext {
  tickers: KeyValuePair<ICrypto> | undefined;
  setTickers: (tickersObject: KeyValuePair<ICrypto>) => void;
}

const AppContext = createContext<IContext | null>(null);

export default AppContext;
