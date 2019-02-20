'use strict';

module.exports = angular.module('socketActions', [])
    .factory('socketActions', ['$log', '$window', 'abstractService', 'socket_io', 'moment',
        ($log, $window, abstractService, socket_io, moment) => {


            class SocketActions extends abstractService {
                constructor() {
                    super();

                }

            }

            return new SocketActions();
        }]);