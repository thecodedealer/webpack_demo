"use strict";
module.exports = angular.module('breadcrumbsComponent', [])
    .component('breadcrumbs', {
        controller: ['$scope', '$state', 'appService', '$route', '$location', 'navigationService',
            function ($scope, $state, appService, $route, $location, navigationService) {

                /*
                * INJECT SERVICES
                * */
                $scope.appService = appService;
                $scope.$route = $route;
                $scope.$location = $location;
                $scope.navigationService = navigationService;

                this.$onInit = () => {

                };

            }],
        template: `
           <ol class="breadcrumb">
                <li class="breadcrumb-item" ng-repeat="bread in navigationService.getCurrentPath()">
                    <a ui-sref="{{bread}}" class="capitalize">{{bread}}</a>
                </li>
                <!--<li class="breadcrumb-item active">My Dashboard</li>-->
            </ol>
         
		`
    });