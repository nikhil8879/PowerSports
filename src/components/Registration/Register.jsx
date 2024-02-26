import React from "react";
import "./Register.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const RegisterForm= () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Register</h1>
        <div className="input-box">
          <input type="text" placeholder='Username' required  />
          <FaUser className="icon"/>
        </div>
        <div className="input-box">
          <input type="password" placeholder='Password' required />
          <FaLock className="icon"/>
        </div>
        <div className="input-box">
          <input type="password" placeholder='Confirm Password' required />
          <FaLock className="icon"/>
        </div>
        <div className="remember-forgot">
          <label ><input type="checkbox" />Remember me</label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default RegisterForm;