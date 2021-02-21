import React, {useContext, useState, useEffect} from "react";
import { CalculatorContext } from "../Calculator";
import { AppContext } from "../../AppContext";
import ls from "local-storage";

const InputSellPrice = () => {
  const { currentTicker } = useContext(AppContext);
  const { sellPrice, setSellPrice, purchasedSymbol, isCopy } = useContext(CalculatorContext);
  const [ useCurrent, setUseCurrent ] = useState();

  useEffect( () => {
    if(useCurrent && currentTicker ) { 
      console.log(currentTicker[purchasedSymbol]);
      setSellPrice(currentTicker[purchasedSymbol])
    }
  }, [useCurrent, purchasedSymbol, setSellPrice, currentTicker]);

  useEffect(() => {
    if(!isCopy && ls.get("useCurrent")) {
      setUseCurrent(true)
    }
  },[isCopy]);

  useEffect(() => {
    if(!isCopy) {
      if(useCurrent) {
        ls.set("useCurrent", true);
      } else {
        ls.set("useCurrent", false);
      }
    }
  }, [useCurrent, isCopy]);

  return (
    <React.Fragment>
        <div className="form-row">
          <div>
            <div className="form-label">
              <div>Sell price: </div>
              <div className="form-label-sub">
                <span>update with current price</span>
                <input 
                  type="checkbox" 
                  checked={useCurrent || false}
                  onChange={ () => setUseCurrent(!useCurrent)}/>
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