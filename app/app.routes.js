angular.module('adnApp')
.config(['$routeProvider', function($routeProvider){
  $routeProvider.otherwise({
    templateUrl: 'app/news/news.index.view.html',
    controller: 'NewsIndexController',
    controllerAs: 'vm',
    resolve: {
      news: function(NewsService){
        return NewsService.getNews();
      }
    }
  });
}]);
