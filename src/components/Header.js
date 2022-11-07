import React from "react";
import ScoreBoard from "./ScoreBoard";
import styled from "styled-components";

const HeeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 32px;
  border-bottom: 5px solid #a5d8ff;
  margin-bottom: 16px;

  h1 {
    margin-right: auto;
  }

  .gold {
    color: #e67700;
  }

  .grey {
    color: #212529;
  }
`;

export default function Header({ current, best }) {
  return (
    <HeeaderWrapper>
      <h1>
        <span className="grey">Memory</span>{" "}
        <span className="gold">Card royale</span>
      </h1>
      <ScoreBoard current={current} best={best} />
    </HeeaderWrapper>
  );
}
