describe('Custom search directive tests:', function() {
  var underTest, $compile, $rootScope, $scope, element;
  beforeEach(function() {
    angular.mock.module('app');
    angular.mock.inject(function(_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      $rootScope.mainName = 'tom doe';
      element = $compile('<custom-search name="mainName"></custom-search>')($rootScope);
    });
    $rootScope.$digest();
  });
  describe('When initialized', function() {
    it('should set the name field to the value passed in', function() {
      expect(element.find('span').text().toLowerCase()).toBe('name is tom doe');
    });
  });
  describe('changing the input field value', function() {
    it('should update the paragraph value inside the directive.', function() {
      element.find('input').val('someterm').triggerHandler('input');
      console.log(element.html());
      expect(element.find('p').text().toLowerCase()).toBe('searching for: someterm');
    });
  });
});
