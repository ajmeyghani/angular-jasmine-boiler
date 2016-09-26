describe('Value services tests:', function() {
  var underTest, API_HSOT;
  beforeEach(function() {
    angular.mock.module('app');
    angular.mock.inject(function(_API_HOST_) {
      API_HSOT = _API_HOST_;
    });
  });
  describe('API_HOST constant value service:', function() {
    it('should be set to the correct host domain', function() {
      expect(API_HSOT).toBe('http://localhost:3000');
    });
    it('should should not contain any trailing forward slashes', function() {
      var isTrailingSlash = /\/$/g.test(API_HSOT);
      expect(isTrailingSlash).toBe(false);
    });
  });
});
