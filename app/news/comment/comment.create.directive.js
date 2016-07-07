/*
  directive kinda useless for creation but can be usefull for edition in the future
*/
angular.module('adnApp.news.comment')
  .directive('adnComment', adnComment);

  function adnComment(){
    var directive = {
      link: link,
      restrict: '',
      templateUrl: 'app/news/comment/comment.create.view.html'
    };

    function link(scope, element, attrs){
    
    };
    return directive
  }
