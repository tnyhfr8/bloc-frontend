(function() {
    function ModalCtrl(Room) {
      this.ok = function () {
        console.log('dgfd');
      }

    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', ModalCtrl]);
})();
