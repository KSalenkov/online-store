import React, { useEffect, useState } from "react";
import "./styles.scss";

import CircularProgress from "../CircularProgress";
import IconButton from "../IconButton";

import Buffer from 'buffer';

import Button from "../Button";

import MinusIcon from "../../assets/icons/minus.svg";
import AddIcon from "../../assets/icons/add.svg";

export default ({ name, price, image, pressAdd, isAdded }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [count, setCount] = useState(1);

  const checkLoadedImage = () => {
    setImageLoaded(true)
  };

  const handleChangeCount = (type) => {
    if (type === "up") {
      setCount(count + 1)
      return
    }
    
    const newCount = count - 1;
    if (newCount < 1) return
    setCount(newCount)
  };

  return (
    <div className="goods-card-container">
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
        <h3>$ {price}</h3>
        <h4>{name}</h4>

        <div className="buttons-wrapper">
          <IconButton className="button" onClick={() => handleChangeCount("down")} disabled={isAdded}>
            <MinusIcon />
          </IconButton>

          <p>{count}</p>

          <IconButton className="button" onClick={() => handleChangeCount("up")} disabled={isAdded}>
            <AddIcon />
          </IconButton>

        </div>

        <div className="main-button-wrapper">
          <Button
            label={!isAdded ? "Add to cart" : "Added"}
            onClick={() => pressAdd(count)}
            disabled={isAdded}
          />
        </div>

      </div>

    </div>
  )
}
