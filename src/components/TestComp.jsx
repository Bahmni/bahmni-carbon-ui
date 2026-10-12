import React from "react";
import "./TestComp.scss";
import { Switch, ContentSwitcher } from "@carbon/react";

export function TestComp() {
  const n = "Random";
  return (
    <div className="test-comp">
      <h3>Hello World!</h3>
      <span>{n}</span>
      <ContentSwitcher>
        <Switch name="one" text="Hello" />
        <Switch name="two" text="Two" />
      </ContentSwitcher>
    </div>
  );
}
