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
require('angular-cookie');


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
    'ipCookie',

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
    .run(($transitions, $state, appService, navigationService, messengerService, moment, configService) => {
        console.log('- App start running...');
        configService.boot();

        //momentJS config
        moment.locale('ro');

        //On route change
        $transitions.onSuccess({}, () => {
            let currentState = $state.current.name;
            appService.state('currentState', currentState);

        });
    })
;