import React, { useContext } from "react";
import { IntlProvider } from "react-intl";
import * as flat from "flat";
import { AppContext } from "../context";

import messages from "./messages";
import { LOCALES } from "./constants";

const IntlAppProvider = ({ children }) => {
  const { state } = useContext(AppContext);

  return (
    <IntlProvider
      messages={flat.flatten(messages[state.locale])}
      locale={state.locale}
      defaultLocale={LOCALES.ENGLISH}
    >
      {children}
    </IntlProvider>
  );
};

export default IntlAppProvider;
