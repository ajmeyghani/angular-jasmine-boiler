describe('Main Service tests:', function() {
  var underTest, $http, $rootScope;

  beforeEach(function() {
    angular.mock.module('app');
    angular.mock.inject(function(_mainService_, _$http_, _$rootScope_) {
      underTest = _mainService_;
      $http = _$http_;
      $rootScope = _$rootScope_;
    });
  });

  describe('The add method', function() {
    it('should add numbers correctly', function() {
      expect(underTest.add(1,2)).toBe(3);
    });
  });

  describe('The get method', function() {
    it('should be defined', function() {
      expect(underTest.getData).toBeDefined();
    });
    it('should make a GET call to some endpoint', function() {
      spyOn($http, 'get');
      underTest.getData();
      expect($http.get).toHaveBeenCalled();
      $rootScope.$apply();
    });
  });

});
