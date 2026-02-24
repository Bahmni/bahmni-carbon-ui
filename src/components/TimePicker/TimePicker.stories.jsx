/*
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at https://www.bahmni.org/license/mplv2hd.
 *
 * Copyright 2026. CURE International. CURE International is a registered trademark
 * and the CURE International graphic logo is a trademark of CURE International.
 */

import moment from "moment";
import React from "react";
import TimePickerCarbon from "./TimePicker.jsx";

export default {
  title: "Time Picker with AM and PM",
};

export const Primary = () => {
  return (
    <TimePickerCarbon
      labelText={"Start Time"}
      isRequired={true}
      onChange={() => {}}
      translationKey={"APPOINTMENT_TIME_FROM_LABEL"}
      defaultTranslationKey={"Start Time"}
      defaultTime={moment()}
    />
  );
};
