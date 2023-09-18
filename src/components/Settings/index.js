import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../providers/themes/getTheme";
import { AppContext } from "../../providers/context";
import { LOCALES } from "../../providers/i18n";
import { useBooleanToggle } from "../../hooks";
import { saveToStorage } from "../../utils/sessionStorage";
import CurrencyExchange from "../CurrencyExchange";

import {
  StyledContainer,
  Heading,
  SelectWrapper,
  Button,
  CurrencySelect,
  Label,
  Option,
} from "./styles";

const Setting = () => {
  const { state, dispatch } = useContext(AppContext);
  const { status, handleStatusChange } = useBooleanToggle();
  const selectedTheme = getTheme(state.themeName);

  const onChange = (e) => {
    const { value } = e.target;

    dispatch({
      type: "changeCurrency",
      currency: value,
    });
  };

  const onChangeLocale = (e) => {
    const { value } = e.target;

    dispatch({
      type: "setLocale",
      locale: value,
    });

    saveToStorage("locale", value);
  };

  return (
    <ThemeProvider theme={selectedTheme}>
      <StyledContainer>
        <Heading>Налаштування</Heading>

        <div>
          <form>
            <SelectWrapper>
              <Label>
                МОВА:
                <CurrencySelect
                  name="locale"
                  onChange={onChangeLocale}
                  value={state.locale}
                >
                  <Option value={LOCALES.UKRAINIAN}>Українська</Option>
                  <Option value={LOCALES.ENGLISH}>English</Option>
                </CurrencySelect>
              </Label>
            </SelectWrapper>
            <SelectWrapper>
              <Label>
                ВАЛЮТА:
                <CurrencySelect
                  name="currency"
                  onChange={onChange}
                  value={state.currency}
                >
                  <Option value="UAH">Гривня</Option>
                  <Option value="USD">Долар США</Option>
                  <Option value="EUR">Євро</Option>
                </CurrencySelect>
              </Label>
            </SelectWrapper>
          </form>
        </div>

        <Button onClick={handleStatusChange}>Курс валют</Button>

        {status ? (
          <div>
            <CurrencyExchange />
          </div>
        ) : null}
      </StyledContainer>
    </ThemeProvider>
  );
};

export default Setting;
