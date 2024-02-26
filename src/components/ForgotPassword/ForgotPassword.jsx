import React from "react";
import "./ForgotPassword.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const ForgotPassword= () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Reset Password</h1>
        <div className="input-box">
          <input type="text" placeholder='Username' required  />
          <FaUser className="icon"/>
        </div>
        <div className="input-box">
          <input type="email" placeholder='Email' required />
          <FaLock className="icon"/>
        </div>
        <div className="input-box">
          <input type="password" placeholder='OTP' required />
          <FaLock className="icon"/>
        </div>
        <div className="remember-forgot">
          <label ><input type="checkbox" />Remember me</label>
        </div>
        <button type="submit">Reset</button>
      </form>
    </div>
  )
}

export default ForgotPassword;
