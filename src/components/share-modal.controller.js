/*jshint esnext: true */

(function () {

    'use strict';

    function ShareModalController ($modalInstance, Data) {

        // bindable members
        var vm = this; // ViewModel
        vm.Data = Data;
        vm.cancel = cancel;
        vm.sendEmail = sendEmail;

        function cancel() {
            // Cancel button was selected
            $modalInstance.dismiss('cancel');
        }

        function sendEmail() {
            // Email button was selected

            // make string containing emojies of items
            var emojiesItems = "";
            for (var i = 0; i < Data.items.length; i++) {
                emojiesItems += Data.emojiFoodLib[Data.items[i].text];
            }

            // set email params
            Data.theirName = Data.theirName || "Somebody";
            Data.emailAddress = Data.emailAddress || "";
            Data.yourName = "Somebody";
            let subject = Data.yourName + " shared a Basket list with you!";
            let body = emojiesItems;
            let emailto = String("mailto:" + Data.emailAddress + "?subject=" + subject + "&body=" + body);

            window.location.href = emailto; // open default mail app to send email with our params

            $modalInstance.close(Data.theirName); // close modal
        }
    }
    angular.module('app').controller('ShareModalController', ShareModalController);
})();