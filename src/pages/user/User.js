import React, {useState} from 'react';
import styles from './User.module.css';
import {useAuth} from '../../context/AuthContext';
import {Link, useHistory} from 'react-router-dom';
import Button from '../../components/button/Button';

function User() {
    const [error, setError] = useState('')
    const {currentUser, logout} = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')
        try {
            await logout()
            history.push('/')
        } catch {
            setError('Failed to log out')
        }
    }

    return <main className={styles.form}>
        <div>
            <h1 className={styles.h1}>Hello {currentUser && currentUser.displayName} 👋</h1>
            <p className={styles.p}>This is your user information.</p>

            {error && <p className={styles.error}> {error} </p>}

            <div>
                <p className={styles.info}><strong>Username: </strong>
                    {currentUser && currentUser.displayName}
                </p>
                <p className={styles.info}><strong>Email: </strong>
                    {currentUser && currentUser.email}
                </p>
                <p className={styles.p}> ✏️ You can update your user information <Link to='/update-user'
                                                                                       className={styles.link}>here</Link>.
                </p>
            </div>
        </div>
        <div>
            <p className={styles.p}>
                <Button
                    onClick={handleLogout}
                    buttonText='Logout'
                />
            </p>
        </div>
    </main>
}

export default User;