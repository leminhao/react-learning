import React from "react";
import styled, { css } from 'styled-components';

const ButtonView = styled.button`
  color: palevioletred;
  font-size: 0.75em;
  margin: 0.1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

class Button extends React.Component {
  render() {
    return (
      <ButtonView onClick={this.props.onClick}>{this.props.children}</ButtonView>
    );
  }
}

export default Button;
