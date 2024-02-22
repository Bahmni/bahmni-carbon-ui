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
    customValidation,
    actionForInvalidTime,
    invalid,
    width,
  } = props;
  let title = <Title text={labelText} isRequired={isRequired} />;
  let timeStamp = []; // = ["12:00", "AM"];
  const timeFormatFor12Hr = "hh:mm A";
  const timeFormat = "hh:mm";
  if (defaultTime) {
    if (moment(defaultTime).format(timeFormatFor12Hr) !== "Invalid date") {
      timeStamp = moment(defaultTime).format(timeFormatFor12Hr).split(" ");
    } else if (
      moment(defaultTime).format(timeFormatFor12Hr) === "Invalid date" &&
      !moment.isMoment(defaultTime)
    ) {
      timeStamp = defaultTime.split(" ");
    } else {
      timeStamp = "";
    }
  }
  const [time, setTime] = useState(timeStamp[0]);
  const [period, setPeriod] = useState(
    timeStamp[1] !== undefined ? timeStamp[1] : "AM"
  );
  const [warning, setWarning] = useState(false);
  const [warningText, setWarningText] = useState(
    invalidText || "Please enter a valid time in 12-hr format"
  );
  useEffect(() => {
    setTime(timeStamp[0] || "");
    setPeriod(timeStamp[1] || "AM");
  }, [defaultTime]);
  useEffect(() => {
    setWarning(invalid);
  }, [invalid]);

  useEffect(() => {
    setWarningText(invalidText);
  }, [invalidText]);
  const isValidTime = (newTime) => {
    if (newTime === "Invalid date") return false;
    const timeRegex = /^((1[0-2]|0?[1-9]):[0-5][0-9] (AM|PM))$/;
    if (timeRegex.test(newTime)) {
      return true;
    }
    return false;
  };

  const handleChange = (e) => {
    const newTime = e.target.value;
    const selectedTime = moment(newTime + period, timeFormatFor12Hr).format(
      timeFormatFor12Hr
    );
    if (isValidTime(selectedTime)) {
      if (customValidation) {
        customValidation(selectedTime);
      } else {
        setWarning(false);
        actionForInvalidTime && actionForInvalidTime(false);
      }
      setTime(moment(selectedTime, timeFormatFor12Hr).format(timeFormat));
      if (
        period !==
        moment(selectedTime, timeFormatFor12Hr)
          .format(timeFormatFor12Hr)
          .split(" ")[1]
      )
        setPeriod(
          moment(selectedTime, timeFormatFor12Hr)
            .format(timeFormatFor12Hr)
            .split(" ")[1]
        );
    } else {
      setWarning(true);
      setWarningText(
        invalidText || "Please enter a valid time in 12-hr format"
      );
      actionForInvalidTime && actionForInvalidTime(true);
      setTime("");
    }
    onChange(selectedTime);
  };

  const handlePeriod = (e) => {
    const newPeriod = e.target.value;
    const selectedTime = moment(time + newPeriod, timeFormatFor12Hr).format(
      timeFormatFor12Hr
    );
    if (isValidTime(selectedTime)) {
      if (customValidation) {
        customValidation(selectedTime);
      } else {
        setWarning(false);
        actionForInvalidTime && actionForInvalidTime(false);
      }
      setPeriod(newPeriod);
    } else {
      setWarning(true);
      setWarningText(
        invalidText || "Please enter a valid time in 12-hr format"
      );
      actionForInvalidTime && actionForInvalidTime(true);
      setPeriod(newPeriod);
    }
    onChange(selectedTime);
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
  customValidation: PropTypes.func,
  actionForInvalidTime: PropTypes.func,
  invalid: PropTypes.bool,
};

export default TimePickerCarbon;
