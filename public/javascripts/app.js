angular.module("recipesApp", ["ui.router", "ng-token-auth"])

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
    .state("show", {
        url: "/recipes/:id",
        template: "<show></show>"
    })
    .state("login", {
        url: "/login",
        template: "<login-user></login-user>"
    })
    .state("register", {
        url: "/register",
        template: "<register-user></register-user>"
    })
});