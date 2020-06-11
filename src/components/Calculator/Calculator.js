import React, { useState, useEffect } from 'react';
import { round } from 'lodash';

const Calculator = () => {
  const [amount, setAmount] = useState(0);
  const [grounds, setGrounds] = useState(0);

  useEffect(() => {
    let weight;
    weight = round(amount / 16.67, 1);
    setGrounds(weight);
  }, [amount]);

  return (
    <>
      <p>250mL is a good amount of coffee for one person</p>
      <form>
        <label>How much coffee (in mL)</label>
        <input onChange={(e) => setAmount(e.target.value)}></input>
      </form>
      <p>
        {amount}mL of coffee uses {grounds}g of grounds
      </p>
    </>
  );
};

export default Calculator;
