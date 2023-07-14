import React from "react";
import TimePickerCarbon from "../components/TimePicker/TimePicker.jsx";
import { IntlProvider } from "react-intl";
import moment from "moment";

export default {
  title: "Time Picker",
};

export const Primary = () => {
  return (
    <IntlProvider locale={"en"}>
      <TimePickerCarbon
        onChange={() => {}}
        translationKey={"APPOINTMENT_TIME_FROM_LABEL"}
        defaultTranslationKey={"Start Time"}
        defaultTime={moment()}
      />
    </IntlProvider>
  );
};
