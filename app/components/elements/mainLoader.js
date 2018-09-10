"use strict";
module.exports = angular.module('mainLoaderComponent', [])
    .component('mainLoader', {
        controller: ['$scope', 'appService',
            function ($scope, appService) {

                /*
                    INJECT SERVICES
                */
                $scope.appService = appService;

                this.$onInit = () => {
                };
            }],
        template: `
            <div class="main-loader" ng-if="appService.state('showMainLoader')">
                <div class="loader-bg"></div>
                <p>Loading ...</p>
            </div>
		`
    });