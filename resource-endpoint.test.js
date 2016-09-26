describe('Resource Endpoints service tests:', function() {
  var underTest, MOCK_API_HOST;

  beforeEach(function() {
    angular.mock.module('app')
    angular.mock.module(function ($provide) {
        $provide.constant('API_HOST', 'myhost');
        $provide.factory('endpoints', function() {
          return {
            allData: '/ha/hehe'
          };
        });
    });
    angular.mock.inject(function(_resourceEndpoints_) {
      underTest = _resourceEndpoints_;
    });
  });

  describe('The endpointFor method', function() {
    it('should return the correct corresponding api endpoint', function() {
      expect(underTest.endpointFor('allData')).toBe('myhost/ha/hehe');
    });
  });
});

