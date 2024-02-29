// used context api for calculating top5sales and total revenue
import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const ObjContext = createContext();

const ObjProvider = ({ children }) => {
  const [obj, setObj] = useState([
    {
      id: uuidv4(),
      productName: "Product 1",
      quantity: 10,
      amount: 499,
    },
    {
      id: uuidv4(),
      productName: "Product 2",
      quantity: 15,
      amount: 799,
    },
    {
      id: uuidv4(),
      productName: "Product 3",
      quantity: 20,
      amount: 1299,
    },
    {
      id: uuidv4(),
      productName: "Product 4",
      quantity: 8,
      amount: 1399,
    },
    {
      id: uuidv4(),
      productName: "Product 5",
      quantity: 12,
      amount: 1899,
    },
    {
      id: uuidv4(),
      productName: "Product 6",
      quantity: 5,
      amount: 1299,
    },
    {
      id: uuidv4(),
      productName: "Product 7",
      quantity: 18,
      amount: 1499,
    },
    {
      id: uuidv4(),
      productName: "Product 8",
      quantity: 25,
      amount: 1599,
    },
    {
      id: uuidv4(),
      productName: "Product 9",
      quantity: 30,
      amount: 2099,
    },
    {
      id: uuidv4(),
      productName: "Product 10",
      quantity: 22,
      amount: 1899,
    },
  ]);


// to calculate top 5 sales
  const getTop5Sales = () =>
    obj
      .sort((a, b) => {
        if (a.amount > b.amount) return -1;
        if (a.amount < b.amount) return 1;
        return 0;
      })
      .slice(0, 5);
// to calculate todays total revenue
  const calculateTotalRevenue = () =>
    obj
      .reduce((total, product) => total + product.quantity * product.amount, 0)
      .toFixed(2);


  return (
    <ObjContext.Provider
      value={{ obj, setObj, getTop5Sales, calculateTotalRevenue }}
    >
      {children}
    </ObjContext.Provider>
  );
};

export { ObjContext, ObjProvider };
