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
            $uibModalInstance.close({});
          },
          function(error){
            /* Display Something here */
          })
    };

    function cancel(){
      $uibModalInstance.dismiss('cancel');
    };
  };
