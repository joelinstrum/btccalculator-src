import { Home } from "./containers/home";
import "./css/general.scss";
import { AppContextProvider } from "./components/elements/AppContext";

function App() {
  return (
    <AppContextProvider>
      <div className="body-centered">
        <Home />
      </div>
    </AppContextProvider>
  );
}

export default App;
