/*
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at https://www.bahmni.org/license/mplv2hd.
 *
 * Copyright 2026. CURE International. CURE International is a registered trademark
 * and the CURE International graphic logo is a trademark of CURE International.
 */

import React from "react";
import { Tooltip } from "carbon-components-react";
import PropTypes from "prop-types";
import "../../styles/carbon-conflict-fixes.scss";
import "../../styles/carbon-theme.scss";

export function TooltipCarbon(props) {
  const { content, icon } = props;

  return (
    <Tooltip align="start" renderIcon={icon}>
      {content}
    </Tooltip>
  );
}

TooltipCarbon.propTypes = {
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  icon: PropTypes.element,
};
