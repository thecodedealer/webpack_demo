'use strict';

module.exports = angular.module('appService', [])
    .factory('appService', ['abstractService', 'cronService',
        (abstractService, cronService) => {

        class AppService extends abstractService{
            constructor() {
                super();

                /*
                    States
                */
                this.state('config', {
                    isOnline: navigator.onLine,
                    loggedIn: null,
                    route: null,

                });
                this.state('showMainLoader', false);

                /*
                    Watching states
                */

                //Execute cron
                cronService.create('check-online-status', 60, () => {
                    this.state('config').isOnline = navigator.onLine;
                })

            }

            /*
                ACTIONS
            */
            translate(group, key, options = {}) {

            }

            submitTest() {
                console.log(this.form('test-form'))
            }

            setSubmitted(name) {
                this.form(name).config.$setSubmitted();
            }


        }

        return new AppService();
    }]);