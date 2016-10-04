angular.module("recipesApp")
.service("httpService", function($http) {
	this.indexRecipes = function () {
		return $http.get("/api");
	}
    this.recipeFromApi = function (keyword) {
        return $http.get("/api/yummly/" + keyword);
    }
    this.addRecipe = function (recipe) {
        // return $http.post(" address for our own Node server ", recipe)
    }
})