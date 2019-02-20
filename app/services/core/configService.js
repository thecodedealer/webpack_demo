'use strict';

module.exports = angular.module('configService', [])
    .factory('configService', ['abstractService',
        (abstractService) => {

            class ConfigService extends abstractService {
                constructor() {
                    super();

                    /*
                        STATES
                    */
                    this.state('config', null);
                }

                boot() {
                    console.log('- App is booting ...');
                    this.loadInitialConfig();
                }

                loadInitialConfig() {

                }
            }

            return new ConfigService();
        }]);