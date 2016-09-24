describe('Main Controller', function() {
  var underTest, $scope;
  beforeEach(function() {
    angular.mock.module('app');
    angular.mock.inject(function($controller, $rootScope) {
      $scope = $rootScope.$new();
      underTest = $controller('mainCtrl', {
        $scope: $scope
      });
    });
  });
  describe('The add method', function() {
    it('should add an item to $scope.app.items when called with an object', function() {
      underTest.add({id: 1, name: 'boo'});
      underTest.add({id: 2, name: 'boooo'});
      expect($scope.app.items.length).toBe(2);
    });
  });
  describe('The remove method', function() {
    it('should remove an item from $scope.app.items when called with an object', function() {
      $scope.app.items = [
        {id: 1}, {id: 2}, {id: 3}
      ];
      underTest.remove({id: 3});
      expect($scope.app.items.length).toBe(2);
      expect($scope.app.items).toEqual([{id: 1}, {id: 2}]);
    });
  });
});


