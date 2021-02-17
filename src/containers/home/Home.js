import React, { useState, useEffect } from "react";
import { CryptoCalculator, Ticker } from "../../components/elements";
import { TwitterShareButton, TwitterIcon, } from "react-share";

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
      <div className="flex-row marginTop30 marginBottom30">
        <div className="title-large heading-left">Crypto ROI Calculator</div>
        <div className="heading-container heading-right">bitcoinprojection.com</div>
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
        <TwitterShareButton 
          title="Crypto ROI calculator"
          via="JoeL42737181"
          hashtags={["Cryptocurrency", "Bitcoin", "Ethereum"]}
          url="https://bitcoinprojection.com"
        ><TwitterIcon size={32} round={true} /></TwitterShareButton>
        <br />
      </div>
    </div>
  );
};

export default Home;
