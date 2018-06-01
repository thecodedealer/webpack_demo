'use strict';

module.exports = angular.module('IndexCtrl', [])

    .controller('IndexCtrl', ['$scope', 'dataService', function ($scope, dataService) {
        $scope.homeMsg = "Home View ! yeeeeeep";
        $scope.data = dataService;
    }])

;