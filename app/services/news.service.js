angular.module('adnApp')
  .service('NewsService', NewsService);

  function NewsService($http, $q, ENV){
    var service = {
      getNews: getNews,
      getSingleNews: getSingleNews
    };

    function getNews(){
      var url = ENV.apiEndpoint;
      var d = $q.defer();
      $http.get(url)
        .success(function(data, status, headers, config){
          d.resolve(data);
        })
        .error(function(err){
          d.reject(err);
        })
      return d.promise;
    };

    function getSingleNews(id){
      var url = ENV.apiEndpoint + "/" + id;
      var d = $q.defer();
      $http.get(url)
        .success(function(data, status, headers, config){
          d.resolve(data);
        })
        .error(function(err){
          d.reject(err);
        })
      return d.promise;
    };

    return service;
  };
