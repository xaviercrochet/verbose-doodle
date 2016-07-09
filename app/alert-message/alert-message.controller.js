angular.module('adnApp.alertMessage')
  .controller('AlertMessageController', AlertMessageController);

  function AlertMessageController(){
    var vm = this;
    vm.infoMessages = [];
    vm.errorMessages = [];
    vm.successMessages = [];

    vm.addErrorMessage = addErrorMessage;
    vm.addSuccessMessage = addSuccessMessage;
    vm.addInfoMessage = addInfoMessage;
    vm.deleteErrorMessage = deleteErrorMessage;
    vm.deleteInfoMessage = deleteInfoMessage;
    vm.deleteSuccessMessage = deleteSuccessMessage;

    function addErrorMessage(message){
      vm.errorMessages.push(message);
    };

    function addSuccessMessage(message){
      vm.successMessages.push(message);
    };

    function addInfoMessage(message){
      vm.infoMessages.push(message);
    };

    function deleteInfoMessage(index){
      vm.infoMessages.splice(index, 1);
    };

    function deleteErrorMessage(index){
      vm.errorMessages.splice(index, 1)
    };

    function deleteSuccessMessage(index){
      vm.successMessages.splice(index, 1);
    };

  };
