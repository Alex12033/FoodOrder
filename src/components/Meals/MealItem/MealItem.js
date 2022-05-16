import React, { useContext } from "react";

import { MealItemForm } from "./MealItemForm";

import style from "./MealItem.module.css";

import CartContex from "../../../store/cart-context";

export const MealItem = (props) => {
  const cartCtx = useContext(CartContex);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={style.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={style.description}>{props.description}</div>
        <div className={style.price}>{props.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
