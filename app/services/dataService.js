'use strict';

module.exports = angular.module('dataService', [])

    .factory('dataService', [function () {
            return [
                {
                    name: "John",
                    age: 12
                },
                {
                    name: "Messi",
                    age: 13
                },
                {
                    name: "Ronaldo",
                    age: 25
                }
            ];
    }])

;