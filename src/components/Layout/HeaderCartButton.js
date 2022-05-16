import { useContext, useEffect, useState } from "react";

import { CartIcon } from "../Cart/CartIcon";

import CartContext from "../../store/cart-context";

import style from "./HeaderCartButton.module.css";

export const HeaderCartButton = ({ onShow }) => {
  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);

  const { items } = useContext(CartContext);

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnStyles = `${style.button} ${btnIsHighLighted ? style.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighLighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighLighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    }; 
    
  }, [items]);

  return (
    <button className={btnStyles} onClick={onShow}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{numberOfCartItems}</span>
    </button>
  );
};
