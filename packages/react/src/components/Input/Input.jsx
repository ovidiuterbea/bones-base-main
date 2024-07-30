
import PropTypes from "prop-types";
import React from "react";
import { CloseSmall } from "./CloseSmall";
import { LabelIcon } from "./LabelIcon";
import { StatusIcon } from "./StatusIcon";
import "./style.css";

export const BaseFormInput = ({
  showOptional = false,
  showMessageExplanation = true,
  showInputTag = false,
  showStatusMessage = true,
  showLeftIcon = true,
  showLabel = true,
  showLabelExplanation = true,
  showRightIcon = true,
}) => {
  return (
    <div className="base-form-input">
      {showLabel && (
        <div className="label">
          <div className="frame">
            <div className="label-title">
              <div className="label-text">Label</div>
              <LabelIcon className="label-icon" />
            </div>
          </div>
          {showLabelExplanation && (
            <div className="label-explanation">
              <div className="text-wrapper">Label explanation</div>
            </div>
          )}
        </div>
      )}

      <div className="input-field">
        <div className="input-content">
          {showLeftIcon && <div className="main-icon" />}

          <img className="placeholder" alt="Placeholder" src="placeholder.png" />
        </div>
        {showRightIcon && (
          <div className="label-icon">
            <CloseSmall className="close-small" />
          </div>
        )}
      </div>
      {showStatusMessage && (
        <div className="status-message">
          {showStatusMessage && (
            <div className="message">
              <StatusIcon className="status-icon" />
              <div className="status-text">This is a message</div>
            </div>
          )}

          {showMessageExplanation && <div className="message-explanation">This is an explanation</div>}
        </div>
      )}
    </div>
  );
};

BaseFormInput.propTypes = {
  showOptional: PropTypes.bool,
  showMessageExplanation: PropTypes.bool,
  showInputTag: PropTypes.bool,
  showStatusMessage: PropTypes.bool,
  showLeftIcon: PropTypes.bool,
  showLabel: PropTypes.bool,
  showLabelExplanation: PropTypes.bool,
  showRightIcon: PropTypes.bool,
};
