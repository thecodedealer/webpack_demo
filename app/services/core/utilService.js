'use strict';

module.exports = angular.module('utilService', [])
    .factory('utilService', ['moment', 'cronService',
        (moment, cronService) => {

            class UtilService {
                constructor() {

                }

                camelCaseToHyphen(key) {
                    return key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                }

                pingTimeFrom(time) {
                    return moment(time).startOf('minutes').fromNow()
                }
            }

            return new UtilService();
        }]);