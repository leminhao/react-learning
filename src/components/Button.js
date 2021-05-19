import React from "react";
import styled, { css } from "styled-components";

const ButtonStyled = styled.button`
  color: palevioletred;
  font-size: 0.75em;
  margin: 0.1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Button = (props) => {
  return <ButtonStyled onClick={props.onClick}>{props.children}</ButtonStyled>;
};

export default Button;
