import React, { useState, useEffect } from "react";
import "./Addsales.css";
import Navbar from "../Navbar/Navbar";
import useSalesStore  from "../../zustand/salesStore";
import useStore from "../../zustand/salesStore";

function Addsales() {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [amount, setAmount] = useState("");
  // const bears = useStore((state) => state.bears)

  // const {sales,addSales} = useSalesStore();
//   const top5Sales = () => sales.sort((a,b) => {
//     if(a.amount > b.amount){
//         return -1
//     }else if(a.amount < b.amount){
//         return 1
//     }
//     return b;
// })

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      productName,
      quantity,
      amount
    }

    // addSales(sales)
    // Perform submission logic here
    console.log("Product Name:", productName);
    console.log("Quantity:", quantity);
    console.log("Amount:", amount);
    // Reset the form fields
    setProductName("");
    setQuantity("");
    setAmount("");
  };

  // useEffect(()=>{
  //   console.log("Top 5 Sales",top5Sales());
  // },[sales])

  return (
    <div>
      <Navbar />
      <div className="form-container">
        <h2 className="heading">ADD SALE ENTRY</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              className="form-control"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Addsales;
