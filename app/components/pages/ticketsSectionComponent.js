"use strict";
module.exports = angular.module('ticketSectionComponent', [])
    .component('ticketSection', {
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
                TICKET SECTION
            </div>
		`
    });