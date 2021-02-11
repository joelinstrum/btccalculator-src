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
            <button onClick={ () => {
              setChildCalculators(childCalculators => [...childCalculators, {id:childCalculators.length }])
            }}>Compare +</button>
          </div>)
}

export default Home;