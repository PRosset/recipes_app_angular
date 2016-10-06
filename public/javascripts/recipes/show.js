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
          <div class="recipeNameCont">
            <h1>{{$ctrl.recipe.name}}</h1>
            <svg ng-class="{showFavIcon: !$ctrl.recipe.favorite, showFaved: $ctrl.recipe.favorite}" ng-click="$ctrl.toggleFav($ctrl.recipe)"version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 68 68" style="enable-background:new 0 0 68 68;" xml:space="preserve">
              <g>
                <path d="M41.7,20c0.2,0.5,0.5,0.9,0.7,1.2c0.7,0.9,1.9,1,2.8,0.3c0.9-0.7,1-1.9,0.3-2.8c0,0-0.1-0.1-0.2-0.3
                  C45,17.5,45,16.3,45.7,15c1.4-2.5,1.4-5,0.5-7C46,7.4,45.8,7,45.6,6.8c-0.7-0.9-1.9-1-2.8-0.3c-0.9,0.7-1,1.9-0.3,2.8
                  c0,0,0.1,0.1,0.2,0.3c0.4,0.9,0.4,2.1-0.4,3.4C40.8,15.5,40.8,18,41.7,20z"/>
                <path d="M21.7,20c0.2,0.5,0.5,0.9,0.7,1.2c0.7,0.9,1.9,1,2.8,0.3c0.9-0.7,1-1.9,0.3-2.8c0,0-0.1-0.1-0.2-0.3
                  C25,17.5,25,16.3,25.7,15c1.4-2.5,1.4-5,0.5-7C26,7.4,25.8,7,25.6,6.8c-0.7-0.9-1.9-1-2.8-0.3c-0.9,0.7-1,1.9-0.3,2.8
                  c0,0,0.1,0.1,0.2,0.3c0.4,0.9,0.4,2.1-0.4,3.4C20.8,15.5,20.8,18,21.7,20z"/>
                <path d="M31.5,19.4c0.3,0.8,0.6,1.3,0.9,1.7c0.6,0.9,1.9,1.2,2.8,0.6c0.9-0.6,1.2-1.9,0.6-2.8c-0.1-0.1-0.3-0.5-0.5-1
                  c-0.8-1.9-0.8-3.9,0.5-5.8c2.1-3.1,2.1-6.5,0.9-9.5c-0.3-0.8-0.6-1.3-0.9-1.7c-0.6-0.9-1.9-1.2-2.8-0.6c-0.9,0.6-1.2,1.9-0.6,2.8
                  c0.1,0.1,0.3,0.5,0.5,1C33.6,6,33.6,8,32.3,9.9C30.3,13,30.3,16.4,31.5,19.4z"/>
              </g>
              <path d="M66,34h-7v-6c0-1.1-0.9-2-2-2H11c-1.1,0-2,0.9-2,2v6H2c-1.1,0-2,0.9-2,2s0.9,2,2,2h7v24c0,3.3,2.7,6,6,6h38c3.3,0,6-2.7,6-6
                V38h7c1.1,0,2-0.9,2-2S67.1,34,66,34z M44.4,53.6L35,62.4c-0.7,0.7-1.6,0.7-2.3,0l-9.3-8.8c-6.2-6.2-9.3-11.4-3.8-18.4
                c3.1-4.1,9.2-5.9,14-1.4c0.2,0.2,0.4,0.2,0.6,0c4.4-4.6,10.6-2.7,14.1,1.4C54.1,41.9,50.7,47.3,44.4,53.6z"/>
            </svg>
          </div>
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

    this.toggleFav = function(recipe) {
      console.log(recipe);
      this.recipe.favorite = !this.recipe.favorite;
      httpService.favRecipe(recipe)
      .then(function(res) {
        console.log(res);
      })
    }

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