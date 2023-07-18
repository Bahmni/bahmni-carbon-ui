import React from "react";
import { Tooltip } from "carbon-components-react";
import PropTypes from "prop-types";
import "../../styles/carbon-conflict-fixes.scss";
import "../../styles/carbon-theme.scss";

export default function TooltipCarbon(props) {
  const { content, Icon } = props;
  return (
    <Tooltip align="start" renderIcon={Icon}>
      {content}
    </Tooltip>
  );
}

TooltipCarbon.propTypes = {
  content: PropTypes.string.isRequired,
  Icon: PropTypes.element,
};
