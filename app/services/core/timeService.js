'use strict';

module.exports = angular.module('timeService', [])
    .factory('timeService', ['moment',
        (moment) => {

            class TimeService {
                constructor() {

                }

                fromNow(date) {

                    return moment(date).fromNow(new Date())
                }

            }

            return new TimeService();
        }]);