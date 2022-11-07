import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function ScoreBoard({ current, best }) {
  return (
    <Wrapper>
      <p>score: {current}</p>
      <p>Best score: {best}</p>
    </Wrapper>
  );
}
