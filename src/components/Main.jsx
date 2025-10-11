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
      {ingredients.length > 0 &&
      <section>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list">{ingredientsListItems}</ul>
        {ingredients.length > 3 &&
          <div className="get-recipe-container">
            <div>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
              <button>Get a recipe</button>
            </div>
          </div>}
      </section>}
    </main>
  );
}
