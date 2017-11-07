(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages").orderByChild('roomId');
    var messages = $firebaseArray(ref);

    Message.all = messages;

    Message.getByRoomId = function(roomId) {
        // Filter the messages by their room ID.
        return $firebaseArray(ref.equalTo(roomId));
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
