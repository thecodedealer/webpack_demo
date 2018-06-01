'use strict';

// Babel polyfill
require("babel-polyfill");

// Require jquery
window.$ = window.jQuery = require('jquery');

// Angular & its modules
require('angular');
require('angular-ui-router');


require('./controllers/modules');


angular.module('startupApp', [
    // Angular dependecies
    'ui.router',
    require('./controllers/modules').name
    ])

    
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $stateProvider

            .state('index', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: './views/header.html'
                    },
                    'content': {
                        templateUrl: './views/home.html',
                        controller: 'IndexCtrl'
                    },
                    'footer': {
                        templateUrl: './views/footer.html'
                    }
                }
        
            })

        ;

        $urlRouterProvider.otherwise('/');
    })


;