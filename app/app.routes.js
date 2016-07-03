angular.module('adnApp')
.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/:newsId', {
      templateUrl: 'app/news/news.show.view.html',
      controller: 'NewsShowController',
      controllerAs: 'vm',
      resolve: {
        news: function(NewsService, $route){
          console.log($route.current.params.newsId)
          return NewsService.getSingleNews($route.current.params.newsId);
        }
      }
    })
    .otherwise({
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
