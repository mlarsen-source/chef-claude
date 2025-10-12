import React from 'react'
import ClaudeRecipe from './ClaudeRecipe'
import IngredientsList from './IngredientsList'

export default function Main() {
  
  const [ingredients, setIngredients] = React.useState([]);
  const [recipeShown, setRecipeShown] = React.useState(false)

  function toggleRecipeShown() {
    setRecipeShown(prevShown => !prevShown)
  }
  
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients(prevIngredients=>([...prevIngredients, newIngredient]))
  }

  return (
    <main>
      <form
        action={addIngredient}
        className="ingredient-entry-form">
        <input
          type="text"
          placeholder="e.g. chicken"
          aria-label="add ingredient"
          name="ingredient">
        </input>
        <button>+ Add ingredient</button>
      </form>
      {ingredients.length > 0 && 
        <IngredientsList
          ingredients={ingredients}
          toggle = {toggleRecipeShown}
        />}      
      {recipeShown && <ClaudeRecipe/>}
    </main>
  );
}