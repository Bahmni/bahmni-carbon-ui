import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { TooltipCarbon } from "./TooltipCarbon";

describe("TooltipCarbon", () => {
  beforeAll(() => {
    const { getComputedStyle } = window;
    window.getComputedStyle = (elt) => getComputedStyle(elt);
  });
  it("shows the content when the trigger is clicked", () => {
    const { container, getByText } = render(
      <TooltipCarbon content="TestContent" />
    );
    const trigger = container.querySelector(".cds--toggletip-button");
    expect(trigger).toBeTruthy();
    fireEvent.click(trigger);
    expect(getByText("TestContent")).toBeTruthy();
    expect(
      container
        .querySelector(".cds--toggletip")
        .classList.contains("cds--toggletip--open")
    ).toBe(true);
  });

  it("renders a custom icon passed as a component", () => {
    const { getByTestId } = render(
      <TooltipCarbon
        content="TestContent"
        icon={() => <span data-testid="custom-icon" />}
      />
    );
    expect(getByTestId("custom-icon")).toBeTruthy();
  });
});
