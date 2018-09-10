"use strict";
module.exports = angular.module('nameComponent', [])
    .component('name', {
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
            
            </div>
		`
    });