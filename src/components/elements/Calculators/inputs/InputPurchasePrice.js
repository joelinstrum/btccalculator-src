import React, { useContext, useEffect } from "react";
import { CalculatorContext } from "../Calculator";
import { AppContext } from "../../AppContext";
import ls from "local-storage";

const InputCrypto = ({ value }) => {
  const { purchasedPrice, 
          setPurchasedPrice, 
          useCurrentPrice, 
          setUseCurrentPrice, 
          purchasedSymbol 
        } = useContext(CalculatorContext);
  const { currentTicker } = useContext(AppContext);

  useEffect( () => {
    if(useCurrentPrice){
      setPurchasedPrice(currentTicker[purchasedSymbol])
    }
  }, [currentTicker, setPurchasedPrice, purchasedSymbol, useCurrentPrice])

  const updatePurchasedPrice = price => {
    ls.set("purchasedPrice", price);
    setPurchasedPrice(price)
  }

  return (
    <React.Fragment>
        <div className="form-row" style={{marginBottom:"5px"}}>
          <div style={{marginTop:"-5px"}}>
            <div className="form-label">
              <div>Purchase price: </div>
              <div className="form-label-sub" >
                <span>update with current price</span>
                <input type="checkbox" onClick={() => setUseCurrentPrice(!useCurrentPrice)} />
              </div>
            </div>
          </div>
          <div>
            <div className="form-value input-container-with-dropdown flex-row-all">
              <input
                placeholder="$500"
                onChange={e => updatePurchasedPrice(e.target.value)}
                value={purchasedPrice || ""}
              />
            </div>
          </div>
        </div>
    </React.Fragment>
  )

}

export default InputCrypto;