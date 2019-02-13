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

/*
     LOAD jQUERY
*/
window.$ = window.jquery = require('jquery');

/*
     LOAD ANGULAR & OWN MODULES
*/
require('angular');
require('angular-ui-router');
require('angular-route');
require('angular-resource');


/*
   ANGULAR APP
*/
window.app = angular.module('startupApp', [
    /*
        ANGULAR MODULES
    */
    'ui.router',
    'ngRoute',
    'ngResource',

    /*
        VENDORS
    */
    require('./vendors').name,

    /*
        CUSTOM MODULES
    */
    require('./services/_modules').name,
    require('./components/_modules').name
])

    /*
        APP CONFIG
    */
    .config(['routerServiceProvider',
        (routerServiceProvider) => {
            //Init app routes
            routerServiceProvider.initRoutes();
        }
    ])

    /*
        INIT ANGULAR APP
    */
    .run(($transitions, $state, appService, navigationService, socketService, messengerService, moment) => {
        console.log('- App is running...');

        // socketService.connect();

        //momentJS config
        moment.locale('ro');

        // socketService.receive('announcements', (data) => {
        //     messengerService.success(data.message);
        // });
        //
        // //On route change
        // $transitions.onSuccess({}, () => {
        //     let currentState = $state.current.name;
        //     appService.state('currentState', currentState);
        //
        // });

        //On state change
        appService.onStateChange('currentState', () => {
            navigationService.updateBreadcrumbs();
        });
    })
;