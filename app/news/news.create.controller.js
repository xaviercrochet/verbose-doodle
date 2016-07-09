angular.module('adnApp.news')
  .controller('NewsCreateController', NewsCreateController);

  function NewsCreateController($rootScope, $uibModalInstance, NewsService){
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
          $rootScope.$broadcast(
            "error-message-event",
            "Something went wrong when trying to create the news. Maybe you forgot the title or the url?"
          );
        }
      )
    };

    function cancel(){
      $uibModalInstance.dismiss('cancel');
    };


  };
