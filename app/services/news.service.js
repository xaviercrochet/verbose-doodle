angular.module('adnApp')
  .service('NewsService', NewsService);

  function NewsService($http, $q, ENV){
    var service = {
      getNews: getNews,
      getSingleNews: getSingleNews,
      createNews: createNews
    };

    function createNews(newsTitle, newsUrl){
      var url = ENV.apiEndpoint;
      var d = $q.defer();
      $http.post(url, { 'itemTitle': newsTitle, 'itemUrl': newsUrl }).then(
        function(res){
          d.resolve(res);

        }, function(error){
          d.reject(error);
        }
      );
      return d.promise;
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
