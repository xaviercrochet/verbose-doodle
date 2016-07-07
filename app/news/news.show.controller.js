angular.module('adnApp.news')
  .controller('NewsShowController', NewsShowController);

  function NewsShowController(news, CommentService) {
    var vm = this;
    vm.news = news;
    vm.comment = "";

    vm.submitComment = submitComment;

    function submitComment(){
      CommentService.createComment(news._id, vm.comment).then(
        function(res){
          news.comments.push(res);
          vm.comment = "";
        }, function(err){
          console.error(err);
        }
      );
    };
  }
