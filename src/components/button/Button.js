import React from 'react';
import styles from './Button.module.css';

function Button({disabled, buttonText, onClick}) {
    return <button type="submit"
                   className={styles.button}
                   disabled={disabled}
                   onClick={onClick}
                   data-testid='testButton'
    >{buttonText}</button>
}

export default Button;