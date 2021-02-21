import { Home, LookAndFeel } from "./containers";
import "./css/style.scss";
import { AppContextProvider } from "./components/elements/AppContext";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
       <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/home" component={Home}  />
          <Route path="/lookandfeel" component={LookAndFeel} />
        </Switch>
        </main>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
