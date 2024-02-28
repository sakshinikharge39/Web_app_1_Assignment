import React, { useState } from 'react';
import './Addsales.css';

function Addsales() {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic here
    console.log("Product Name:", productName);
    console.log("Quantity:", quantity);
    console.log("Amount:", amount);
    // Reset the form fields
    setProductName('');
    setQuantity('');
    setAmount('');
  };

  return (
    <div className='form-container'>
      <h2 className='heading'>ADD SALE ENTRY</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='productName'>Product Name</label>
          <input
            type='text'
            className='form-control'
            id='productName'
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='quantity'>Quantity</label>
          <input
            type='number'
            className='form-control'
            id='quantity'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='amount'>Amount</label>
          <input
            type='number'
            className='form-control'
            id='amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
}

export default Addsales;

