angular.module("recipesApp", ["ui.router"])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/recipes")
    $stateProvider
    .state("home", {
        url: "/home",
        template: "<home-page></home-page>"
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