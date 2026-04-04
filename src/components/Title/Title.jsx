/*
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at https://www.bahmni.org/license/mplv2hd.
 *
 * Copyright 2026. CURE International. CURE International is a registered trademark
 * and the CURE International graphic logo is a trademark of CURE International.
 */

import React from "react";
import "./Title.scss";
import PropTypes from "prop-types";

const Title = (props) => {
  const { text, isRequired } = props;
  return (
    <div className="titleText">
      <span>{text + " "}</span>
      {isRequired && <span className="required">*</span>}
    </div>
  );
};

Title.propTypes = {
  text: PropTypes.string,
  isRequired: PropTypes.bool,
};
export default Title;
