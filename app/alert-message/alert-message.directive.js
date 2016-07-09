angular.module('adnApp.alertMessage')
  .directive('adnAlertMessages', adnAlertMessages);

  function adnAlertMessages(){
    var directive = {
      link: link,
      templateUrl: 'app/alert-message/alert-message.view.html',
      controller: 'AlertMessageController',
      controllerAs: 'vm',
      scope: {}
    };

    function link(scope, attrs, element, AlertMessageController){
      scope.$on("error-message-event", function(event, args){
        AlertMessageController.addErrorMessage({
          content: args
        });
      });

      scope.$on("success-message-event", function(event, args){
        AlertMessageController.addSuccessMessage({
          content: args
        });
      });

      scope.$on("info-message-event", function(event, args){
        AlertMessageController.addInfoMessage({
          content: args
        });
      });
    };

    return directive;
  };
