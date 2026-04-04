/*
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at https://www.bahmni.org/license/mplv2hd.
 *
 * Copyright 2026. CURE International. CURE International is a registered trademark
 * and the CURE International graphic logo is a trademark of CURE International.
 */

import React, { useEffect, useRef } from "react";
import "./NotificationCarbon.scss";
import { PropTypes } from "prop-types";
import { InlineNotification } from "carbon-components-react";

export function NotificationCarbon(props) {
  const {
    showMessage = false,
    title,
    onClose,
    messageDuration = 5000,
    lowContrast,
    kind,
    hideCloseButton,
  } = props;
  const ref = useRef(null);
  useEffect(() => {
    if (showMessage) {
      if (ref.current) {
        clearTimeout(ref.current);
      }
      ref.current = setTimeout(() => {
        onClose();
      }, messageDuration);
    }
  }, [showMessage]);

  return (
    <div className="alertContainer">
      {showMessage && (
        <div>
          <InlineNotification
            kind={kind || "success"}
            title={title}
            lowContrast={lowContrast || true}
            hideCloseButton={hideCloseButton || false}
          />
        </div>
      )}
    </div>
  );
}

NotificationCarbon.propTypes = {
  showMessage: PropTypes.bool,
  title: PropTypes.string,
  onClose: PropTypes.func,
  messageDuration: PropTypes.number,
  lowContrast: PropTypes.bool,
  kind: PropTypes.string,
  hideCloseButton: PropTypes.bool,
};
