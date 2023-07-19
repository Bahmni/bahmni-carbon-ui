import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { TooltipCarbon } from "./TooltipCarbon";

describe("TooltipCarbon", () => {
  it("matches snapshot", () => {
    const { asFragment, container, getByText } = render(
      <TooltipCarbon content="TestContent" />
    );
    expect(asFragment()).toMatchSnapshot();
    fireEvent.click(container.querySelector(".bx--tooltip__trigger"));
    expect(getByText("TestContent")).toBeTruthy();
  });
});
