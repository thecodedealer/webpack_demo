"use strict";
module.exports = angular.module('logSectionComponent', [])
    .component('logSection', {
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
                  LOGS PAGE
            </div>
		`
    });