angular.module('adnApp.news')
  .controller('NewsShowController', NewsShowController);

  function NewsShowController(news) {
    var vm = this;
    vm.news = news;
  };
