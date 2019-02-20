"use strict";
module.exports = angular.module('breadcrumbsComponent', [])
    .component('breadcrumbs', {
        controller: ['$scope', '$state', 'appService', '$route', '$location', 'navigationService',
            function ($scope, $state, appService, $route, $location, navigationService) {

                /*
                    INJECT SERVICES
                */
                $scope.appService = appService;
                $scope.$route = $route;
                $scope.$location = $location;
                $scope.navigationService = navigationService;

                this.$onInit = () => {
                    //On state change
                    appService.onStateChange('currentState', () => {
                        navigationService.updateBreadcrumbs();
                    });
                };

            }],
        template: /*html*/` 
           <ol class="breadcrumb">
                <li class="breadcrumb-item" ng-repeat="crumb in navigationService.state('breadcrumbs')">
                    <a ui-sref="{{crumb.state}}" class="capitalize" ng-class="{'disabled': $last}">{{crumb.name}}</a>
                </li>
            </ol>
         
		`
    });