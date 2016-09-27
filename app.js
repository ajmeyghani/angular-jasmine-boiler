var app = angular.module('app', []);
app.constant('API_HOST', 'http://localhost:3000');
app.factory('endpoints', function() {
  return {
    users: '/api/users',
    books: '/api/books',
    allData: '/api/data'
  };
});
app.factory('resourceEndpoints', function(API_HOST, endpoints) {
  return {
    endpointFor: function(key) {
      return API_HOST + endpoints[key];
    }
  };
});
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
      return item.id !== toRemoveItem.id;
    });
    return $scope.app.items;
  };
});
app.factory('mainService', function($http, resourceEndpoints) {
  return {
    add: function(a, b) {
      return a + b;
    },
    getData: function() {
      var resource = resourceEndpoints.endpointFor('allData');
      return $http.get(resource);
    }
  };
});
app.directive('customSearch', function() {
  return {
    restrict: 'EA',
    scope: {},
    controller: function($scope) {
      $scope.model = {
        searchValue: ''
      };
    },
    template: '<input type="text" placeholder="search ..." ng-model="model.searchValue">'+
              '<p>Searching for: {{model.searchValue}}</p>'
  };
});
angular.element(document).ready(function () {
  angular.bootstrap(document.getElementsByTagName('html')[0], ['app']);
});
