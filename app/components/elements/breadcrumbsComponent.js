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
                };

            }],
        template: `
           <ol class="breadcrumb">
                <li class="breadcrumb-item" ng-repeat="crumb in navigationService.state('breadcrumbs')">
                    <a ui-sref="{{crumb}}" class="capitalize">{{crumb}}</a>
                </li>
                <!--<li class="breadcrumb-item active">My Dashboard</li>-->
            </ol>
         
		`
    });