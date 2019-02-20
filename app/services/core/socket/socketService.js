'use strict';

module.exports = angular.module('socketService', [])
    .factory('socketService', ['$log', '$window', 'abstractService', 'socket_io', 'moment',
        ($log, $window, abstractService, socket_io, moment) => {
        
            let socketMasterLog = [];
            let socketReceivedLog = {};
            let socketEmitedLog = {};
            
            $window.socket = {
                generalLog: socketMasterLog,
                socketWatchingLog: socketReceivedLog,
                socketEmittingLog: socketEmitedLog
            };

            class SocketService extends abstractService{
                constructor() {
                    super();
                    
                    this.socket = null;
                    this.receivingActions = {};
                    this.emitingActions = {};
                    this.socketIoURL = 'http://localhost:5000/';
                }

                connect() {
                    //Connect to Socket IO Server
                    this.socket = socket_io(this.socketIoURL);
                }
                
                getSocketStatus() {
                    if(this.socket.disconnected)
                        $log.warn('- App is disconnected from Socket Server.');
                    else
                        $log.log('- App is connected to Socket Server.');
                    // $log.log(this.socket);
                }

                //Receive actions from Socket Server
                receive(name, action) {
                    $log.log('- Watch socket for: [' + name + ']');

                    // Set Socket IO event for action
                    this.socket.on(name, (data) => {
                        //Log action
                        this._addToStack(name, data, 'received');
                        
                        action(data);
                    });
                }

                //Emit action to Socket Server
                emit(name, action = {}) {
                    if(this.socket && this.socket.connected) {
                        $log.log('- Emit socket action: [' + name + ']');
                        this.socket.emit(name, action);
                        this._addToStack(name, action, 'emited');
                    }
                    else {
                        $log.log('- Socket is disconnected.')
                    }
                }
                
                /*
                    HELPERS
                */
                _addToStack(name, data, type) {
                    //Push to type log 
                    switch(type) {
                        case 'received':
                             //Push to received log
                            if (!socketReceivedLog[name])
							     socketReceivedLog[name] = [];
                            socketReceivedLog[name].push({
                                name: name,
                                data: data,
                                time: moment().format()
                            });
                            break;
                        case 'emited':
                             //Push to emited log
                            if (!socketEmitedLog[name])
							     socketEmitedLog[name] = [];
                            socketEmitedLog[name].push({
                                name: name,
                                data: data,
                                time: moment().format()
                            });
                            break;        
                    }
                    
                    //Push to master log
                    socketMasterLog.push({
                        name: name,
                        data: data,
                        type: type,
                        time: moment().format()
                    })
                }
            }

            return new SocketService();
        }]);