import React from 'react';
import styles from './Header.module.css';
import quote from '../../assets/quote.jpg';

function Header() {
    return (
        <header className={styles.container}>
            <article className={styles.article}>
                <h2>Looking for a summer body?</h2>
                <p className={styles.p}>
                    There's nothing like that first day of warm weather. At first you are happy that you can finally
                    throw off your winter sweaters, but then it hits you - the bikini season is just around the corner
                    and you're still in fat-massaging winter hibernation mode.
                </p>
                <p className={styles.p}>
                    Don't panic. Not only is there still plenty of time to prepare, but to get yourself beach-body
                    ready, all it takes is a little sweat and the right nutrition.
                </p>
                <p className={styles.p}>
                    Don't feel like you're ready for the beach body yet? No problem we are here to save you
                    nutritionally. Whether you are vegan, vegetarian or an all-eater, we are here to save your day. All
                    you have to do is choose food, vegetarian or vegan, fill in the calories and there you go, a morning,
                    afternoon and evening meal on your screen.
                </p>
                <p className={styles.p}>
                    Next all you have to do is click on the link of the meal to see what ingredients you need and how to
                    prepare it. So you don't have to think about what you want and/or can eat: nice and relaxed!
                </p>
            </article>

            <article className={styles.article}>
                <img className={styles.img} src={quote} alt='quote'/>
            </article>

        </header>
    );
}

export default Header;