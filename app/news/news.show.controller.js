angular.module('adnApp.news')
  .controller('NewsShowController', NewsShowController);

  function NewsShowController($rootScope, news, CommentService, VoteService, LoginService) {
    var vm = this;
    vm.news = news;
    vm.comment = "";
    vm.justVoted = false;

    vm.submitComment = submitComment;
    vm.upVote = upVote;
    vm.displayVoteButton = displayVoteButton;
    vm.alreadyVoted = alreadyVoted;

    function alreadyVoted(){
      var name = LoginService.getCurrentUser().name;
      var result = false;
      angular.forEach(vm.news.votes, function(vote){
        if(angular.equals(vote._user.name, name)){
          result = true;
        }
      });
      return result;
    };

    function displayVoteButton(){
      return LoginService.isLoggedIn() && ! isAuthor();
    }

    function isAuthor(){
      angular.equals(LoginService.getCurrentUser().name, news._user.name);
    };


    function upVote(){
      VoteService.upVote(news._id).then(
        function(vote){
          vm.news.votes.push(vote);
          vm.justVoted = true;
          $rootScope.$broadcast("success-message-event", "News successfully upvoted.");
      });
    };

    function submitComment(){
      CommentService.createComment(news._id, vm.comment).then(
        function(res){
          $rootScope.$broadcast("success-message-event", "Comment successfully posted.");
          news.comments.push(res);
          vm.comment = "";
      });
    };
  }
