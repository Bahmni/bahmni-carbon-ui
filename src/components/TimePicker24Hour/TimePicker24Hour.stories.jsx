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
import TimePicker24Hour from "./TimePicker24Hour.jsx";

export default {
  title: "Time Picker 24 hour",
};

export const Primary = () => {
  return (
    <TimePicker24Hour
      onChange={() => {}}
      labelText={"Start Time"}
      isRequired={true}
      translationKey={"APPOINTMENT_TIME_FROM_LABEL"}
      defaultTranslationKey={"Start Time"}
      defaultTime={moment().format("HH:mm")}
    />
  );
};
