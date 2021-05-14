import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Nav.module.css';

function Nav() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName={styles['active-link']}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/food' activeClassName={styles['active-link']}>Food</NavLink>
                    </li>
                    <li>
                        <NavLink to='/vegetarian' activeClassName={styles['active-link']}>Vegetarian</NavLink>
                    </li>
                    <li>
                        <NavLink to='/vegan' activeClassName={styles['active-link']}>Vegan</NavLink>
                    </li>
                    <li className={styles.right}>
                        <NavLink to='/login' activeClassName={styles['active-link']}>Login</NavLink>
                    </li>
                    <li className={styles.right}>
                        <NavLink to='/register' activeClassName={styles['active-link']}>Register</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;