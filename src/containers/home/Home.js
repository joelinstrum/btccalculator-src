import React from "react";
import { Header, Ticker, Calculators, Share } from "../../components/elements";

const Home = () => {
  return (<div className="body-centered">
            <Header />
            <Ticker />
            <Calculators />
            <Share />
          </div>)
};

export default Home;
