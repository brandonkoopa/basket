/*jshint esnext: true */

(function () {

    'use strict';

    function ToGet () {
        return {
            restrict: 'E',
            templateUrl: 'components/toGet.html',
            controller: 'ToGetController',
            controllerAs: 'togetCtrl'
        };
    }
    angular.module('app').directive('toGet', ToGet);
})();