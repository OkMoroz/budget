import React, { useContext } from "react";
import { AppContext } from "../../providers/context";
import { THEMES } from "../../providers/themes/themeList";
import { saveToStorage } from "../../utils/sessionStorage";
import styled from "styled-components";
import eyeclose from "../../assets/img/eyeclose.svg";
import eyeopen from "../../assets/img/eyeopen.svg";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  margin-right: 10px;
`;

const Button = styled.button`
  display: flex;
  gap: 5px;
  align-items: center;
  color: #333;
  padding: 5px 10px;
  color: lightgrey;
  outline: none;
  background-color: #fff;
  font-weight: 700;
  border-radius: 25px;
  border: 2px solid lightgrey;
  cursor: pointer;

  &:hover {
    background-color: #d9b3ff;
    color: #ff868e;
  }

  &:active {
    background-color: #ddd;
  }
`;
export const ThemeSwitch = () => {
  const { state, dispatch } = useContext(AppContext);

  const setTheme = (themeName) => {
    dispatch({
      type: "setTheme",
      themeName,
    });

    saveToStorage("themeName", themeName);
  };

  return (
    <ButtonContainer>
      <Button onClick={() => setTheme(THEMES.LIGHT)}>
        <img src={eyeopen} alt="Light Icon" />
        Light
      </Button>
      <Button onClick={() => setTheme(THEMES.DARK)}>
        <img src={eyeclose} alt="Dark Icon" />
        Dark
      </Button>
    </ButtonContainer>
  );
};
