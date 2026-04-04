/*
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at https://www.bahmni.org/license/mplv2hd.
 *
 * Copyright 2026. CURE International. CURE International is a registered trademark
 * and the CURE International graphic logo is a trademark of CURE International.
 */

import React from "react";
import { render } from "@testing-library/react";
import { TestComp } from "./TestComp";

describe("TestComp", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<TestComp />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("contains dummy data", () => {
    const component = render(<TestComp />);
    expect(
      component.getByRole("heading", { name: "Hello World!" })
    ).toBeTruthy();
  });
});
