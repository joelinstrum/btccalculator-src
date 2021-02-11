import React, {useEffect, useState } from 'react';

const CryptoList = ({click}) => {

  const [eth, setETH] = useState('...');
  const [btc, setBTC] = useState('...');
  const [bch, setBCH] = useState('...');
  const [ltc, setLTC] = useState('...');
  const [bnb, setBNB] = useState('...');

  useEffect( () => {
    const endpoint = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BTC,BCH,LTC,BNB&tsyms=USD&extraParams=CryptoCalculator`;
    const headers = {
      "Content-Type": "application-json"
    }
    fetch(endpoint, headers)
      .then( response => response.json())
      .then( data => {
        setETH(data.ETH.USD);
        setBTC(data.BTC.USD);
        setBCH(data.BCH.USD);
        setLTC(data.LTC.USD);
        setBNB(data.BNB.USD);
      })
  }, []);

  return (<div className="dropdown-list">
            <ul>
              <li onClick={() => click(btc, 'Bitcoin')}>Bitcoin: { btc }</li>
              <li onClick={() => click(eth, 'Ethereum')}>Ethereum: { eth }</li>
              <li onClick={() => click(bch, 'Bitcoin Cash')}>Bitcoin cash: { bch }</li>
              <li onClick={() => click(ltc, 'Litecoin')}>Litecoin: { ltc }</li>
              <li onClick={() => click(bnb), 'Binance'}>Binance: {bnb}</li>
            </ul>
          </div>)
}

export default CryptoList;