import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import './button.scss';

type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
    showRightIcon: boolean;
    leftDivider: boolean;
    rightDivider: boolean;
    showLeftIcon: boolean;
    childred: ReactNode;
    type?: 'solid' | 'outline' | 'link';
    variant?: 'primary' | 'secondary';
};

export const Button: FC<ButtonProps> = ({
    childred,
    showRightIcon = true,
    leftDivider = true,
    rightDivider = true,
    showLeftIcon = true,
    type = 'solid',
    variant = 'primary',
    ...rest
}) => {
    const buttonClass = classNames('button', {
        [`${type}`]: type,
        [`${variant}`]: variant,
    });

    return (
        <button className={buttonClass} {...rest}>
            {showLeftIcon && <div className='left-icon' />}

            {leftDivider && <div className='divider' />}

            {childred}

            {rightDivider && <div className='divider' />}

            {showRightIcon && <div className='right-icon' />}
        </button>
    );
};
