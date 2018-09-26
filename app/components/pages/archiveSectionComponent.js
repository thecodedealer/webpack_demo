"use strict";
module.exports = angular.module('archiveSectionComponent', [])
    .component('archiveSection', {
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
                ARCHIVE SECTION
            </div>
		`
    });