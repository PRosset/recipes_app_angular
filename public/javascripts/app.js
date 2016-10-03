angular.module("recipesApp", ["ui.router"])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/recipes")
    $stateProvider
    .state("home", {
        url: "/home",
        template: "<h3>This is the home view</h3>"
    })
    .state("recipes", {
        url: "/recipes",
        template: "<index-page></index-page>"
    })
    .state("form", {
        url: "/form",
        template: "<form-page></form-page>"
    })
});