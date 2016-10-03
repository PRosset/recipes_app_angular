angular.module("recipesApp")
.service("httpService", function($http) {

    this.recipeFromApi = function () {
        // return $http.get( HTTP call to Node server )
    }
    this.addRecipe = function (recipe) {
        // return $http.post(" address for our own Node server ", recipe)
    }
})