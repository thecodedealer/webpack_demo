'use strict';

module.exports = angular.module('cronService', [])
    .factory('cronService', ['abstractService', '$window', '$log',
        (abstractService, $window, $log) => {
            let crons = {};
            $window.cronList = crons;

            class CronService {
                constructor() {
                    this.cronList = {};
                }

                //Create cron
                create(name, time, fn) {
                    if (this.cronList[name])
                        $log.warn('CRON LIST: ' + name + " already used! ");
                    else {
                        //register cron
                        this.cronList[name] = {
                            fn: fn,
                            time: time
                        };

                        //set interval
                        setInterval(fn, time * 1000);
                    }


                    //log
                    crons[name] = {
                        fn: fn,
                        time: time
                    }
                }

                //Delete cron
                delete(name) {

                }


            }

            return new CronService();
        }]);