import React, {useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import styles from './Password.module.css';
import {useAuth} from '../../context/AuthContext';
import {Link} from 'react-router-dom';
import Button from '../../components/button/Button';

function Password() {
    const {handleSubmit} = useForm();
    const emailRef = useRef();
    const {resetPassword} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    async function onSubmit() {
        try {
            setMessage('');
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage('Check your inbox for further instructions');
        } catch {
            setError('Failed to reset');
        }
        setLoading(false);
    }

    return <main className={styles.form}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.password}>
            {error && <p className={styles.error}>{error}</p>}
            {message && <p className={styles.message}>{message}</p>}

            <h1 className={styles.h1}>New password</h1>
            <input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                ref={emailRef} required
                className={styles.input}
            />
            <Button
                disabled={loading}
                buttonText='Request'
            />
        </form>

        <p className={styles.p}>Don't have an account yet? <Link to='/register' className={styles.link}>Click here</Link>.</p>
    </main>
}

export default Password;