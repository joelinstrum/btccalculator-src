import React, { useState, useEffect } from "react";
import { CryptoCalculator, Ticker } from "../../components/elements";

const initialCalculatorList = [];

const Home = () => {
  const [childCalculators, setChildCalculators] = useState(
    initialCalculatorList
  );

  const [investment, setInvestment] = useState(0);

  useEffect(() => {
    document.title = "Crypto Calculator ROI";
  });

  const closeClick = (id) => {
    const filtered = childCalculators.filter((item) => item.id !== id);
    setChildCalculators(filtered);
  };

  const updateInvestmentHandler = (investment) => {
    setInvestment(investment);
  };

  return (
    <div>
      <div className="flex-row marginTop30">
        <div className="title-large">Crypto ROI Calculator</div>
        <div className="heading-container heading">bitcoinprojection.com</div>
      </div>

      <Ticker />
      <CryptoCalculator updateInvestment={updateInvestmentHandler} />
      {childCalculators.map((item, n) => (
        <CryptoCalculator
          key={n}
          closeable={true}
          id={n}
          closeClick={closeClick}
          investment={investment}
        />
      ))}
      <div className="button-container">
        <button
          onClick={() => {
            setChildCalculators((childCalculators) => [
              ...childCalculators,
              { id: childCalculators.length },
            ]);
          }}
        >
          Compare +
        </button>
      </div>
      <div className="blurb">
        
        <br />
        <a href="https://twitter.com/JoeL42737181" className="link-light">
          Find me on Twitter 
        </a>
        <br />
      </div>
    </div>
  );
};

export default Home;
