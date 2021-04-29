import React from "react";
import "../assets/css/cart.css";
import logo from "../assets/images/logo.png";

class Logo extends React.Component {
  render() {
    return (
      <>
        <img className="product-img" src={logo} alt="logo" />
        <h1 className="product-name">Chicken Zinger</h1>
      </>
    );
  }
}

export default Logo;
