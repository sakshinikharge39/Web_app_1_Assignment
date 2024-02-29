import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const ObjContext = createContext();

const ObjProvider = ({ children }) => {
  const [obj, setObj] = useState([
    {
      id: uuidv4(),
      productName: "Product 1",
      quantity: 10,
      amount: 5.99,
    },
    {
      id: uuidv4(),
      productName: "Product 2",
      quantity: 15,
      amount: 7.99,
    },
    {
      id: uuidv4(),
      productName: "Product 3",
      quantity: 20,
      amount: 12.99,
    },
    {
      id: uuidv4(),
      productName: "Product 4",
      quantity: 8,
      amount: 3.99,
    },
    {
      id: uuidv4(),
      productName: "Product 5",
      quantity: 12,
      amount: 8.99,
    },
    {
      id: uuidv4(),
      productName: "Product 6",
      quantity: 5,
      amount: 2.99,
    },
    {
      id: uuidv4(),
      productName: "Product 7",
      quantity: 18,
      amount: 10.99,
    },
    {
      id: uuidv4(),
      productName: "Product 8",
      quantity: 25,
      amount: 15.99,
    },
    {
      id: uuidv4(),
      productName: "Product 9",
      quantity: 30,
      amount: 20.99,
    },
    {
      id: uuidv4(),
      productName: "Product 10",
      quantity: 22,
      amount: 18.99,
    },
  ]);

  const getTop5Sales = () =>
    obj
      .sort((a, b) => {
        if (a.amount > b.amount) return -1;
        if (a.amount < b.amount) return 1;
        return 0;
      })
      .slice(0, 5);
  return (
    <ObjContext.Provider value={{ obj, setObj, getTop5Sales }}>
      {children}
    </ObjContext.Provider>
  );
};

export { ObjContext, ObjProvider };
