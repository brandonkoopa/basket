/*jshint esnext: true */

(function () {

    'use strict';

    function AppController (Data) {
        this.Data = Data; // The App's Data is used by it's various controllers.
    }
    angular.module('app').controller('AppController', AppController);
})();