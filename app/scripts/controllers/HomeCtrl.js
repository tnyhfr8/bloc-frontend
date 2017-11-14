(function() {
    function HomeCtrl(Room, Message, $uibModal) {
      this.rooms = Room.all;
      this.activeRoom;



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

      this.openMessages = function(room) {
        this.messages = Message.getByRoomId(room.$id);
        console.log(room);
        this.activeRoom = room;

      }

      this.newMessage = function(typedmessage) {

        console.log(typedmessage);
        Message.send(typedmessage, this.activeRoom.$id);

      }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
