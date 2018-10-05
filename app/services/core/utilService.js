'use strict';

module.exports = angular.module('utilService', [])
    .factory('utilService', [
        () => {

            class UtilService {
                constructor() {

                }

                camelCaseToHyphen(key) {
                    return key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                }

            }

            return new UtilService();
        }]);