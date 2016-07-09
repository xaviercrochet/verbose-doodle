angular.module('adnApp.login')
  .controller('LoginModalController', LoginModalController);

  function LoginModalController($uibModalInstance, LoginService){
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
            console.error(error);
            /* Display Something here */
          })
    };

    function cancel(){
      $uibModalInstance.dismiss('cancel');
    };
  };
