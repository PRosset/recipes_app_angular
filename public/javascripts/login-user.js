angular.module("recipesApp")
.component("loginUser", {
	template: `
		<form ng-submit="login(loginForm)" role="form" ng-init="loginForm = {}">
		  <div class="form-group">
		    <label>email</label>
		    <input type="email" name="email" ng-model="loginForm.email" required="required" class="form-control"/>
		  </div>

		  <div class="form-group">
		    <label>password</label>
		    <input type="password" name="password" ng-model="loginForm.password" required="required" class="form-control"/>
		  </div>

		  <button type="submit" class="btn btn-primary btn-lg">Sign in</button>
		</form>
	`,
	controller: function($scope, $auth) {
		$scope.login = function() {
      $auth.submitLogin($scope.loginForm)
        .then(function(resp) {
          console.log("You logged in!" + resp)
        })
        .catch(function(resp) {
          console.log("Fuck you!" + resp)
        });
    };
	}
})