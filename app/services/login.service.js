angular.module('adnApp')
  .service('LoginService', LoginService);
  /*
    TODO : find better name
  */
  function LoginService($http, $q, ENV, $http, $cookies, $rootScope, $base64){
    var service = {
      doLogin: doLogin,
      setCredentials: setCredentials,
      clearCrendentials: clearCrendentials
    };

    /*
      for the sake of simplicity, we only use "username-based" authentication :D
      N.B.
      The following crendential-related stuff is based on this (very) usefull post
      http://jasonwatmore.com/post/2014/05/26/AngularJS-Basic-HTTP-Authentication-Example.aspx
    */

    function setCredentials(username, password){
      var authData = $base64.encode(username+":"+password);
      $rootScope.global = {
        currentUser: {
          name: username
        }
      };
      $http.defaults.headers.common['Authorization'] = 'Basic ' + authData
      $cookies.put('globals', $rootScope.globals);
    }

    function clearCrendentials(){
      $rootScope.globals = {};
      $cookies.remove('globals');
      $http.defaults.headers.common.Authorization = 'Basic ';
    }

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
