angular.module('adnApp.news')
  .controller('NewsIndexController', NewsIndexController);

  function NewsIndexController($scope, $location, news){
    var vm = this;
    vm.news = news

    vm.showNews = showNews;

    function showNews(index){
      $location.path("/" + vm.news[index]._id);
    };
  }
