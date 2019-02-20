"use strict";
module.exports = angular.module('testPageComponent', [])
    .component('testPage', {
        controller: ['$scope',
            function ($scope) {

                /*
                    INJECT SERVICES
                */

                this.$onInit = () => {
                };
            }],
        template: `
            <div>
                Test
            </div>
		`
    });