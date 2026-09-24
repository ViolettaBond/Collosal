import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
    text: string;
    variant?: 'default' | 'purple';
    bgColor?: string;
    textColor?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    text,
    variant = 'default',
    bgColor,
    textColor,
    onClick,
}) => {
    const buttonClasses = `${styles.btn} ${variant === 'purple' ? styles.purple : ''}`;

    const customStyles = {
        '--bg-color': bgColor,
        '--text-color': textColor,
    } as React.CSSProperties;

    return (
        <button className={buttonClasses} style={customStyles} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
