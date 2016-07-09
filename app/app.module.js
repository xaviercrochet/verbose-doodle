angular.module('adnApp', [
  'ngRoute',
  'ngAnimate',
  'ui.bootstrap',
  'base64',
  'ngCookies',
  'config',
  'adnApp.news',
  'adnApp.login',
  'adnApp.register',
  'adnApp.alertMessage'
]);

/* TODO:
1) need an interceptor for 401 stuff & redirecting to unauthorized page
*/
