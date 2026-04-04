/*
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at https://www.bahmni.org/license/mplv2hd.
 *
 * Copyright 2026. CURE International. CURE International is a registered trademark
 * and the CURE International graphic logo is a trademark of CURE International.
 */

import React from "react";
import Dropdown from "./Dropdown.jsx";

export default {
  title: "Combo box",
};

export const Primary = () => {
  return (
    <Dropdown
      id={"Dropdown"}
      onChange={() => {}}
      titleText={"Dropdown"}
      placeholder={"Select an item"}
      options={[
        { value: "item1", label: "Item 1" },
        { value: "item2", label: "Item 2" },
        { value: "item3", label: "Item 3" },
      ]}
    />
  );
};
