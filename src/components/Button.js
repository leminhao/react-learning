import React from "react";
import "../assets/css/cart.css";

class Button extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.value} className={this.props.name}>{this.props.children}</button>
      </React.Fragment>
    );
  }
}

export default Button;
