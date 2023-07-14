import { IntlProvider } from "react-intl";
import React from "react";

export const withReactIntl = (Component, messages = {}) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    return (
      <IntlProvider locale="en" messages={messages}>
        <Component {...props} />
      </IntlProvider>
    );
  };
};
