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
window.$ = window.jquery = require( 'jquery' );
// DataTables
require( 'datatables.net-bs4' );


// Angular & it's modules
require('angular');
require('angular-ui-router');
require('angular-route');
require('angular-resource');

//VENDORS
require('bootstrap');
require('moment');
require('../vendor/Chart');
require('bootstrap-notify');

/*
   ANGULAR APP
*/
window.app = angular.module('startupApp', [
    /*
        ANGULAR DEPENDENCIES
    */
    'ui.router',
    'ngRoute',
    'ngResource',


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

    .factory('socket_io', ['$window', $window => {
        return require('socket.io-client');
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
    .run(($transitions, $state, appService, navigationService, socketService, messengerService) => {
        console.log('- App is running...');

        socketService.connect();

        socketService.receive('announcements', (data) => {
            messengerService.success(data.message);
        });

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