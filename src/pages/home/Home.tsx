import { createContext } from "react";
import {
  CardsContainer,
  ContainerOuter,
  ContainerInner,
  CryptoPriceRow,
  Header,
} from "../../components";

export const CardContext = createContext(null);

const Home = () => (
  <CardContext.Provider value={null}>
    <ContainerOuter>
      <ContainerInner>
        <Header />
        <CryptoPriceRow />
        <CardsContainer />
      </ContainerInner>
    </ContainerOuter>
  </CardContext.Provider>
);

export default Home;
