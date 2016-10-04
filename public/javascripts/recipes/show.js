angular.module("recipesApp")
.component("show", {
  template: `
    <div class="addNoteBtn" ng-click="$ctrl.toggleAddingNote()"><h3>Add Note</h3></div>
    <div class="recipeHeader">
      <div class="photoContainer"><img ng-src={{$ctrl.recipe.photo}}></div>
      <div class="recipeInfo">
        <h1>{{$ctrl.recipe.name}}</h1>
        <p class="description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.</p>
      </div>
    </div>
    <div class="ingredientsContainer">
      <h2>Ingredients</h2>
      <ul class="ingredients">
        <li class="ingredient" ng-repeat="ingredient in $ctrl.recipe.ingredients">{{ingredient}}</li>
      </ul>
    </div>
    <div class="instructions">
      <h2>Instructions</h2>
      <div  class="instruction"
            ng-repeat="instruction in $ctrl.recipe.instructions track by $index"
            ng-click="$ctrl.addNote($event)" >
        <div class="direction">
          <h3>{{$index}}: {{instruction}}</h3>
        </div>
        <div class="noteHolder">
          <div class="note"></div>
          <div class="note1"></div>
        </div>
      </div>
    </div>
  `,
  controller: function($stateParams, httpService) {
    var that = this;
    this.recipe = null;

    this.addingNote = false;
    
    this.toggleAddingNote = function() {
      this.addingNote = this.addingNote == false ? true : false;
    }

    this.addNote = function(event) {
      // $(event.currentTarget).
    }

    httpService.getRecipe($stateParams.id)
    .then(function(res) {
      console.log(res.data);
      that.recipe = res.data;
    })
  }
});