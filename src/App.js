import React, { Component } from "react";
import "./assets/css/cart.css";
import Button from "./components/Button";
import Paragraph from "./components/Paragraph";
import Logo from "./components/Logo";

class App extends Component {
  state = {
    clicks: 0,
  };

  increment = () => {
    this.setState({
      clicks: this.state.clicks + 1,
    });
  };

  decrement = () => {
    this.setState({
      clicks: this.state.clicks - 1,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="product">
          <Logo />
          <div className="button-count">
            <Paragraph
              clicks={this.state.clicks}
            />
            <Button
              decrement={this.decrement}
              increment={this.increment}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
