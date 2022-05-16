import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import style from "./Modal.module.css";

const Backdrops = ({ onClose }) => {
  return <div onClick={onClose} className={style.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={style.modal}>
      <div className={style.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

export const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrops onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
