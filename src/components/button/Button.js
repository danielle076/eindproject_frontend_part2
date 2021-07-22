import React from 'react';
import styles from './Button.module.css';

function Button({disabled, buttonText, onClick}) {
    return <button type="submit"
                   className={styles.button}
                   disabled={disabled}
                   onClick={onClick}
    >{buttonText}</button>
}

export default Button;