angular.module('adnApp', [
  'ngRoute',
  'ngAnimate',
  'ui.bootstrap',
  'config',
  'adnApp.news',
  'adnApp.login'
]);

/* TODO:
1) need an interceptor for 401 stuff & redirecting to unauthorized page
*/
