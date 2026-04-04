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
import DatePickerCarbon from "./DatePickerCarbon.jsx";

export default {
  title: "Date Picker",
};

export const Primary = () => {
  return (
    <DatePickerCarbon
      id={"Dropdown"}
      onChange={() => {}}
      titleText={"Dropdown"}
      minDate={moment().format("MM-DD-YYYY")}
      title={"Start Date"}
    />
  );
};
