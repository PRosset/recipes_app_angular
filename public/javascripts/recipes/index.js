angular.module("recipesApp")
.component("indexPage", {
    template: `
      <input type="text" class="recipeSearch" ng-model="search" placeholder="Search for a recipe">
      <div class="recipeGrid">
        <div class="recipeCard"  ng-click="$ctrl.show(recipe.id)" ng-repeat="recipe in $ctrl.recipes | filter: search">
          <div class="recipeCont" style="background-image: url({{recipe.photo}}); background-color: rgba(0,0,0,.5);">
            <div class="recipeCover">
              <h2>{{recipe.name}}</h2>
            </div>
          </div>
        </div>
      </div>
    `,
  controller: function (httpService, $state) {
    var that = this;
    this.recipes = null;

    httpService.indexRecipes()
    .then(function(res) {
      console.log(res.data);
      that.recipes = res.data;
    })

    this.show = function(id) {
      console.log("I was clicked");
      $state.go('show', { id: id });
    };
  }
});