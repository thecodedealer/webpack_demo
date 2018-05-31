'use strict';

// Babel polyfill
require("babel-polyfill");

// Angular & its modules
require('jquery');
import angular from 'angular';
require("angular-ui-router");


require('./controllers/modules');


angular.module('startupApp', [
    // Angular dependecies
    'ui.router'

    ])

    
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $stateProvider

            .state('index', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'views/header.html'
                    },
                    'content': {
                        templateUrl: 'views/home.html',
                        controller: 'IndexCtrl'
                    },
                    'footer': {
                        templateUrl: 'views/footer.html'
                    }
                }
        
            })

        ;

        $urlRouterProvider.otherwise('/');
    })


;