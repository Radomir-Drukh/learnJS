import {FC, ReactNode, useContext} from 'react';
import {ThemeContext} from '../../../context/theme';
import styles from './Button.module.scss';
import classNames from 'classnames';

interface ButtonProps {
    defaultOnly?: boolean;
    children: ReactNode[] | ReactNode;
    onClick: () => void;
    disabled?: boolean;
}

export const Button = ({defaultOnly, children, onClick, disabled}: ButtonProps) => {
    const {theme} = useContext(ThemeContext);

    return (
        <button
            onClick={onClick}
            className={classNames(styles.root, {
                [styles[theme]]: !defaultOnly,
            })}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
