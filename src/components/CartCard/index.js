import React, { useState, useEffect } from "react";
import "./styles.scss";
import CircularProgress from "../CircularProgress";

import IconButton from "../IconButton";
import Button from "../Button";
import MinusIcon from "../../assets/icons/minus.svg";
import AddIcon from "../../assets/icons/add.svg";

import { useDispatch } from "react-redux";

export default ({
  name,
  count,
  price,
  image,
  id
}) => {
  const dispatch = useDispatch();
  
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentCount, setCurrentCount] = useState(count);
  
  const checkLoadedImage = () => setImageLoaded(true);
  
  const handleChangeCount = (type) => {
    if (type === "up") {
      setCurrentCount(currentCount + 1);
      return
    }
    const newCount = currentCount - 1;
    if (newCount < 1) return;
    setCurrentCount(newCount)
  }
  
  useEffect(() => {
    dispatch.main.changeCountGoods({
      id,
      count: currentCount
    })
  }, [currentCount])
  
  const handleDelete = () => {
    dispatch.main.deleteGoods({ id })
  }
  
  return (
    <div className="cart-card-container">
      <div className="image-container">
        <div className="square">
          <div className="box" style={{backgroundColor: !imageLoaded ? "#c6c6c6" : "transparent"}}>
            {!imageLoaded && <CircularProgress className="progress" />}
            <img
              src={`https://murmuring-tor-81614.herokuapp.com${image}`}
              onLoad={checkLoadedImage}
              alt={name}
              style={{visibility: imageLoaded ? "visible" : "hidden"}}
            />
          </div>
        </div>
      </div>
      
      <div className="content">
        <div className="left">
          <h2>{name}</h2>
  
          <div className="row">
            <h4>Price</h4>
            <h4>$ {price}</h4>
          </div>
  
          <div className="row">
            <h4>Count</h4>
            <h4>{currentCount}</h4>
          </div>
  
          <div className="row">
            <h3>Total</h3>
            <h3>$ {(price * currentCount).toFixed(2)}</h3>
          </div>
        </div>
        
        <div className="right">
          <div className="row button-wrapper">
            <IconButton className="button" onClick={() =>handleChangeCount("down")}>
              <MinusIcon />
            </IconButton>
            
            <IconButton className="button" onClick={() =>handleChangeCount("up")}>
              <AddIcon />
            </IconButton>
          </div>
          
          <Button label="Delete" color="error" onClick={handleDelete} />
        </div>
        
      </div>
      
    </div>
  )
}
