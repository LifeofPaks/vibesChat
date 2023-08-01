import React from 'react'
import '../../Styles.scss'
import Logo from '../../images/logo.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">
          <img src={Logo} alt="logo" className="logoImg" />
          <p className="logoText">
            V<span className="logoSpan">i</span>BES Chat
          </p>
        </span>
        <span className="title">Login</span>
        <form className="form">
          <div className="inputWrapper">
            <input type="email" required/>
            <label className="placeholder">Email</label>
          </div>

          <div className="inputWrapper">
            <input type="password" required/>
            <label className="placeholder">Password</label>
          </div>

          <button>Login</button>
        </form>

        <p className="text">You don't have an account?
        <Link className="link" to='/'> Register</Link>
        
        </p>
      </div>
    </div>
  )
}

export default Login