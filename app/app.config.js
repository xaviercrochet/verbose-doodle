 angular.module('config', [])
 .config(function($httpProvider){
   $httpProvider.defaults.headers.common['Authorization'] = 'Basic auth';
 })
.constant('ENV', {name:'development',apiEndpoint:'http://localhost:3000'})

;
