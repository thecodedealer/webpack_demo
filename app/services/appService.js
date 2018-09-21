'use strict';

module.exports = angular.module('appService', [])
    .factory('appService', ['abstractService',
        (abstractService) => {

        class AppService extends abstractService{
            constructor() {
                super();

                /*
                    States
                */
                this.state('config', {
                    isOnline: null,
                    loggedIn: null,
                    route: null,

                });
                this.state('showMainLoader', false);


            }

            /*
                ACTIONS
            */
            boot() {

            }

            checknetworkStatus() {

            }




        }

        return new AppService();
    }]);