import React from 'react';
import Food from '../../components/food/Food'
import styles from './Nutrients.module.css';
import Digits from '../../components/digits/Digits'

function Nutrients({mealsData}) {
    const nutrients = mealsData.nutrients;

    return (
        <main className={styles.main}>
            <section className={styles.meals}>
                {mealsData.meals.map((meal) => {
                    return <Food key={meal.id} meal={meal}/>
                })}
            </section>

            <section className={styles.nutrients}>
                <h1 className={styles.h1}>The four most important nutrients in total from these dishes</h1>
                <ul>
                    <li className={styles.tooltip}>Calories: {Digits(nutrients?.calories)}
                        <span className={styles.tooltiptext}>A calorie is a unit of energy.</span>
                    </li>
                    <li className={styles.tooltip}>Carbohydrates: {Digits(nutrients?.carbohydrates)}
                        <span className={styles.tooltiptext}>Carbohydrates are the sugars, starches and fibers found in fruits, grains, vegetables and milk products.</span>
                    </li>
                    <li className={styles.tooltip}>Fat: {Digits(nutrients?.fat)}
                        <span className={styles.tooltiptext}>The body uses fat as a fuel source, and fat is the major storage form of energy in the body.</span>
                    </li>
                    <li className={styles.tooltip}>Protein: {Digits(nutrients?.protein)}
                        <span className={styles.tooltiptext}>Protein is a macronutrient that is essential to building muscle mass.</span>
                    </li>
                </ul>
            </section>
        </main>
    );
}

export default Nutrients;