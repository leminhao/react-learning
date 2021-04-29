import React from "react";
import "../assets/css/cart.css";

class Button extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.decrement} className="decrement">Decrement</button>
        <button onClick={this.props.increment} className="increment" >Increment</button>
      </div>
    );
  }
}

export default Button;