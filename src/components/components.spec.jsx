import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {
  Title,
  Dropdown,
  DropdownCarbon,
  NumberInputCarbon,
  TimePicker,
  TimePicker24Hour,
  NotificationCarbon,
  DatePickerCarbon,
} from "../index.js";

describe("components render with Carbon v11 on React 19", () => {
  it("Title", () => {
    render(<Title text="Name" isRequired />);
    expect(screen.getByText("*")).toBeTruthy();
  });

  it("Dropdown (ComboBox) calls onChange", () => {
    const onChange = jest.fn();
    render(
      <Dropdown
        id="d"
        titleText="Pick"
        options={[{ label: "One" }, { label: "Two" }]}
        onChange={onChange}
      />
    );
    fireEvent.click(screen.getByRole("combobox"));
    fireEvent.click(screen.getByText("Two"));
    expect(onChange).toHaveBeenCalledWith({ label: "Two" });
  });

  it("DropdownCarbon", () => {
    render(
      <DropdownCarbon
        id="dc"
        titleText="Pick"
        label="Choose"
        options={[{ label: "One" }]}
        onChange={() => {}}
      />
    );
    expect(screen.getByText("Pick")).toBeTruthy();
  });

  it("NumberInputCarbon", () => {
    const onChange = jest.fn();
    render(
      <NumberInputCarbon id="n" label="Qty" value={1} onChange={onChange} />
    );
    fireEvent.click(screen.getByLabelText(/increment/i));
    expect(onChange).toHaveBeenCalledWith(2);
  });

  it("TimePicker 24h accepts typing and reports on blur", () => {
    const onChange = jest.fn();
    render(<TimePicker24Hour labelText="t" onChange={onChange} />);
    const input = screen.getByPlaceholderText("hh:mm");
    fireEvent.change(input, { target: { value: "13:45" } });
    expect(input.value).toBe("13:45");
    fireEvent.blur(input);
    expect(onChange).toHaveBeenCalledWith("13:45");
  });

  it("TimePicker 12h reports on blur", () => {
    const onChange = jest.fn();
    render(<TimePicker labelText="t" onChange={onChange} />);
    const input = screen.getByPlaceholderText("hh:mm");
    fireEvent.change(input, { target: { value: "3:30" } });
    fireEvent.blur(input);
    expect(onChange).toHaveBeenCalledWith("03:30 AM");
  });

  it("NotificationCarbon", () => {
    render(<NotificationCarbon showMessage title="Saved" onClose={() => {}} />);
    expect(screen.getByText("Saved")).toBeTruthy();
  });

  it("DatePickerCarbon", () => {
    render(<DatePickerCarbon id="dp" title="Date" onChange={() => {}} />);
    expect(screen.getByText("Date")).toBeTruthy();
  });
});
