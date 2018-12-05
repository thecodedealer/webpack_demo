'use strict';

module.exports = angular.module('dashboardService', [])
    .factory('dashboardService', ['$log', 'abstractService', 'API', 'messengerService', 'utilService', 'component',
        ($log, abstractService, API, messengerService, utilService, component) => {

            class DashboardService extends abstractService {
                get CARDS() {
                    return [
                        {
                            id: 'online-users',
                            path: 'online-users',
                            title: "Online users",
                            description: "",
                            settings: '',
                            data: [3],
                            fields: ['online users'],
                            updated: null
                        }
                    ]
                }


                constructor() {
                    super();

                    this.state('pageConfig', {});

                }

                /*
                    ACTIONS
                */
                initPageConfiguration() {
                    this._loadCards();
                }


                /*
                    HELPERS
                */
                _loadCards() {
                    this.updateState('pageConfig', {
                        cards: this.CARDS
                    });

                    //Call API
                    this.getOnlineUsers();
                }


            }

            return new DashboardService();
        }]);