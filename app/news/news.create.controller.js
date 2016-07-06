angular.module('adnApp.news')
  .controller('NewsCreateController', NewsCreateController);

  function NewsCreateController($uibModalInstance, NewsService){
    var vm = this;

    vm.newsTitle = "";
    vm.newsUrl = "";

    vm.ok = ok;
    vm.cancel = cancel;

    function ok(){
      NewsService.createNews(vm.newsTitle, vm.newsUrl).then(
        function(createdNews){
          $uibModalInstance.close(createdNews.data);
        },
        function(err){
          console.error(err);
        }
      )
    };

    function cancel(){
      $uibModalInstance.dismiss('cancel');
    };


  };
