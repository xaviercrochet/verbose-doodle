angular.module('config', [])
  .config(function($httpProvider){
    $httpProvider.defaults.headers.common['Authorization'] = 'Basic auth';
  })
  .config(function ($locationProvider){
   $locationProvider.html5Mode(true);
 })
  .constant('ENV', {name:'production',apiEndpoint:'https://adn-news.herokuapp.com/'});
