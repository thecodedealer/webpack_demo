'use strict';

module.exports = angular.module('dataService', [])

    .factory('dataService', [ () => {
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