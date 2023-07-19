import React from "react";
import TimePickerCarbon from "./TimePicker.jsx";
import { IntlProvider } from "react-intl";
import moment from "moment";

export default {
  title: "Time Picker with AM and PM",
};

export const Primary = () => {
  return (
    <IntlProvider locale={"en"}>
      <TimePickerCarbon
        labelText={"Start Time"}
        isRequired={true}
        onChange={() => {}}
        translationKey={"APPOINTMENT_TIME_FROM_LABEL"}
        defaultTranslationKey={"Start Time"}
        defaultTime={moment()}
      />
    </IntlProvider>
  );
};
