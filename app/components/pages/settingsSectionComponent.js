"use strict";
module.exports = angular.module('settingsSectionComponent', [])
    .component('settingsSection', {
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
                SETTINGS
            </div>
		`
    });