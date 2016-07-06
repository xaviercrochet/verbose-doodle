angular.module('adnApp.register')
  .controller('RegisterController', RegisterController);

  function RegisterController($rootScope, $scope, $location, RegisterService, LoginService){
    var vm = this;
    vm.name = "";
    vm.submit = submit

    function submit(){
      RegisterService.doRegister(vm.name).then(
        function(success){
          LoginService.setCredentials(vm.name, '');
          $location.path('/');
          LoginService.setLoggedIn(true);
        },
        function(error){
          console.error(error);
        }
      );
    };
  }
