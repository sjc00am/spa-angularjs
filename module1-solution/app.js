(function(){
  'use strict';

  angular.module('LunchCheckerApp', [])
  .controller('LunchCheckerController', LunchCheckerController);

  LunchCheckerController.$inject = ['$scope'];
  function LunchCheckerController($scope) {
    $scope.lunch = "";
    $scope.message = "";
    $scope.messageColor = "";

    $scope.calcMessage = function () {
      var rawItems = $scope.lunch.split(',');
      var cleanItems = [];

      // exclude empty items (",," or ",<any number of space>,") from count
      for(var i = 0; i < rawItems.length; i++) {
        rawItems[i] = rawItems[i].trim();
        if(rawItems[i]) {
          cleanItems.push(rawItems[i]);
        }
      }

      if(cleanItems.length == 0) {
        $scope.messageColor = "red";
        $scope.message = "Please enter data first!";
        return;
      }

      $scope.messageColor = "green";
      if(cleanItems.length <= 3) {
        $scope.message = "Enjoy!";
      }
      else {
        $scope.message = "Too much!";
      }
    }
  }

})();
