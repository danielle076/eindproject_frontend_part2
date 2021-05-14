import React from 'react';
import styles from './Body.module.css';
import home01 from '../../assets/home01.jpg';
import home02 from '../../assets/home02.jpg';
import home03 from '../../assets/home03.jpg';
import home04 from '../../assets/home04.jpg';
import home05 from '../../assets/home05.jpg';

function Body(){
    return(
        <section className={styles.container}>
            <article className={styles.article}>
                <img className={styles.img} src={home01} alt='food'/>
            </article>
            <article className={styles.article}>
                <img className={styles.img} src={home02} alt='food'/>
            </article>
            <article className={styles.article}>
                <img className={styles.img} src={home03} alt='food'/>
            </article>
            <article className={styles.article}>
                <img className={styles.img} src={home04} alt='food'/>
            </article>
            <article className={styles.article}>
                <img className={styles.img} src={home05} alt='food'/>
            </article>
        </section>
    );
}

export default Body;