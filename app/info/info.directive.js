angular.module('adnApp.info')
  .directive('InfoDirective', InfoDirective);

  function InfoDirective(){
    var directive = {
      link: link,
      templateUrl: 'app/info/info.view.html'
    };

    function link(attrs, element){

    };

    return directive;
  };
