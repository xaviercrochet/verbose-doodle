angular.module('adnApp.news')
  .controller('NewsIndexController', NewsIndexController);

  function NewsIndexController($scope, news){
    var vm = this;
    $scope.news = news
  }
