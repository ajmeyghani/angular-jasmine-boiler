describe('Main Controller Tests:', function() {
  var underTest, scp;
  beforeEach(function() {
    /* run the following before each describe block */
    angular.mock.module('app');
    angular.mock.inject(function($controller, $rootScope) {
      scp = $rootScope.$new();
      underTest = $controller('mainCtrl', {
        $scope: scp
      });
    });
  });
  /* From each describe block to another, the controller and the
  states of scope are refreshed.
  */
  describe('The add method', function() {
    it('should add an item to $scope.app.items when called with an object', function() {
      underTest.add({id: 1, name: 'boo'});
      underTest.add({id: 2, name: 'boooo'});
      expect(scp.app.items.length).toBe(2);
    });
  });
  describe('The remove method', function() {
    it('should remove an item from scp.app.items when called with an object', function() {
      // set initial state of the items.
      scp.app.items = [
        {id: 1}, {id: 2}, {id: 3}
      ];
      underTest.remove({id: 3});
      expect(scp.app.items.length).toBe(2);
      expect(scp.app.items).toEqual([{id: 1}, {id: 2}]);
    });
  });
});


