import React, { useRef, useState } from "react";

import style from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

export const Checkout = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    });

    const nameInputRef = useRef();
    const srteetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = srteetInputRef.current.value;
        const enteredPostalCode = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
        const enteredCityIsValid = !isEmpty(enteredCity);

        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalCodeIsValid
        });

        const formIsValid =
            enteredNameIsValid &&
            enteredStreetIsValid &&
            enteredPostalCodeIsValid &&
            enteredCityIsValid;

        if (!formIsValid) {
            return;
        }

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postalCode: enteredPostalCode
        });
    };

    return (
        <form className={style.form} onSubmit={confirmHandler}>
            <div className={`${style.control} ${formInputsValidity.name ? '' : style.invalid}`}>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" ref={nameInputRef} />
                {!formInputsValidity.name && <p className={style.error}>Please enter a valid name</p>}
            </div>

            <div className={`${style.control} ${formInputsValidity.street ? '' : style.invalid}`}>
                <label htmlFor="street">Street</label>
                <input type="text" id="street" ref={srteetInputRef} />
                {!formInputsValidity.street && <p className={style.error}>Please enter a valid street</p>}
            </div>

            <div className={`${style.control} ${formInputsValidity.postalCode ? '' : style.invalid}`}>
                <label htmlFor="postal">Postal Code</label>
                <input type="text" id="postal" ref={postalInputRef} />
                {!formInputsValidity.postalCode && <p className={style.error}>Please enter a valid postal code (5 characters long)</p>}
            </div>

            <div className={`${style.control} ${formInputsValidity.city ? '' : style.invalid}`}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" ref={cityInputRef} />
                {!formInputsValidity.city && <p className={style.error}>Please enter a valid city</p>}
            </div>

            <div className={style.actions}>
                <button type="button" onClick={props.onCancel}>
                    Cancel
                </button>

                <button className={style.submit}>Confirm</button>
            </div>
        </form>
    );
};
