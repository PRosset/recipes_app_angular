angular.module("recipesApp")
.component("indexPage", {
    template: `
        <h1>This is the recipes view</h1>
        <div ng-repeat="recipe in $ctrl.recipes">
            <p>{{recipe.name}}</p>
            <p>{{recipe.serving_size}}</p>
            <img ng-src={{recipe.photo}} />
            <p ng-repeat="ingredient in recipe.ingredients">{{ingredient}}</p>
            <p ng-repeat="instruction in recipe.instructions">{{instruction}}</p>
        </div>
    `,
    controller: function (httpService) {
        var that = this;
        this.recipes = null;
        
        httpService.indexRecipes()
        .then(function(res) {
            console.log(res.data);
            that.recipes = res.data;
        })
    }
});