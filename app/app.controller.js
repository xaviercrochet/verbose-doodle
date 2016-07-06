angular.module('adnApp')
  .controller('RootController', RootController);

  function RootController($scope, $rootScope, $uibModal, $location, LoginService){
    var vm = this;
    vm.loggedIn = false;

    vm.openLoginModal = openLoginModal;
    vm.logout = logout;
    vm.isLoggedIn = isLoggedIn;

    function openLoginModal(){
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'app/login/login.view.html',
        controller: 'LoginModalController',
        controllerAs: 'vm',
        size: 'sm',
      });


      modalInstance.result.then(function(){
        LoginService.setLoggedIn(true);
        /* todo set a cookie to logged in */
      }, function(error) {
        /* do nothing */
        console.error(error);
      });
    };

    function isLoggedIn(){
      return LoginService.isLoggedIn();
    };

    function logout(){
      LoginService.clearCrendentials();
      LoginService.setLoggedIn(false);
      $location.path('/');
    };
  }
