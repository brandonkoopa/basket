/*jshint esnext: true */

(function () {

    'use strict';

    // Controller for "To Get"
    function ToGetController (Data) {

        let getList = document.getElementsByClassName("get-list")[0];

        // bindable members
        var vm = this; // ViewModel
        vm.addItem = addItem;
        vm.deleteItem = deleteItem;
        vm.getRemaining = getRemaining;
        vm.itemChecked = itemChecked;
        vm.itemPersonSelect = itemPersonSelect;
        vm.moveToTop = moveToTop;
        vm.ownerFilterSelect = ownerFilterSelect;
        vm.showDetails = showDetails;

        function addItem(item) {
            if (item) {
                if (item.length > 0) {
                    // add, if it doesn't already exist
                    for (let i = 0; i < Data.items.length; i++) {
                        if (angular.lowercase(Data.items[i].text) == angular.lowercase(item)) {
                            return; // already in list
                        }
                    }

                    Data.items.push({text: item, gotten: false, comments: "", owner: "Any", open: false});

                    // scroll to bottom of list
                    getList.scrollTop = getList.scrollHeight; // ToDo: make it not scroll to the 2nd bottom item
                }
            }
        }

        function deleteItem(index) {
            Data.items.splice(index, 1);
        }

        function getRemaining() {
            var count = 0;
            Data.items.forEach(item => {
                count += item.gotten ? 0 : 1;
            });
            return count;
        }

        function itemChecked(index) {
            // If the item gets checked, move it to top.
            // This UX is to help the user not forget any items, but keeps all/next to get at the bottom of the list.
            if (Data.items[index].gotten) {
                vm.moveToTop(index);
            }
        }

        function itemPersonSelect(item, person) {
            var itemIndex = Data.items.indexOf(item);
            Data.items[itemIndex].owner = person;
        }

        function moveToTop(index) {
            // ToDo: Fix...
            var itemToMove = Data.items[index];
            //Data.items.splice(index);
            //Data.items.unshift(itemToMove);
        }

        function ownerFilterSelect(person) {
            Data.ownerFilter = person;
        }

        //show details for selected item
        function showDetails(index) {
            Data.items[index].open = !Data.items[index].open;
        }
    }
    angular.module('app').controller('ToGetController', ToGetController);
})();