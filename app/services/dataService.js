'use strict';

module.exports = angular.module('dataService', [])

    .factory('dataService', [function () {
            let data = [
                {
                    name: "niqei",
                    age: 12
                },
                {
                    name: "geana",
                    age: 13
                },
                {
                    name: "Dani",
                    age: 25
                }
            ]
            return data;
    }])

;