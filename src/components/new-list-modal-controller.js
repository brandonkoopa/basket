/*jshint esnext: true */

(function () {

    'use strict';

    function NewListModalController ($modalInstance) {

        // bindable members
        var vm = this; // ViewModel
        vm.cancel = cancel;
        vm.ok = ok;

        function cancel() {
            // Cancel button was selected
            $modalInstance.dismiss('cancel');
        }

        function ok() {
            // OK button was selected
            $modalInstance.close(); // close modal
        }

    }
    angular.module('app').controller('NewListModalController', NewListModalController);
})();