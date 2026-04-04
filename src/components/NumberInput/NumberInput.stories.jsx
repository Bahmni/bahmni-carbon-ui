/*
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at https://www.bahmni.org/license/mplv2hd.
 *
 * Copyright 2026. CURE International. CURE International is a registered trademark
 * and the CURE International graphic logo is a trademark of CURE International.
 */

import React from "react";
import NumberInputCarbon from "./NumberInputCarbon.jsx";

export default {
  title: "Number Input",
};

export const Primary = () => {
  return (
    <NumberInputCarbon
      id={"Dropdown"}
      onChange={() => {}}
      titleText={"Number Input"}
      invalidText={"Enter a valid number"}
      value={1}
    />
  );
};
