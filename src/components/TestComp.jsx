/*
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at https://www.bahmni.org/license/mplv2hd.
 *
 * Copyright 2026. CURE International. CURE International is a registered trademark
 * and the CURE International graphic logo is a trademark of CURE International.
 */

import React from "react";
import "./TestComp.scss";
import { Switch, ContentSwitcher } from "carbon-components-react";

export function TestComp() {
  const n = "Random";
  return (
    <div className="test-comp">
      <h3>Hello World!</h3>
      <span>{n}</span>
      <ContentSwitcher>
        <Switch name="one">Hello</Switch>
        <Switch name="two" text="Two" />
      </ContentSwitcher>
    </div>
  );
}
