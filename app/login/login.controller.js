angular.module('adnApp.login')
  .controller('LoginModalController', LoginModalController);

  function LoginModalController($rootScope, $uibModalInstance, LoginService){
    var vm = this;

    vm.ok = ok;
    vm.cancel = cancel;
    vm.username = "";

    function ok(){
      LoginService.doLogin(vm.username)
        .then(
          function(response){
            $uibModalInstance.close({/* put user retrieved from backend here */});
            LoginService.setCredentials(vm.username, "");
          },
          function(error){
            $rootScope.$broadcast(
              "error-message-event",
              "Something wen wrong when trying to log in. Maybe you miss-typed your username?"
            );
          })
    };

    function cancel(){
      $uibModalInstance.dismiss('cancel');
    };
  };
