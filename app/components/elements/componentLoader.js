"use strict";
module.exports = angular.module('componentLoaderComponent', [])
    .component('componentLoader', {
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
            <div class="component-loader" ng-if="true">
                <div class="loader-bg"></div>
                <p>Loading ...</p>
            </div>
		`
    });