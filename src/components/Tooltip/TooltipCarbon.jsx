import React from "react";
import { Toggletip, ToggletipButton, ToggletipContent } from "@carbon/react";
import { Information } from "@carbon/icons-react";
import PropTypes from "prop-types";
import "../../styles/carbon-conflict-fixes.scss";
import "../../styles/carbon-theme.scss";

export function TooltipCarbon(props) {
  const { content, icon } = props;
  // `icon` may be a component (e.g. `() => <Icon />`) or an element
  const renderedIcon =
    typeof icon === "function" ? React.createElement(icon) : icon;

  return (
    <Toggletip align="bottom-start">
      <ToggletipButton label="Show information">
        {renderedIcon || <Information />}
      </ToggletipButton>
      <ToggletipContent>{content}</ToggletipContent>
    </Toggletip>
  );
}

TooltipCarbon.propTypes = {
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};
