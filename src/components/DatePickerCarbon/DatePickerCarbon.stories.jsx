import React from "react";
import DatePickerCarbon from "./DatePickerCarbon.jsx";
import { IntlProvider } from "react-intl";
import moment from "moment";

export default {
  title: "Date Picker",
};

export const Primary = () => {
  return (
    <IntlProvider locale={"en"}>
      <DatePickerCarbon
        id={"Dropdown"}
        onChange={() => {}}
        titleText={"Dropdown"}
        minDate={moment().format("MM-DD-YYYY")}
        title={"Start Date"}
      />
    </IntlProvider>
  );
};
