angular.module("recipesApp")
.component("indexPage", {
    template: `
      <div class="recipeSearchBar">
        <input type="text" class="recipeSearch" ng-model="search" placeholder="Search for a recipe...">
        <div ng-click="$ctrl.favFilter()">
          <svg class="btn filterIcon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 68 68" style="enable-background:new 0 0 68 68;" xml:space="preserve">
            <g>
              <path d="M41.7,20c0.2,0.5,0.5,0.9,0.7,1.2c0.7,0.9,1.9,1,2.8,0.3c0.9-0.7,1-1.9,0.3-2.8c0,0-0.1-0.1-0.2-0.3
                C45,17.5,45,16.3,45.7,15c1.4-2.5,1.4-5,0.5-7C46,7.4,45.8,7,45.6,6.8c-0.7-0.9-1.9-1-2.8-0.3c-0.9,0.7-1,1.9-0.3,2.8
                c0,0,0.1,0.1,0.2,0.3c0.4,0.9,0.4,2.1-0.4,3.4C40.8,15.5,40.8,18,41.7,20z"/>
              <path d="M21.7,20c0.2,0.5,0.5,0.9,0.7,1.2c0.7,0.9,1.9,1,2.8,0.3c0.9-0.7,1-1.9,0.3-2.8c0,0-0.1-0.1-0.2-0.3
                C25,17.5,25,16.3,25.7,15c1.4-2.5,1.4-5,0.5-7C26,7.4,25.8,7,25.6,6.8c-0.7-0.9-1.9-1-2.8-0.3c-0.9,0.7-1,1.9-0.3,2.8
                c0,0,0.1,0.1,0.2,0.3c0.4,0.9,0.4,2.1-0.4,3.4C20.8,15.5,20.8,18,21.7,20z"/>
              <path d="M31.5,19.4c0.3,0.8,0.6,1.3,0.9,1.7c0.6,0.9,1.9,1.2,2.8,0.6c0.9-0.6,1.2-1.9,0.6-2.8c-0.1-0.1-0.3-0.5-0.5-1
                c-0.8-1.9-0.8-3.9,0.5-5.8c2.1-3.1,2.1-6.5,0.9-9.5c-0.3-0.8-0.6-1.3-0.9-1.7c-0.6-0.9-1.9-1.2-2.8-0.6c-0.9,0.6-1.2,1.9-0.6,2.8
                c0.1,0.1,0.3,0.5,0.5,1C33.6,6,33.6,8,32.3,9.9C30.3,13,30.3,16.4,31.5,19.4z"/>
            </g>
            <path d="M66,34h-7v-6c0-1.1-0.9-2-2-2H11c-1.1,0-2,0.9-2,2v6H2c-1.1,0-2,0.9-2,2s0.9,2,2,2h7v24c0,3.3,2.7,6,6,6h38c3.3,0,6-2.7,6-6
              V38h7c1.1,0,2-0.9,2-2S67.1,34,66,34z M44.4,53.6L35,62.4c-0.7,0.7-1.6,0.7-2.3,0l-9.3-8.8c-6.2-6.2-9.3-11.4-3.8-18.4
              c3.1-4.1,9.2-5.9,14-1.4c0.2,0.2,0.4,0.2,0.6,0c4.4-4.6,10.6-2.7,14.1,1.4C54.1,41.9,50.7,47.3,44.4,53.6z"/>
          </svg>
        </div>
      </div>
      <div class="recipeGrid">
        <div class="recipeCard" ng-repeat="recipe in $ctrl.recipes | filter: search | filter: $ctrl.filterFavs">
          <div class="favIconContainer">
            <svg ng-class="{favIcon: !recipe.favorite, faved: recipe.favorite}" ng-click="$ctrl.toggleFav(recipe)" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 68 68" style="enable-background:new 0 0 68 68;" xml:space="preserve">
              <g>
                <path d="M41.7,20c0.2,0.5,0.5,0.9,0.7,1.2c0.7,0.9,1.9,1,2.8,0.3c0.9-0.7,1-1.9,0.3-2.8c0,0-0.1-0.1-0.2-0.3
                  C45,17.5,45,16.3,45.7,15c1.4-2.5,1.4-5,0.5-7C46,7.4,45.8,7,45.6,6.8c-0.7-0.9-1.9-1-2.8-0.3c-0.9,0.7-1,1.9-0.3,2.8
                  c0,0,0.1,0.1,0.2,0.3c0.4,0.9,0.4,2.1-0.4,3.4C40.8,15.5,40.8,18,41.7,20z"/>
                <path d="M21.7,20c0.2,0.5,0.5,0.9,0.7,1.2c0.7,0.9,1.9,1,2.8,0.3c0.9-0.7,1-1.9,0.3-2.8c0,0-0.1-0.1-0.2-0.3
                  C25,17.5,25,16.3,25.7,15c1.4-2.5,1.4-5,0.5-7C26,7.4,25.8,7,25.6,6.8c-0.7-0.9-1.9-1-2.8-0.3c-0.9,0.7-1,1.9-0.3,2.8
                  c0,0,0.1,0.1,0.2,0.3c0.4,0.9,0.4,2.1-0.4,3.4C20.8,15.5,20.8,18,21.7,20z"/>
                <path d="M31.5,19.4c0.3,0.8,0.6,1.3,0.9,1.7c0.6,0.9,1.9,1.2,2.8,0.6c0.9-0.6,1.2-1.9,0.6-2.8c-0.1-0.1-0.3-0.5-0.5-1
                  c-0.8-1.9-0.8-3.9,0.5-5.8c2.1-3.1,2.1-6.5,0.9-9.5c-0.3-0.8-0.6-1.3-0.9-1.7c-0.6-0.9-1.9-1.2-2.8-0.6c-0.9,0.6-1.2,1.9-0.6,2.8
                  c0.1,0.1,0.3,0.5,0.5,1C33.6,6,33.6,8,32.3,9.9C30.3,13,30.3,16.4,31.5,19.4z"/>
              </g>
              <path d="M66,34h-7v-6c0-1.1-0.9-2-2-2H11c-1.1,0-2,0.9-2,2v6H2c-1.1,0-2,0.9-2,2s0.9,2,2,2h7v24c0,3.3,2.7,6,6,6h38c3.3,0,6-2.7,6-6
                V38h7c1.1,0,2-0.9,2-2S67.1,34,66,34z M44.4,53.6L35,62.4c-0.7,0.7-1.6,0.7-2.3,0l-9.3-8.8c-6.2-6.2-9.3-11.4-3.8-18.4
                c3.1-4.1,9.2-5.9,14-1.4c0.2,0.2,0.4,0.2,0.6,0c4.4-4.6,10.6-2.7,14.1,1.4C54.1,41.9,50.7,47.3,44.4,53.6z"/>
            </svg>

          </div>
          <div ng-click="$ctrl.show(recipe.id)"  class="recipeCont" style="background-image: url({{recipe.photo}}); background-color: rgba(0,0,0,.5);">
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
    this.filterFavs = " ";

    this.favFilter = function () {
      if (this.filterFavs === " ") {
        this.filterFavs = true;
      } else if (this.filterFavs === true){
        this.filterFavs = " ";
      }
    }


    httpService.indexRecipes()
    .then(function(res) {
      console.log(res.data);
      that.recipes = res.data;
    })

    this.toggleFav = function(recipe) {
      console.log(recipe);
      recipe.favorite = !recipe.favorite;
      httpService.favRecipe(recipe)
      .then(function(res) {
        console.log(res);
      })
    }

    this.show = function(id) {
      console.log("I was clicked");
      $state.go('show', { id: id });
    };
  }
});