import React from 'react';
import styles from './Input.module.css';

function Input({inputText, onChange, onKeyPress}) {
    return <input type='number'
                  placeholder={inputText}
                  className={styles.input}
                  onChange={onChange}
                  onKeyPress={onKeyPress}
    />
}

export default Input;
