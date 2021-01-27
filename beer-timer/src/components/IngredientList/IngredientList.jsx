import React from 'react';
import Ingredient from '../Ingredient/Ingredient';
import css from './IngredientList.module.css';


const IngredientList = (props) => {

    const { listOfIngredients, onRemoveIngredient } = props;

    return (
        <>
            <ul className="ingredient-list">
                {listOfIngredients.map((ingredient, index) => (
                    <Ingredient key={index} ingredient={ ingredient } onRemoveIngredient={() => onRemoveIngredient(index)} />
                ))}
                <Ingredient ingredient={ {name: "", amount: 0, time: 0} }/>
            </ul>
            <button tyle="button">+</button>
        </>
      
    )
}

export default IngredientList

