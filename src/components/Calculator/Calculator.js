import React, { useState, useEffect } from 'react';
import { round } from 'lodash';

const Calculator = ({ setRatio }) => {
  const [water, setWater] = useState(0);
  const [grounds, setGrounds] = useState(0);

  useEffect(() => {
    let weight;
    weight = round(water / 16.67, 1);
    setGrounds(weight);
    setRatio({ water, grounds });
  }, [water, grounds]);

  return (
    <>
      <form>
        <label>How much coffee (in mL) Are you making</label>
        <input onChange={(e) => setWater(parseInt(e.target.value))}></input>
        <button
          onClick={(e) => {
            e.preventDefault();
          }}></button>
      </form>
      <p>
        {water}mL of coffee uses {grounds}g of grounds
      </p>
    </>
  );
};

export default Calculator;
