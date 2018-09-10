'use strict';

module.exports = angular.module('appService', [])
    .factory('appService', ['abstractService',
        (abstractService) => {

        class AppService extends abstractService{
            constructor() {
                super();

                this.state('showMainLoader', false);

            }


        }

        return new AppService();
    }]);