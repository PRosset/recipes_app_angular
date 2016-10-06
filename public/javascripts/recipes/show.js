angular.module("recipesApp")
.component("show", {
  template: `
    <div class="addNoteBtn btn" ng-click="$ctrl.toggleAddingNote()"><h3 ng-hide="$ctrl.addingNote">Add Note</h3><h3 ng-show="$ctrl.addingNote">Cancel<h3></div>
    <div class="sectionWrapper">
      <div class="sectionCont">
        <div class="recipeHead">
          <div class="recipePhoto" style="background-image: url({{$ctrl.recipe.photo}});">


          </div>
          <div class="recipeDesc">
            <h1>{{$ctrl.recipe.name}}</h1>
            <p><b>Serving size:</b> {{$ctrl.recipe.serving_size}}</p>
          </div>
        </div>
        <div class="noteCont">
          <div class="note" ng-repeat="note in $ctrl.notes[$index]">{{note.text}}</div>
        </div>
        <div class="noteEnter" ng-class="{visible: ($ctrl.instForNote === $index)}">
          <input ng-model="$ctrl.noteText">
          <button ng-click="$ctrl.saveNote($index)">Add Note</button>
        </div>
      </div>
    </div>
    <div class="sectionWrapper">
      <div class="sectionCont">
        <div class="ingredientsCont">
          <h2>Ingredients</h2>
          <div class="ingredientsSection">
            <ul class="ingredients">
              <li class="ingredient" ng-repeat="ingredient in $ctrl.recipe.ingredients track by $index">{{ingredient}}</li>
            </ul>
          </div>
        </div>
        <div class="noteCont">
          <div class="note" ng-repeat="note in $ctrl.notes[$index]">{{note.text}}</div>
        </div>
        <div class="noteEnter" ng-class="{visible: ($ctrl.instForNote === $index)}">
          <input ng-model="$ctrl.noteText">
          <button ng-click="$ctrl.saveNote($index)">Add Note</button>
        </div>
      </div>
    </div>
    <div class="sectionWrapper">
      <div class="sectionCont">
        <div class="instructions">
          <h2>Instructions</h2>
          <div  class="instruction"
                ng-repeat="instruction in $ctrl.recipe.instructions track by $index"
                ng-class="{addingNote : $ctrl.addingNote}" >
            <div class="direction" ng-click="$ctrl.addNote($index)">
              <h3>{{$index + 1}}: {{instruction}}</h3>
            </div>
            <div class="noteHolder">
              <div class="note" ng-repeat="note in $ctrl.notes[$index] track by $index">{{$index}} : {{note.text}}</div>
            </div>
            <div class="noteEnter" ng-class="{visible : ($ctrl.instForNote === $index)}">
              <input ng-model="$ctrl.noteText">
              <button ng-click="$ctrl.saveNote($index)">Add note</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sectionWrapper">
      <div class="sectionCont">
        <div class="recipeFooter">
        </div>
      </div>
    </div>
  `,
  controller: function($stateParams, httpService) {
    var that = this;

    this.recipe = null;

    this.notes = [];

    this.addingNote = false;

    this.instForNote = null;

    this.toggleAddingNote = function() {
      this.addingNote = this.addingNote == false ? true : false;
      this.instForNote = null;
    }

    this.randRotate = function() {
      return Math.floor((Math.random() * 20) + 1);
    }

    this.addNote = function(index) {
      if (this.addingNote) {
        this.instForNote = index;
      }
    }

    this.getNotes = function() {
      httpService.getNotes($stateParams.id)
      .then(function(res) {
        var notes = res.data;

        that.recipe.instructions.forEach(function(instruction) {
          that.notes.push([]);
        })

        notes.forEach(function(note) {
          that.notes[note.instruction].push(note);
        })
      })
    }

    this.saveNote = function(index) {
      var note = {
        text: this.noteText,
        instruction: index
      }
      httpService.saveNote(note, $stateParams.id)
      .then(function() {
        that.getNotes();
      })
      that.instForNote = null;
      that.addingNote = false;
    }

    httpService.getRecipe($stateParams.id)
    .then(function(res) {
      that.recipe = res.data;
      that.getNotes();
    })
  }
});