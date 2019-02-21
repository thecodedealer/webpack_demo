'use strict';

module.exports = angular.module('socketActions', [])
    .factory('socketActions', ['$log', '$window', 'abstractService', 'socketService', 'messengerService',
        ($log, $window, abstractService, socketService, messengerService) => {


            class SocketActions extends abstractService {
                constructor() {
                    super();

                }


                init() {
                    this._actions()
                }


                _actions() {
                    socketService.receive('action', (data) => {
                        messengerService.success(data.message);
                    });

                }
            }

            return new SocketActions();
        }]);