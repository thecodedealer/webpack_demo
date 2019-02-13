'use strict';

module.exports = angular.module('configService', [])
    .factory('configService', ['abstractService',
        (abstractService) => {

            class ConfigService extends abstractService {
                constructor() {
                    super();
                }


            }

            return new ConfigService();
        }]);