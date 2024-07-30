import classNames from "classnames";
import React, { FC, ReactNode } from "react";
import "./button.scss";
import Icons, { IconNames } from "../../../../../shared/icons/Icons";

type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  showRightIcon: boolean;
  leftDivider: boolean;
  rightDivider: boolean;
  showLeftIcon: boolean;
  leftIcon?: IconNames;
  rightIcon?: IconNames;
  children: ReactNode;
  type?: "solid" | "outline" | "link";
  variant?: "primary" | "secondary";
};

export const Button: FC<ButtonProps> = ({
  children,
  showRightIcon = true,
  leftDivider = true,
  rightDivider = true,
  showLeftIcon = true,
  leftIcon,
  rightIcon,
  type = "solid",
  variant = "primary",
  ...rest
}) => {
  const buttonClass = classNames("button", {
    [`${type}`]: type,
    [`${variant}`]: variant,
  });

  const LeftIconComponent = leftIcon ? Icons[leftIcon] : null;
  const RightIconComponent = rightIcon ? Icons[rightIcon] : null;

  return (
    <button className={buttonClass} {...rest}>
      {showLeftIcon && LeftIconComponent && (
        <LeftIconComponent className="left-icon" />
      )}

      {leftDivider && <div className="divider" />}

      {children}

      {rightDivider && <div className="divider" />}

      {showRightIcon && RightIconComponent && (
        <RightIconComponent className="right-icon" />
      )}
    </button>
  );
};
