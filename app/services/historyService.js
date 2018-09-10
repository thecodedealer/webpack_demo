'use strict';

module.exports = angular.module('historyService', [])
    .factory('historyService', ['$rootScope', '$window', '$routeParams', '$route',
        ($rootScope, $window, $routeParams, $route) => {

            $window.states = [];

            class HistoryService {
                constructor() {
                    /*
					 VARIABLES
					 */
                    this.history = {};
                }

                getCurrentUrl() {
                    return $route.current;
                }

            }

            return new HistoryService();
        }]);