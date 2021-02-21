import React, {useContext, useState, useEffect} from "react";
import { CalculatorContext } from "../Calculator";
import { AppContext } from "../../AppContext";

const InputSellPrice = () => {
  const { currentTicker } = useContext(AppContext);
  const { sellPrice, setSellPrice, purchasedSymbol } = useContext(CalculatorContext);
  const [ useCurrent, setUseCurrent ] = useState();

  useEffect( () => {
    if(useCurrent && currentTicker ) { 
      console.log(currentTicker[purchasedSymbol]);
      setSellPrice(currentTicker[purchasedSymbol])
    }
  }, [useCurrent, purchasedSymbol, setSellPrice, currentTicker]);

  return (
    <React.Fragment>
        <div className="form-row">
          <div>
            <div className="form-label">
              <div>Sell price: </div>
              <div className="form-label-sub">
                <span>update with current price</span>
                <input type="checkbox" onClick={ () => setUseCurrent(!useCurrent)}/>
              </div>
            </div>
          </div>
          <div>
            <div className="form-value input-container-with-dropdown flex-row-all">
              <input
                placeholder="$500"
                onChange={e => setSellPrice(e.target.value)}
                value={sellPrice || ""}
              />
            </div>
          </div>
        </div>
    </React.Fragment>
  )
}

export default InputSellPrice;