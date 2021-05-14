import React from 'react';
import styles from './Secret.module.css';
import Dessert from '../../components/dessert/Dessert';
import Header from '../../components/secret/Header';

function Secret() {
    return (
        <>
            <Header/>
            <section className={styles.container}>
                <Dessert/>
                <Dessert/>
                <Dessert/>
            </section>
        </>
    );
}

export default Secret;