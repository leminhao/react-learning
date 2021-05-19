import React from "react";
import Button from "./Button";
import styled, { css } from 'styled-components';

const LiStyled = styled.li`
  list-style: none
`

const List = (props) => {
    return (
      <div>
        <ul>
          {props.products.map((item, index) => (
            <LiStyled key={index}>
              {item.name} | {item.model}{" "}
              <span >
                <Button onClick={(e) => props.view(item, e)} >View</Button>
                <Button onClick={(e) => props.edit(index, e)} >Edit</Button>
                <Button onClick={(e) => props.delete(index, e)} >Delete</Button>
              </span>
            </LiStyled>
          ))}
        </ul>
      </div>
    );
  }

export default List;
