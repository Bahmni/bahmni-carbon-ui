import {
  SelectItem,
  TimePicker,
  TimePickerSelect,
} from "carbon-components-react";
import moment from "moment";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import "../../styles/carbon-conflict-fixes.scss";
import "../../styles/carbon-theme.scss";
import Title from "../Title/Title.jsx";

const TimePickerCarbon = (props) => {
  const {
    onChange,
    defaultTime,
    labelText,
    isDisabled,
    isRequired,
    invalidText,
  } = props;
  let title = <Title text={labelText} isRequired={isRequired} />;
  let timeStamp = []; // = ["12:00", "AM"];
  if (defaultTime) {
    timeStamp = moment(defaultTime).format("hh:mm A").split(" ");
  }
  const [time, setTime] = useState(timeStamp[0]);
  const [period, setPeriod] = useState(
    timeStamp[1] !== undefined ? timeStamp[1] : "AM"
  );
  const [warning, setWarning] = useState(false);
  let warningText = invalidText || "Please enter a valid time in hh:mm format";
  useEffect(() => {
    setTime(timeStamp[0] || "");
    setPeriod(timeStamp[1] || "AM");
  }, [defaultTime]);

  const isValidTime = (newTime) => {
    const timeRegex = /^([01][0-9]|2[0-3]):[0-5][0-9]$/;
    if (timeRegex.test(newTime)) {
      return true;
    }
    return false;
  };

  const handleChange = (e) => {
    const newTime = e.target.value;
    if (isValidTime(newTime)) {
      setWarning(false);
      const selectedTime = moment(newTime + period, "h:mm A");
      setTime(newTime);
      onChange(selectedTime);
    } else setWarning(true);
  };

  const handlePeriod = (e) => {
    const newPeriod = e.target.value;
    if (isValidTime(time)) {
      setWarning(false);
      setPeriod(newPeriod);
      const selectedTime = moment(time + newPeriod, "h:mm A");
      onChange(selectedTime);
    } else {
      setWarning(true);
      setPeriod(newPeriod);
    }
  };

  return (
    <TimePicker
      id={"time-selector"}
      labelText={title}
      onBlur={handleChange}
      value={time}
      style={{ width: "72px", padding: "0 0 0 1rem" }}
      autoComplete={"off"}
      disabled={isDisabled}
      invalid={warning}
      invalidText={warningText}
    >
      <TimePickerSelect
        id={"time-picker-select-1"}
        labelText={"Choose a time"}
        onChange={handlePeriod}
        value={period}
        disabled={isDisabled}
      >
        <SelectItem value="AM" text="AM" />
        <SelectItem value="PM" text="PM" />
      </TimePickerSelect>
    </TimePicker>
  );
};

TimePickerCarbon.propTypes = {
  onChange: PropTypes.func.isRequired,
  defaultTime: PropTypes.object,
  isDisabled: PropTypes.bool,
  width: PropTypes.string,
  isRequired: PropTypes.bool,
  timePickerId: PropTypes.string,
  timePickerSelectId: PropTypes.string,
  timePickerSelectLabel: PropTypes.string,
  labelText: PropTypes.string,
  invalidText: PropTypes.string,
};

export default TimePickerCarbon;
