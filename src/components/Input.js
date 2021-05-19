import React from "react";
import styled, { css } from 'styled-components';

const InputStyled = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  border: none;
  display: block;
  margin: 1rem auto;
  

`;

const LabelStyled = styled.label`
  color: # 8B8378;
  background: papayawhip;
  margin: 12rem 12rem 6rem;

`;


const Input = (props) => {
    return (
      <>
        <LabelStyled>
          {props.labelName}
          <InputStyled
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
          />
        </LabelStyled>
      </>
    );
}

export default Input;
