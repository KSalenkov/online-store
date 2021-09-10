import React from "react";
import "./styles.scss";

import Card from "../../components/CartCard";
import Button from "../../components/Button";

import { useSelector, useDispatch } from "react-redux";

export default () => {
  const dispatch = useDispatch();
  const { selectedGoods } = useSelector(({ main }) => main);
  
  const getTotalSum = () => {
    return selectedGoods.reduce((acc, item) => acc + (item.count * item.price), 0).toFixed(2);
  }
  
  const handleClear = () => {
    dispatch.main.clearSelectedGoods();
    localStorage.removeItem("cart");
  }
  
  if (!selectedGoods.length) {
    return (
      <>
        <h1>Cart is empty</h1>
        <p className="selected-text">Select the products to add</p>
      </>
    )
  }
  
  return  (
    <>
      <div className="header-cart">
        <div>
          <h1>Cart</h1>
          <h3>Total: $ {getTotalSum()}</h3>
        </div>
        
        <div className="button-wrapper">
          <Button label="Clear" className="button" color="error" onClick={handleClear} />
          <Button label="Pay" className="button" />
        </div>
      </div>
      
      <div className="container">
        {selectedGoods.map(el => (
          <Card key={el.id} {...el} />
        ))}
        
      </div>
    </>
  )
}
