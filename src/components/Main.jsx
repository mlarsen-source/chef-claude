import React from 'react'

export default function Main() {
  
  const [ingredients, setIngredients] = React.useState([]);

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

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
      <ul>{ingredientsListItems}</ul>
    </main>
  );
}
