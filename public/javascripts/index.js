angular.module("recipesApp")
.component("index", {
    template: `
        <p>{{$ctrl.recipe.name}}</p>
        <p>{{$ctrl.recipe.serving_size}}</p>
        <p ng-repeat="ingredient in $ctrl.recipe.ingredients">{{ingredient}}</p>
        <p ng-repeat="direction in $ctrl.recipe.directions">{{direction}}</p>
    `,
    controller: function ($http) {
        this.that = this;
        this.recipes = null;
        this.getRecipes = function() {
            return $http.get("localhost:3000/recipes/")
        }
        this.getRecipes()
        .then(function(res) {
            this.that.recipes = res;
        })
    }
});