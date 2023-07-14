import React from "react";
import { NumberInput } from "carbon-components-react";
import PropTypes from "prop-types";
import Title from "../Title/Title.jsx";
import "../../styles/carbon-conflict-fixes.scss";
import "../../styles/carbon-theme.scss";

const NumberInputCarbon = (props) => {
  const { onChange, value, id, testId, label, isRequired, min, invalidText } =
    props;
  const handleChange = (event, carbonEvent, value) => {
    if (typeof carbonEvent === "object") {
      onChange(+carbonEvent.value);
    } else {
      onChange(value);
    }
  };
  const title = label && <Title text={label} isRequired={isRequired} />;

  return (
    <NumberInput
      data-testid={testId}
      id={id}
      onChange={handleChange}
      min={min}
      value={value || 0}
      invalidText={invalidText}
      label={title}
    />
  );
};

NumberInputCarbon.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.number,
  id: PropTypes.string,
  testId: PropTypes.string,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  min: PropTypes.number,
  invalidText: PropTypes.string,
};

export default NumberInputCarbon;
