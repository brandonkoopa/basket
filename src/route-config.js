/*jshint esnext: true */

(function () {

    'use strict';

    function config ($routeProvider, $locationProvider) {

        // This does nothing.
        // Login feature coming soon...
        $routeProvider

            .when('/login', {
                templateUrl: 'components/login.html',
                controller: 'LoginCtrl'
            })

            .otherwise({ redirectTo: '/login' });

    }

    angular.module('app').config(config);
})();