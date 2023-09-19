import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../providers/themes/getTheme";
import { AppContext } from "../../providers/context";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import Footer from "../Footer"

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

const About = () => {
  const { state } = useContext(AppContext);
  const theme = getTheme(state.themeName);

  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <Heading>
          <FormattedMessage id="menu.about" />
        </Heading>
        <Text>
          <FormattedMessage id="about.description" />
        </Text>
        <List>
          <ListItem>
            <FormattedMessage id="about.feature1" />
          </ListItem>
          <ListItem>
            <FormattedMessage id="about.feature2" />
          </ListItem>
          <ListItem>
            <FormattedMessage id="about.feature3" />
          </ListItem>
        </List>
        <Footer />
      </StyledContainer>
    </ThemeProvider>
  );
};

export default About;
