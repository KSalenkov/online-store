import React from "react";
import "./styles.scss";

import { useHistory } from "react-router-dom";

import CartIcon from "../../assets/icons/shopping-cart.svg"
import IconButton from "../IconButton";

import { useSelector } from "react-redux";

import { routes } from "../../routes";

export default () => {
  const { push } = useHistory();
  
  const { selectedGoods } = useSelector(({ main }) => main)
 
  const goToCart = () => push(routes.cart);
  
  const goHome = () => push(routes.main);

  return (
    <div className="header">
      <h2 onClick={goHome}>Online store</h2>

      <IconButton onClick={goToCart} badge={selectedGoods.length || null}>
        <CartIcon className="icon-cart" />
      </IconButton>
    </div>
  )
}
