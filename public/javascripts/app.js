angular.module("recipesApp", ["ui.router"])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/home");
    $stateProvider
    .state("home", {
        url: "/home",
        template: "<h3>Here's angular ui-router</h3>"
    })
    .state("index", {
        usrl: "/index",
        template: "<index></index>"
    })
    .state("form", {
        url: "/form",
        template: "<form-page></form-page>"
    })
});