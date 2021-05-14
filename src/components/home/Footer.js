import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>If you have questions or suggestions, <a className={styles.email}
                                                        href='mailto:d.vandenakker@novi-education.nl'>email</a> us.
            </p>
        </footer>
    );
}

export default Footer;