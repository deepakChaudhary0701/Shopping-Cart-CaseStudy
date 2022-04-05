import { useState } from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const enteredValueIsValid = validateValue(enteredValue);
    const enteredValueIsInvalid = !enteredValueIsValid && isTouched;
    

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const valueBlurHandler = (event) => {
        setIsTouched(true);
    };

    return {
        value: enteredValue,
        enteredValueIsInvalid,
        valueChangeHandler,
        valueBlurHandler
    }
};

export default useInput;