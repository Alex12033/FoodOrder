import React, { useContext } from "react";

import { MealItemForm } from "./MealItemForm";

import style from "./MealItem.module.css";

import CartContex from "../../../store/cart-context";

export const MealItem = ({id, name, price, img, description}) => {
  const cartCtx = useContext(CartContex);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
      img: img
    });
  };
  return (
    <li className={style.meal}>
      {console.log(img)}
      <img className={style.food} src={img} alt="food"/>
      <div className={style.info_section}>
        <h3>{name}</h3>
        <div className={style.description}>{description}</div>
        <div className={style.price}>{price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
