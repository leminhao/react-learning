import React from "react";
import "../assets/css/cart.css";
import logo from "../assets//images/logo.png";

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    };
  }

  handleIncrement = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  handleDecrement = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  };

  render() {
    return (
      <div className="container">
        <div className="product">
          <img
            className="product-img"
             src={logo} 
            alt="logo" />
          <h1 className="product-name">Chicken Zinger</h1>
          <div className="button-count">
            <button onClick={this.handleDecrement} className="decrement">
            Decrement
            </button>
            <p className="value-count">{this.state.clicks}</p>
            <button onClick={this.handleIncrement} className="increment">
              Increment
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddToCart;
