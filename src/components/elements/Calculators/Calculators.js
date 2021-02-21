import {useState} from "react";
import Calculator from "./Calculator";

const initialCalculatorList = [];

const Calculators = () => {

  const [childCalculators, setChildCalculators] = useState(
    initialCalculatorList
  );

  const closeClick = (id) => {
    const filtered = childCalculators.filter((item) => item.id !== id);
    setChildCalculators(filtered);
  };

  const clickHandler = () => {
    setChildCalculators((childCalculators) => [
      ...childCalculators,
      { id: childCalculators.length },
    ]);
  }

  return (
    <div className="body-centered">
      <Calculator isCopy={false} />
      {childCalculators.map((item, n) => (
        <Calculator
          key={n}
          isCopy={true}
          id={n}
          closeClick={closeClick}
        />
      ))}
      <button className="calc-button" onClick={clickHandler}>+ Add ROI Calculator</button>
    </div>
  )
}

export default Calculators;