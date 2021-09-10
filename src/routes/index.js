import React, {  useEffect } from "react";
import {
  Route,
  Switch,
} from "react-router-dom";

import Main from "../pages/Main";
import Cart from "../pages/Cart";

import { useDispatch } from "react-redux";

export const routes = {
  main: "/",
  cart: "/cart",
};

export default () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch.main.init();
  }, [])
  
  return (
    <Switch>
      <Route exact path={routes.main} component={Main} />
      <Route exact path={routes.cart} component={Cart}/>
    </Switch>
  )
};
