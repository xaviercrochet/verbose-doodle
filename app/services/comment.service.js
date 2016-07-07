angular.module('adnApp')
  .service('CommentService', CommentService);

  function CommentService($http, $q, ENV){
    var service = {
      createComment: createComment
    };

    function createComment(newsId, comment){
      var d = $q.defer();
      var url = ENV.apiEndpoint + '/' + newsId + '/comments';
      $http.post(url, {'comment': comment}).then(
        function(res){
          d.resolve(res.data);
        },
        function(err){
          console.error(err);
          d.reject(err);
        }
      );
      return d.promise;
    };

    return service;
  };
