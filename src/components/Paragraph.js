import React from "react";
import "../assets/css/cart.css";

class Paragraph extends React.Component {
  render() {
    return <div className="value-count">Product: {this.props.clicks}</div>;
  }
}

export default Paragraph;
