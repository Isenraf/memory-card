import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding: 16px;
  text-transform: uppercase;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <p>copyright @ 2022 isenraf</p>
    </FooterWrapper>
  );
}
