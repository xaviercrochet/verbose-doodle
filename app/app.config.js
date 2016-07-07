 angular.module('config', [])
 .config(function($httpProvider){
   $httpProvider.defaults.headers.common['Authorization'] = 'Basic auth';
 })
.constant('ENV', {name:'production',apiEndpoint:'http://adn-news.herokuapp.com/'})

;
