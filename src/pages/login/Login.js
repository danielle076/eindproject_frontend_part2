import React, {useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import styles from './Login.module.css';
import {useAuth} from '../../context/AuthContext';
import {Link, useHistory} from 'react-router-dom';
import Button from '../../components/button/Button';

function Login() {
    const {handleSubmit} = useForm();
    const emailRef = useRef();
    const passwordRef = useRef();
    const {login} = useAuth();
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState('');
    const [loginSuccess, toggleLoginSuccess] = useState(false);
    const history = useHistory();

    async function onSubmit() {
        try {
            setError('')
            toggleLoading('true')
            // eslint-disable-next-line
            const result = await login(emailRef.current.value, passwordRef.current.value)

            toggleLoginSuccess(true);

            setTimeout(() => {
                history.push('/user');
            }, 2000);

        } catch {
            setError('Something went wrong when retrieving the data.')
            console.error(error)
        }
        toggleLoading(false);
    }

    return <main className={styles.form}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.login}>
            {error && <p className={styles.error}>{error}</p>}
            {loading && <p className={styles.loading}>Data is being loaded...</p>}

            <h1 className={styles.h1}>My Account login 🔒</h1>
            <input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                ref={emailRef} required
                className={styles.input}
            />
            <input
                type='password'
                name='password'
                id='password-field'
                ref={passwordRef} required
                placeholder='Password'
                className={styles.input}
            />
            <Button
                disabled={loading}
                buttonText='Login'
            />

            {loginSuccess === true &&
            <p className={styles.success}>Login succeeded! You will now go to the user page.</p>}

        </form>
        <p className={styles.p}>Don't have an account yet? Then <Link to='/register'
                                                                      className={styles.link}>register</Link> first.</p>
        <p className={styles.p}>Have you forgotten your password, click <Link to='/password'
                                                                              className={styles.link}>here</Link>.</p>
    </main>
}

export default Login;