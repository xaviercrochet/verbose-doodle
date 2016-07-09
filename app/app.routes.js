angular.module('adnApp')
.config(['$routeProvider', function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'app/news/news.index.view.html',
      controller: 'NewsIndexController',
      controllerAs: 'vm',
      resolve: {
        news: function(NewsService){
          return NewsService.getNews();
        }
      }
    })
    .when('/register', {
      templateUrl: 'app/register/register.view.html',
      controller: 'RegisterController',
      controllerAs: 'vm'
    })
    .when('/:newsId', {
      templateUrl: 'app/news/news.show.view.html',
      controller: 'NewsShowController',
      controllerAs: 'vm',
      resolve: {
        news: function(NewsService, $route){
          console.log("coucou")
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
