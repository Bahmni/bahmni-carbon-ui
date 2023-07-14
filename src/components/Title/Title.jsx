import React from "react";
import styles from "./Title.module.scss";
import PropTypes from "prop-types";

const Title = (props) => {
  const { text, isRequired } = props;
  return (
    <div className={styles.title}>
      <span>{text + " "}</span>
      {isRequired && <span className={styles.required}>*</span>}
    </div>
  );
};

Title.propTypes = {
  text: PropTypes.string,
  isRequired: PropTypes.bool,
};
export default Title;
