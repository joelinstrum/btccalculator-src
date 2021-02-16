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
        I needed a quick way to determine future crypto profit projections with
        my investment. For example, if I invested $25,000 in Ethereum at a
        current price of $1700, what would my return look like if the future
        price per coin rose to $1800? What if it rose to $3000? <br />
        How would that compare to an investment in Bitcoin? <br />
        Use the bitcoin / crypto future calculator above. <br />
        <br />
        Also, I'm open to suggestions!
        <br />
        <a href="https://twitter.com/JoeL42737181" className="link-light">
          Find me on Twitter :-)
        </a>
        <br />
      </div>
    </div>
  );
};

export default Home;
