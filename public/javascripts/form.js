angular.module("recipesApp")
.component("formPage", {
  template: `
  <div class="formWrapper">
    <div class="formSection">
      <input placeholder="Search for a recipe" ng-model="$ctrl.searchTerm">
      <div class="btn" ng-click="$ctrl.searchApiKeyword()">Search</div>
    </div>
    <div class="formSection pagination">
      <div class="btn" ng-class="{disabled: ($ctrl.recipeIndex === 0)}" ng-click="$ctrl.decRecipe()"><</div>
        <h3>{{$ctrl.name}}</h3>
      <div class="btn" ng-class="{disabled: ($ctrl.recipeIndex === $ctrl.recipeNumber)}" ng-click="$ctrl.incRecipe()">></div>
    </div>
    <input type="hidden" ng-model="$ctrl.name">
    <img ng-show="$ctrl.photo" ng-src="{{$ctrl.photo}}" />
    <div class="btn recipeComplete" ng-show="!$ctrl.oneRecipe" ng-click="$ctrl.searchApiId()">Complete this recipe!</div>
    <div class="formSection">
      <div class="formContent">
        <div ng-show="$ctrl.oneRecipe">
          <p><b>Photo URL:</b> <a href="{{$ctrl.photo}}" target="_blank">Link</a></p>
          <input type="hidden" ng-model="$ctrl.photo">

          <p><b>Source URL:</b> <a href="{{$ctrl.source_url}}" target="_blank">{{$ctrl.source_name}} Link</a></p>
          <input type="hidden" ng-model="$ctrl.source_url">

          <p><b>Serving size:</b> {{$ctrl.serving_size}}</p>
          <input type="hidden" ng-model="$ctrl.serving_size">

          <label><b>Description: </b></label>
          <input class="instInput" type="textarea" ng-model="$ctrl.description">

          <input type="hidden" ng-model="$ctrl.health_labels">

          <label><b>Ingredients:</b></label>
          <ul>
            <li ng-repeat="ingredient in $ctrl.ingredients track by $index">{{ingredient}}</li>
          </ul>
          <input class="instInput" type="hidden" ng-model="$ctrl.ingredients">
          <div class="instTitle">
            <label><b>Instructions</b></label>
            <div class="btn" ng-click="$ctrl.incInstructions()">+</div>
            <div class="btn" ng-click="$ctrl.decInstructions()">-</div>
          </div>
          <div class="instList" ng-repeat="instruction in $ctrl.instructions track by $index">
            <b>{{$index + 1}}</b><input class="instInput" type="textarea" ng-model="$ctrl.instructions[$index]" placeholder="Add an instruction...">
          </div>

          <div class="instTitle">
            <label><b>Labels:</b></label>
            <div class="btn" ng-click="$ctrl.incLabels()">+</div>
            <div class="btn" ng-click="$ctrl.decLabels()">-</div>
          </div>
          <div ng-repeat="label in $ctrl.labels track by $index">
            <input type="text" ng-model="$ctrl.labels[$index]" placeholder="Add label...">
          </div>
          <div class="formSection">
          <div class="btn recipeComplete" ng-click="$ctrl.addRecipe()">Submit Recipe</div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `,
    controller: function (httpService) {
        var that = this;
        this.recipes = null;
        this.oneRecipe = null;

        this.recipeNumber = null;
        this.recipeIndex = 0;
        this.incRecipe = function() {
          if (this.recipeIndex < this.recipeNumber) {
            this.recipeIndex+=1;
            this.oneRecipe = null;
            this.name = this.recipes === null ? null : this.recipes[this.recipeIndex].recipeName;
            this.photo = this.recipes === null ? null : this.recipes[this.recipeIndex].imageUrlsBySize["90"];
          }
        };
        this.decRecipe = function() {
          if (this.recipeIndex > 0) {
            this.recipeIndex-=1;
            this.oneRecipe = null;
            this.name = this.recipes === null ? null : this.recipes[this.recipeIndex].recipeName;
            this.photo = this.recipes === null ? null : this.recipes[this.recipeIndex].imageUrlsBySize["90"];
          }
        };
        this.instructions = [""];
        this.incInstructions = function () {
            this.instructions.push("");
        };
        this.decInstructions = function () {
          this.instructions.pop();
        }

        this.labels = [""];
        this.incLabels = function () {
          this.labels.push("");
        };
        this.decLabels = function () {
          this.labels.pop();
        };

        this.searchApiKeyword = function() {
            httpService.recipeFromApiKeyword(this.searchTerm)
            .then(function(res) {
                console.log(res.data.matches);
                that.recipeNumber = res.data.matches.length;
                that.recipes = res.data.matches;
                that.name = res.data.matches[that.recipeIndex].recipeName;
                that.photo = res.data.matches[that.recipeIndex].imageUrlsBySize["90"];
            })
        };
        this.searchApiId = function() {
            httpService.recipeFromApiId(this.recipes[this.recipeIndex].id)
            .then(function(res) {
                console.log(res.data)
                that.oneRecipe = res.data;
                that.serving_size = res.data.numberOfServings;
                that.source_url = res.data.source.sourceRecipeUrl;
                that.ingredients = res.data.ingredientLines;
                that.photo = res.data.images[0].hostedLargeUrl;
                that.source_name = res.data.source.sourceDisplayName;
            })
        }
        this.addRecipe = function() {
            var recipeToSave = {
                name: this.name,
                photo: this.photo,
                source_url: this.source_url,
                serving_size: this.serving_size,
                description: this.description,
                ingredients: this.ingredients,
                instructions: this.instructions,
                labels: [this.labels]
            }
            httpService.addRecipe(recipeToSave)
            .then(function(res) {
              console.log(res);
              that.searchTerm = "";
              that.recipes = null;
              that.oneRecipe = null;
              that.name = null;
              that.photo = null;
              that.source_url = null;
              that.ingredients = [""];
              that.instructions = [""];
              that.description = null;
              that.source_url = null;
              that.serving_size = null;
              that.labels = [""];
            })
        };
    }
})