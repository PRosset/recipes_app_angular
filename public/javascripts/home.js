angular.module("recipesApp")
.component("homePage", {
  template: `
    <div class="splashPage">
      <h1>Hello</h1>
    </div>
  `,
  controller: function (httpService) {
    this.recipes = null;

    httpService.indexRecipes()
    .then(function(res) {
      console.log(res.data);
      that.recipes = res.data;
    })
  }
});