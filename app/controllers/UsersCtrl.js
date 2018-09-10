'use strict';

module.exports = angular.module('UsersCtrl', [])
    .controller('UsersCtrl', ['$scope', 'appService',
        ($scope, appService) => {
            $scope.message = "Users";

            // appService.onStateChange('currentState', alert(appService.state('currentState')));
        }])
;