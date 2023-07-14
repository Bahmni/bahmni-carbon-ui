import React from "react";
import Title from "../components/Title/Title.jsx";

export default {
  title: "Title",
  component: Title,
};

export const Primary = () => <Title text={"Title"} isRequired={true} />;
