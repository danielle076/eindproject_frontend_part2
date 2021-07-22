import React, {useState} from 'react';
import styles from './Vegan.module.css';
import axios from 'axios';
import Nutrients from '../../components/nutrients/Nutrients'
import {ReactComponent as LoadingIcon} from '../../assets/loading.svg'
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";

function Vegan() {
    const [food, setFood] = useState(null);
    const [calories, setCalories] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState('');

    async function foodData() {
        setError('');
        toggleLoading('true')

        try {
            const result = await axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_API_KEY}&timeFrame=day&targetCalories=${calories}&diet=vegan`);
            setFood(result.data);
        } catch (error) {
            setError('Oops... something went wrong. Please try again.');
            console.log('Something went wrong while retrieving the data.', error);
        }
        toggleLoading(false);
    }

    function handleChange(e) {
        setCalories(e.target.value);
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            if (disabled) {
                return;
            }
            foodData();
            setDisabled(true);
        }
    }

    return (
        <>
            {error && <p className={styles.error}>{error}</p>}
            <div>
                <section className={styles.food}>
                    <Input
                        inputText='Enter calories'
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                    />
                    <Button
                        onClick={() => {
                            foodData();
                            setDisabled(true);
                        }}
                        buttonText="Click for your daily meals"
                    />
                </section>
                {loading && <LoadingIcon className={styles.loader}/>}
                {food && <Nutrients mealsData={food}/>}
            </div>
        </>
    );
}

export default Vegan;