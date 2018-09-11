"use strict";
module.exports = angular.module('userSectionComponent', [])
    .component('userSection', {
        controller: ['$scope', 'socketService',
            function ($scope, socketService) {

                /*
                    INJECT SERVICES
                */

                this.$onInit = () => {
                };

                $scope.message = "Users";

                $scope.emit = () => {
                    socketService.emit('hello', {name: 'user', age: 34});
                }
            }],
        template: `
            <div class="container-fluid">
                <breadcrumbs></breadcrumbs>
                 <br>
                 <a ui-sref="users.all">Users All</a>
                 
                 
                 <button ng-click="emit()" class="btn-danger">Emit Socket event</button>
            </div>
		`
    });