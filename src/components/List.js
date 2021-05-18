import React from "react";
import Button from "./Button";
import styled, { css } from 'styled-components';

const LiView = styled.li`
  list-style: none
`

class List extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.products.map((item, index) => (
            <LiView key={index}>
              {item.name} | {item.model}{" "}
              <span >
                <Button onClick={(e) => this.props.view(item, e)} children="View"></Button>
                <Button onClick={(e) => this.props.edit(index, e)} children="Edit"></Button>
                <Button onClick={(e) => this.props.delete(index, e)} children="Delete"></Button>
              </span>
            </LiView>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
