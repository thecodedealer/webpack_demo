'use strict';

module.exports = angular.module('messengerService', [])
    .factory('messengerService', ['abstractService',
        (abstractService) => {
            let all = [];
            let alert = [];
            let error = [];
            let info = [];

            window.messengerLog = {
                all: all,
                alert: alert,
                error: error,
                info: info
            };
            class MessengerService {
                constructor() {

                }


                /* 
                    ACTIONS
                */
                success(message) {
                    $.notify({
                        title: '<i class="fa fa-check" aria-hidden="true"></i>',
                        message: message
                    }, {
                        type: 'success'
                    });

                    this._log('success', message, 'info');
                }

                /* 
                    HELPERS
                */
                _log(type, message, category) {
                    switch (category) {
                        case 'alert':
                            alert.push({
                                type: type,
                                message: message
                            });
                            break;
                        case 'error':
                            error.push({
                                type: type,
                                message: message
                            });
                            break;
                        case 'info':
                            info.push({
                                type: type,
                                message: message
                            });
                            break;

                    }

                    // logg all
                    all.push({
                        category: category,
                        type: type,
                        message: message
                    })
                }


            }

            return new MessengerService();
        }
    ]);