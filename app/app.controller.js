angular.module('adnApp')
  .controller('RootController', RootController);

  function RootController($scope, $rootScope, $uibModal, $location, LoginService, NewsService){
    var vm = this;
    vm.loggedIn = false;

    vm.openLoginModal = openLoginModal;
    vm.openCreateNewsModal = openCreateNewsModal;
    vm.logout = logout;
    vm.isLoggedIn = isLoggedIn;

    function openLoginModal(){
      var loginModalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'app/login/login.view.html',
        controller: 'LoginModalController',
        controllerAs: 'vm',
        size: 'sm'
      });

      loginModalInstance.result.then(function(user){
        LoginService.setLoggedIn(true);
        $rootScope.$broadcast("success-message-event", "Successfully logged in.");
        /* todo set a cookie to logged in */
      });
    };

    function openCreateNewsModal(){
      var createNewsModalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'app/news/news.create.view.html',
        controller: 'NewsCreateController',
        controllerAs: 'vm',
        size: 'sm'
      });

      createNewsModalInstance.result.then(
        function(news){
          $location.path('/news/'+news._id);
          $rootScope.$broadcast("success-message-event", "News successfully created.");
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
