/*jshint esnext: true */

(function () {

    'use strict';

    function Gotten () {
        return {
            restrict: 'E',
            templateUrl: 'components/gotten.html',
            controller: 'GottenController',
            controllerAs: 'gottenCtrl'
        };
    }
    angular.module('app').directive('gotten', Gotten);
})();