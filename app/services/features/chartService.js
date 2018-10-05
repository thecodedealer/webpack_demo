'use strict';

module.exports = angular.module('chartService', [])
    .factory('chartService', ['abstractService',
        (abstractService) => {
            class ChartService {
                constructor() {
                }


            }

            return new ChartService();
        }]);