"use strict";
 angular.module('config', [])
 .config(function($httpProvider){
   $httpProvider.defaults.headers.common['Authorization'] = 'Basic auth';
 })
.constant('ENV', {name:'production',apiEndpoint:'https://adn-news.herokuapp.com'})
;
