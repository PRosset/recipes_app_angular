angular.module("recipesApp")
.service("httpService", function($http) {
	this.indexRecipes = function () {
		return $http.get("/api");
	}
    this.getRecipe = function(id) {
        return $http.get("/api/" + id);
    }
    this.recipeFromApiKeyword = function (keyword) {
        return $http.get("/api/yummly-keyword/" + keyword);
    }
    this.recipeFromApiId = function (id) {
    	return $http.get("/api/yummly-id/" + id);
    }
    this.addRecipe = function (recipe) {
        return $http.post("/api/recipe", recipe);
    }
    this.getNotes = function (recipeId) {
        return $http.get("/api/notes/" + recipeId);
    }
    this.saveNote = function (note, recipeId) {
        return $http.post("/api/note/" + recipeId, note);
    }
    this.editNote = function (note) {
        return $http.put("/api/note/edit", note)
    }
    this.favRecipe = function (recipe) {
        return $http.put("/api/togglefav", recipe);
    }
    this.deleteNote = function (noteId, recipeId) {
        return $http.delete("/api/" + recipeId + "/note/" + noteId)
    }
})