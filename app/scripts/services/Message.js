(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages").orderByChild('roomId');
    var messages = $firebaseArray(ref);

    Message.all = messages;

    Message.getByRoomId = function(roomId) {
        // Filter the messages by their room ID.
        return $firebaseArray(ref.equalTo(roomId));
    };

    Message.send = function(newMessage) {
      var list = $firebaseArray(ref);
      list.$add({
          username: $cookies.get('blocChatCurrentUser'),
          content: newMessage,
          roomId: newMessage.id
      });
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
