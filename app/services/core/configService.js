'use strict';

module.exports = angular.module('configService', [])
    .factory('configService', ['abstractService', 'API',
        (abstractService, API) => {

            class ConfigService extends abstractService {
                constructor() {
                    super();

                }


                loadGlobalConfig() {

                }

                /*
                    HELPERS
                */
                _loadContent() {
                    return API.call('getContent').get().$promise
                }
            }

            return new ConfigService();
        }]);