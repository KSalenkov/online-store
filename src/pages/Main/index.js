import React, { useCallback } from "react";
import "./styles.scss";

import { useDispatch, useSelector } from "react-redux";

import GoodsCard from "../../components/GoodsCard";

export default () => {
  const dispatch = useDispatch();

  const { goods, selectedGoods } = useSelector(({ main }) => main);
  
  const isAdded = useCallback(
    (id) => selectedGoods.find(el => el.id === id),
    [selectedGoods]
  )
  
  const handleAdd = useCallback(
    (goodsElement) => (count) => {
      dispatch.main.addGoods({
        id: `${goodsElement.name}-${goodsElement.image}`,
        ...goodsElement,
        count
      })
    },
    []
  )

  return (
    <>
      <h1>Goods list</h1>

      <div className="container">
        {goods.map(el => {
          const id = `${el.name}-${el.image}`;
          return (
            <GoodsCard
              key={id}
              {...el}
              pressAdd={handleAdd(el)}
              isAdded={isAdded(id)}
            />
          )
        })}
      </div>
    </>

  )
}
