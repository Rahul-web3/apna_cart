import React, { useState } from "react";
import "./App.css";
import AddItem from "./components/AddItem";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App() {
  const products = [
    {
      name: "Iphone 13 pro max",
      price: 139900,
      quantity: 0,
    },
    {
      name: "Macbook pro 13.3 inch",
      price: 132990,
      quantity: 0,
    },
    {
      name: "Avenger 220 curus bike cover",
      price: 349,
      quantity: 0,
    },
    {
      name: "Samsung Galaxy S22 ultra",
      price: 121990,
      quantity: 0,
    },
  ];

  const [productList, setproductList] = useState(products);
  const [totalAmount, setTotalAmount] = useState(0);

  const incrementBtn = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount += productList[index].price;
    newProductList[index].quantity++;
    setTotalAmount(newTotalAmount);
    setproductList(newProductList);
  };

  const decrementBtn = (index) => {
    if (productList[index].quantity === 0) {
      return;
    }
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= productList[index].price;
    newProductList[index].quantity--;
    setTotalAmount(newTotalAmount);
    setproductList(newProductList);
  };

  const resetBtn = () => {
    let newProductList = [...productList];
    newProductList.map((item) => {
      return (item.quantity = 0);
    });
    setproductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setTotalAmount(newTotalAmount);
    setproductList(newProductList);
  };

  const addItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      name: name,
      price: price,
      quantity: 0,
    });
    setproductList(newProductList);
  };

  return (
    <>
      <Navbar items={productList.length} />
      <main className="container mt-5">
        <AddItem addItem={addItem} />
        <ProductList
          products={productList}
          incrementBtn={incrementBtn}
          decrementBtn={decrementBtn}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetBtn={resetBtn} />
    </>
  );
}

export default App;
