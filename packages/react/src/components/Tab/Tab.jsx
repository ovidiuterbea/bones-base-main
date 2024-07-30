import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const NormalTab = ({
  labelText = "Tab",
  showLabelTag = false,
  showLeftTag = false,
  showLeftIcon = false,
  showLabel = true,
  showRightTag = false,
  showLabelIcon = false,
  indicatorRight = false,
  indicatorLeft = false,
  indicatorBottom = true,
  showRightIcon = false,
  className,
}) => {
  return (
    <div className={`normal-tab ${className}`}>
      {indicatorBottom && <div className="indicator-bottom" />}

      <div className="state-layer">
        <div className="tab-contents">
          <div className="icon-and-label">{showLabel && <div className="label">{labelText}</div>}</div>
        </div>
      </div>
    </div>
  );
};

NormalTab.propTypes = {
  labelText: PropTypes.string,
  showLabelTag: PropTypes.bool,
  showLeftTag: PropTypes.bool,
  showLeftIcon: PropTypes.bool,
  showLabel: PropTypes.bool,
  showRightTag: PropTypes.bool,
  showLabelIcon: PropTypes.bool,
  indicatorRight: PropTypes.bool,
  indicatorLeft: PropTypes.bool,
  indicatorBottom: PropTypes.bool,
  showRightIcon: PropTypes.bool,
};
