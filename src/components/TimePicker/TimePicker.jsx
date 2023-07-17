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
  const { onChange, defaultTime, labelText, isDisabled, isRequired } = props;
  let title = <Title text={labelText} isRequired={isRequired} />;
  let timeStamp = []; // = ["12:00", "AM"];
  if (defaultTime) {
    timeStamp = moment(defaultTime).format("h:mm A").split(" ");
  }
  const [time, setTime] = useState(timeStamp[0]);
  const [period, setPeriod] = useState(timeStamp[1]);
  useEffect(() => {
    setTime(timeStamp[0] || "");
    setPeriod(timeStamp[1]);
  }, [defaultTime]);
  const handleChange = (e) => {
    const selectedTime = moment(e.target.value + period, "h:mm A");
    setTime(e.target.value);
    onChange(selectedTime);
  };
  const handlePeriod = (e) => {
    const selectedTime = moment(time + e.target.value + period, "h:mm A");
    setPeriod(e.target.value);
    onChange(selectedTime);
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
};

export default TimePickerCarbon;
