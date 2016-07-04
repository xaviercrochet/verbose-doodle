angular.module('adnApp')
  .controller('RootController', RootController);

  function RootController($uibModal, $location, LoginService){
    var vm = this;
    vm.loggedIn = false;

    vm.openLoginModal = openLoginModal;
    vm.openRegisterModal = openRegisterModal;
    vm.logout = logout;

    function openLoginModal(){
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'app/login/login.view.html',
        controller: 'LoginModalController',
        controllerAs: 'vm',
        size: 'sm',
      });

      modalInstance.result.then(function(){
        vm.loggedIn = true;
        /* todo set a cookie to logged in */
      }, function(error) {
        /* do nothing */
      });
    };

    function openRegisterModal(){

    };

    function logout(){
      LoginService.clearCrendentials();
      vm.loggedIn = false;
      $location.path('/');
    };
  }
