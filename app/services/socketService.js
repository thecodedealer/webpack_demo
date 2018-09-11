'use strict';

module.exports = angular.module('socketService', [])
    .factory('socketService', ['$log', 'abstractService', 'socket_io', 'moment',
        ($log, abstractService, socket_io, moment) => {

            class SocketService extends abstractService{
                constructor() {
                    super();

                    this.receiveActions = {};
                    this.socketIoURL = 'http://localhost:3000/';
                }

                connect() {
                    //Connect to Socket IO Server
                    this.socket = socket_io(this.socketIoURL);

                    if(this.socket.disconnected)
                        $log.warn('- App is disconnected from Socket Server.');
                    else
                        $log.log('- App is connected to Socket Server.');
                    // $log.log(this.socket);
                }

                //Receive actions from Socket Server
                receive(name, action = {}) {
                    $log.log('- Set Socket Action for -> ' + name);

                   /* if(name) {
                        if(this.receiveActions[name] !== undefined){
                            //Log action
                            this.receiveActions[name] = {
                                action: action,
                                timestamp: moment.format()
                            };*//* if(name) {
                        if(this.receiveActions[name] !== undefined){
                            //Log action
                            this.receiveActions[name] = {
                                action: action,
                                timestamp: moment.format()
                            };*/

                            // Set Socket IO event for action
                            this.socket.on(name, (data) => {
                                $log.log(data);
                            });

                     /*   } else
                            return 'Action name already used.'
                    } else
                        return 'Provide an action name!';*/


                }

                //Emit action to Socket Server
                emit(name, action = {}) {
                    if(this.socket.connected) {
                        $log.log('- Emit socket action -> ' + name + ' -> data: '+ JSON.stringify(action));
                        this.socket.emit(name, action);
                    }
                    else {
                        $log.log('- Socket is disconnected.')
                    }

                }
            }

            return new SocketService();
        }]);