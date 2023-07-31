import React from "react";
import Logo from '../../images/logo.png'
import Avatar from '../../images/avatar.png'
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">
          <img src={Logo} alt="logo" className="logoImg" />
          <p className="logoText">
            V<span className="logoSpan">i</span>BES Chat
          </p>
        </span>
        <span className="title">Register</span>
        <form className="form">
          <div className="inputWrapper">
            <input type="text"required />
            <label className="placeholder">Display Name</label>
          </div>

          <div className="inputWrapper">
            <input type="email" required/>
            <label className="placeholder">Email</label>
          </div>

          <div className="inputWrapper">
            <input type="password" required/>
            <label className="placeholder">Password</label>
          </div>
          <input id="file" type="file" />
          <label htmlFor="file" className="fileLabel">
            <img src={Avatar} alt="avatar" /> Add an avatar
          </label>
          <button>Sign up</button>
        </form>

        <p className="text">Do you have an account? 
            <Link className="link" to='login'> Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
