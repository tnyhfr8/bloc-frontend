(function() {
    function HomeCtrl(Room, $uibModal) {
      this.rooms = Room.all;



      this.openModal = function() {

        var modalInstance = $uibModal.open({
          controller: function($scope){


            $scope.ok = function() {
              console.log($scope.room);
              Room.add($scope.room);
              modalInstance.close();
            };

            $scope.cancel = function() {
              console.log('bye modal');
              modalInstance.close();
            };

          },
          templateUrl: '/templates/modal.html'
        })
      }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
