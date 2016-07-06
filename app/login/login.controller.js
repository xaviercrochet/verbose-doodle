angular.module('adnApp.login')
  .controller('LoginModalController', LoginModalController);

  function LoginModalController($uibModalInstance, LoginService){
    var vm = this;

    vm.ok = ok;
    vm.cancel = cancel;
    vm.username = "";

    function ok(){
      console.log("dsfds")
      LoginService.doLogin(vm.username)
        .then(
          function(response){
            console.log("coucou")
            $uibModalInstance.close({});
            LoginService.setCredentials(vm.username, "");
          },
          function(error){
            console.log(error);
            /* Display Something here */
          })
    };

    function cancel(){
      $uibModalInstance.dismiss('cancel');
    };
  };
