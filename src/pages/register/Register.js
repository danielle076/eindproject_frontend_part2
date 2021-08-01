import React, {useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import styles from './Register.module.css';
import {useAuth} from '../../context/AuthContext';
import {Link, useHistory} from 'react-router-dom';
import Button from '../../components/button/Button';

export const checkEmail = (value) => {
    if (value.includes('@')) {
        return true
    } else {
        return `Your email must contain an @.`
    }
}

function Register() {
    const {handleSubmit} = useForm();
    const emailRef = useRef();
    const userNameRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {signup} = useAuth();
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState('');
    const [registerSuccess, toggleRegisterSuccess] = useState(false);
    const history = useHistory();

    async function onSubmit() {
        if (passwordRef.current.value !==
            passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }
        try {
            setError('');
            toggleLoading(true);
            const result = await signup(emailRef.current.value, passwordRef.current.value, userNameRef.current.value);
            console.log(result);

            toggleRegisterSuccess(true);

            setTimeout(() => {
                history.push('/login');
            }, 2000);

        } catch {
            setError('Something went wrong when retrieving the data.');
            console.error(error);
        }
        toggleLoading(false);
    }

    return <main className={styles.form}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.register}>
            {error && <p className={styles.error}>{error}</p>}
            {loading && <p className={styles.loading}>Data is being loaded...</p>}

            <h1 className={styles.h1}>Create an account 🔒</h1>
            <input
                type='text'
                name='username'
                id='username'
                placeholder='Username'
                ref={userNameRef}
                required
                className={styles.input}
            />
            <input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                ref={emailRef}
                required
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
            <input
                type='password'
                name='password-confirmation'
                id='confirmation-field'
                placeholder='Password confirmation'
                ref={passwordConfirmRef} required
                className={styles.input}
            />
            <Button
                disabled={loading}
                buttonText='Register'
            />

            {registerSuccess === true &&
            <p className={styles.success}>Registration has succeeded! You can log in now.</p>}

        </form>

        <p className={styles.p}>Do you already have an account? Log in <Link to='/login'
                                                                             className={styles.link}>here</Link>.</p>
    </main>
}

export default Register;