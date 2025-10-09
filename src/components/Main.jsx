export default function Main() {
  
  const ingredients = ["Chicken", "Oregano", "Tomatoes"]

  const ingredientsListItems = ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
  ))

  function handleSubmit(event) {
    
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient")

  }
    
  return (
    <main>
      <form onSubmit={handleSubmit} className="ingredient-entry-form">
        <input
          type="text"
          placeholder="e.g. chicken"
          aria-label="add ingredient">
        </input>
        <button>+ Add ingredient</button>
      </form>
      <ul>
        {ingredientsListItems}
      </ul>
    </main>
  )
}