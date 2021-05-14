import React from 'react';
import styles from './Header.module.css';
import quote from '../../assets/cheat-quote.jpg';

function Header() {
    return (
        <header className={styles.container}>
            <article className={styles.article}>
                <h1 className={styles.h1}>Welcome to your cheat page 🧁</h1>
                <h2 className={styles.h2}>Just completely done with sticking to the sports and calorie rules?
                    Welcome to the page full of dishes that actually should not be allowed.</h2>
                <p className={styles.p}>Watching your calories every day, exercising every day.... Sometimes you get
                    tired and often you can't keep it up for long. Therefore, especially for you, we have collected
                    a number of treats, where we explicitly did not mention the calories. Because say it yourself, a
                    cheat-day without knowing it's bad for you, tastes a lot better than knowing it's not good for
                    you.</p>
                <p className={styles.p}>No worries that this will affect your summer body. Treating yourself once in
                    a while is allowed. We do emphasize once in a while 😉 </p>
            </article>

            <article className={styles.article}>
                <img className={styles.img} src={quote} alt='donut'/>
            </article>
        </header>
    );
}

export default Header;