import React from "react";
import "../assets/css/cart.css";

class Button extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.value} className={`"${this.props.name}"`}>{this.props.children}</button>
      </div>
    );
  }
}

export default Button;
