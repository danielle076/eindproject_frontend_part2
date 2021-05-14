import React, {useEffect, useState} from 'react';
import styles from './Dessert.module.css';
import axios from 'axios';
import {ReactComponent as LoadingIcon} from '../../assets/loading.svg';

function Dessert() {
    const [food, setFood] = useState([]);
    const [error, setError] = useState('')
    const [loading, toggleLoading] = useState('');

    useEffect(() => {
        async function fetchDessert() {
            setError('');
            toggleLoading('true')

            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/random?number=1&tags=dessert&apiKey=${process.env.REACT_APP_API_KEY}`);
                setFood(result.data.recipes);
            } catch (error) {
                setError('Sorry, images are not loading.');
                console.log('Something went wrong while retrieving the photo.', error);
            }
            toggleLoading(false);
        }

        fetchDessert();
    }, []);

    return (
        <article className={styles.article}>
            {error && <p className={styles.error}>{error}</p>}

            {food && food.map((foods) => {
                return ([
                    <h2 key={foods.title} className={styles.h2}>{foods.title}</h2>,
                    <img src={foods.image} alt='food' className={styles.img} key={foods.id}/>,
                    <a href={foods.sourceUrl} key={foods.sourceUrl} target='_blank' rel='noreferrer' className={styles.link}>Go to
                        Recipe</a>,
                ]);
            })}
            {loading && <LoadingIcon className='loader'/>}
        </article>
    );
}

export default Dessert;