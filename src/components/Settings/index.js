import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../providers/themes/getTheme";
import { AppContext } from "../../providers/context";
import { LOCALES } from "../../providers/i18n";
import { useBooleanToggle } from "../../hooks";
import { saveToStorage } from "../../utils/sessionStorage";
import CurrencyExchange from "../CurrencyExchange";
import { FormattedMessage } from "react-intl";

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
        <Heading>
          <FormattedMessage id="menu.settings" />
        </Heading>

        <div>
          <form>
            <SelectWrapper>
              <Label>
                <FormattedMessage id="settings.language" />:
                <CurrencySelect
                  name="locale"
                  onChange={onChangeLocale}
                  value={state.locale}
                >
                  <Option value={LOCALES.UKRAINIAN}>
                    <FormattedMessage id="settings.ukrainian" />
                  </Option>
                  <Option value={LOCALES.ENGLISH}>
                    <FormattedMessage id="settings.english" />
                  </Option>
                </CurrencySelect>
              </Label>
            </SelectWrapper>
            <SelectWrapper>
              <Label>
                <FormattedMessage id="settings.currency" />:
                <CurrencySelect
                  name="currency"
                  onChange={onChange}
                  value={state.currency}
                >
                  <Option value="UAH">
                    <FormattedMessage id="settings.hryvnia" />
                  </Option>
                  <Option value="USD">
                    <FormattedMessage id="settings.usd" />
                  </Option>
                  <Option value="EUR">
                    <FormattedMessage id="settings.euro" />
                  </Option>
                </CurrencySelect>
              </Label>
            </SelectWrapper>
          </form>
        </div>

        <Button onClick={handleStatusChange}>
          <FormattedMessage id="settings.currencyExchange" />
        </Button>

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
