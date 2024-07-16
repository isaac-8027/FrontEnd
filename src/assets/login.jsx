import "./styles.scss";
import LoginImage from "../assets/kv-login.jpeg";
import kvLogo from "../assets/kv-logo.png";
import Button from "../components/Button";
import TextField from "../components/TextField";
import { Fragment, useState, useEffect,useRef } from "react";
// import { useEffect } from "react";
//import { useState } from "react";

const LoginPage = ({ handleSubmit }) => {
   const [userName, setUserName]=useState("");
  const [userError,setUserError]=useState("")
  const [passwordError,setPasswordError]=useState("")
  const [password, setPassword]=useState("")
  const focusRef = useRef();

 useEffect(()=>{
  if (focusRef.current) {

    focusRef.current.focus();
  }
 },[]);

  const onUserNameChange=(e)=>{
    if(e.target.value.length<=10){
      setUserName(e.target.value);
      setUserError("");
    }
    else{
      setUserError("Username should not exceed 10 characters");
    }

  }

  const onPasswordChange=(e)=>{
    if(e.target.value.length<=10){
      setPassword(e.target.value);
      setPasswordError("");
    }
    else{
      setPasswordError("Password should not exceed 10 characters");

    }
  }
  
  const onSubmit = (...args) => {
    handleSubmit(...args);

    // focusRef.current.focus();
  }


  return (
    <Fragment>
      <main>
        <section className="main-wrapper">
          {/* <!-- Hero Section --> */}
          <div className="hero">
            <div className="wrapper-hero">
              <img src={LoginImage} alt="Login Image" className="login-image" />
            </div>
          </div>
          {/* <!-- Login Section --> */}
          <div className="login">
            <form>
              <img src={kvLogo} alt="Logo" className="logo" />
              <TextField id="name" label="Username" type="text" onChange={onUserNameChange} error={userError} ref={focusRef} />
              <TextField id="password" label="Password" type="password" onChange={onPasswordChange} error={passwordError}/>
              <Button
                text="Log In"
                classname="login-button"
                type="button"
                handleSubmit={onSubmit}
              />
            </form>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default LoginPage;