import React from "react";
import styled, { ThemeProvider } from "styled-components";
import basicTheme from "../../providers/themes/themes/basic";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-size: 12px;
  margin-top: auto;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
`;

const Footer = () => {
  return (
    <StyledFooter>
      <ThemeProvider theme={basicTheme}>
        <div>
          <span>&#169;</span> 2023
        </div>
        <div>Oksana Moroz</div>
      </ThemeProvider>
    </StyledFooter>
  );
};

export default Footer;
