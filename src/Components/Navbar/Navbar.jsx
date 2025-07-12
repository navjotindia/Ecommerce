import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import Cart from "../../assets/cart.png";
import { Link } from "react-router-dom";
function Navbar() {
  const [Menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" height="50px" />
        <p>Shopify</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "#626262" }}>
            Home
          </Link>
          {Menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link to="/mens" style={{ textDecoration: "none", color: "#626262" }}>
            Men
          </Link>
          {Menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link
            to="/womens"
            style={{ textDecoration: "none", color: "#626262" }}
          >
            Women
          </Link>
          {Menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids" style={{ textDecoration: "none", color: "#626262" }}>
            Kids
          </Link>
          {Menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login" style={{ textDecoration: "none" }}>
          {" "}
          <button>Login</button>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <img src={Cart} alt="Cart" height="40px" />
        </Link>

        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

export default Navbar;
