import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { KeyValuePair } from "components/forms/interfaces";
import ROUTES from "../../utils/routes";
import Home from "../home";
import AppContext from "./AppContext";

const App = () => {
  const [tickers, setTickers] = useState<KeyValuePair<ICrypto> | undefined>(
    undefined
  );

  return (
    <AppContext.Provider value={{ tickers, setTickers }}>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
