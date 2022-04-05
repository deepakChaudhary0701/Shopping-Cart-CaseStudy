import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useInput from "../../hooks/useInput";
import Error from '../../ui/error/error';
import { useEffect, useState } from "react";
import classes from './login.module.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
 const navigate =  useNavigate();
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

  const [formIsValid, setFormValidity] = useState(false);

  useEffect(() => {
    if (emailIsInvalid || enteredPasswordIsInvalid) {
      setFormValidity(false);
      return;
    } else {
      setFormValidity(true);
    }
  }, [emailIsInvalid, enteredPasswordIsInvalid]);

  const loginFormHandler = (event) => {
    event.preventDefault();

    if (enteredPassword === "" || enteredEmail === "") {
      setFormValidity(false);
      return;
    }

    let formData = {
      email: enteredEmail,
      password: enteredPassword,
    };
 
    if(formData){
      localStorage.setItem( 'isLogged', true);
      navigate(`/home`);
    }
   
  };

  return (
    <div className={ `row ${classes.container}`}>
      <div className={ `col-lg-6 ${ classes.text}`}>
        <h2 className={ classes['login-text']}>Login</h2>
        <span>Get access to your Orders, Wishlist and Recommendations</span>
      </div>
      <div className="col-lg-6">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 2, width: "40ch" },
          }}
          noValidate
          autoComplete="on"
          onSubmit={loginFormHandler}
        >
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
            <Button
              variant="contained"
              className={ classes['login-btn']}
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

export default Login;
