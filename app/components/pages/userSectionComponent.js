"use strict";
module.exports = angular.module('userSectionComponent', [])
    .component('userSection', {
        controller: ['$scope',
            function ($scope) {

                /*
                    INJECT SERVICES
                */

                this.$onInit = () => {
                };

                $scope.message = "Users";
            }],
        template: `
            <div class="container-fluid">
                <breadcrumbs></breadcrumbs>
                 <br>
                 <a ui-sref="users.all">Users All</a>
            </div>
		`
    });