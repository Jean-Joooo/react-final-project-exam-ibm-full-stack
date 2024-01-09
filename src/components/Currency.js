import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const [currency, setCurrency] = useState('');
  const { dispatch } = useContext(AppContext);

  const handleChange = (event) => {
    const selectedCurrency = event.target.value;
    setCurrency(selectedCurrency);
    changeCurrency(selectedCurrency); // Pass the updated value directly
  };

  const changeCurrency = (selectedCurrency) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: selectedCurrency,
    });
  };

  useEffect(() => {
    console.log(currency);
  }, [currency]);

  return (
    <div className="alert alert-secondary">
      <select style={{backgroundColor: "#4CAF50", color: "white", borderRadius: "10px"}} id="inputGroupSelect02" onChange={handleChange}>
        <option defaultValue>Currency</option>
        <option value="$" name="dollar">$ Dollar</option>
        <option value="£" name="pound">£ Pound</option>
        <option value="€" name="euro">€ Euro</option>
        <option value="₹" name="ruppee">₹ Ruppee</option>
      </select>
    </div>
  );
};

export default Budget;
