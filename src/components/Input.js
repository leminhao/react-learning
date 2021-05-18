import React from "react";
import styled, { css } from 'styled-components';

const InputView = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  display: block;

`;

const LabelView = styled.label`
  color: palevioletred;
  background: papayawhip;
`;


class Input extends React.Component {
  render() {
    return (
      <React.Fragment>
        <LabelView>
          {this.props.labelName}
          <InputView
            type={this.props.type}
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.props.onChange}
          />
        </LabelView>
      </React.Fragment>
    );
  }
}

export default Input;
