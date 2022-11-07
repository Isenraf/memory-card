import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 240px;
  height: 321.91px;
  text-align: center;
  border-radius: 15px;

  img {
    max-width: 100%;
  }

  p {
    padding: 8px;
    color: #e7f5ff;
    background-color: #1864ab;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  &:hover {
    cursor: pointer;
    outline: 1px solid #e7f5ff;
    box-shadow: 0px 15px 15px 1px;
  }
`;

export default function Card({ url, name, onClick }) {
  return (
    <CardWrapper onClick={onClick}>
      <img src={url} alt={`${name} card`} />
      <p>{name}</p>
    </CardWrapper>
  );
}
