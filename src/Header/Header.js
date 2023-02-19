import React, { useState } from "react";
import "./Header.css";
import amazonLogo from "../assets/amazon-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingBasket } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProider";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {};
  console.log("ACTUAL USER OBJECT", user);
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={amazonLogo} alt="logo" />
      </Link>

      <div className="header__search">
        <input className="header__search-input" type="text" />
        <SearchIcon className="header__search-icon" />
      </div>

      <div className="header__nav">
        <Link to="/login">
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">Hello Recomagnesius</span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasket />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
