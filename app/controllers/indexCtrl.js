'use strict';

module.exports = angular.module('IndexCtrl', [])

    .controller('IndexCtrl', ['$scope', function ($scope) {
        $scope.homeMsg = "Home View ! yeeeeeep";
    }])

;