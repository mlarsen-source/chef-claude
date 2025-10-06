export default function Main() {
  return(
    <main>
      <form className="ingredient-entry-form">
        <input
          type="text"
          placeholder="e.g. chicken"
          aria-label="add ingredient">
        </input>
        <button>+ Add ingredient</button>
      </form>
    </main>
      
  )
}