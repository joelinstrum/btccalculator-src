import { BrowserRouter, Route, Routes } from "react-router-dom";

import ROUTES from "../../utils/routes";
import Home from "../home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
