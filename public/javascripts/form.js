angular.module("recipesApp")
.component("formPage", {
  template: `
  <div class="formWrapper">
    <div class="formSection">
      <input placeholder="Search for a recipe" ng-model="$ctrl.searchTerm">
      <div class="btn" ng-click="$ctrl.searchApiKeyword()">Search</div>
    </div>
    <div class="formSection pagination">
      <div class="btn" ng-click="$ctrl.decRecipe()"><</div>
        <h3>{{$ctrl.recipeIndex}}</h3>
      <div class="btn" ng-click="$ctrl.incRecipe()">></div>
    </div>
    <h2>{{$ctrl.name}}</h2>
    <input type="hidden" ng-model="$ctrl.name">
    <img ng-src="{{$ctrl.photo}}" />
    <div class="btn recipeComplete" ng-show="!$ctrl.oneRecipe" ng-click="$ctrl.searchApiId()">Complete this recipe!</div>
    <div class="formSection">
      <div class="formContent">
        <div ng-show="$ctrl.oneRecipe">
          <p>Photo URL: <a href="{{$ctrl.photo}}" target="_blank">Link</a></p>
          <input type="hidden" ng-model="$ctrl.photo">

          <p>Source URL: <a href="{{$ctrl.source_url}}" target="_blank">{{$ctrl.source_name}}</a></p>
          <input type="hidden" ng-model="$ctrl.source_url">

          <p>Serving size: {{$ctrl.serving_size}}</p>
          <input type="hidden" ng-model="$ctrl.serving_size">

          <input type="hidden" ng-model="$ctrl.health_labels">

          <h3>Ingredients:</h3>
          <ul>
            <li ng-repeat="ingredient in $ctrl.ingredients track by $index">{{ingredient}}</li>
          </ul>
          <input class="instInput" type="textarea" ng-model="$ctrl.ingredients">
          <div class="instTitle">
            <h3>Instructions</h3>
            <div class="btn" ng-click="$ctrl.incInstructions()">+</div>
            <div class="btn" ng-click="$ctrl.decInstructions()">-</div>
          </div>
          <div class="instList" ng-repeat="instruction in $ctrl.instructions track by $index">
            <b>{{$index + 1}}</b><input class="instInput" type="textarea" ng-model="$ctrl.instructions[$index]" placeholder="Add an instruction...">
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
                ingredients: this.ingredients,
                instructions: this.instructions,
                health_labels: ["some shit"]
            }
            httpService.addRecipe(recipeToSave)
        };
    }
})