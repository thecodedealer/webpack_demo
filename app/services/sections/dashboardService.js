'use strict';

module.exports = angular.module('dashboardService', [])
    .factory('dashboardService', ['$log', 'abstractService', 'API', 'messengerService',
        ($log, abstractService, API, messengerService) => {

            class DashboardService extends abstractService{
                constructor() {
                    super();
                    this.cards = [
                        {
                            name: "Messages",
                            cardColor: "bg-primary",
                            cardIcon: "fa-users",
                            description: 'users online',
                            action: "onlineUsers"
                        },
                        {
                            name: "Tichete jucate",
                            cardColor: "bg-warning",
                            cardIcon: "fa-ticket",
                            description: 'tichete jucate',
                            action: 'playedTickets'
                        }
                    ];
                }

                /*
                    ACTIONS
                */

                getCards() {
                    return this.cards;
                }

                getOnlineUsers() {
                    API.call('online-users').get().$promise
                        .then(data => {
                            this.state('config', {
                                onlineUsers: data.onlineUsers,
                                playedTickets : 34
                            })
                        })
                        .catch(err => $log.error(err))
                }

                updateCard(name) {
                    const update = {};

                    API.call(this._camelCaseToHyphen(name)).get().$promise
                        .then(data => {
                            this.updateState('config', update[name] = data[name]);
                            messengerService.success(name + ' updates');
                        })
                        .catch(err => $log.error(err))
                }


                /*
                    HELPERS
                */

                _camelCaseToHyphen(key) {
                    return key.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
                }



            }

            return new DashboardService();
        }]);