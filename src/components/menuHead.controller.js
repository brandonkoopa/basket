/*jshint esnext: true */

(function () {

    'use strict';

    // Controller for the Menu Head
    function MenuHeadController ($modal, Data) {

        // bindable members
        var vm = this; // ViewModel
        vm.newListModalOpen = newListModalOpen;
        vm.newListSelect = newListSelect; // button handler
        vm.openShareModal = openShareModal;

        // new list modal
        function newListModalOpen(size) {
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'components/new-list-modal.html',
                controller: 'NewListModalController',
                controllerAs: 'newListModal',
                size: size
            });

            modalInstance.result.then(function () {
                // OK button was selected
                Data.items = []; // clear current list (New!)
            }, function () {
                // Cancel button was selected
            });
        }

        function newListSelect() {
            newListModalOpen();
        }

        // initiate instance of share modal
        function openShareModal(size) {
            // open popup modal, select users to share with
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'components/share-modal.html',
                controller: 'ShareModalController',
                controllerAs: 'shareModal',
                size: size
            });

            modalInstance.result.then(function (theirName) {
                // Email button was selected
                Data.people.push(theirName);
            }, function () {
                // Cancel button was selected
            });
        }
    }
    angular.module('app').controller('MenuHeadController', MenuHeadController);
})();