"use strict";
module.exports = angular.module('userSectionComponent', [])
    .component('userSection', {
        controller: ['$scope', '$log', 'socketService', 'API',
            function ($scope, $log, socketService, API) {

                /*
                    INJECT SERVICES
                */

                this.$onInit = () => {
                };

                $scope.message = "Users";

                $scope.emit = () => {
                    socketService.emit('hello', {name: 'user', age: 34});
                };

                $scope.testRequest = () => {
                    API.call('online-users').get().$promise
                        .then(data => $log.log(data))
                        .catch(err => $log.error(err))
                }
            }],
        template: `
            <div>
               
                 <br>
                 <a ui-sref="users.all">Users All</a>
                 
                 
                 <button ng-click="emit()" class="btn-danger">Emit Socket event</button>
                 <br>
                 <button ng-click="testRequest()" class="btn-danger">Send request</button>
                 
                 <div ui-view="content"></div>
                 
            </div>
		`
    });