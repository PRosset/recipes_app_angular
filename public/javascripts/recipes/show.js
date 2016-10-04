angular.module("recipesApp")
.component("show", {
  template: `
  <div class="showContainer">
    <div class="addNoteBtn"><h3>Add Note</h3></div>
    <div class="recipeHeader">
      <div class="photoContainer"><img src="/images/corn.jpg"></div>
      <div class="recipeInfo">
        <h1>Street Corn Street Corn Street Corn</h1>
        <p class="description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.</p>
      </div>
    </div>
    <div class="ingredientsContainer">
      <h2>Ingredients</h2>
      <div class="ingredientsSection">
        <ul class="ingredients">
          <li class="ingredient">Test</li>
        </ul>
      </div>
    </div>
    <div class="instructions">
      <h2>Instructions</h2>
      <div class="instruction">
        <div class="direction">
          <h3>1) this is an instruction</h3>
        </div>
        <div class="noteHolder">
          <div class="note"></div>
          <div class="note1"></div>
        </div>
      </div>
    </div>
  </div>
  `
});