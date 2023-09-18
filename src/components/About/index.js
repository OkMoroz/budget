import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../providers/themes/getTheme";
import { AppContext } from "../../providers/context";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 30px;
  margin: 50px;
  height: 64vh;
  font-size: 25px;
`;

const Heading = styled.h2`
  color: ${(props) => props.theme.color};
  text-transform: uppercase;
`;

const Text = styled.p`
  color: ${(props) => props.theme.color};
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`;

const ListItem = styled.li`
  color: ${(props) => props.theme.color};
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-size: 12px;
  margin-top: auto;
`;

const About = () => {
  const { state } = useContext(AppContext);
  const theme = getTheme(state.themeName);

  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <Heading>Про додаток</Heading>
        <Text>Це додаток для управління фінансами. Він допоможе вам:</Text>
        <List>
          <ListItem>Слідкувати за витратами та доходами.</ListItem>
          <ListItem>
            Додавати нові або видаляти транзакції в зручний спосіб.
          </ListItem>
          <ListItem>
            Налаштовувати фінансові параметри за вашим вибором.
          </ListItem>
        </List>
        <Footer>
          <div>
            <span>&#169;</span> 2023
          </div>
          <div>Oksana Moroz</div>
        </Footer>
      </StyledContainer>
    </ThemeProvider>
  );
};

export default About;
