'use strict';

module.exports = angular.module('configService', [])
    .factory('configService', ['abstractService', 'socketService',
        (abstractService, socketService) => {

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
                    //Load SocketIO
                    socketService.connect();

                }
            }

            return new ConfigService();
        }]);