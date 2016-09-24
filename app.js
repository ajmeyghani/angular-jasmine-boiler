var app = angular.module('app', []);
app.constant('API_HOST', 'http://localhost:3000');
app.controller('mainCtrl', function($scope) {
  var mainCtrl = this;
  $scope.app = {
    items: []
  };
  this.add = function(item) {
    $scope.app.items.push(item);
    return $scope.app.items;
  };
  this.remove = function(toRemoveItem) {
    $scope.app.items = $scope.app.items.filter(function(item) {
      return item.id === toRemoveItem.id;
    });
    return $scope.app.items;
  };
});
app.factory('mainService', function($http, API_HOST) {
  return {
    add: function(a, b) {
      return a + b;
    },
    getData: function() {
      return $http.get(API_HOST + '/data');
    }
  };
});
app.directive('customSearch', function() {
  return {
    restrict: 'EA',
    scope: {},
    controller: function($scope) {
      $scope.searchValue = '';
    },
    template: '<input type="text" placeholder="search ..." ng-model="searchValue">'+
              '<p>Searching for: {{searchValue}}</p>'
  };
});
angular.element(document).ready(function () {
  angular.bootstrap(document.getElementsByTagName('html')[0], ['app']);
});
