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


/*(function() {
    function ModalCtrl(Room, $uibModal, $log, $document) {
      var $ctrl = this;
      $ctrl.items = rooms;

      $ctrl.open = function (size, parentSelector) {
        var parentElem = parentSelector ?
          angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
          animation: false,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: '/templates/home.html',
          controller: 'ModalInstanceCtrl',
          controllerAs: '$ctrl',
          size: 'sm',
          appendTo: parentElem,
          resolve: {
            items: function () {
              return $ctrl.items;
            }
          }
        });

        modalInstance.result.then(function (selectedItem) {
          $ctrl.selected = selectedItem;
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
      };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModal', '$log', '$document', ModalCtrl]);

    function ModalInstanceCtrl($uibModalInstance, items) {

      var $ctrl = this;
      $ctrl.items = items;
      $ctrl.selected = {
        item: $ctrl.items[0]
      };

      $ctrl.ok = function () {
        $uibModalInstance.close($ctrl.selected.item);
      };

      $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };
    }

    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', 'items', ModalInstanceCtrl]);
})();
*/
