import { TimePicker } from "carbon-components-react";
import moment from "moment";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import "../../styles/carbon-conflict-fixes.scss";
import "../../styles/carbon-theme.scss";
import Title from "../Title/Title.jsx";

const TimePicker24Hour = (props) => {
  const {
    onChange,
    defaultTime,
    labelText,
    isDisabled,
    isRequired,
    invalidText,
    width,
  } = props;
  let title = <Title text={labelText} isRequired={isRequired} />;
  let timeStamp = []; // = ["12:00"];
  const [warning, setWarning] = useState(false);
  let warningText = invalidText || "Please enter a valid time in hh:mm format";
  if (defaultTime) {
    timeStamp = moment(defaultTime, "HH:mm").format("HH:mm");
  }
  const [time, setTime] = useState(timeStamp);
  useEffect(() => {
    setTime(timeStamp || "00:00");
  }, [defaultTime]);

  const isValidTime = (newTime) => {
    const timeRegex = /^([01][0-9]|2[0-3]):[0-5][0-9]$/;
    if (timeRegex.test(newTime)) {
      return true;
    }
    return false;
  };

  const handleChange = (e) => {
    if (isValidTime(e.target.value)) {
      setWarning(false);
      setTime(e.target.value);
      onChange(time);
    } else {
      setWarning(true);
    }
  };

  return (
    <TimePicker
      id={"time-selector"}
      labelText={title}
      onBlur={handleChange}
      value={time}
      style={{ width: width || "72px", padding: "0 0 0 1rem" }}
      autoComplete={"off"}
      disabled={isDisabled}
      invalid={warning}
      invalidText={warningText}
    ></TimePicker>
  );
};

TimePicker24Hour.propTypes = {
  onChange: PropTypes.func.isRequired,
  invalidText: PropTypes.string,
  defaultTime: PropTypes.object,
  isDisabled: PropTypes.bool,
  width: PropTypes.string,
  isRequired: PropTypes.bool,
  timePickerId: PropTypes.string,
  timePickerSelectId: PropTypes.string,
  timePickerSelectLabel: PropTypes.string,
  labelText: PropTypes.string,
};

export default TimePicker24Hour;
