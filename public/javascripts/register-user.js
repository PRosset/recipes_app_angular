angular.module("recipesApp")
.component("registerUser", {
	template: `
	<form ng-submit="register(registrationForm)" role="form" ng-init="registrationForm = {}">
  <div class="form-group">
    <label>email</label>
    <input type="email" name="email" ng-model="registrationForm.email" required="required" class="form-control"/>
  </div>

  <div class="form-group">
    <label>password</label>
    <input type="password" name="password" ng-model="registrationForm.password" required="required" class="form-control"/>
  </div>

  <div class="form-group">
    <label>password confirmation</label>
    <input type="password" name="password_confirmation" ng-model="registrationForm.password_confirmation" required="required" class="form-control"/>
  </div>

  <button type="submit" class="btn btn-primary btn-lg">Register</button>
</form>
	`,
	controller: function($scope, $auth) {
    $scope.register = function() {
      $auth.submitRegistration($scope.registrationForm)
        .then(function(resp) {
          // handle success response
        })
        .catch(function(resp) {
          // handle error response
        });
    };
  }
})