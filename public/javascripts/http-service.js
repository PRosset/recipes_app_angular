angular.module("recipesApp")
.service("httpService", function($http) {
	this.indexRecipes = function () {
		return $http.get("/api");
	}
    this.recipeFromApiKeyword = function (keyword) {
        return $http.get("/api/yummly-keyword/" + keyword);
    }
    this.recipeFromApiId = function (id) {
    	return $http.get("/api/yummly-id/" + id);
    }
    this.addRecipe = function (recipe) {
        return $http.post("/api", recipe);
    }
})