angular.module("recipesApp")
.component("formPage", {
    template: `
        <h1>Hello world</h1>
        <input placeholder="Search for a recipe" ng-model="$ctrl.searchTerm">
        <button ng-click="$ctrl.searchApi">Search for a recipe</button>
        <form name="form" ng-submit="$ctrl.addRecipe(form)" novalidate>
            <p>Name: {{$ctrl.recipe.name}}</p>
            <input type="hidden" ng-model="$ctrl.recipe.name">
            <p>Photo URL: {{$ctrl.recipe.photo}}</p>
            <input type="hidden" ng-model="$ctrl.recipe.photo">
            <p>Serving size: {{$ctrl.recipe.serving_size}}</p>
            <input type="hidden" ng-model="$ctrl.recipe.serving_size">
            <p>Source URL: {{recipe.source_url}}</p>
            <input type="hidden" ng-model="$ctrl.recipe.source_url">
            <p ng-repeat="ingredient in $ctrl.recipe.ingredients">{{ingredient}}</p>
            <input type="hidden" ng-model="$ctrl.recipe.ingredients">
            <label>Instructions</label>
            <input type="textarea" ng-repeat="instruction in $ctrl.instructions track by $index"  ng-model="$ctrl.instructions[$index]">
            <button ng-click="$ctrl.incInstructions()">Add Instruction Step</button>
            <p ng-repeat="instruction in $ctrl.instructions track by $index">
                {{$index}} : {{instruction}}
            </p>
          <button type="submit">Submit Recipe</button>
        </form>
    `,
    controller: function (httpService) {
        this.recipe = null;
        this.instructions = ["Test"];
        this.incInstructions = function () {
            this.instructions.push("");
        }
        this.searchApi = function() {
            httpService.recipeFromApi(this.searchTerm)
            .then(function(res) {
                // this.recipe.name = res.blah
                // fill this in
            })
        };
        this.addRecipe = function() {
            httpService.addRecipe(this.recipe);
        };
    }
})