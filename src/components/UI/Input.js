import React from "react";

import style from "./Inputs.module.css";

export const Input = React.forwardRef((props, ref) => {
  return (
    <div className={style.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} defaultValue="1" />
    </div>
  );
});
