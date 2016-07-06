angular.module('adnApp')
  .service('RegisterService', RegisterService);

  function RegisterService($q, $http, ENV){

    var service = {
      doRegister: doRegister
    };

    function doRegister(name){
      var d = $q.defer();
      var url = ENV.apiEndpoint + '/users/';
      $http.post(url, {'name': name}).then(
        function(res){
          d.resolve(res);
        },
        function(err){
          d.reject(err);
        }
      )
      return d.promise;
    };

    return service;
  };
