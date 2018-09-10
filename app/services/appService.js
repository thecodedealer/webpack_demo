'use strict';

module.exports = angular.module('appService', [])
    .factory('appService', ['abstractService',
        (abstractService) => {

        class AppService extends abstractService{
            constructor() {
                super();

            }


        }

        return new AppService();
    }]);