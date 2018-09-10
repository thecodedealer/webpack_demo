'use strict';

// Babel polyfill
require("babel-polyfill");

/*
    DIRTY DEBUGGING OF UNHANDLED ERRORS
*/
window.onerror = (errorMsg, url, lineNumber, column, errorObj) => {
    if (window.console) {
        console.log(errorMsg);
        console.log(url);
        console.log(lineNumber);
        console.log(column);
        console.log(errorObj);
    }
};

// Require jQuery
window.$ = window.jQuery = require('jquery');
// Require Data Tables
window.dt = require( 'datatables.net' );


// Angular & it's modules
require('angular');
require('angular-ui-router');
require('angular-route');

//VENDORS
require('bootstrap');
require('moment');
require('../vendor/Chart');

/*
   ANGULAR APP
*/
window.app = angular.module('startupApp', [
    /*
        ANGULAR DEPENDENCIES
    */
    'ui.router',
    'ngRoute',


    /*
        CUSTOM DEPENDENCY
    */
    require('./services/_modules').name,
    require('./components/_modules').name
])
    /*
       VENDORS
    */
    .factory('moment', ['$window', $window => {
        return require('moment');
    }])

    /*
        ANGULAR CONFIG
    */
    .config(['routerServiceProvider',
        (routerServiceProvider) => {
            //Init routes
            routerServiceProvider.initRoutes();
        }
    ])

    /*
        INIT ANGULAR APP
    */
    .run(($transitions, $state, appService, navigationService) => {
        console.log('- App is running...');
        appService.state('name', 'Niqei');

        //On route change
        $transitions.onSuccess({}, () => {
            let currentState = $state.current.name;
            appService.state('currentState', currentState);

        });

        //On state change
        appService.onStateChange('currentState', () => {
            navigationService.updateBreadcrumbs();
        });
    })


;