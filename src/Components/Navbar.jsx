import React from "react";
import Logo from "../../src/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import DP from "../../src/images/dp.jpg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">
        <img src={Logo} alt="logo" className="logoImg" />
        <p className="logoText">
          V<span className="logoSpan">i</span>BES Chat
        </p>
      </span>

      <div className="user">
        <img src={DP} alt="display picture" className="dp" />
        <div className="wrapper">
          <span className="username">Paks</span>
          <Link>
            <FontAwesomeIcon icon={faRightFromBracket} className="icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
