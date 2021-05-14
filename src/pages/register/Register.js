import React, {useState} from 'react';
import styles from './Register.module.css';
import {Link, useHistory} from 'react-router-dom';
import app from '../../modules/firebase';
import UserInput from '../../components/input/UserInput';

function Register() {
    const history = useHistory();
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState('');
    const [registerSuccess, toggleRegisterSuccess] = useState(false);

    const onSubmit = async event => {
        setError('');
        toggleLoading('true')

        try {
            event.preventDefault();
            const [email, password] = event.target;
            const user = await app.auth().createUserWithEmailAndPassword(email.value, password.value);
            console.log(user);

            toggleRegisterSuccess(true);

            setTimeout(() => {
                history.push('/login');
            }, 2000);

        } catch(error){
            setError('Something went wrong when retrieving the data.')
            console.error(error)
        }
        toggleLoading(false);
    }

    return (
        <main className={styles.form}>
            <form onSubmit={onSubmit} className={styles.register}>
                {error && <p className={styles.error}>{error}</p>}
                {loading && <p className={styles.loading}>Data is being loaded...</p>}

                <h1 className={styles.h1}>Register for juicy stuff</h1>
                <UserInput/>

                {registerSuccess === true && <p className={styles.p}>Registration has succeeded! You can log in now.</p>}

                <p className={styles.p}>Do you already have an account? Log in <Link to='/login' className={styles.link}>here</Link>.</p>
            </form>
        </main>
    );
}

export default Register