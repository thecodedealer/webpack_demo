'use strict';

module.exports = angular.module('socketActions', [])
    .factory('socketActions', ['$log', '$window', 'abstractService', 'socketService', 'messengerService',
        ($log, $window, abstractService, socketService, messengerService) => {


            class SocketActions extends abstractService {
                constructor() {
                    super();
                    this.socket = null;
                }


                init(socket) {
                    this.socket = socket;
                    this._receive();
                    this._emit()
                }

                _emit() {
                    this.emit('auth',  {
                        user: 'Guest'
                    })
                }

                _receive() {
                    this.receive('action', (data) => {
                        messengerService.success(data.message);
                    });

                }

                //Receive actions from Socket Server
                receive(name, action) {
                    $log.log('- Watch socket action for: [' + name + ']');

                    // Set Socket IO event for action
                    this.socket.on(name, (data) => {
                        //Log action
                        // this._addToStack(name, data, 'received');

                        action(data);
                    });
                }

                //Emit action to Socket Server
                emit(name, action = {}) {
                    if(this.socket && this.socket.connected) {
                        $log.log('- Emit socket action: [' + name + ']');
                        // Send action
                        this.socket.emit(name, action);
                        //Log action
                        // this._addToStack(name, action, 'emited');
                    }
                    else {
                        $log.log('- Socket is disconnected.')
                    }
                }
            }

            return new SocketActions();
        }]);