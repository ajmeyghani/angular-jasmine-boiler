describe('Custom search directive tests:', function() {
  var underTest, $compile, $rootScope, $scope, element;
  beforeEach(function() {
    /* run the following before each describe block */
    angular.mock.module('app');
    angular.mock.inject(function(_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      element = $compile(angular.element('<custom-search></custom-search>'))($rootScope);
    });
    $rootScope.$digest();
  });
  /* From each describe block to another, the controller and the
  states of scope are refreshed.
  */
  describe('Directive:', function() {
    it('should update the content', function() {
      element.find('input').val('someterm').triggerHandler('input');
      expect(element.text().toLowerCase()).toBe('searching for: someterm');
    });
  });
});
