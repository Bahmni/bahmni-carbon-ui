import React from "react";
import Dropdown from "../components/Dropdown/Dropdown.jsx";
import { IntlProvider } from "react-intl";

export default {
  title: "Combo box",
};

export const Primary = () => {
  return (
    <IntlProvider locale={"en"}>
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
    </IntlProvider>
  );
};
