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
      <div class="ingredientsSection">
        <ul class="ingredients">
          <li class="ingredient" ng-repeat="ingredient in $ctrl.recipe.ingredients">{{ingredient}}</li>
        </ul>
      </div>
    </div>
    <div class="instructions">
      <h2>Instructions</h2>
      <div  class="instruction"
            ng-repeat="instruction in $ctrl.recipe.instructions track by $index"
            ng-click="$ctrl.addNote($index)" >
        <div class="direction">
          <h3>{{$index}}: {{instruction}}</h3>
        </div>
        <div class="noteHolder">
          <div class="note"></div>
        </div>
        <div class="noteEnter" ng-class="{visible : ($ctrl.instForNote === $index)}">
          <input ng-model="$ctrl.noteText">
          <button ng-click="$ctrl.saveNote($index)">Add note</button>
        </div>
      </div>
    </div>
  `,
  controller: function($stateParams, httpService) {
    var that = this;
    this.recipe = null;

    this.addingNote = false;

    this.instForNote = null;

    this.toggleAddingNote = function() {
      this.addingNote = this.addingNote == false ? true : false;
    }

    this.addNote = function(index) {
      // $(event.currentTarget).children(".noteEnter").addClass("enterActive");
      this.instForNote = index;
    }

    this.saveNote = function(index) {
      var note = {
        text: this.noteText,
        instruction: index
      }
      httpService.saveNote(note)
    }

    httpService.getRecipe($stateParams.id)
    .then(function(res) {
      console.log(res.data);
      that.recipe = res.data;
    })
  }
});