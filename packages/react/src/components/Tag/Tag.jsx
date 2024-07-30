import PropTypes from "prop-types";
import React from "react";
import { ChevronForward } from "./ChevronForward";
import { Close } from "./Close";
import { Face } from "./Face";
import { Icon } from "./Icon";
import "./style.css";

export const Tag = ({
  showClose = true,
  showLeadingIcon = true,
  showLabel = true,
  showBaseAvatar = true,
  showStatusCircle = true,
  showTrailingIcon = true,
}) => {
  return (
    <div className="tag">
      {showBaseAvatar && (
        <div className="base-avatar">
          <div className="face-wrapper">
            <Face className="face-instance" />
          </div>
        </div>
      )}

      {showLeadingIcon && <Icon className="icon-instance-node" />}

      {showLabel && (
        <div className="placeholder">
          {showStatusCircle && <div className="status" />}

          <div className="text-wrapper">Tag Label</div>
        </div>
      )}

      {showTrailingIcon && <ChevronForward className="icon-instance-node" />}

      {showClose && (
        <div className="close-icon">
          <Close className="close-instance" />
        </div>
      )}
    </div>
  );
};

Tag.propTypes = {
  showClose: PropTypes.bool,
  showLeadingIcon: PropTypes.bool,
  showLabel: PropTypes.bool,
  showBaseAvatar: PropTypes.bool,
  showStatusCircle: PropTypes.bool,
  showTrailingIcon: PropTypes.bool,
};
