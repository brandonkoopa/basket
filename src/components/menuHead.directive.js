/*jshint esnext: true */

(function () {

    'use strict';

    function MenuHead () {
        return {
            restrict: 'E',
            templateUrl: 'components/menuHead.html',
            controller: 'MenuHeadController'
        };
    }
    angular.module('app').directive('menuHead', MenuHead);
})();