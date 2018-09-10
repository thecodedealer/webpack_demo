'use strict';

module.exports = angular.module('nameService', [])
    .factory('nameService', ['abstractService',
        (abstractService) => {

            class AppService extends abstractService{
                constructor() {
                    super();

                    this.state('showMainLoader', false);

                }


            }

            return new AppService();
        }]);