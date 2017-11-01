(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    /**
    * @desc Room object
    * @type {Object}

    * whats missing: capture room name in the UI (ng-model on an input), then on click trigger a function in the controller which calls the Room.add(). pass an obect into the add function with the room data
    */
    Room.add = function(roomName) {
      var list = $firebaseArray(ref);
      list.$add({ name: roomName });
    }

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
