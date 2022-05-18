import React, { Fragment } from "react";

import { HeaderCartButton } from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import style from "./Header.module.css";

export const Header = ({onShow}) => {
  return (
    <Fragment>
      <header className={style.header}>
        <h1 class={style.h1}>React Meals</h1>
        <HeaderCartButton onShow={onShow}/>
      </header>
      <div className={style["main-image"]}>
        <img src={mealsImage} alt="meals" />
      </div>
    </Fragment>
  );
};
