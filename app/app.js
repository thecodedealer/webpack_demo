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

// Require jquery
window.$ = window.jQuery = require('jquery');

// Angular & it's modules
require('angular');
require('angular-ui-router');

//VENDORS
require('bootstrap');


/*
* INIT ANGULAR APP
* */
window.app = angular.module('startupApp', [
    /*
    Angular dependencies
    */
    'ui.router',

    /*
    Custom dependencies
    */
    require('./controllers/_modules').name,
    require('./services/_modules').name
    ])

    /*
    * Angular configuration
    * */
    .config(($stateProvider, $urlRouterProvider) => {

        $stateProvider

            .state('index', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: '../views/header.html'
                    },
                    'content': {
                        templateUrl: '../views/home.html',
                        controller: 'IndexCtrl'
                    },
                    'footer': {
                        templateUrl: '../views/footer.html'
                    }
                }
        
            })

        ;

        $urlRouterProvider.otherwise('/');
    })

;