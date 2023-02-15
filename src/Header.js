import React from "react";
import "./Header.css";
import amazonLogo from "./assets/amazon-logo.png";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={amazonLogo} alt="logo" />

      <div className="header__search">
        <input className="header__search-input" type="text" />
        {/* Logo */}
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Sonny</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
