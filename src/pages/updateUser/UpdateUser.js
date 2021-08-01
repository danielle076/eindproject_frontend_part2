import React, {useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useAuth} from '../../context/AuthContext';
import {Link, useHistory} from 'react-router-dom';
import Button from '../../components/button/Button';
import styles from './UpdateUser.module.css';

function UpdateUser() {
    const {handleSubmit} = useForm();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {currentUser, updatePassword, updateEmail} = useAuth();
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState('');
    const history = useHistory();

    function onSubmit() {
        if (passwordRef.current.value !==
            passwordConfirmRef.current.value) {
            return setError('passwords do not match');
        }

        const promises = []
        setError('');
        toggleLoading('true');

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value));
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value));
        }

        Promise.all(promises).then(() => {
            history.push('/user');
        }).catch(() => {
            setError('Failed to update');
            console.error(error);
        }).finally(() => {
            toggleLoading(false);
        })
    }

    return <main className={styles.form}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.update}>
            {error && <p className={styles.error}>{error}</p>}
            {loading && <p className={styles.loading}>Data is being loaded...</p>}

            <h1 className={styles.h1}>Update user profile ✏️</h1>
            <input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                ref={emailRef} required
                className={styles.input}
                defaultValue={currentUser.email}
            />

            <p className={styles.password}>Leave password blank if it remains the same</p>
            <input
                type='password'
                name='password'
                id='password-field'
                ref={passwordRef}
                placeholder='Password'
                className={styles.input}
            />
            <input
                type='password'
                name='password-confirmation'
                id='confirmation-field'
                placeholder='Confirmation password'
                ref={passwordConfirmRef}
                className={styles.input}
            />
            <Button
                disabled={loading}
                buttonText='Update'
            />
        </form>

        <p className={styles.p}><Link to='/user' className={styles.link}>Cancel</Link></p>
    </main>
}

export default UpdateUser;