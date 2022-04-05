import useInput from "../../hooks/useInput";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import classes from "./sign-up.module.css";
import Error from "../../ui/error/error";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate =  useNavigate();
  const {
    value: enteredFirstName,
    enteredValueIsInvalid: firstNameIsInvalid,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    enteredValueIsInvalid: lastNameIsInvalid,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    enteredValueIsInvalid: emailIsInvalid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  const {
    value: enteredPassword,
    enteredValueIsInvalid: enteredPasswordIsInvalid,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredConfirmPassword,
    enteredValueIsInvalid: enteredConfirmPasswordIsInvalid,
    valueChangeHandler: confirmPasswordChangeHandler,
    valueBlurHandler: confirmPasswordBlurHandler,
  } = useInput((value) => value.trim() === enteredPassword);

  const [ formIsValid, setFormValidity] = useState(false);

  useEffect( () => {
      if( firstNameIsInvalid || lastNameIsInvalid || emailIsInvalid || enteredPasswordIsInvalid || enteredConfirmPasswordIsInvalid ){
          setFormValidity(false);
          return;
      }
      else{
          setFormValidity(true);
      }
  }, [firstNameIsInvalid, lastNameIsInvalid, emailIsInvalid, enteredPasswordIsInvalid, enteredConfirmPasswordIsInvalid])

  const signUpFormHandler = (event) => {
    event.preventDefault();

    let formData = {
        firstName: enteredFirstName,
        lastName: enteredLastName,
        email: enteredEmail,
        password: enteredPassword,
        confirmPassword: enteredConfirmPassword
    };

    if(formData){
      navigate(`/login`);
    }

  };

  return (
    <div className={`row ${classes.container}`}>
      <div className={`col-lg-6 ${classes['signup-text']}`}>
        <h2 className={ classes.text }>Signup</h2>
        <span>We do not share your personal details with anyone.</span>
      </div>
      <div className="col-lg-6">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 2, width: "40ch" },
          }}
          noValidate
          autoComplete="on"
          onSubmit={signUpFormHandler}
        >
          <div>
            <TextField
              id="standard-basic"
              label="First Name"
              variant="standard"
              onChange={ firstNameChangeHandler}
              onBlur= { firstNameBlurHandler}
              fullWidth
              required
            />
             {firstNameIsInvalid && (
              <Error message=" *Please provide a valid first name." />
            )}
          </div>

          <div>
            <TextField
              id="standard-basic"
              label="Last Name"
              variant="standard"
              onChange={ lastNameChangeHandler}
              onBlur= { lastNameBlurHandler}
              fullWidth
              required
            />
             {lastNameIsInvalid && (
              <Error message=" *Please provide a valid last name." />
            )}
          </div>

          <div>
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              fullWidth
              required
            />
            {emailIsInvalid && (
              <Error message=" *Please provide a valid email address." />
            )}
          </div>
          <div>
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              fullWidth
              required
            />
            {enteredPasswordIsInvalid && (
              <Error message=" *Please provide a valid password." />
            )}
          </div>

          <div>
            <TextField
              id="standard-password-input"
              label="Confirm Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              onChange={confirmPasswordChangeHandler}
              onBlur={confirmPasswordBlurHandler}
              fullWidth
              required
            />
            {enteredConfirmPasswordIsInvalid && (
              <Error message=" *Your confirm password does not match with your password." />
            )}
          </div>
          <div>
            <Button
              variant="contained"
              className={ classes['signup-btn']}
              type="submit"
              fullWidth
              disabled={!formIsValid}
            >
              Login
            </Button>
            {!formIsValid && (
              <Error message="* Hang On ! Please provide valid credentials." />
            )}
          </div>
        </Box>
      </div>
    </div>
  );
};

export default SignUp;