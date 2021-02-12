import React, { useState, useEffect } from 'react';
import { CryptoCalculator } from '../../components/elements/CryptoCalculator';

const initialCalculatorList = [];

const Home = () => {
  const [childCalculators, setChildCalculators] = useState(initialCalculatorList);

  useEffect( () => {
    document.title = "Crypto Calculator ROI"
  });

  const closeClick = (id) => {
    const filtered = childCalculators.filter( item => item.id !== id);
    setChildCalculators(filtered)
  }

  return (<div>
            <div className="title-large">Crypto ROI Calculator</div>
            
            <CryptoCalculator />
            {
              childCalculators.map((item, n) => <CryptoCalculator 
                                                  key={n} 
                                                  closeable={true} 
                                                  id={n} 
                                                  closeClick={closeClick} 
                                                />)
            }
            <div class="button-container">
            <button onClick={ () => {
              setChildCalculators(childCalculators => [...childCalculators, {id:childCalculators.length }])
            }}>Compare +</button>
            </div>
            <div className="blurb">
              I needed a quick way to determine future crypto profit projections with my investment. For example,
              if I invested $25,000 in Ethereum at a current price of $1700, what would my return look like
              if the future price per coin rose to $1800? What if it rose to $3000? <br />
              How would that compare to an investment in Bitcoin? <br />
              Use the bitcoin / crypto future calculator above. <br /><br />
              Also, I'm open to suggestions!<br />
              <a href="https://twitter.com/JoeL42737181" className="link-light">Find me on Twitter :-)</a><br />
            </div>
          </div>)
}

export default Home;