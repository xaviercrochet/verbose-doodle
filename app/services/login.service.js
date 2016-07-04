angular.module('adnApp')
  .service('LoginService', LoginService);

  function LoginService($http, $q, ENV){
    var service = {
      doLogin: doLogin
    };

    function doLogin(name){
      var url = ENV.apiEndpoint + '/authenticate';
      var d = $q.defer();
      $http.post(url, {'name': name}).then(
        function(result){
          /*
            if result == ok => set special authentication header
          */
          d.resolve(result);
        },
        function(err) {
          d.reject(err);
        }
      )
      return d.promise;
    }
    return service;
  };
