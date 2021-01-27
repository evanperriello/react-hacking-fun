import './App.css';
import IngredientList from './components/IngredientList/IngredientList';
import Timer from './components/Timer/Timer';

import { useState } from 'react';

function App() {

  const [ listOfIngredients, setlistOfIngredients ] = useState([{name: "apple", amount: 1, time: 15}, {name: "mango", amount: 1, time: 15}]);

  const onRemoveIngredient = (ingredientIndex) => {
    const newArray = [...listOfIngredients];
    newArray.splice(ingredientIndex, 1);
    setlistOfIngredients(newArray);
  }

  return (
    <>
      <main>
        <h1>Beer Timer!</h1>
        <Timer totalTime={60}/>
        <IngredientList listOfIngredients={ listOfIngredients } onRemoveIngredient={onRemoveIngredient}/>
      </main>
    </>
  );
}

export default App;
