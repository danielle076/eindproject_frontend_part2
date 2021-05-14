import React from 'react';
import styles from './UserInput.module.css';

function UserInput() {
    return (
        <>
            <input type='email' className={styles.input} placeholder='Email'/>
            <input type='password' className={styles.input} placeholder='Password'/>
            <input type='submit' className={styles.button} value='Enter'/>
        </>
    );
}

export default UserInput;