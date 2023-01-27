import {
  CardsContainer,
  ContainerOuter,
  ContainerInner,
  CryptoPriceRow,
  Header,
} from "../../components";

const Home = () => (
  <ContainerOuter>
    <ContainerInner>
      <Header />
      <CryptoPriceRow />
      <CardsContainer />
    </ContainerInner>
  </ContainerOuter>
);

export default Home;
