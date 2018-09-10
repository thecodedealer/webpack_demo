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
// Require datatables
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
* INIT ANGULAR APP
* */
window.app = angular.module('startupApp', [
    /*
    Angular dependencies
    */
    'ui.router',
    'ngRoute',


    /*
        Custom dependencies
    */
    require('./controllers/_modules').name,
    require('./services/_modules').name,
    require('./components/_modules').name
])
/*
   VENDORS
*/
    .factory('moment', ['$window', $window => {
        return require('moment');
    }])

    .run(($transitions, $state, appService, historyService) => {
        console.log('- App is running...');
        appService.state('name', 'Niqei');

        //On state change
        $transitions.onSuccess({}, () => {
            let currentState = $state.current.name;
            appService.state('currentState', currentState);

        });

        appService.onStateChange('currentState', (newState, oldState) => {
            console.log('New State: ' + newState + ' Old state: ' + oldState);
        });
    })
    /*
    * Angular configuration
    *
    * */
    .config(($stateProvider, $urlRouterProvider) => {

        $stateProvider

            .state('index', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: './views/header.html',
                        controller: 'NavigationCtrl'
                    },
                    'footer': {
                        templateUrl: './views/footer.html'
                    }
                }

            })

            .state('dashboard', {
                url: '/dashboard',
                views: {
                    'header': {
                        templateUrl: './views/header.html',
                        controller: 'NavigationCtrl'
                    },
                    'content': {
                        templateUrl: './views/dashboard.html',
                        controller: 'DashboardCtrl'
                    }
                }
            })

            .state('users', {
                url: '/users',
                views: {
                    'header': {
                        templateUrl: './views/header.html',
                        controller: 'NavigationCtrl'
                    },
                    'content': {
                        templateUrl: './views/users.html',
                        controller: 'UsersCtrl'
                    }
                }
            })
            .state('users.all', {
                url: '/all',
                views: {
                    'header': {
                        templateUrl: './views/header.html',
                        controller: 'NavigationCtrl'
                    },
                    'content': {
                        templateUrl: './views/second.html',
                        controller: 'UsersCtrl'
                    }
                }
            })
        ;

        $urlRouterProvider.otherwise('/dashboard');
    })


;