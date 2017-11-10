(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      // Do something to allow users to set their username
      var modalInstance = $uibModal.open({
        backdrop: 'static',
        controller: function($scope){

          $scope.set = function() {
            if ($scope.blocChatCurrentUser === undefined){
              alert('No Username Detected');
            /*console.log($scope.blocChatCurrentUser);*/
            /*modalInstance.close();*/
          } else {
            $cookies.put('blocChatCurrentUser', $scope.blocChatCurrentUser);
            modalInstance.close();
            console.log('i did it, kinda');
          }


          };

        },
        templateUrl: '/templates/usernamemodal.html'
      })
      }
    }


  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
