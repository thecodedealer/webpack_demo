'use strict';

module.exports = angular.module('dashboardService', [])
    .factory('dashboardService', ['$log', 'abstractService', 'API', 'messengerService', 'utilService',
        ($log, abstractService, API, messengerService, utilService) => {

            class DashboardService extends abstractService {
                constructor() {
                    super();

                    this.state('pageConfig', {});
                    this.state('cards', {});

                    this.cards = [
                        {
                            name: "Messages",
                            cardColor: "bg-primary",
                            cardIcon: "fa-users",
                            description: 'users online',
                            id: "onlineUsers"
                        },
                        {
                            name: "Tichete jucate",
                            cardColor: "bg-warning",
                            cardIcon: "fa-ticket",
                            description: 'tichete jucate',
                            id: 'playedTickets'
                        }
                    ];
                }

                /*
                    ACTIONS
                */
                initPageConfiguration() {
                    this._loadCards();
                }

                getOnlineUsers() {
                    API.call('online-users').get().$promise
                        .then(data => {
                            this.updateState('cards', {
                                onlineUsers: data.onlineUsers
                            })
                        })
                        .catch(err => $log.error(err))
                }

                updateCardData(name) {
                    API.call(utilService.camelCaseToHyphen(name)).get().$promise
                        .then(data => {
                            this.state('cards')[name] = data.onlineUsers;
                            messengerService.success(name + ' card is updated!');
                        })
                        .catch(err => $log.error(err))
                }


                /*
                    HELPERS
                */
                _loadCards() {
                    this.updateState('pageConfig', {
                        cards: this.cards
                    });

                    //Call API
                    this.getOnlineUsers();
                }


            }

            return new DashboardService();
        }]);