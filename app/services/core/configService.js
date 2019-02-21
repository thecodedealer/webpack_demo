'use strict';

module.exports = angular.module('configService', [])
    .factory('configService', ['abstractService', 'socketService', 'socketActions',
        (abstractService, socketService, socketActions) => {

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

                    // Load initial global config
                    this.loadInitialConfig();
                }

                loadInitialConfig() {
                    //Connect to SocketIO
                    socketService.connect();

                    // Load socket actions
                    socketActions.init();
                }
            }

            return new ConfigService();
        }]);