angular.module('adnApp')
  .service('VoteService', VoteService);

  function VoteService($http, $q, ENV){
    var service = {
      upVote: upVote
    };

    function upVote(itemId){
      var url = ENV.apiEndpoint + '/' + itemId + '/vote';
      var d = $q.defer();
      $http.post(url).then(
        function(res){
          d.resolve(res.data);
        }, function(err){
          d.reject(err);
        })
      return d.promise;
    }

    return service;
  }
