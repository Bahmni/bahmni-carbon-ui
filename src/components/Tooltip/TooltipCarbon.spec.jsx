/*
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at https://www.bahmni.org/license/mplv2hd.
 *
 * Copyright 2026. CURE International. CURE International is a registered trademark
 * and the CURE International graphic logo is a trademark of CURE International.
 */

import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { TooltipCarbon } from "./TooltipCarbon";

describe("TooltipCarbon", () => {
  beforeAll(() => {
    const { getComputedStyle } = window;
    window.getComputedStyle = (elt) => getComputedStyle(elt);
  });
  it("matches snapshot", () => {
    const { container, getByText } = render(
      <TooltipCarbon content="TestContent" />
    );
    expect(
      container.getElementsByClassName("bx--tooltip__label").length
    ).toEqual(1);
    fireEvent.click(container.querySelector(".bx--tooltip__trigger"));
    expect(getByText("TestContent")).toBeTruthy();
  });
});
