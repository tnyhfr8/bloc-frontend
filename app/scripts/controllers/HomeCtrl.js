(function() {
    function HomeCtrl(Room) {
      this.rooms = Room.all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$scope', HomeCtrl]);
})();
