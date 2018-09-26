'use strict';

module.exports = angular.module('dashboardService', [])
    .factory('dashboardService', ['$log', 'abstractService', 'API',
        ($log, abstractService, API) => {

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
                    API.call('online-users').get().$promise
                        .then(data => {
                            this.state('config', {
                                onlineUsers: data.onlineUsers,
                                playedTickets : 34
                            })
                        })
                        .catch(err => $log.error(err))
                }


            }

            return new DashboardService();
        }]);