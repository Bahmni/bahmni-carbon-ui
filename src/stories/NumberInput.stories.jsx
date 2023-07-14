import React from "react";
import NumberInputCarbon from "../components/NumberInput/NumberInputCarbon.jsx";
import { IntlProvider } from "react-intl";

export default {
  title: "Number Input",
};

export const Primary = () => {
  return (
    <IntlProvider locale={"en"}>
      <NumberInputCarbon
        id={"Dropdown"}
        onChange={() => {}}
        titleText={"Number Input"}
        invalidText={"Enter a valid number"}
        value={1}
      />
    </IntlProvider>
  );
};
