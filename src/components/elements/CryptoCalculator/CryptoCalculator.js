import React, { useState, useEffect } from 'react';
import CryptoList from './CryptoList';

const CryptoCalculator = ({ closeable, id, closeClick }) => {

  const [costPerCoin, setCostPerCoin ] = useState(0);
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [futureCost, setFutureCost ] = useState(0);
  const [numberOfCoins, setNumberOfCoins ] = useState(0)
  const [totalReturn, setTotalReturn] = useState(0);
  const [profit, setProfit ] = useState(0);
  const [formattedReturn, setFormattedReturn] = useState();
  const [formattedProfit, setFormattedProfit] = useState();
  const [showDropdown, setDropdown] = useState();
  const [crypto, setCrypto] = useState('');

  useEffect( () => {
    let n;
    if(costPerCoin && totalInvestment) {
      let costPerCoinStr = costPerCoin.toString();
      n = parseFloat(totalInvestment.replace(/[^0-9.]/g, '')/costPerCoinStr.replace(/[^0-9.]/g , '')).toFixed(6);
      setNumberOfCoins(n)
    }
    
  }, [costPerCoin, totalInvestment])

  useEffect( () => {
    if(costPerCoin && totalInvestment && futureCost){
      const returnValue = parseFloat(numberOfCoins.replace(/[^0-9.]/, '') * futureCost.replace(/[^0-9.]/g, '')).toFixed(2);
      setTotalReturn(returnValue)
    } else if(costPerCoin && totalInvestment){
      setTotalReturn(totalInvestment.replace(/[^0-9.]/g, ''));
    } else {
      setTotalReturn(0);
    }
  }, [costPerCoin, totalInvestment, futureCost, numberOfCoins])

  useEffect( () => {
    if(futureCost && totalInvestment && totalReturn){
      const returnValue = parseFloat(totalReturn.replace(/[^0-9.]/g, '') - totalInvestment.replace(/[^0-9.]/g, '')).toFixed(2);
      setProfit(returnValue);
    } else {
      setProfit(0)
    }
  }, [totalReturn, totalInvestment, futureCost])

  useEffect( () => {
    if(totalReturn) {
      setFormattedReturn(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalReturn.replace(/[^0-9.]/, '')));
    }
    if(profit){
      let formatted =  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(profit.replace(/[^0-9.-]/, ''));
      if(profit < 0){
        setFormattedProfit(`-${formatted.replace(/-/, '')}`);
      } else {
        setFormattedProfit(`${formatted}`);
      }
    }  
  }, [totalReturn, profit]);

  useEffect( () => {

  }, [showDropdown]);

  const onClickCurrent = (price, cryptoType) => {
    setCostPerCoin(price);
    setCrypto(cryptoType)
    setDropdown(!showDropdown);
  }


  return (
    <div className="flex-row">
      <div className="card-container card-1">
      { closeable && (
                      <div className="close" onClick={ () => closeClick(id)}>
                        <div className="close-x">x</div>
                      </div>
        ) }

      <div className="flex-row div-spacing-10">
          <div className="left-label">Crypto: </div>
          <div className="input-container-with-dropdown">
            <input 
              type="text" 
              placeholder="Choose cryptocurrency"
              onChange={ e => setCrypto(e.target.value)}
              value={crypto}
            />
            <div className="arrow-container" onClick={ () => setDropdown(!showDropdown)}>
              <span>&#9662;</span>
            </div>
            { showDropdown && <CryptoList click={ onClickCurrent }/> }
          </div>
        </div>
        
        <div className="flex-row div-spacing-10">
          <div className="left-label">Current price: </div>
          <div className="input-container">
            <input 
              type="text" 
              placeholder="cost per coin" 
              onChange={ e => setCostPerCoin(e.target.value)}  
              value={ costPerCoin }
            />
            
          </div>
        </div>

        <div className="flex-row div-spacing-10">
          <div className="left-label">Total Investment: </div>
          <div className="input-container">
            <input 
              type="text" 
              placeholder="ie 25000"
              onChange={ e => setTotalInvestment(e.target.value)}
            />
          </div>
        </div>

        <div className="flex-row div-spacing-10">
          <div className="left-label">Expected future price/coin: </div>
          <div className="input-container">
            <input 
              type="text" 
              placeholder="ie 10000" 
              onChange={ e => setFutureCost(e.target.value)}
            />
          </div>
        </div>

      </div>
      <div className="card-container card-2">
        <div>
          <span  className="title-medium-label">ROI:&nbsp;</span>
          <span className="title-medium-value">{crypto}</span>
        </div>  
        <div>Number of coins: <span className="span-100 result-1">{ numberOfCoins }</span></div>
        <div>Total Return: <span className="span-100 result-1">{ totalReturn && `${formattedReturn}`}</span></div>
        <div>Profit: <span className="span-100 result-2">{ profit && `${formattedProfit}`}</span></div>
      </div>
    </div>
    )
}

export default CryptoCalculator;