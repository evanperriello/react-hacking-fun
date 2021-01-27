import React from 'react';
import css from './Ingredient.module.css';

const Ingredient = (props) => {
  const { ingredient, onRemoveIngredient } = props;

  return (
    <li className={css.Ingredient}>
      <label htmlFor="">
        Ingredient name
        <input id="" type="text" placeholder="" value={ingredient.name}/>
      </label>
      <label htmlFor="">
        Amount
        <input id="" name="amount" value={ingredient.amount} type="number" placeholder=""/>
      </label>
      <label htmlFor="">
        Time
        <input type="number" placeholder="" value={ ingredient.time }/>
      </label>
      { /* to be conditional if last in list */ true && <button type="button" onClick={ onRemoveIngredient }>-</button>}
    </li>
  );
};

export default Ingredient;

