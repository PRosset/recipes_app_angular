angular.module("recipesApp")
.component("formPage", {
    template: `
        <h1>Hello world</h1>
        <input placeholder="Search for a recipe" ng-model="$ctrl.searchTerm">
        <button ng-click="$ctrl.searchApiKeyword()">Search for a recipe</button>

        <button ng-show="$ctrl.recipeIndex > 0" ng-click="$ctrl.decRecipe()">Previous</button>
        <button ng-show="$ctrl.recipeIndex < $ctrl.recipeNumber" ng-click="$ctrl.incRecipe()">Next</button>
        <h3>{{$ctrl.recipeIndex}}</h3>
        <form name="form" ng-submit="$ctrl.addRecipe(form)" novalidate>
            
            <p>Name: {{$ctrl.name}}</p>
            <input type="hidden" ng-model="$ctrl.name">

            <img ng-src="{{$ctrl.photo}}" />

            <button ng-click="$ctrl.searchApiId()">Complete this recipe!</button>
            
            <p>Photo URL: {{$ctrl.photo}}</p>
            <input type="hidden" ng-model="$ctrl.photo">
            
            <p>Serving size: {{$ctrl.recipe.serving_size}}</p>
            <input type="hidden" ng-model="$ctrl.recipe.serving_size">
            
            <p>Source URL: {{recipe.source_url}}</p>
            <input type="hidden" ng-model="$ctrl.recipe.source_url">
            
            <p ng-repeat="ingredient in $ctrl.recipe.ingredients">{{ingredient}}</p>
            <input type="hidden" ng-model="$ctrl.recipe.ingredients">
            
            <label>Instructions</label>
            <input type="textarea" ng-repeat="instruction in $ctrl.instructions track by $index"  ng-model="$ctrl.instructions[$index]">
            
            <p ng-repeat="instruction in $ctrl.instructions track by $index">
                {{$index}} : {{instruction}}
            </p>

            <button ng-click="$ctrl.incInstructions()">Add Instruction Step</button>

          <button type="submit">Submit Recipe</button>
        </form>
    `,
    controller: function (httpService) {
        var that = this;
        this.recipes = null;
        this.oneRecipe = null;

        this.recipeNumber = null;
        this.recipeIndex = 0;
        this.incRecipe = function() {
            this.recipeIndex+=1;
            this.name = this.recipes === null ? null : this.recipes[this.recipeIndex].recipeName;
            this.photo = this.recipes === null ? null : this.recipes[this.recipeIndex].imageUrlsBySize["90"];
        };
        this.decRecipe = function() {
            this.recipeIndex-=1;
            this.name = this.recipes === null ? null : this.recipes[this.recipeIndex].recipeName;
            this.photo = this.recipes === null ? null : this.recipes[this.recipeIndex].imageUrlsBySize["90"];
        };
        this.instructions = ["Test"];
        this.incInstructions = function () {
            this.instructions.push("");
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
            })
        }
        this.addRecipe = function() {
            httpService.addRecipe(this.recipe);
        };
    }
})